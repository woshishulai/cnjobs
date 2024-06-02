<template>
    <div class="banner">
        <el-row class="banners" style="">
            <el-col span="24">
                <div class="banner-container">
                    <div class="banner-text" style="">
                        <h1 class="banner-title">Career Starts Here</h1>
                        <p class="banner-desc">
                            Focusing on recruitment services form foreign nationals, we provide you
                            with high-quality recruitment information and talent both domestically
                            and internationally
                        </p>
                    </div>
                    <div class="search-form">
                        <el-form v-model="searchForm" ref="searchForm" :inline="true">
                            <el-row :gutter="20">
                                <el-col :xs="24" :sm="10" :md="12">
                                    <el-input
                                        v-model="searchForm.keywords"
                                        class=""
                                        placeholder="Please enter keywords"
                                    ></el-input>
                                </el-col>
                                <el-col :xs="24" :sm="8" :md="8">
                                    <el-select
                                        v-model="searchForm.location"
                                        placeholder="Job location"
                                    >
                                        <el-option
                                            v-for="item in school_locations"
                                            :key="item.id"
                                            :label="item.province"
                                            :value="item.id"
                                        ></el-option>
                                        <!--                  <el-option label="Locations1" value="location1"></el-option>-->
                                    </el-select>
                                </el-col>
                                <el-col :xs="24" :sm="6" :md="4">
                                    <el-button @click="gotourl()" type="primary" class="btn-search">
                                        <el-icon style="display: inline-block; margin-right: 10px"
                                            ><Search
                                        /></el-icon>
                                        Search
                                    </el-button>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>

    <el-row class="about-us" style="">
        <el-col :xs="0" :md="7"></el-col>
        <el-col :xs="24" :md="14">
            <div style="padding: 40px">
                <h1 style="color: #2b3b61; font-size: 32px">About Us</h1>
                <p style="line-height: 22px">
                    {{ about_info.content }}
                </p>
                <el-row :gutter="20" class="number-container" style="color: #ff9300">
                    <el-col :xs="24" :sm="12" :md="6">
                        <div>
                            <label class="big-number">
                                <count-to
                                    :start-val="1900"
                                    :end-val="about_info.start_time"
                                    :duration="5000"
                                    separator=""
                                />
                                <!--                <count-to :start-val="1900" :end-val="2011" :duration="5000" separator="" />-->
                            </label>
                            <span>year</span>
                        </div>
                        <div>The company founded on</div>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="6">
                        <div>
                            <label class="big-number">
                                <count-to
                                    :start-val="0"
                                    :end-val="about_info.service_num"
                                    :duration="5000"
                                    separator=""
                                />
                                <!--                <count-to :start-val="0" :end-val="275" :duration="5000" separator="" />-->
                            </label>
                            <span>+</span>
                        </div>
                        <div>Accumulated customer service</div>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="6">
                        <div>
                            <label class="big-number">
                                <count-to
                                    :start-val="0"
                                    :end-val="about_info.success_rate"
                                    :duration="5000"
                                    separator=""
                                />
                                <!--                <count-to :start-val="0" :end-val="80" :duration="5000" separator="" />-->
                            </label>
                            <span>%</span>
                        </div>
                        <div>Job success rate</div>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="6">
                        <div>
                            <label class="big-number">
                                <count-to
                                    :start-val="0"
                                    :end-val="about_info.friend_num"
                                    :duration="5000"
                                    separator=""
                                />
                                <!--                <count-to :start-val="0" :end-val="37" :duration="5000" separator="" />-->
                            </label>
                            <span>family</span>
                        </div>
                        <div>Having partners</div>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </el-row>

    <el-row class="partners" style="">
        <el-col :span="20" :offset="2">
            <div class="partners-title">
                <h1>Partners</h1>
                <p>Multiple cooperative universities provide diverse job demands</p>
            </div>
            <el-row :gutter="20" class="partners-list">
                <el-col
                    v-for="(school, index) in school_partners"
                    :key="index"
                    :xs="24"
                    :sm="12"
                    :md="8"
                    @mouseenter="setSlideDownClass"
                >
                    <div
                        @mouseenter="setSlideInClass"
                        @mouseout="setMouseOut"
                        class="partners-card"
                    >
                        <img :src="'http://cnjob.sc798.com' + school.cover" />
                        <div class="partners-desc">
                            <p>{{ school.desc }}</p>
                            <div class="partners-link">
                                <a :href="'/index.html#/schools/' + school.id" class="">
                                    Read More</a
                                >
                                <!--                <a href="#" class=""> Read More</a>-->
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>

    <div>
        <el-row class="choose-us" style="">
            <el-col :span="20" :offset="2">
                <div class="choose-us-title">
                    <h1 v-html="xuanze?.main?.title"></h1>
                    <p v-html="xuanze?.main?.stitle"></p>
                </div>
                <el-row :gutter="40">
                    <el-col
                        :xs="24"
                        :sm="12"
                        :md="8"
                        v-for="(item, index) in xuanze?.childs"
                        :key="item.id"
                    >
                        <div class="choose-us-card">
                            <div>
                                <img src="/images/icon-visa.png" />
                            </div>
                            <div>
                                <h2 v-html="item?.title"></h2>
                                <p v-html="item?.stitle"></p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>

    <el-row class="steps" style="">
        <el-col :span="20" :offset="2">
            <div class="steps-title">
                <h1 v-html="howWork?.main?.title"></h1>
                <p v-html="howWork?.main?.stitle"></p>
            </div>
            <el-row class="steps-box">
                <el-col :xs="24" :sm="16" :md="16">
                    <timeline :list="howWork?.childs" />
                </el-col>
                <el-col
                    :xs="24"
                    :sm="8"
                    :md="8"
                    style="position: relative; text-align: center; min-height: 200px"
                >
                    <img class="hidden-sm-and-down" src="/images/bg-cv.png" />
                    <div @click="showQuickApply" class="steps-submit-btn">
                        <img src="/images/btn-submit.png" />

                        <a @click="showQuickApply" href="#" style=""> SUBMIT CV </a>
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
    <div class="feedback">
        <div class="feedback-title">
            <h1 v-html="feedback?.main?.title"></h1>
            <p v-html="feedback?.main?.stitle"></p>
        </div>
        <el-carousel indicator-position="none" :height="heights + 'px'">
            <el-carousel-item
                v-for="(items, index) in feedback?.childs"
                :key="index"
                class="swiper-item"
            >
                <div
                    v-for="(item, isndex) in items"
                    :key="isndex"
                    style="
                        width: 32%;
                        min-width: 330px;
                        flex: 1;
                        max-width: 400px;
                        gap: 30px;
                        margin: 0 auto;
                    "
                >
                    <div class="feedback-item">
                        <div class="feedback-item-title">
                            <span></span>
                            <span>{{ item?.title }}</span>
                            <span></span>
                        </div>
                        <div class="feedback-item-desc">
                            <p>
                                {{ item?.stitle }}
                            </p>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>

    <!-- <el-row class="feedback" style=""> -->
    <!-- <el-col :span="20" :offset="2">
            <div class="feedback-title">
                <h1 v-html="feedback?.main?.title"></h1>
                <p v-html="feedback?.main?.stitle"></p>
            </div> -->
    <!-- <el-carousel indicator-position="none" :height="heights + 'px'">
                <el-carousel-item
                    v-for="(items, index) in feedback?.childs"
                    :key="index"
                    class="swiper-item"
                >
                    <div
                        v-for="(item, isndex) in items"
                        :key="isndex"
                        style="
                            width: 32%;
                            min-width: 330px;
                            flex: 1;
                            max-width: 400px;
                            gap: 30px;
                            margin: 0 auto;
                        "
                    >
                        <div class="feedback-item">
                            <div class="feedback-item-title">
                                <span></span>
                                <span>{{ item?.title }}</span>
                                <span></span>
                            </div>
                            <div class="feedback-item-desc">
                                <p>
                                    {{ item?.stitle }}
                                </p>
                            </div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
            <el-row :gutter="20"> -->
    <!-- <el-col :xs="24" :sm="12" :md="8" v-for="(item, index) in feedback?.childs">
                    <div class="feedback-item">
                        <div class="feedback-item-title">
                            <span></span>
                            <span>{{ item?.title }}</span>
                            <span></span>
                        </div>
                        <div class="feedback-item-desc">
                            <p>
                                {{ item?.stitle }}
                            </p>
                        </div>
                    </div>
                </el-col> -->
    <!-- </el-row> -->
    <!-- </el-col> -->
    <!-- </el-row> -->
    <el-row class="news" style="">
        <el-col :span="20" :offset="2">
            <div style="padding: 40px 0; text-align: center">
                <el-button
                    :class="{ 'btn-yellow': isActive === 'information' }"
                    @click="setActive('information')"
                    round
                    size="large"
                    class="btn-category"
                    style=""
                >
                    Information
                </el-button>

                <el-button
                    :class="{ 'btn-yellow': isActive === 'news' }"
                    @click="setActive('news')"
                    round
                    size="large"
                    class="btn-outline-yellow btn-category"
                    style=""
                    >News</el-button
                >
            </div>
            <el-row :gutter="40">
                <el-col
                    v-for="(news, index) in newsList.slice(0, 2)"
                    :key="index"
                    :xs="24"
                    :sm="12"
                >
                    <el-card class="card-news">
                        <div class="news-cover">
                            <img @mouseenter="setZoomClass" :src="news?.cover" />
                        </div>
                        <div class="news-title">
                            {{ news?.title }}
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px; color: #808080">
                            <img style="width: 22px" src="@/images/日历.png" alt="" />
                            <p>{{ news?.add_time }}</p>
                        </div>
                        <div class="news-date">{{ news?.date }}</div>

                        <div
                            class="news-summary"
                            style="
                                font-family: Microsoft YaHei;
                                font-weight: 400;
                                font-size: 12px;
                                color: #4e5976;
                                line-height: 24px;
                            "
                        >
                            {{ news?.describe }}
                        </div>
                        <div class="news-link">
                            <a href="/index.html#/news" class="aaaa">Read More</a>
                            <el-icon><Right /></el-icon>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <div class="news-jump">
                <el-button
                    @click="goToPage"
                    round
                    class="btn-outline-yellow"
                    style="width: 152px; height: 43px; background: #e9e9e9; border-radius: 22px"
                    >See more</el-button
                >
            </div>
        </el-col>
    </el-row>
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
        <QuickApply @close="closeQuickApply" />
    </el-dialog>
</template>

<script>
import Timeline from '@/components/Timeline.vue'
import QuickApply from './jobs/QuickApply.vue'
import { getNewsListApi, getHomeListApi } from '../request/api.js'
// import Breadcrumb from "../components/Breadcrumb";
export default {
    name: 'HomePage',
    components: { Timeline, QuickApply },
    created() {
        this.fetchData()
        this.fetchDataNews()
    },
    data() {
        return {
            csrfToken: null,
            locations: [{ key: '', name: '' }],
            searchForm: {
                keywords: '',
                location: ''
            },
            isActive: 'information',
            school_locations: [],
            about_info: [],
            school_partners: [],
            applyFormVisible: false,
            newsList: [],
            xuanze: {},
            howWork: {},
            feedback: {},
            heights: 370
        }
    },
    props: {},
    mounted() {
        this.adjustHeights()
        window.addEventListener('resize', this.adjustHeights)
    },
    beforeDestroy() {
        // Remove resize event listener
        window.removeEventListener('resize', this.adjustHeights)
    },
    methods: {
        adjustHeights() {
            if (window.innerWidth < 740) {
                this.heights = 1200
                return
            }
            if (window.innerWidth < 1090) {
                this.heights = 800
                return
            }
            this.heights = 370
        },
        setZoomClass(event) {
            if (event.type == 'mouseenter') {
                let zooming = event.target.getAttribute('zooming')
                if (zooming == 'true') {
                    return
                }
                setTimeout(function () {
                    if (zooming != 'true') {
                        event.target.setAttribute('zooming', true)
                        event.target.classList.add('zoom-in')
                        setTimeout(function () {
                            event.target.setAttribute('zooming', false)
                            event.target.classList.remove('zoom-in')
                        }, 3100)
                    }
                }, 10)
            }
        },
        setMouseOut(event) {
            console.log('mouseout', event.target)
            if (!event.target.querySelector('.partners-desc')) {
                return
            }
            let coverTag = event.target
            if (event.type == 'mouseout') {
                console.log('mouseout')
                coverTag.setAttribute('mousein', false)
                if (coverTag.getAttribute('sliding') != 'true') {
                    coverTag.classList.remove('slide-in-up')
                }
            }
        },
        setSlideInClass(event) {
            if (!event.target.querySelector('.partners-desc')) {
                return
            }
            let coverTag = event.target
            console.log(coverTag)
            if (event.type == 'mouseenter') {
                console.log('mouse in')
                coverTag.setAttribute('mousein', true)
                let sliding = coverTag.getAttribute('sliding')
                if (sliding == 'true') {
                    return
                }
                setTimeout(function () {
                    if (sliding != 'true') {
                        coverTag.setAttribute('sliding', true)
                        coverTag.classList.add('slide-in-up')
                        coverTag.classList.remove('slide-out-down')
                        //setTimeout(function () {
                        //coverTag.setAttribute("sliding", false);
                        //if (coverTag.getAttribute("mousein") != "true") {
                        //    coverTag.classList.remove("slide-in-up");
                        //}
                        //}, 2100);
                    }
                }, 10)
            }
        },
        setSlideDownClass(event) {
            // console.log(event)
            const tags = document.getElementsByClassName('partners-card')
            for (let item of tags) {
                if (item.classList.contains('slide-in-up')) {
                    item.classList.remove('slide-in-up')
                    item.classList.add('slide-out-down')
                    item.setAttribute('sliding', false)
                }
            }
        },
        gotourl() {
            let keywords = this.searchForm.keywords
            let location = this.searchForm.location
            this.$router.push({
                name: 'Schools',
                query: { keywords: keywords, location: location }
            })
            // this.$router.push({
            //   path: '/schools',
            //   params: {
            //     jsonData: JSON.stringify({keywords:keywords,location:location})
            //   }
            // });
        },
        goToPage() {
            // 使用 Vue Router 的 push 方法来导航到另一个页面
            // 'other-page' 是你想要导航到的路由名称
            this.$router.push({ name: 'News' })
        },
        showQuickApply() {
            event.preventDefault()
            this.applyFormVisible = true
        },
        closeQuickApply() {
            this.applyFormVisible = false
        },
        setActive(type) {
            // 更新 isActive 的值以匹配被点击的按钮类型
            this.isActive = type
            this.fetchDataNews() // 发送请求获取数据
        },
        async fetchDataNews() {
            try {
                const formData = {
                    page: this.currentPage,
                    ntype: this.isActive,
                    snum: 2
                }
                const response = await getNewsListApi(formData)
                this.newsList = response.data
            } catch (error) {
                // 处理请求错误
                // console.error(error);
            }
        },
        async fetchData() {
            try {
                const formData = {
                    // page: this.currentPage
                }
                // if(kwd){
                //   formData.name=kwd;
                // }
                // if(loc){
                //   formData.location=loc;
                // }
                const response = await getHomeListApi()
                console.log(response)
                // 将返回的数据赋值给 data 属性
                // this.title = response.data.title;
                // alert(JSON.stringify(response.data))
                // this.totalnum = response.data.totalnum;
                // this.schools = response.data.data;
                // this.school_types = response.data.school_types;
                this.school_locations = response.location
                this.about_info = response.about_info
                this.school_partners = response.school_partners
                this.xuanze = response.cnjob_whychaosemy
                this.howWork = response.cnjob_howitworks
                this.feedback = response.cnjob_teachersfeedback
                // this.description = response.data.description;
            } catch (error) {
                // 处理请求错误
                // console.error(error);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    padding: 0 20px;
}

.top {
    margin-top: 112px;
}
.banner {
    // position: relative;
    margin-top: 112px;
    height: 500px;
    background-image: url('/images/bg-search.jpg');
    background-position: center;
    background-size: 100% 100%;
    .banner-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: space-between;
        height: 100%;

        .banner-text {
            color: #ffffff;
            text-align: center;
            .banner-title {
                font-size: 48px;
                line-height: 48px;
                margin: 0;
            }
            .banner-desc {
                margin-top: 29px;
                line-height: 29px;
                word-break: break-all;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
        }
        .search-form {
            display: block;
            width: 100%;
            :deep(.el-col) {
                margin-bottom: 20px;
                .el-input__wrapper,
                .el-select__wrapper,
                .el-button {
                    border-radius: 8px;
                    height: 63px;
                    font-weight: 600;
                }
            }
            .btn-search {
                width: 142px;
                border-radius: 8px;
                font-size: 18px;
                background-color: #ff9300;
                border-color: #ff9300;
            }
        }
    }
}
.banners {
    height: 100%;
    width: 831px;
    margin: 0 auto;
    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 20px;
    }
}
.aaaa {
    color: #1f2f57;
}

.big-number {
    font-size: 50px;
    font-weight: bold;
}

.about-us-container {
}
.about-us {
    background-image: url('/images/bg-about.jpg');
    color: #4e5a77;
    padding: 50px 0;
    background-size: 100% 100%;
}
.number-container {
    padding: 30px;
}

.number-container .el-col {
    text-align: center;
    margin-bottom: 40px;
}

.partners {
    padding: 40px 0;
    background-image: url('/images/bg-partners.jpg');
    position: relative;
}
.partners-title {
    margin-bottom: 46px;
}
.partners-title h1 {
    text-align: center;
    color: #1f2f57;
    font-size: 30px;
}
.partners-title p {
    color: #1f2f57;
    text-align: center;
    font-size: 16px;
}
.partners-list img {
    width: 100%;
    height: auto;
    &:hover {
        cursor: pointer;
    }
}
.partners-card {
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
    .partners-desc {
        display: block;
        position: absolute;
        left: 0;
        top: calc(100% - 70px);
        height: 100%;
        text-align: center;
        font-size: 20px;
        color: #ffffff;
        background: linear-gradient(to top, rgba(51, 108, 196, 0.8), rgba(0, 0, 0, 0.1));
        width: 100%;
        p {
            padding: 0 20px;
            /*margin-top: 20%;*/
            word-break: break-all;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }

        .partners-link {
            margin-top: 30px;
        }
    }

    &.slide-in-up {
        .partners-desc {
            top: 0;
            animation: slideInUp;
            animation-duration: 2s;
            p {
                margin-top: 20%;
                -webkit-line-clamp: 2;
            }
        }
    }
    &.slide-out-down {
        .partners-desc {
            top: calc(100% - 70px);
            animation: slideOutDown;
            animation-duration: 2s;
        }
    }
}

.partners-link a {
    text-decoration: none;
    padding: 8px 20px;
    font-size: 14px;
    border-radius: 30px;
    border: 1px solid #ffffff;
    background-color: #4765b1;
    color: #ffffff;
    &:hover {
        background-color: #ff9300;
    }
}

.choose-us {
    color: #ffffff;
    padding: 40px 0 70px;
    background-image: url('/images/bg-choose-us.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.choose-us-title {
    margin-bottom: 54px;
}
.choose-us-title h1 {
    text-align: center;
    font-size: 30px;
}
.choose-us-title p {
    text-align: center;
    font-size: 16px;
}

.choose-us-card {
    min-height: 320px;
    background: #f7f7f7;
    border-radius: 8px;
    text-align: center;
    color: #1f2f57;
    padding: 0 20px 40px 20px;
    margin-bottom: 40px;
    cursor: pointer;
    transition: transform 2s;
    &:hover {
        box-shadow:
            0 1px 2px -2px rgba(0, 0, 0, 0.16),
            0 3px 6px 0 rgba(0, 0, 0, 0.12),
            0 5px 12px 4px rgba(0, 0, 0, 0.09);
        transform: scale(1.1);
    }
}

.choose-us-card div:first-child {
    display: inline-block;
    background-color: #ffffff;
    padding: 40px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
}

.steps {
    background-image: url('/images/bg-steps.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 40px;
    padding-top: 40px;
}

.steps-title {
    color: #1f2f57;
}
.steps-title h1 {
    text-align: center;
    font-size: 30px;
}

.steps-title p {
    text-align: center;
    font-size: 16px;
}

.steps-box {
    max-width: 1240px;
    margin: 50px auto;
}
.steps-timeline {
}
.steps-timeline :deep(.el-timeline .el-timeline-item__content) {
    font-size: 30px;
    color: #1f2f57;
}
.steps-timeline :deep(.el-timeline .el-timeline-item__tail) {
    // 竖线
    border-left: dotted 2px #1f2f57;
}
.steps-timeline div.el-timeline-item__node.el-timeline-item__node--normal {
    width: 40px !important;
    height: 40px !important;
}

.steps-submit {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.steps-submit-btn {
    position: absolute;
    bottom: 70px;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}
.steps-submit-btn img {
    width: 280px;
    height: 90px;
}
.steps-submit-btn a {
    font-size: 24px;
    color: #ffffff;
    position: absolute;
    bottom: 30px;
}

.feedback {
    background-image: url('/images/bg-feedback.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
    padding-bottom: 40px;
    padding-top: 40px;
}
.feedback-title {
    margin-bottom: 54px;
}
.feedback-title h1 {
    text-align: center;
    font-size: 30px;
}

.feedback-title p {
    text-align: center;
    font-size: 16px;
}
.feedback-item {
    margin-bottom: 30px;
    .feedback-item-title {
        text-align: center;
        span {
            display: inline-block;
            vertical-align: middle;
            font-weight: 400;
            font-size: 30px;
            line-height: 30px;
            height: 30px;
        }
        span:nth-child(1),
        span:last-child {
            width: calc(50% - 130px);
            border-top: 1px solid #ffffff;
            margin-bottom: -45px;
        }
        span:nth-child(1) {
            border-top-left-radius: 5px;
        }
        span:last-child {
            border-top-right-radius: 5px;
        }

        span:nth-child(2) {
            text-align: center;
            width: 260px;
            text-align: center;
            margin-bottom: -20px;
        }
    }
    .feedback-item-desc {
        padding: 40px 30px;
        border: solid 1px #ffffff;
        border-top: none;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.11);
        opacity: 0.66;
        overflow: hidden;
    }
    p {
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        line-height: 30px;
        -webkit-box-orient: vertical;
    }
}

.news {
}
.card-news {
    margin-bottom: 20px;
    text-align: left;
}

.news .btn-category {
    width: 200px;
    height: 60px;
    border-radius: 40px;
    font-size: 24px;
    margin-bottom: 20px;
}

.news-cover img {
    width: 100%;
    &.zoom-in {
        animation: zoomIn;
        animation-duration: 3s;
    }
}
.news-title {
    color: #1f2f57;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;

    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.news-date {
    color: #808080;
    font-size: 16px;
    margin: 10px 0;
}
.news-summary {
    color: #4e5976;
    font-size: 12px;
    height: 72px;
    margin: 10px 0 20px;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.news-link {
    color: #1f2f57;
    font-size: 16px;
    margin: 10px 0 20px 0;
    * {
        vertical-align: middle;
    }
    a {
        padding-right: 10px;
    }
    a:hover {
        color: #ff9300;
    }
}
.news-jump {
    text-align: center;
    padding: 20px;
}
</style>
<style>
.el-dialog {
    width: 649px;
}
</style>
