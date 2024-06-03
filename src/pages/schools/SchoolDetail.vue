<template>
    <el-row
        class="text-primary"
        style="
            background-color: #f8f9fa;
            margin-top: 112px;
            background-image: url(@/images/bg-school-detail.png);
        "
    >
        <el-col :span="20" :offset="2">
            <breadcrumb :breadcrumbs="breadcrumbs" />
        </el-col>
        <el-col :span="20" :offset="2">
            <div
                class="box-yellow"
                style="padding: 40px 0 0; box-shadow: 1px 1px 1px 1px rgba(0, 0, 0.1, 0.1)"
            >
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="18" :md="18" style="background-color: transparent">
                        <div class="box-title">
                            <label
                                style="
                                    font-family: Arial;
                                    font-weight: 400;
                                    font-size: 24px;
                                    padding: 0 0px 0 40px;
                                    color: #000000;
                                "
                            >
                                {{ school_info.school_name }}</label
                            >
                            <span
                                style="
                                    font-family: Arial;
                                    font-weight: 400;
                                    font-size: 14px;
                                    color: #474747;
                                    padding: 0 10px;
                                "
                                class="text-lightgray"
                            >
                                |
                            </span>
                            <span
                                style="
                                    font-family: Arial;
                                    font-weight: 400;
                                    font-size: 16px;
                                    color: #7f7f7f;
                                "
                                class="text-lightgray"
                                >MC{{ school_info.id }}</span
                            >
                        </div>
                        <p
                            style="
                                font-family: Arial;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 20px;
                                padding: 0 0px 0 40px;
                                margin-bottom: 40px;

                                color: #474747;
                            "
                            v-html="school_info.school_profile"
                        ></p>
                    </el-col>
                    <el-col class="hidden-xs-only" :sm="6" :md="6" style="text-align: center">
                        <img
                            :src="school_info.school_logo"
                            style="width: 100%; max-width: 100px; height: auto; padding-right: 40px"
                        />
                    </el-col>
                </el-row>
                <div class="simple-list" style="background: #fbfbfb; color: #010101; padding: 40px">
                    <div class="simple-list-item">
                        <label>Location:</label>
                        <span> {{ school_info.province }}</span>
                    </div>
                    <div>
                        <label>School Type:</label>
                        <span>{{ school_info.type_name }}</span>
                    </div>
                    <div>
                        <label>Year of Found:</label>
                        <span>{{ school_info.add_time }}</span>
                    </div>
                    <div>
                        <label>Student Age:</label>
                        <span>{{ school_info.student_age }}</span>
                    </div>
                    <div>
                        <label>Number of Foreign Teacher:</label>
                        <span>{{ school_info.foreign_teachers_num }}</span>
                    </div>
                    <div>
                        <label>Number of Total Students:</label>
                        <span>{{ school_info.students_num }}</span>
                    </div>
                </div>
                <div
                    style="height: 1px; width: 80%; margin-left: 40px; border: 1px dashed #fbfbfb"
                ></div>
                <div
                    class="box-footer"
                    style="background: #fbfbfb; padding-bottom: 40px; cursor: pointer"
                >
                    <el-button @click="gourl(school_info.official_website)" round class="btn-black">
                        <img src="@/images/icon-earth.png" />
                        <label>Visit School Website</label>
                    </el-button>
                    <el-button @click="showNotice" round class="btn-black">
                        <img src="@/images/icon-email.png" />
                        <label> Email School HR</label>
                    </el-button>
                </div>
            </div>
            <div
                class="box-yellow"
                style="background: #fbfbfb; box-shadow: 1px 1px 1px 1px rgba(0, 0, 0.1, 0.1)"
            >
                <div class="box-title">
                    <label
                        style="
                            padding-right: 10px;
                            height: 16px;
                            font-family: Arial;
                            font-weight: bold;
                            font-size: 22px;
                            color: #000000;
                            line-height: 28px;
                        "
                    >
                        About us</label
                    >
                    <el-icon><CaretBottom /></el-icon>
                </div>
                <div class="box-body">
                    <p
                        style="
                            font-family: Arial;
                            font-weight: 400;
                            font-size: 14px;
                            color: #474747;
                            line-height: 28px;
                        "
                        v-html="school_info.school_profile"
                    ></p>
                    <p style="text-align: center">
                        <img :src="school_info.school_logo" />
                    </p>
                </div>
            </div>
            <div>
                <SimilarSchools @changeShow="changeShow" :schools="similarSchools"></SimilarSchools>
            </div>
        </el-col>
        <el-dialog v-model="noticeVisible" :show-close="false" align-center width="300px">
            <div
                style="
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    font-size: 24px;
                    color: #c4c4c4;
                    cursor: pointer;
                "
            >
                <el-icon @click="closeNotice"><CircleClose /></el-icon>
            </div>
            <div style="font-size: 30x; font-weight: bold; text-align: center">Notice</div>
            <p style="text-align: center; margin: 30px 0; line-height: 30px">
                Please sign in and complete your profile to contact school HR.
            </p>
            <div>
                <el-button @click="logonin" class="btn-yellow" style="width: 100%"
                    >Sign in</el-button
                >
            </div>
        </el-dialog>
    </el-row>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb.vue'
import SimilarSchools from '../../components/SimilarSchools.vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getSchoolDetails, isUserLogin } from '../../request/api'

const openMessage = (message) => {
    ElMessage({
        message: message,
        type: 'info',
        offset: window.screen.height / 3
    })
}
export default {
    name: 'SchoolDetail',
    components: { Breadcrumb, SimilarSchools },
    async created() {
        this.id = this.$route.params.id
        const formData = new FormData()
        formData.append('id', this.id)
        const response = await getSchoolDetails(formData)
        if (response.code == 1) {
            ElMessage({
                message: response.msg,
                type: 'error'
            })
        } else {
            this.school_info = response.data
            this.similarSchools = response.sdata
        }
        return
        axios
            .post('http://192.168.0.45/schooldetail', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                // 处理服务器响应
                if (
                    typeof response.data != 'undefined' &&
                    response.data.code == 1 &&
                    typeof response.data.msg != 'undefined'
                ) {
                } else {
                    this.school_info = response.data.data
                    this.similarSchools = response.data.sdata
                }

                // 根据需要更新UI或执行其他操作
            })
            .catch((error) => {
                // 处理错误
                console.error(error)
            })
    },
    data() {
        return {
            breadcrumbs: [
                { url: '/', name: 'Home' },
                { url: '/schools', name: 'Schools' },
                { url: null, name: 'school name' }
            ],
            similarSchools: [],
            similarSchools1: [
                {
                    logo: '@/images/school_logo.jpeg',
                    location: 'Guangdong Sheng',
                    name: 'Country Garden Silver Beach School',
                    job: {
                        name: 'High School Art Teacher',
                        position: '1 position available',
                        salary: '¥20-25k/RMB after tax',
                        start_date: 'Start in Aug, 2024'
                    }
                },
                {
                    logo: '@/images/school_logo.jpeg',
                    location: 'Guangdong Sheng',
                    name: 'Country Garden Silver Beach School',
                    job: {
                        name: 'High School Art Teacher',
                        position: '1 position available',
                        salary: '¥20-25k/RMB after tax',
                        start_date: 'Start in Aug, 2024'
                    }
                },
                {
                    logo: '@/images/school_logo.jpeg',
                    location: 'Guangdong Sheng',
                    name: 'Country Garden Silver Beach School',
                    job: {
                        name: 'High School Art Teacher',
                        position: '1 position available',
                        salary: '¥20-25k/RMB after tax',
                        start_date: 'Start in Aug, 2024'
                    }
                }
            ],
            noticeVisible: false,
            id: 0,
            school_info: []
        }
    },
    props: {},
    mounted() {},
    methods: {
        async changeShow(id) {
            const formData = new FormData()
            formData.append('id', id)
            const response = await getSchoolDetails(formData)
            if (response.code == 1) {
            } else {
                this.school_info = response.data
                this.similarSchools = response.sdata
            }
        },
        async showNotice() {
            //判断是否登录
            let response = await isUserLogin()
            if (response.status != 1) {
                // openMessage(response.data.msg);
                this.noticeVisible = true
            } else {
                // this.$router.push({
                //   name: 'Usercenterresume',
                //   params: {
                //     id:this.id
                //   }
                // });

                this.$router.push({
                    name: 'Usercenterresume',
                    query: { id: this.id }
                })
                //弹出发送邮件
                // this.goToIndex();//Usercenter
                //  window.location.href='http://192.168.0.45/index.html#/';
            }
        },
        logonin() {
            this.$router.push({ name: 'Logon' })
        },
        closeNotice() {
            this.noticeVisible = false
        },
        gourl(url) {
            window.open(url, '_blank')
        }
    }
}
</script>

<style lang="scss" scoped>
.box-yellow {
    border-top: 2px solid #ff9300;
    border-radius: 8px;
    padding: 40px;
    background-color: #ffffff;
    margin: 40px 0;
}
.box-title {
    font-weight: 400;
    font-size: 24px;
}
.box-body {
    font-size: 14px;
    line-height: 24px;
}
.box-footer {
    padding-top: 40px;
    text-align: center;
    label {
        padding-left: 10px;
    }
}
.simple-list {
    line-height: 40px;
}
:deep(.el-dialog) {
    border-radius: 8px;
}
</style>
