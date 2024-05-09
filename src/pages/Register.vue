<template>
    <div style="background-color: #f8f9fa; padding: 184px 40px 73px">
        <div class="register-form cnjob-card">
            <div class="form-header">
                <h1>Create A Free Account</h1>
                <div style="color: rgba(0, 0, 0, 1)">
                    <span> Already have account? </span>
                    <a style="color: rgba(38, 95, 190, 1)" href="/index.html#/logon">Sign in</a>
                </div>
            </div>
            <div>
                <el-form
                    :model="form"
                    :hide-required-asterisk="true"
                    ref="form"
                    label-position="top"
                    :rules="rules"
                >
                    <el-form-item prop="Email">
                        <el-input size="large" v-model="form.Email" placeholder="Email"></el-input>
                    </el-form-item>
                    <el-form-item prop="Password">
                        <el-input
                            size="large"
                            v-model="form.Password"
                            placeholder="Password"
                            type="password"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="Password_confirmation">
                        <el-input
                            size="large"
                            v-model="form.Password_confirmation"
                            placeholder="Re-enter Password"
                            type="password"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="Name">
                        <el-input
                            size="large"
                            v-model="form.Name"
                            placeholder="First Name"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="Lastname">
                        <el-input
                            size="large"
                            v-model="form.Lastname"
                            placeholder="Last Name"
                        ></el-input>
                    </el-form-item>
                    <div class="upload">
                        <div class="title">Resume:</div>
                        <p style="font-size: 14px">
                            Please make sure your CV contains a valid email address (plain text
                            only)
                        </p>
                        <el-upload
                            ref="upload"
                            class="upload-demo"
                            :limit="1"
                            @change="handleFileChange"
                            :auto-upload="false"
                        >
                            <template #trigger>
                                <el-button>
                                    <el-icon style="color: #000" lass="el-icon--right"
                                        ><Upload
                                    /></el-icon>
                                    <span style="margin: 0 10px; color: #000"> Upload </span>
                                </el-button>
                                <p style="font-size: 14px; margin-left: 10px">
                                    Last Format : doc/docx. pdf
                                </p>
                            </template>
                        </el-upload>
                    </div>
                    <el-form-item class="form-btn">
                        <el-button
                            @click="submitForm('form')"
                            size="large"
                            class="btn-register btn-yellow"
                        >
                            Create new account
                        </el-button>
                    </el-form-item>
                    <div style="text-align: center">
                        <span style="color: #474747">By creating an account, you agree to our</span>
                        <span class="btn-policy" @click="showPolicy"> Privacy Policy </span>
                    </div>
                </el-form>
            </div>
        </div>
        <el-dialog
            class="policy-dialog"
            title="Privacy Policy"
            v-model="policyVisible"
            center
            align-center
            width="600"
            lock-scroll
        >
            <p class="policy-content">
                TopTutorJob is aware that the security of your private information from the use of
                our website is an important concern. We take the protection of your personal data
                very seriously. Therefore we would like you to know what data we maintain and what
                data we discard. With this privacy notice, we would like to inform you about our
                security measures. Collection and processing of personal data We collect personal
                data only when you provide it to us, through registration, job application,
                completion of forms or e-mails, and similar situations in which you have chosen to
                provide the information to us. The database and its contents remain at TopTutorJob
                and stay with data processors or servers acting on our behalf and responsible to us.
                Your personal data will not be passed on by us for use by third parties in any form
                whatsoever, unless we have obtained your consent or are legally required to do so.
                We will retain control of and responsibility for the use of any personal data you
                disclose to us. Some of this data may be stored or processed at computers located in
                other jurisdictions, such as the United States, whose data protection laws may
                differ from the jurisdiction in which you live. In such cases, we will ensure that
                appropriate protections are in place to require the data processor in that country
                to maintain protections on the data that are equivalent to those that apply in the
                country in which you live. Purposes of Use The data we collect will only be used for
                the purpose of supplying you with the requested job opportunities or services or for
                other purposes for which you have given your consent, except where otherwise
                provided by law. What do we use your information for? Any of the information we
                collect from you may be used in one of the following ways: To personalize your
                experience. (your information helps us to better respond to your individual needs)
                To match employers &job opportunities for you. (Once we received your application,
                we will make a full profile according to your CV and submit it to suitable clients)
                To improve our website. (we continually strive to improve our website offerings
                based on the information and feedback we receive from you) To improve customer
                service. (your information helps us to more effectively respond to your customer
                service requests and support needs) To send periodic emails. The email address you
                provide, may be used to send you information and updates your job application, in
                addition to receiving regular TopTutorJob career newsletter, updates, application
                feedback or service information, etc. (Note: If at any time you would like to
                unsubscribe from receiving future emails, we include detailed unsubscribe
                instructions at the bottom of each email.) To administer a contest, promotion,
                survey or other site feature. Choice and Opt-Out If you no longer wish to receive
                the TopTutorJob's email communications, you may "unsubscribe" of receiving them by
                following the instructions included in each communication or by e-mailing the
                TopTutorJob at
            </p>
        </el-dialog>
    </div>
</template>

<script>
import { ElMessage, genFileId } from 'element-plus'
import { registerApi } from '../request/api.js'

export default {
    name: 'Test',
    created() {},
    data() {
        return {
            policyVisible: false,
            form: {
                Email: '',
                Password: '',
                Password_confirmation: '',
                Name: '',
                Lastname: ''
            },
            file: '',
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
                    { required: true, message: 'Please enter your password', trigger: 'blur' },
                    {
                        min: 6,
                        message: 'Password length should be at least 6 characters',
                        trigger: 'blur'
                    }
                ],
                Password_confirmation: [
                    { required: true, message: 'Please re-enter your password', trigger: 'blur' },
                    { validator: this.validatePasswordConfirmation, trigger: 'blur' }
                ],
                Name: [
                    { required: true, message: 'Please enter your first name', trigger: 'blur' }
                ],
                Lastname: [
                    { required: true, message: 'Please enter your last name', trigger: 'blur' }
                ]
            }
        }
    },
    props: {},
    methods: {
        handleFileChange(files) {
            const newFile = files
            const validFormats = [
                'text/plain',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/pdf'
            ]
            const isTxt = validFormats.includes(newFile.type)
            const isTXT = newFile.name.toLowerCase().endsWith('.txt')
            const isDOC = newFile.name.toLowerCase().endsWith('.doc')
            const isDOCX = newFile.name.toLowerCase().endsWith('.docx')
            const isPDF = newFile.name.toLowerCase().endsWith('.pdf')

            if (!isTxt && !isTXT && !isDOC && !isDOCX && !isPDF) {
                this.$message.error('上传文件必须是 txt、TXT、doc、docx 或 pdf 类型！')
                this.$refs.upload.clearFiles()
                return false // 阻止上传
            }

            // 清空之前选择的文件
            this.file = ''
            // 设置新选择的文件
            this.file = newFile.raw
        },
        validatePasswordConfirmation(rule, value, callback) {
            if (value !== this.form.Password) {
                callback(new Error('The passwords do not match'))
            } else {
                callback()
            }
        },
        showPolicy() {
            this.policyVisible = true
        },
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    const formData = new FormData()
                    formData.append('email', this.form.Email)
                    formData.append('password', this.form.Password)
                    formData.append('password_confirmation', this.form.Password_confirmation)
                    formData.append('name', this.form.Name)
                    formData.append('lastname', this.form.Lastname)
                    if (this.file) {
                        formData.append('file', this.file)
                    }
                    let res = await registerApi(formData)
                    if (res.status && res.status == 1) {
                        ElMessage({
                            message: res.msg,
                            type: 'success'
                        })
                        this.$router.push('/logon')
                    }
                } else {
                    return false
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.upload {
    padding: 20px 20px;
}
.upload-demo {
    margin-top: 15px;
}
.register-form {
    width: 650px;
    margin: 10px auto;
    .form-header {
        text-align: center;
        color: #424242;
    }
    .el-form {
        margin: 40px;
    }
    :deep(.el-form-item__content) {
        div {
            background-color: #f7f7f7;
        }
    }
    .resume {
        :deep(.el-form-item__content) {
            display: flex;
            justify-content: center;
            background-color: #f7f7f7;
            border-radius: 5px;
        }
        .btn-upload {
            color: #a5a5a5;
            font-weight: 400;
            cursor: pointer;
            img {
                vertical-align: middle;
                width: auto;
                height: 16px;
                display: inline-block;
                margin-right: 10px;
            }
        }
    }
    .form-btn {
        :deep(.el-form-item__content) {
            justify-content: center;
        }
        .btn-register {
            width: 300px;
            height: 58px;
            display: inline-block;
            font-size: 16px;
            font-weight: bold;
            border-radius: 8px;
        }
    }
    .btn-policy {
        cursor: pointer;
        color: #ff9300;
    }
}
:deep(.el-dialog) {
    padding: 0;
    height: 600px;
    .el-dialog__header {
        padding-top: 20px;
        background-color: #efefef;
    }
    .policy-content {
        padding: 20px;
        width: 100%;
        height: 500px;
        overflow: scroll;
    }
}

@media (max-width: 1000px) {
    .register-form {
        width: 100%;
    }
}
</style>
