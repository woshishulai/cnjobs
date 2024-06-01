<template>
    <user-center active-menu="password">
        <el-form
            :model="form"
            ref="form"
            class="block-form"
            label-width="200px"
            label-position="left"
            :rules="rules"
        >
            <el-form-item label="Old password:" prop="old_password">
                <el-input show-password style="height: 49px" v-model="form.old_password" />
            </el-form-item>
            <el-form-item label="New password:" prop="password">
                <el-input show-password style="height: 49px" v-model="form.password" />
            </el-form-item>
            <el-form-item label="Confirm new password:" prop="new_password">
                <el-input show-password style="height: 49px" v-model="form.new_password" />
            </el-form-item>
            <el-form-item class="niao">
                <el-button style="height: 49px" @click="submitForm('form')" class="btn-submit">
                    CONFIRM</el-button
                >
            </el-form-item>
        </el-form>
    </user-center>
</template>

<script>
import UserCenter from './UserCenter.vue'
import axios from 'axios'
import { uppasswordApi } from '@/request/api'
export default {
    name: 'MyPassword',
    components: { UserCenter },
    created() {},
    data() {
        return {
            form: {
                password: '',
                old_password: '',
                new_password: ''
            },
            rules: {
                old_password: [
                    { required: true, message: 'Please enter your old_password', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Please enter your password', trigger: 'blur' }
                ],
                new_password: [
                    { required: true, message: 'Please enter your new_password', trigger: 'blur' },
                    { validator: this.validateNewPassword, trigger: 'blur' }
                ]
            }
        }
    },
    props: {},
    methods: {
        validateNewPassword(rule, value, callback) {
            if (value !== this.form.password) {
                callback(new Error('The new password and password must be the same!'))
            } else {
                callback()
            }
        },
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    const formData = new FormData()
                    formData.append('password', this.form.password)
                    formData.append('old_password', this.form.old_password)
                    formData.append('new_password', this.form.new_password)
                    let response = await uppasswordApi(formData)
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
                        .post('http://192.168.0.45/uppassword', formData)
                        .then((response) => {
                            if (
                                typeof response.data != 'undefined' &&
                                response.data.code == 1 &&
                                typeof response.data.msg != 'undefined'
                            ) {
                                openMessage(response.data.msg)
                            } else {
                                // this.$router.push('/');
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
:deep(.el-form-item) {
    div.el-input__wrapper,
    input {
        background-color: #f4f4f4;
    }
}
.niao {
    margin-top: 50px;
}
.el-form-item {
    input {
        width: 330px;
    }
}
</style>
