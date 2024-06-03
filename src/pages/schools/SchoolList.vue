<template>
    <div class="wrap">
        <el-row class="text-primary" style="max-width: 1300px; padding: 0 10px; margin: 0 auto">
            <el-col :span="24">
                <breadcrumb :breadcrumbs="breadcrumbs" />
                <div class="search-form sss">
                    <el-form :model="form" ref="form">
                        <el-row>
                            <el-col :xs="0" :sm="2"></el-col>
                            <el-col :xs="24" :sm="6" :md="5">
                                <el-form-item :inline="true" :model="form">
                                    <el-input
                                        v-model="form.name"
                                        placeholder="Please enter keywords"
                                    ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="6" :md="5">
                                <el-form-item>
                                    <el-select
                                        v-model="form.school_type"
                                        placeholder="School type"
                                        suffix-icon="CaretBottom"
                                    >
                                        <el-option
                                            v-for="item in school_types"
                                            :key="item.id"
                                            :label="item.type_name"
                                            :value="item.id"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="6" :md="5">
                                <el-form-item>
                                    <el-select
                                        v-model="form.location"
                                        placeholder="location"
                                        suffix-icon="CaretBottom"
                                    >
                                        <el-option
                                            v-for="item in school_locations"
                                            :key="item.id"
                                            :label="item.province"
                                            :value="item.id"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="4" :md="3">
                                <el-form-item>
                                    <el-button @click="submitForm('form')" class="btn-yellow"
                                        >Search</el-button
                                    >
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>

                <div class="search-form card-noborder">
                    <div
                        v-for="(school, index) in schools"
                        :key="index"
                        class="school-list-item card-noborder"
                        @click="toDetial(school.id)"
                    >
                        <el-row>
                            <el-col :xs="24" :sm="6" :md="6">
                                <img class="school-cover" :src="school.school_logo" />
                                <!--              <img class="school-cover" src="@/images/school1.jpg" />-->
                            </el-col>
                            <el-col class="school-baseinfo" :xs="24" :sm="12" :md="14">
                                <p>{{ school.school_name }}</p>

                                <p>{{ school.type_name }}</p>

                                <p>{{ school.province }}{{ school.city }}</p>
                            </el-col>
                            <el-col :xs="24" :sm="6" :md="4">
                                <el-button type="primary" class="btn-lightblue"> MORE </el-button>
                            </el-col>
                        </el-row>
                    </div>

                    <div
                        style="
                            padding: 40px 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        "
                    >
                        <el-pagination
                            :total="totalnum"
                            @current-change="handlePageChange"
                            background
                            layout="prev, pager, next"
                            style=""
                        />
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb.vue'
import { getSchoolList } from '../../request/api'
export default {
    name: 'SchoolList',
    components: { Breadcrumb },
    created() {
        let kwd = false
        if (typeof this.$route.query.keywords != 'undefined') {
            kwd = this.$route.query.keywords
        }
        let loc = false
        if (typeof this.$route.query.location != 'undefined') {
            loc = this.$route.query.location
        }
        // alert(this.$route.query.location)
        // const jsonData = JSON.parse(this.$route.params.jsonData);
        // alert(JSON.stringify(jsonData));
        this.fetchData(kwd, loc)
    },
    data() {
        return {
            breadcrumbs: [
                { url: '/', name: 'Home' },
                { url: '/schools', name: 'Schools' }
            ],
            schoolTypes: [
                { value: '学校类型1', label: '学校类型1' },
                { value: '学校类型2', label: '学校类型2' },
                { value: '学校类型3', label: '学校类型3' }
            ],
            school_types: [],
            school_locations: [],
            locations: [
                { value: '位置1', label: '位置1' },
                { value: '位置2', label: '位置2' }
            ],
            form: {
                name: '',
                school_type: '',
                location: ''
            },
            totalnum: 0,
            schools: [],
            currentPage: 1
        }
    },
    props: {},
    methods: {
        toDetial(id) {
            this.$router.push({ path: '/schools/' + id })
        },
        async fetchData(kwd, loc) {
            try {
                const formData = {
                    page: this.currentPage
                }
                if (kwd) {
                    formData.name = kwd
                }
                if (loc) {
                    formData.location = loc
                }

                const response = await getSchoolList(formData)
                console.log(response, '2345t')
                // 将返回的数据赋值给 data 属性
                // this.title = response.data.title;
                // alert(JSON.stringify(response.data))
                this.totalnum = response.totalnum
                this.schools = response.data
                this.school_types = response.school_types
                this.school_locations = response.school_locations
                // this.description = response.data.description;
            } catch (error) {
                // 处理请求错误
                // console.error(error);
            }
        },
        handlePageChange(newPage) {
            this.currentPage = newPage
            this.fetchData(false, false) // 发送请求获取数据
        },
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    const formData = new FormData()
                    formData.append('name', this.form.name)
                    formData.append('school_type', this.form.school_type)
                    formData.append('location', this.form.location)

                    // alert(this.form.Date)
                    this.currentPage = 1
                    const response = await getSchoolList(formData)
                    if (response.code == 1) {
                        ElMessage({
                            message: response.msg,
                            type: 'error'
                        })
                    } else {
                        this.totalnum = response.totalnum
                        this.schools = response.data
                        this.school_types = response.school_types
                        this.school_locations = response.school_locations
                        // window.location.href='index.html#/logon';
                    }
                    return
                    axios
                        .post('http://192.168.0.45/schoollist', formData)
                        .then((response) => {
                            // 处理服务器响应
                            if (
                                typeof response.data != 'undefined' &&
                                response.data.code == 1 &&
                                typeof response.data.msg != 'undefined'
                            ) {
                            } else {
                                this.totalnum = response.data.totalnum
                                this.schools = response.data.data
                                this.school_types = response.data.school_types
                                this.school_locations = response.data.school_locations
                                // window.location.href='index.html#/logon';
                            }

                            // 根据需要更新UI或执行其他操作
                        })
                        .catch((error) => {
                            // 处理错误
                            console.error(error)
                        })
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.card-noborder {
    padding: 20px 0;
    background-color: transparent;
}
.wrap {
    background-color: #f8f9fa;
    margin-top: 112px;
}
.search-form {
    border-radius: 8px;
    :deep(.el-form) {
        .el-form-item {
            margin: 10px 10px;
        }
        .el-input {
            --el-input-width: 100%;
        }
        .el-select {
            --el-select-width: 100%;
        }
    }
}
.sss {
    padding: 29px 0;
    background-color: #fff;
    margin-bottom: 31px;
    :deep(.el-col) {
        .el-input__wrapper,
        .el-select__wrapper {
            border-radius: 8px;
            height: 49px;
            font-weight: 600;
            background-color: rgba(239, 241, 243, 1);
        }
        .el-button {
            width: 168px;
            height: 49px;
            border-radius: 8px;
        }
    }
}
.school-list-item {
    background-color: #fff;
    margin: 40px 0;
    cursor: pointer;
    &:hover {
        box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
        .btn-lightblue {
            color: #ffffff;
            border-color: #ff9300;
            background-color: #ff9300;
        }
    }
    :deep(.el-col) {
        display: flex;
        align-items: center;
    }
    .school-cover {
        width: 100%;
        height: auto;
    }
    .school-baseinfo {
        display: block;
        padding: 20px;
        color: #474747;
        div {
            font-size: 14px;
        }
        p {
            font-size: 16px;
            font-weight: bold;
        }
    }
    .btn-lightblue {
        a {
            color: #1f2f57;
        }
        a:hover {
            color: #ffffff;
        }
    }
}
</style>
