<template>
    <div class="wrap">
        <div class="con-main-wrap">
            <el-row class="text-primary" style="background-color: #f8f9fa">
                <el-col>
                    <breadcrumb :breadcrumbs="breadcrumbs" />
                    <el-row class="about-us" style="">
                        <el-col :xs="24" :sm="12" :md="12">
                            <div style="padding: 40px">
                                <h1 class="about-title left-border">About Us</h1>
                                <p style="line-height: 30px; margin-top: 39px; color: #030303">
                                    {{ aboutInfo.content }}
                                </p>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="12">
                            <el-row class="number-container" style="color: #ff9300" :gutter="20">
                                <el-col
                                    :xs="24"
                                    :sm="24"
                                    :md="12"
                                    style="padding: 0; max-width: 260px; margin-left: 19px"
                                >
                                    <div class="card-noborder">
                                        <div>
                                            <label class="big-number">
                                                <count-to
                                                    :start-val="1900"
                                                    :end-val="aboutInfo.start_time"
                                                    :duration="5000"
                                                    separator=""
                                                />
                                            </label>
                                            <span>year</span>
                                        </div>
                                        <div>The company founded on</div>
                                    </div>
                                </el-col>
                                <el-col
                                    :xs="24"
                                    :sm="24"
                                    :md="12"
                                    style="padding: 0; max-width: 260px; margin-left: 19px"
                                >
                                    <div class="card-noborder">
                                        <div>
                                            <label class="big-number">
                                                <count-to
                                                    :start-val="0"
                                                    :end-val="aboutInfo.service_num"
                                                    :duration="5000"
                                                    separator=""
                                                />
                                            </label>
                                            <span>+</span>
                                        </div>
                                        <div>Accumulated customer service</div>
                                    </div>
                                </el-col>
                                <el-col
                                    :xs="24"
                                    :sm="24"
                                    :md="12"
                                    style="padding: 0; max-width: 260px; margin-left: 19px"
                                >
                                    <div class="card-noborder">
                                        <div>
                                            <label class="big-number">
                                                <count-to
                                                    :start-val="0"
                                                    :end-val="aboutInfo.success_rate"
                                                    :duration="5000"
                                                    separator=""
                                                />
                                            </label>
                                            <span>%</span>
                                        </div>
                                        <div>Job success rate</div>
                                    </div>
                                </el-col>
                                <el-col
                                    :xs="24"
                                    :sm="24"
                                    :md="12"
                                    style="padding: 0; max-width: 260px; margin-left: 19px"
                                >
                                    <div class="card-noborder">
                                        <div>
                                            <label class="big-number">
                                                <count-to
                                                    :start-val="0"
                                                    :end-val="aboutInfo.friend_num"
                                                    :duration="5000"
                                                    separator=""
                                                />
                                            </label>
                                            <span>family</span>
                                        </div>
                                        <div>Having partners</div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :xs="24" :sm="8">
                            <div style="margin: 40px">
                                <div class="firm-info">
                                    <div class="icon-box">
                                        <img src="@/images/icon-telephone.png" />
                                    </div>
                                    <span class="icon-text" style="color: #686868; margin-top: 10px"
                                        >Phone</span
                                    >
                                    <label>{{ aboutInfo.phone }}</label>
                                    <!--              <label>18500391478</label>-->
                                </div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="8">
                            <div style="margin: 40px">
                                <div class="firm-info">
                                    <div class="icon-box">
                                        <img src="@/images/icon-envelope.png" />
                                    </div>
                                    <span class="icon-text" style="color: #686868; margin-top: 10px"
                                        >Mailbox</span
                                    >
                                    <label>{{ aboutInfo.email }}</label>
                                    <!--              <label>MartinLee@bwlf-edu.com</label>-->
                                </div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="8">
                            <div style="margin: 40px">
                                <div class="firm-info">
                                    <div class="icon-box">
                                        <img src="@/images/icon-map-position.png" />
                                    </div>
                                    <span class="icon-text" style="color: #686868; margin-top: 10px"
                                        >Address</span
                                    >
                                    <label>{{ aboutInfo.address }}</label>
                                    <!--              <label>Haidian District, Beijing</label>-->
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import axios from 'axios'
import { getAboutDetails } from '@/request/api'
export default {
    name: 'AboutUs',
    props: {},
    components: { Breadcrumb },
    async created() {
        this.id = this.$route.params.id
        const formData = new FormData()
        formData.append('id', this.id)
        let response = await getAboutDetails(formData)
        if (response.code == 0) {
            this.aboutInfo = response.data
        }
    },
    data() {
        return {
            breadcrumbs: [
                { url: '/', name: 'Home' },
                { url: '/about', name: 'About' }
            ],
            aboutInfo: []
        }
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.wrap {
    margin-top: 112px;
    background-color: rgb(248, 249, 250);
}
.con-main-wrap {
    max-width: 1260px;
    margin: 0 auto;
}
.about-us {
    background-image: url('@/images/bg-about-us.png');
    color: #4e5a77;
    padding: 50px 0;
}
.about-title {
    color: #2b3b61;
    font-size: 32px;
    padding-left: 20px;
    margin: 0;
    height: 37px;
}
.left-border {
    height: 30px;
    border-left: 5px solid #2b3b61;
}
.big-number {
    font-size: 50px;
    font-weight: bold;
}

.number-container {
    padding: 30px;
    .el-col {
        text-align: center;
        margin-bottom: 19px;
    }
    .card-noborder {
        width: 260px;
        height: 210px;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

.firm-info {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 30px;

    padding: 30px 0;
    border-top: 2px solid #ebebeb;
    color: #030303;
    .icon-box {
        border: 1px solid #e1dfdf;
        border-radius: 30px;
        width: 60px;
        height: 60px;
        line-height: 60px;
        img {
            vertical-align: middle;
        }
    }
    .icon-text {
        color: #686868;
        font-size: 16px;
    }
}
</style>
