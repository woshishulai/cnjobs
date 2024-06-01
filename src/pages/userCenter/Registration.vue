<template>
    <user-center active-menu="registration">
        <el-form
            :model="form"
            ref="form"
            class="block-form"
            label-width="160px"
            label-position="left"
            :rules="rules"
        >
            <el-form-item label="Email:" prop="email">
                <el-input style="height: 49px" v-model="form.email" />
            </el-form-item>
            <el-form-item label="Re-enter Password:" prop="password">
                <el-input show-password style="height: 49px" v-model="form.password" />
            </el-form-item>
            <el-form-item label="First Name:" prop="name">
                <el-input style="height: 49px" v-model="form.name" />
            </el-form-item>
            <el-form-item label="Last Name:" prop="surname">
                <el-input style="height: 49px" v-model="form.surname" />
            </el-form-item>
            <el-form-item>
                <el-button @click="submitForm('form')" class="btn-submit"> CONFIRM</el-button>
            </el-form-item>
        </el-form>
    </user-center>
</template>

<script>
import UserCenter from './UserCenter.vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getUserInfoApi, userUpdateApi } from '../../request/api'
const openMessage = (message) => {
    ElMessage({
        message: message,
        type: 'info',
        offset: window.screen.height / 3
    })
}
export default {
    name: 'Registration',
    components: { UserCenter },
    props: {},
    async created() {
        try {
            let response = await getUserInfoApi()
            if (response.code == 0) {
                console.log(response)
                this.form = response.data
            }
        } catch (error) {
            console.log(error)
        }
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                surname: ''
            },
            rules: {
                email: [
                    { required: true, message: 'Please enter your email address', trigger: 'blur' },
                    {
                        type: 'email',
                        message: 'Please enter a valid email address',
                        trigger: ['blur', 'change']
                    }
                ],
                password: [
                    { required: true, message: 'Please enter your password', trigger: 'blur' }
                ],
                name: [{ required: true, message: 'Please enter your name', trigger: 'blur' }],
                surname: [{ required: true, message: 'Please enter your surname', trigger: 'blur' }]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    const formData = new FormData()
                    formData.append('name', this.form.name)
                    formData.append('email', this.form.email)
                    formData.append('lastname', this.form.surname)
                    formData.append('password', this.form.password)
                    let response = await userUpdateApi(formData)
                    if (response.code == 0) {
                        ElMessage({
                            message: response.msg,
                            type: 'success',
                            offset: window.screen.height / 3
                        })
                    } else {
                        ElMessage({
                            message: response.msg,
                            offset: window.screen.height / 3
                        })
                    }

                    return
                    axios
                        .post('http://192.168.0.45/userupdate', formData, {
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
                                // openMessage(response.data.msg);
                                ElMessage({
                                    message: response.data.msg,
                                    type: 'error',
                                    offset: window.screen.height / 3
                                })
                            } else {
                                // openMessage(response.data.msg);
                                ElMessage({
                                    message: response.data.msg,
                                    type: 'error',
                                    offset: window.screen.height / 3
                                })
                                // this.$router.push({
                                //   name: 'Usercenter',
                                //   query: {}
                                // });
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
:deep(.el-form-item) {
    div.el-input__wrapper,
    input {
        background-color: #f4f4f4;
    }
}
</style>
