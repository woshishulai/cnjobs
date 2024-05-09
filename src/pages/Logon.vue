<template>
    <div style="background-color: #f8f9fa; padding: 184px 40px 73px">
        <div class="logon cnjob-card">
            <el-row>
                <el-col class="bg" :xs="24" :sm="12" :md="12">
                    <div class="welcome-msg">
                        <!-- <h1>Career Starts Here</h1>
                        <p>
                            Focusing on recruitment services for foreign nationals, we provide you
                            with high-quality recruitment information and talent both domestically
                            and internationally
                        </p> -->
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12">
                    <div class="logon-form">
                        <h1>Welcome to CNJOBS</h1>
                        <el-form
                            :hide-required-asterisk="true"
                            :model="form"
                            ref="form"
                            label-position="top"
                            :rules="rules"
                        >
                            <el-form-item label="Email" prop="Email">
                                <el-input v-model="form.Email" placeholder="Email:">
                                    <template #suffix>
                                        <img src="/public/login/邮箱@.png" alt="" />
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="Password" prop="Password">
                                <el-input
                                    show-password
                                    v-model="form.Password"
                                    placeholder="Password:"
                                    @keyup.enter="submitForm('form')"
                                >
                                    <template #suffix>
                                        <img
                                            style="width: 13px"
                                            src="/public/login/锁.png"
                                            alt=""
                                        /> </template
                                ></el-input>
                            </el-form-item>
                            <div
                                @click="gotourl"
                                style="
                                    text-align: right;
                                    padding-bottom: 15px;
                                    color: #353535;
                                    cursor: pointer;
                                    font-size: 14px;
                                "
                            >
                                Forget Password
                            </div>
                            <el-form-item class="form-btn">
                                <el-button
                                    @click="submitForm('form')"
                                    size="large"
                                    class="btn-logon btn-yellow"
                                    style="font-weight: 600"
                                >
                                    LOG ON
                                </el-button>
                            </el-form-item>
                        </el-form>
                        <div
                            style="cursor: pointer; font-size: 14px"
                            @click="
                                () => {
                                    $router.push({ path: '/register' })
                                }
                            "
                        >
                            <span> No account yet? </span>
                            <span style="color: #ff9300"> Register </span>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import { loginApi } from '../request/api.js'

const openMessage = (message) => {
    ElMessage({
        message: message,
        type: 'info',
        offset: window.screen.height / 3
    })
}
export default {
    name: 'Logon',
    created() {},
    data() {
        return {
            form: {
                Password: '',
                Email: ''
            },
            rules: {
                Email: [
                    { required: true, message: 'Please enter your email address', trigger: 'blur' },
                    {
                        type: 'email',
                        message: 'Please enter a valid email address',
                        trigger: ['blur', 'change']
                    }
                ],
                Password: [
                    { required: true, message: 'Please enter your password', trigger: 'blur' }
                ]
            }
        }
    },
    props: {},
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    const formData = new FormData()
                    formData.append('password', this.form.Password)
                    formData.append('email', this.form.Email)
                    let res = await loginApi(formData)
                    if (res.code == 1) {
                        ElMessage({
                            message: res.msg,
                            type: 'error',
                            offset: window.screen.height / 3
                        })
                    } else {
                        document.querySelector('.isyincang').style.display = 'none'
                        document.querySelector('.queshi').style.display = 'none'
                        document.querySelector('.zheli').style.display = 'none'
                        document.querySelector('.xinde').style.display = ''
                        document.querySelector('.xomdeua').style.display = ''
                        // document.querySelector('.username').innerHTML = res.info.email
                        this.$router.push('/')
                        // this.$router.go(-1);
                        // this.goToIndex();

                        // window.location.href='/index.html#/';
                        // window.location.reload();

                        //

                        // window.location.href = 'http://192.168.0.45/index.html#/?t=' + Math.random()
                        // window.location.href='http://192.168.0.45/index.html#/?t='+Math.random();
                    }
                    return
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        goToIndex() {
            this.$router.push('/') // 跳转到登录页面
        },
        gotourl() {
            this.$router.push('/reset_password') // 跳转到登录页面
        }
    }
}
</script>

<style lang="scss" scoped>
.bg {
    background: url('/public/logon/背景.png');
    background-size: 100% 100%;
}
.logon {
    .welcome-msg {
        line-height: 30px;
        color: #ffffff;
        padding: 40px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        p {
            text-align: justify;
        }
    }
    width: 800px;
    margin: 40px auto;
    .logon-form {
        padding: 40px;
        .form-btn {
            .btn-logon {
                width: 100%;
            }
        }
    }
}
@media (max-width: 1000px) {
    .logon {
        width: 100%;
    }
}
</style>
