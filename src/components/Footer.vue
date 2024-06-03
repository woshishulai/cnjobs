<template>
    <div class="school-logos">
        <!--   :arrow="schoolList.length > 1 ? 'always' : 'never'" -->
        <el-carousel arrow="always" height="40px" style="line-height: 40px">
            <el-carousel-item v-for="(school, index) in schoolList" :key="index">
                <div class="swiper-item">
                    <img
                        @click="showSchoolDetails(sch)"
                        v-for="(sch, indexsch) in school"
                        :src="sch.school_logo"
                    />
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="footers">
        <div class="footer bg-gray">
            <div class="item">
                <div class="title">
                    Contact Us
                    <img src="/login/bottom-san.svg" alt="" />
                </div>
                <div class="info">
                    <img src="/public/images/icon-tel.png" alt="" />
                    <p>Tel：{{ aboutInfo.phone }}</p>
                </div>
                <div class="info">
                    <img src="/public/images/icon-mail.png" alt="" />
                    <p>Email：{{ aboutInfo.email }}</p>
                </div>
                <div class="info">
                    <img src="/public/images/icon-location.png" alt="" />
                    <p>Add：{{ aboutInfo.address }}</p>
                </div>
            </div>
            <div class="item">
                <div class="title">
                    Website columns
                    <img src="/login/bottom-san.svg" alt="" />
                </div>
                <p class="info infos">
                    <span @click="$router.push('/jobs')">Position</span>
                    <span @click="$router.push('/schools')">Partners</span>
                    <span @click="$router.push('/news')">News</span>
                </p>
                <p class="info infos">
                    <span @click="$router.push('/about')">About Us</span>
                    <span @click="$router.push('/downloads')">Download</span>
                    <span @click="$router.push('/logon')">Log on</span>
                </p>
            </div>
            <div class="item">
                <div class="title">
                    Follow Us
                    <img src="/login/bottom-san.svg" alt="" />
                </div>
                <img class="er" :src="aboutInfo.erweima" alt="" />
            </div>
        </div>
    </div>
    <el-row class="copyright bg-gray" style="border-top: 1px solid #b6c8d1">
        <el-col :offset="2" :span="20">
            <p class="text-left text-gray">{{ aboutInfo.copyright }} | {{ aboutInfo.beian }}</p>
        </el-col>
    </el-row>
</template>

<script>
import { getAboutDetails } from '../request/api.js'
import { ElMessage } from 'element-plus'

export default {
    name: 'Footer',
    async created() {
        this.id = this.$route.params.id
        const formData = new FormData()
        formData.append('id', this.id)
        let res = await getAboutDetails()
        if (res.code == 1) {
            ElMessage({
                message: res.msg,
                type: 'error'
            })
        } else {
            this.aboutInfo = res.data
            this.schoolList = res.sdata
            // this.schoolList=response.data.sdata;
        }
        return
    },
    data() {
        return {
            // copyright: 'Copyright@2024 Copyright Beijing Lexue Education Technology Co., Ltd',
            // beian: '京ICP备2022002848号-1',
            aboutInfo: [],
            schoolList: [],
            school: []
        }
    },
    props: {},
    methods: {
        showSchoolDetails(item) {
            this.$router.push({
                name: 'Schools',
                query: { keywords: item.school_id, location: location }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.school-logos {
    padding: 40px 0;
    background-color: #ffffff;
}
.swiper-item {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    img {
        max-width: 150px;
        max-height: 40px;
        cursor: pointer;
    }
}
.text-left {
    max-width: 1146px;
    margin: 16px auto;
}
.footers {
    color: #4f4f4f;
    padding: 30px 0;
    background-color: #f5f5f7;
    font-weight: 400px;
}
.footer {
    width: 1200px;
    margin: 0 auto;
}
.wraps {
    width: 1100px;
    justify-content: space-between;
}
.footer a {
    text-decoration: none;
    color: #4f4f4f;
}
.footer a:visited {
    color: #4f4f4f;
}
.footer a:hover {
    color: #ff9300;
}

.footer-title {
    color: #1f2f57;
    margin: 20px 0;
}

.contact {
    padding: 0;
    margin: 0;
}
.contact li {
    list-style: none;
    line-height: 34px;
}
.contact img {
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 15px;
}
.footers {
    .footer {
        width: 1145px;
        display: flex;
        justify-content: space-between;
        .item {
            .title {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 18px;
                font-weight: 600;
                color: #1f2f57;
                margin-bottom: 40px;
                img {
                    width: 8px;
                    margin-top: 2px;
                }
            }
            .info {
                display: flex;
                align-items: center;
                gap: 10px;
                img {
                    width: 16px;
                }
                p,
                span {
                    color: #999;
                    margin: 10px 0;
                    font-weight: 600;
                }
                span {
                    cursor: pointer;
                    &:hover {
                        color: #ff9300;
                    }
                }
            }
            .infos {
                gap: 40px;
            }
            .er {
                width: 186px;
            }
        }
    }
}
@media (max-width: 1300px) {
    .footers .footer {
        width: 100%;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 30px;
    }
    .wraps {
        width: 100%;
    }
    .text-left {
        width: 100%;
        padding: 0 16px;
        margin: 16px auto;
    }
    .swiper-item {
        width: 90%;
        height: 100%;
        gap: 5px;
        img {
            max-width: 90px;
        }
    }
}
@media (max-width: 500px) {
    .footers .footer {
        padding: 0 20px;
        justify-content: flex-start;
    }
}
</style>
<style lang="scss">
.el-carousel {
    width: 1300px;
    margin: 0 auto;
}
.el-carousel__arrow {
    background-color: transparent;
    .el-icon {
        color: #999;
        font-weight: 500;
        font-size: 30px;
    }
}
@media (max-width: 1300px) {
    .el-carousel {
        width: 100%;
        margin: 0 auto;
    }
}
</style>
