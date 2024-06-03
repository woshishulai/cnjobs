<template>
    <div class="wrap">
        <el-progress :percentage="jinduy" v-show="jinduy > 0 && jinduy != 100" />

        <el-row class="text-primary" style="background-color: #f8f9fa">
            <el-col :span="20" :offset="2">
                <breadcrumb :breadcrumbs="breadcrumbs" />
                <el-row :gutter="20">
                    <el-col
                        v-for="(download, index) in downloadInfo"
                        :key="index"
                        :xs="24"
                        :sm="6"
                        :md="8"
                    >
                        <div class="download-item card-noborder">
                            <div class="icon-download">
                                <img src="@/images/icon-download.png" />
                            </div>
                            <div class="download-summary">
                                {{ download.title }}
                                <!--              Studying in New Zealand? Learn about the popular graduate majors at the Eighth-->
                                <!--              University of New Zealand!-->
                            </div>
                            <div class="text-center">
                                <el-button
                                    @click="dowloadfile(download.url)"
                                    class="btn-lightgray"
                                    round
                                >
                                    download
                                </el-button>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <div
                    style="
                        padding-bottom: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    "
                >
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="totalnum"
                        @current-change="handlePageChange"
                        style=""
                    />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb.vue'
import axios from 'axios'
import { downloadlistApi } from '@/request/api'

export default {
    name: 'DownloadList',
    components: { Breadcrumb },
    async created() {
        // this.id=this.$route.params.id;
        const formData = {
            page: this.currentPage
        }
        let response = await downloadlistApi(formData)
        console.log(response)
        this.downloadInfo = response.data
        this.totalnum = response.totalnum
        return
        axios
            .get(
                'http://192.168.0.45/downloadlist',
                {},
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            .then((response) => {
                if (
                    typeof response.data != 'undefined' &&
                    response.data.code == 1 &&
                    typeof response.data.msg != 'undefined'
                ) {
                } else {
                    this.downloadInfo = response.data.data
                    this.totalnum = response.data.totalnum
                    // this.schoolList=response.data.sdata;
                }
            })
            .catch((error) => {
                // 处理错误
                // console.error(error);
            })
    },
    data() {
        return {
            breadcrumbs: [
                { url: '/', name: 'Home' },
                { url: '/downloads', name: 'Download' }
            ],
            downloadInfo: [],
            currentPage: 1,
            totalnum: 0,
            jinduy: 0
        }
    },
    props: {},
    methods: {
        handlePageChange(newPage) {
            this.currentPage = newPage
            this.fetchData() // 发送请求获取数据
        },
        async dowloadfile(id) {
            //在这里控制进度
            const xhr = new XMLHttpRequest()
            xhr.open('GET', 'http://cnjob.sc798.com/' + id)
            xhr.responseType = 'blob'

            xhr.onprogress = (event) => {
                if (event.lengthComputable) {
                    const progress = Math.round((event.loaded / event.total) * 100)
                    this.jinduy = progress
                }
            }

            xhr.onload = () => {
                if (xhr.status === 200) {
                    const blob = xhr.response
                    const url = window.URL.createObjectURL(blob)
                    const link = document.createElement('a')
                    link.href = url
                    link.setAttribute('download', 'example.pdf')
                    document.body.appendChild(link)
                    link.click()
                    window.URL.revokeObjectURL(url)
                } else {
                    console.error('下载文件时发生错误:', xhr.status)
                }
            }

            xhr.send()

            // var fileUrl = 'http://192.168.0.45/uploads/dowloads/1110.pdf';
            // // var fileUrl = 'http://192.168.0.45/uploads/dowloads/1110.pdf' + this.downloadInfo.url;
            // // 创建一个隐藏的<a>元素，用于下载文件
            // var a = document.createElement('a');
            // a.href = fileUrl;
            // // a.download = "gdfngjdgjdg"; // 可以自定义下载文件的名称
            // a.style.display = 'none';
            // // 将<a>元素添加到页面上
            // document.body.appendChild(a);
            // // 触发点击事件，开始下载
            // a.click();
            // // 下载完成后，移除<a>元素
            // document.body.removeChild(a);
            // axios.post('http://192.168.0.45/dowloadfile', {id:id}, {
            //   headers: {
            //     'Content-Type': 'multipart/form-data'
            //   }
            // }).then(response => {
            //   if(typeof response.data != 'undefined' && response.data.code==1 && typeof response.data.msg != 'undefined'){
            //
            //   }else{
            //   }
            // }).catch(error => {
            //   // 处理错误
            //   // console.error(error);
            // });
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    margin-top: 112px;
}
.download-item {
    position: relative;
    padding: 60px 40px 20px 40px;
    margin-bottom: 20px;
    .icon-download {
        position: absolute;
        left: 0;
        top: 0;
        padding: 10px 20px 20px 10px;
        background-color: #fdefdb;
        border-bottom-right-radius: 60px;
    }
    .download-summary {
        margin-bottom: 20px;
        line-height: 25px;
    }
    &:hover {
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
        background-color: #ffffff;
    }
}
</style>
