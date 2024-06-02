<template>
    <div class="wrap" style="margin-top: 112px"></div>
    <el-row class="text-primary" style="background-color: #f8f9fa">
        <el-col :span="20" :offset="2">
            <breadcrumb :breadcrumbs="breadcrumbs" />
            <el-row>
                <el-col :xs="24" :sm="16" :md="18">
                    <div class="news-detail card-noborder">
                        <div
                            class="news-title"
                            style="
                                font-family: Arial;
                                font-weight: 400;
                                font-size: 24px;
                                color: #000000;
                            "
                        >
                            {{ newsInfo.title }}
                        </div>
                        <div
                            class="news-sub-title"
                            style="
                                font-family: Arial;
                                font-weight: 400;
                                font-size: 14px;
                                color: #727272;
                            "
                        >
                            <span>{{ newsInfo.date }}</span>
                            <span> | </span>
                            <span>{{ newsInfo.author }}</span>
                            <span class="news-view-data">
                                <el-icon><View /></el-icon>
                                <span>{{ newsInfo.see_num }}</span>
                            </span>
                        </div>
                        <div class="news-cover">
                            <img :src="newsInfo.cover" />
                        </div>
                        <div
                            class="news-content"
                            style="
                                font-family: Arial;
                                font-weight: 400;
                                font-size: 16px;
                                color: #414141;
                                line-height: 30px;
                            "
                        >
                            {{ newsInfo.content }}
                        </div>
                    </div>
                </el-col>
                <el-col hidden-xs-only :xs="24" :sm="8" :md="6">
                    <div class="news-list card-noborder">
                        <div
                            class=""
                            style="
                                font-family: Arial;
                                font-weight: 400;
                                font-size: 18px;
                                color: #000000;
                            "
                        >
                            Recent Updates
                        </div>
                        <div
                            v-for="(news, index) in recentNews"
                            :key="index"
                            @click="show(news)"
                            class="news-list-item"
                        >
                            <div>
                                <img style="width: 74px; height: 49px" :src="news.cover" />
                            </div>
                            <div>
                                <label
                                    style="
                                        font-family: Arial;
                                        font-weight: 400;
                                        font-size: 16px;
                                        color: #474747;
                                    "
                                >
                                    {{ news.title }}
                                </label>
                            </div>
                        </div>
                        <div class="link">
                            <router-link to="/news">See more</router-link>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb.vue'
import axios from 'axios'
import { newsdetailApi } from '@/request/api'
export default {
    name: 'NewsDetail',
    props: {},
    components: { Breadcrumb },
    async created() {
        this.id = this.$route.params.id
        const formData = new FormData()
        formData.append('id', this.id)
        let response = await newsdetailApi(formData)

        if (response.code == 0) {
            this.newsInfo = response.data
            this.recentNews = response.sdata
        }
        return
        axios
            .post('http://192.168.0.45/newsdetail', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                if (
                    typeof response.data != 'undefined' &&
                    response.data.code == 1 &&
                    typeof response.data.msg != 'undefined'
                ) {
                } else {
                    this.newsInfo = response.data.data
                    this.recentNews = response.data.sdata
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
                { url: '/news', name: 'News' },
                { url: null, name: 'news title' }
            ],
            newsInfo: [],
            recentNews: []
        }
    },
    methods: {
        async show(item) {
            console.log(item)
            this.id = item.id
            const formData = new FormData()
            formData.append('id', this.id)
            let response = await newsdetailApi(formData)
            if (response.code == 0) {
                this.newsInfo = response.data
                this.recentNews = response.sdata
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.news-detail {
    padding: 40px;
    margin-bottom: 40px;
    .news-title {
        text-align: center;
        font-size: 24px;
        font-weight: 400;
        padding: 10px 20px;
    }
    .news-sub-title {
        text-align: center;
        color: #727272;
        padding: 0 20px 40px 0;
    }
    .news-view-data {
        display: inline-block;
        float: right;
    }
    .news-cover {
        img {
            width: 100%;
            height: auto;
        }
    }
    .news-content {
        padding: 20px 0;
    }
}
.news-list {
    padding: 20px;
    margin-bottom: 40px;
    .news-list-item {
        margin: 20px 0;
        cursor: pointer;
        padding-bottom: 20px;
        border-bottom: 1px dotted #d3d3d3;
        div {
            display: inline-block;
        }
        div:nth-child(1) {
            width: 100px;
        }
        div:nth-child(2) {
            width: 50%;
            padding: 0 10px;
            vertical-align: middle;
        }
        img {
            width: 100%;
            height: auto;
            vertical-align: middle;
        }
        label {
            vertical-align: middle;
            word-break: break-all;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
    .link {
        text-align: center;
        a {
            text-decoration: underline;
        }
    }
}
</style>
