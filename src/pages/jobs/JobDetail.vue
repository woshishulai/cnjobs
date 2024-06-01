<template>
    <div style="margin-top: 112px"></div>
    <el-row class="text-primary" style="background-color: #f8f9fa">
        <el-col :span="20" :offset="2">
            <breadcrumb :breadcrumbs="breadcrumbs" />
            <el-row :gutter="20">
                <el-col :xs="24" :sm="8" :md="6" class="job-promotion" style="margin-bottom: 40px">
                    <div class="card-noborder" style="">
                        <div
                            style="
                                font-family: Arial;
                                font-weight: 400;
                                font-size: 16px;
                                color: #474747;
                                line-height: 28px;
                            "
                        >
                            Recruiter in Charge:
                        </div>
                        <div
                            style="
                                font-family: Arial;
                                font-weight: 400;
                                font-size: 16px;
                                color: #474747;
                                line-height: 28px;
                            "
                        >
                            Contact our recruiter through WeChat:
                        </div>
                        <div
                            class=""
                            style="
                                height: 106px;
                                background: #f9f9f9;
                                box-shadow: 1px 1px 0px 0px #eaeaea;
                                border-radius: 8px;
                                padding: 31px 0 0 26px;
                                box-sizing: border-box;
                                margin: 10px 0;
                            "
                        >
                            <div
                                style="
                                    font-family: Arial;
                                    font-weight: 400;
                                    font-size: 16px;
                                    color: #000000;
                                    line-height: 28px;
                                "
                            >
                                Dora.Wang
                            </div>
                            <div
                                class="text-one-line"
                                style="
                                    font-family: Arial;
                                    font-weight: 400;
                                    font-size: 16px;
                                    color: #000000;
                                    line-height: 28px;
                                "
                            >
                                Email: dora.wang@toptutorjob.com
                            </div>
                        </div>
                    </div>
                    <div class="card-noborder" style="padding: 20px 10px; margin: 20px 0">
                        <div class="card-title">Similar Jobs</div>

                        <div v-for="(job, index) in jobs" :key="index" class="similar-jobs-item">
                            <!--            <div v-for="i in 6" class="similar-jobs-item">-->
                            <div
                                class="job-name text-one-line"
                                style="
                                    font-family: Arial;
                                    font-weight: 400;
                                    font-size: 12px;
                                    color: #474747;
                                    line-height: 30px;
                                "
                            >
                                <img class="" :src="job.school_logo" />
                                <!--                <img class="" src="@/images/school_logo.jpeg" />-->
                                <label class=""> {{ job.name }}</label>
                            </div>
                            <div
                                class="school-name text-one-line"
                                style="
                                    font-family: Arial;
                                    font-weight: 400;
                                    font-size: 12px;
                                    color: #474747;
                                    line-height: 30px;
                                "
                            >
                                <img class="" src="@/images/icon-header.png" />
                                <span class=""> {{ job.school_name }} </span>
                            </div>
                            <div
                                class="school-position text-one-line"
                                style="
                                    font-family: Arial;
                                    font-weight: 400;
                                    font-size: 12px;
                                    color: #474747;
                                    line-height: 30px;
                                "
                            >
                                <img class="" src="@/images/icon-position.png" />
                                <span> {{ job.school_address }} </span>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col class="job-detail" :xs="24" :sm="16" :md="18">
                    <div class="card-noborder">
                        <div
                            class="card-noborder"
                            style="
                                background: linear-gradient(to right, #f8f9fa, #ffffff);
                                padding: 20px 40px;
                            "
                        >
                            <div style="width: 70%; display: inline-block">
                                <div
                                    class="job-name"
                                    style="color: #1f2f57; font-size: 22px; margin-bottom: 20px"
                                >
                                    <span>{{ job_info.name }} </span> |
                                    <!--                  <span>High School Art Teacher </span> |-->
                                    <span class="job-no" style="color: #828282">mc{{ id }}</span>
                                    <!--                  <span class="job-no" style="color: #828282">mc1200</span>-->
                                </div>
                                <div
                                    style="
                                        line-height: 24px;
                                        font-family: Arial;
                                        font-weight: 400;
                                        font-size: 12px;
                                        color: #474747;
                                        line-height: 30px;
                                    "
                                >
                                    {{ job_info.job_description }}
                                    <!--                  Native English Speaker,Bachelor or Above,Relevant Working Experience,Educational-->
                                    <!--                  Work Permit,Reside within the domestic-->
                                </div>
                            </div>
                            <div style="width: 30%; display: inline-block; vertical-align: top">
                                <img
                                    style="width: 100%; max-height: 200px; height: auto"
                                    :src="job_info.school_logo"
                                />
                                <!--                <img-->
                                <!--                  style="width: 100%; max-height: 200px; height: auto"-->
                                <!--                  src="@/images/school_logo2.jpeg"-->
                                <!--                />-->
                            </div>
                        </div>
                        <div class="job" style="margin: 40px; line-height: 40px">
                            <div class="text-orange">{{ job_info.salary }}</div>
                            <!--              <div class="text-orange">¥20-25k/RMB after tax</div>-->
                            <div
                                class=""
                                style="
                                    display: flex;
                                    align-items: center;
                                    gap: 10px;
                                    color: #474747;
                                "
                            >
                                <img
                                    style="width: 13px; height: 16px"
                                    class=""
                                    src="@/images/icon-position.png"
                                />
                                <span> Shenzhen Shi, Guangdong Sheng </span>
                                <!--                <span> Shenzhen Shi, Guangdong Sheng </span>-->
                            </div>
                            <div
                                class=""
                                style="
                                    display: flex;
                                    align-items: center;
                                    gap: 10px;
                                    color: #474747;
                                "
                            >
                                <img
                                    style="width: 13px; height: 16px"
                                    class=""
                                    src="@/images/icon-header.png"
                                />
                                <span class=""> {{ job_info.position }} position available </span>
                                <!--                <span class=""> 1 position available </span>-->
                            </div>
                            <div
                                class=""
                                style="
                                    display: flex;
                                    align-items: center;
                                    gap: 10px;
                                    color: #474747;
                                "
                            >
                                <img style="width: 15px" class="" src="@/images/icon-watch.png" />
                                <span style="width: 0; flex: 1">
                                    Start in {{ job_info.start_time_en }}</span
                                >
                                <!--                <span> Start in Aug, 2024</span>-->
                            </div>
                            <div style="margin-top: 40px">
                                <el-button
                                    size="large"
                                    class="btn-yellow"
                                    style="width: 130px"
                                    @click="showQuickApply"
                                    >Apply</el-button
                                >
                            </div>
                        </div>
                    </div>

                    <div class="job-desc card-noborder">
                        <div class="job-desc-title" style="display: flex; align-items: center">
                            <span>
                                <el-icon><CaretBottom style="color: #474747" /></el-icon>
                            </span>
                            <label
                                style="
                                    font-family: Arial;
                                    font-weight: 400;
                                    font-size: 18px;
                                    color: #474747;
                                "
                                >Job Description</label
                            >
                        </div>
                        <p>
                            {{ job_info.job_description }}
                            <!--              High School Literature/History teachers Job Description Vacancies one-->
                            <!--              Literature/History teacher Schedule: Monday – Friday (7:45-16:45) per week Students-->
                            <!--              age:16-18 years old About 20-30 students per class 12-month’s contract Teaching 20-->
                            <!--              lessons of 40 minutes a week Location: No.15 South Jingyu Road, Yangpu Di-->
                        </p>

                        <div class="job-desc-title">
                            <span>
                                <el-icon><CaretBottom style="color: #474747" /></el-icon>
                            </span>
                            <label
                                style="
                                    font-family: Arial;
                                    font-weight: 400;
                                    font-size: 18px;
                                    color: #474747;
                                "
                                >Requirements Benefit</label
                            >
                        </div>
                        <p>
                            {{ job_info.job_requirements }}
                            <!--              Requirements Requires a Bachelor or above degree holder At least three years subject-->
                            <!--              teaching experience in high school Native English Language speaker 120-H TESOL-->
                            <!--              certificatev Ideal candidate must be a serious teacher with an acceptance of Chinese-->
                            <!--              culture.-->
                        </p>
                    </div>

                    <div class="job-desc card-noborder">
                        <div class="job-desc-title">
                            <span>
                                <el-icon><CaretBottom style="color: #474747" /></el-icon>
                            </span>
                            <label style="color: #474747">School Profile</label>
                        </div>
                        <div style="padding: 20px 0">
                            <div style="width: 40%; display: inline-block">
                                <img
                                    :src="job_info.school_logo"
                                    style="width: 100%; max-width: 300px"
                                />
                                <!--                <img src="@/images/school1.jpg" style="width: 100%; max-width: 300px" />-->
                            </div>
                            <div
                                style="
                                    width: 60%;
                                    display: inline-block;
                                    line-height: 30px;
                                    padding-left: 20px;
                                    color: #474747;
                                "
                            >
                                <div>
                                    <label>School estabishment:</label>
                                    <span>{{ job_info.establishment_time }}</span>
                                    <!--                  <span>2012</span>-->
                                </div>
                                <div>
                                    <label>Contact Information:</label>
                                    <span>{{ job_info.phone }}</span>
                                    <!--                  <span>1566668888</span>-->
                                </div>
                                <div>
                                    <label>Number of students:</label>
                                    <span>{{ job_info.students_num }} </span>
                                    <!--                  <span>1000 to 500 </span>-->
                                </div>
                                <div>
                                    <label>Offical website:</label>
                                    <span>{{ job_info.official_website }}</span>
                                    <!--                  <span>www.swis.cn</span>-->
                                </div>
                                <div>
                                    <label>Number of foreign teachers:</label>
                                    <span>{{ job_info.foreign_teachers_num }}</span>
                                    <!--                  <span>Above 50</span>-->
                                </div>
                                <div>
                                    <label>Address:</label>
                                    <span>{{ job_info.school_address }}</span>
                                    <!--                  <span>No.29 Baishi Third Road, Nanshan District, Shenzhen 518053</span>-->
                                </div>
                            </div>
                        </div>
                        <div class="card-noborder" style="background-color: #f9f9f9">
                            <p
                                :style="contentStyle"
                                style="color: #474747"
                                v-html="job_info.school_profile"
                            ></p>
                            <div @click="toggleContent" style="text-align: center; color: #474747">
                                <el-icon style="transform: rotate(90deg)">
                                    <DArrowRight style="color: #474747" />
                                </el-icon>
                                <div style="text-align: center">
                                    <p
                                        @click="toggleContent"
                                        style="text-align: center; color: #474747"
                                        href="#"
                                    >
                                        More
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-col>

        <el-dialog v-model="applyFormVisible" :show-close="false" align-center>
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
                <el-icon @click="closeQuickApply"><CircleClose /></el-icon>
            </div>
            <QuickApply :jobid="jobId" />
        </el-dialog>
    </el-row>
    <input type="hidden" name="fdfdf" class="hidejobid" :value="jobId" />
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb.vue'
import QuickApply from './QuickApply.vue'
import axios from 'axios'
import { jobdetailApi } from '@/request/api'
export default {
    name: 'JobDetail',
    components: { Breadcrumb, QuickApply },
    async created() {
        this.jobId = this.$route.params.id

        const formData = new FormData()
        formData.append('id', this.jobId)

        let response = await jobdetailApi(formData)
        if (response.code == 0) {
            this.jobs = response.sdata
            this.name = response.data.name
            this.job_description = response.data.job_description
            // alert(response.data.data.school_logo)
            this.school_logo = response.data.school_logo
            this.id = response.data.id
            this.salary = response.data.salary
            this.position = response.data.position
            this.startDate = response.data.startDate
            this.start_time_en = response.data.start_time_en
            this.job_description = response.data.job_description
            this.job_requirements = response.data.job_description
            this.job_info = response.data
        } else {
            ElMessage({
                message: response.msg,
                offset: window.screen.height / 3
            })
            return
        }
        return

        axios
            .post('http://192.168.0.45/jobdetail', formData, {
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
                    this.jobs = response.data.sdata
                    this.name = response.data.data.name
                    this.job_description = response.data.data.job_description
                    // alert(response.data.data.school_logo)
                    this.school_logo = response.data.data.school_logo
                    this.id = response.data.data.id
                    this.salary = response.data.data.salary
                    this.position = response.data.data.position
                    this.startDate = response.data.data.startDate
                    this.start_time_en = response.data.data.start_time_en
                    this.job_description = response.data.data.job_description
                    this.job_requirements = response.data.data.job_description
                    this.job_info = response.data.data
                    // window.location.href='index.html#/logon';
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
                { url: '/jobs', name: 'Jobs' },
                { url: null, name: 'Primary Music Teacher' }
            ],
            applyFormVisible: false,
            jobId: '',
            name: '',
            job_description: '',
            school_logo: '',
            id: '',
            startDate: '',
            position: '',
            salary: '',
            start_time_en: '',
            job_description: '',
            job_requirements: '',
            job_info: [],
            isExpanded: false,
            jobs: []
        }
    },
    props: {},
    methods: {
        showQuickApply() {
            this.applyFormVisible = true
        },
        closeQuickApply() {
            this.applyFormVisible = false
        },
        toggleContent() {
            // alert(this.isExpanded)
            this.isExpanded = !this.isExpanded // 切换isExpanded的值
        }
    },
    mounted() {
        // this.jobId = this.$route.params.id;
        // alert('User ID-----:'+userId);
    },
    computed: {
        contentStyle() {
            return {
                maxHeight: this.isExpanded ? 'none' : '400px', // 根据isExpanded设置最大高度
                overflow: 'hidden' // 溢出内容隐藏
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.similar-jobs-item {
    border-bottom: solid 1px #ebedf1;
    padding-bottom: 10px;
    font-size: 14px;
    line-height: 30px;
    vertical-align: middle;
    .job-name {
        margin: 20px 0;
        padding: 5px;
        font-size: 14px;
        height: 52px;
        background-color: #ebedf1;
        overflow: hidden;
        img {
            width: 42px;
            height: 42px;
            vertical-align: middle;
        }
        label {
            padding-left: 10px;
            overflow: hidden;
            vertical-align: middle;
        }
    }
    .school-name {
        font-size: 12px;
        img {
            width: 15px;
            height: 15px;
            vertical-align: middle;
        }
        span {
            vertical-align: middle;
            padding-left: 6px;
        }
    }

    .school-position {
        font-size: 12px;
        img {
            width: 15px;
            height: 15px;
            vertical-align: middle;
        }
        span {
            vertical-align: middle;
            padding-left: 6px;
        }
    }
}
.job-desc {
    margin: 20px 0;
    padding: 20px;
    &.card-noborder {
        padding: 20px 40px;
    }
    .job-desc-title {
        padding: 20px;
        border-bottom: solid 2px #f5f6f8;
        label {
            padding-left: 20px;
            vertical-align: top;
        }
    }
    p {
        text-decoration: dashed;
    }
}
:deep(.el-dialog) {
    border-radius: 8px;
}
</style>
