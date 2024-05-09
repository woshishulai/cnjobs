<template>
    <div style="background-color: #f8f9fa">
        <div class="password">
            <el-row>
                <el-col :span="24">
                    <div class="password-form">
                        <h1 class="text-center">Reset Your Passowrd</h1>
                        <el-form :model="form" ref="form" class="cnjob-card" label-position="top">
                            <el-form-item label="Username or email address">
                                <el-input v-model="form.email" suffix-icon="Message"></el-input>
                            </el-form-item>
                            <div style="font-size: 12px; color: #353535; padding: 0px 0 48px">
                                Password reset instructions will be sent to your registered email
                                address.
                            </div>
                            <el-form-item class="form-btn">
                                <el-button
                                    @click="submitForm('form')"
                                    size="large"
                                    class="btn-password btn-yellow"
                                    style=""
                                >
                                    Submit
                                </el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { resetPassword } from '../request/api'
const openMessage = (message) => {
    ElMessage({
        message: message,
        type: 'info',
        offset: window.screen.height / 3
    })
}
export default {
    name: 'ResetPassword',
    created() {},
    data() {
        return {
            form: {
                email: ''
            }
        }
    },
    props: {},
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    const formData = new FormData()
                    formData.append('email', this.form.email)
                    let res = await resetPassword(formData)
                    console.log(res)
                    if (res.code == 1) {
                        // openMessage(res.data.msg);
                        ElMessage({
                            message: res.msg,
                            type: 'error',
                            offset: window.screen.height / 3
                        })
                    } else {
                        this.$router.push('/')
                    }
                    return
                    axios
                        .post('http://192.168.0.45/uppassword', formData)
                        .then((res) => {
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
                                this.$router.push('/') // document.querySelector('.isyincang').style.display='none';
                                // document.querySelector('.isxianshi').style.display='';
                                // if( document.querySelectorAll('.username').length>0 && typeof response.data.info.name !='undefined'){
                                //     document.querySelector('.username').innerHTML=response.data.info.name;
                                //
                                //
                                // }
                                // this.$router.go(-1);
                                // this.goToIndex();

                                // window.location.href='/index.html#/';
                                // window.location.reload();

                                //
                                // window.location.href='http://192.168.0.45/index.html#/?t='+Math.random();
                                // window.location.href='http://192.168.0.45/index.html#/?t='+Math.random();
                            }
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
.password {
    width: 600px;
    margin: 40px auto;
    .el-form {
        padding: 40px;
    }
    .password-form {
        padding: 40px;
        .form-btn {
            .btn-password {
                width: 100%;
            }
        }
    }
}
</style>
