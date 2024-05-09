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
            <div class="box-yellow">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="18" :md="18">
                        <div class="box-title">
                            <label> {{ school_info.school_name }}</label>
                            <span class="text-lightgray" style="padding: 0 10px"> | </span>
                            <span class="text-lightgray">MC{{ school_info.id }}</span>
                            <!--              <label> Beijing Limai International School</label>-->
                            <!--              <span class="text-lightgray" style="padding: 0 10px"> | </span>-->
                            <!--              <span class="text-lightgray">MC1200</span>-->
                        </div>
                        <p>
                            {{ school_info.school_profile }}
                            <!--              Through the teaching philosophy of international integration, independent and-->
                            <!--              innovative international courses, elite teaching teams from China and the United-->
                            <!--              States, and scientific teaching methods, we aim to cultivate students into outstanding-->
                            <!--              talents with an international perspective who share love and responsibility,-->
                            <!--              inspiration and knowledge, health and happiness.-->
                        </p>
                    </el-col>
                    <el-col class="hidden-xs-only" :sm="6" :md="6" style="text-align: center">
                        <img
                            :src="school_info.school_logo"
                            style="width: 100%; max-width: 100px; height: auto"
                        />
                        <!--            <img-->
                        <!--              src="@/images/school_logo.jpeg"-->
                        <!--              style="width: 100%; max-width: 100px; height: auto"-->
                        <!--            />-->
                    </el-col>
                </el-row>
                <div class="simple-list">
                    <div class="simple-list-item">
                        <label>Location:</label>
                        <span> {{ school_info.province }}</span>
                        <!--            <span>Haidian District, Beijing</span>-->
                    </div>
                    <div>
                        <label>School Type:</label>
                        <span>{{ school_info.type_name }}</span>
                        <!--            <span>Private School</span>-->
                    </div>
                    <div>
                        <label>Year of Found:</label>
                        <span>{{ school_info.add_time }}</span>
                        <!--            <span>2011</span>-->
                    </div>
                    <div>
                        <label>Student Age:</label>
                        <span>{{ school_info.student_age }}</span>
                        <!--            <span>Kindergarten, G1-G2</span>-->
                    </div>
                    <div>
                        <label>Number of Foreign Teacher:</label>
                        <span>{{ school_info.foreign_teachers_num }}</span>
                        <!--            <span>50</span>-->
                    </div>
                    <div>
                        <label>Number of Total Students:</label>
                        <span>{{ school_info.students_num }}</span>
                        <!--            <span>50</span>-->
                    </div>
                </div>
                <div class="box-footer">
                    <el-button @click="gourl(school_info.official_website)" round class="btn-black">
                        <img src="@/images/icon-earth.png" />
                        <label>Visit School Website</label>
                    </el-button>
                    <el-button @click="showNotice" round class="btn-black">
                        <img src="@/images/icon-email.png" />
                        <label> Email School HR</label>
                        <!--            <label> Email School HR</label>-->
                    </el-button>
                </div>
            </div>
            <div class="box-yellow">
                <div class="box-title">
                    <label style="padding-right: 10px"> About us</label>
                    <el-icon><CaretBottom /></el-icon>
                </div>
                <div class="box-body">
                    <p>
                        {{ school_info.school_profile }}
                        <!--            The International Department of Shenzhen Foreign Language School (hereinafter referred-->
                        <!--            to as the Shenzhen International Department) is located on the beautiful shore of-->
                        <!--            Shenzhen Bay and is an international school invested and built by the Shenzhen Municipal-->
                        <!--            Government for grades Pre-K to 12. The school covers an area of 24000 square meters,-->
                        <!--            with a building area of 42000 square meters, and has first-class hardware facilities.-->
                        <!--            The construction area is located in a rapidly developing city like Shenzhen. The-->
                        <!--            International Department of Shenzhen Foreign Studies has two main goals: to provide-->
                        <!--            high-quality international education services for the children of foreign and Hong Kong,-->
                        <!--            Macao, and Taiwan working in Shenzhen; And become a first-class international school in-->
                        <!--            China and a window for international education in Shenzhen. The Shenzhen International-->
                        <!--            Department has opened 54 classes and can accommodate 1080 students. In addition, the-->
                        <!--            school's first-class hardware facilities and diverse extracurricular activities also-->
                        <!--            provide strong support for the education and teaching of the Shenzhen Foreign Studies-->
                        <!--            International Department. The International Department of Shenzhen Foreign Studies-->
                        <!--            adopts small class teaching to provide international education services for children-->
                        <!--            aged four to twelve. We have hired professional teachers from different countries and-->
                        <!--            cultural backgrounds around the world who are highly passionate about education. Through-->
                        <!--            an international teaching philosophy and management model, and adopting the-->
                        <!--            international diploma curriculum framework, we are committed to providing world-class-->
                        <!--            international education services for parents and children. The International Department-->
                        <!--            of Shenzhen Foreign Studies adopts the curriculum system of the International-->
                        <!--            Baccalaureate Organization (IBO), and currently all three programs (PYP/MYP/DP) have-->
                        <!--            been authorized. The school is also a certified school by the Council of International-->
                        <!--            Schools, a certified school by the Western Association of Schools and Colleges in the-->
                        <!--            United States, a member school of the East Asian Association of Overseas Schools-->
                        <!--            (EARCOS), and the China Mongolia Association of International Schools (ACAMIS). The-->
                        <!--            school also strives to integrate comprehensive worldview education, Chinese language-->
                        <!--            education, and cultural education into its curriculum.-->
                    </p>
                    <p style="text-align: center">
                        <img :src="school_info.school_logo" />
                        <!--            <img src="@/images/school1.jpg" />-->
                    </p>
                </div>
            </div>
            <div>
                <SimilarSchools :schools="similarSchools"></SimilarSchools>
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
import { getSchoolDetails } from '../../request/api'

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
    margin-top: 20px;
    padding-top: 40px;
    text-align: center;
    border-top: 1px solid #dcdcdc;
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
