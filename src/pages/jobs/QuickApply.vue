<template>
    <div v-if="showPage" class="apply-form" style="">
        <div class="form-header">
            <h1 style="">Quick Apply</h1>
            <div>
                <span> Already have account? </span>
                <a href="/index.html#/logon">Sign in</a>
            </div>
        </div>
        <div>
            <el-form :model="form" ref="form" label-position="top">
                <el-form-item label="First Name">
                    <el-input size="large" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Last Name">
                    <el-input size="large" v-model="form.lastname"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input size="large" v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="Resume" class="resume">
                    <el-upload
                        :action="''"
                        :on-success="handleSuccess"
                        :on-error="handleError"
                        :before-upload="beforeUpload"
                        :http-request="uploadFile"
                        :multiple="false"
                        :limit="1"
                        :show-file-list="false"
                    >
                        <span @click="selectFile" class="btn-upload" style="">
                            <img src="@/images/icon-upload.png" />
                            click to upload
                        </span>
                    </el-upload>
                </el-form-item>
                <div>
                    <p>
                        Please upload a doc, docx, pdf or txt file and the file size should be no
                        larger than 4M.
                    </p>
                    <p>
                        *Please make sure your CV contains a valid email address (in a text format,
                        not in picture.)
                    </p>
                </div>
                <el-form-item>
                    <el-button
                        @click="submitForm('form')"
                        size="large"
                        class="btn-yellow"
                        style="width: 100%"
                    >
                        submit</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { ElMessage } from 'element-plus'

const openMessage = (message) => {
    ElMessage({
        message: message,
        type: 'info',
        offset: window.screen.height / 3
    })
}

export default {
    name: 'QuickApply',
    created() {},
    data() {
        return {
            showPage: true,
            policyVisible: false,
            form: {
                email: '',
                password: '',
                password_confirmation: '',
                name: '',
                lastname: ''
            },
            file: ''
        }
    },
    props: {
        // 定义你想接收的参数
        jobid: {
            type: String, // 或者其他类型，如 Number, Boolean, Array, Object 等
            required: true // 如果这个 prop 是必须的
        }
    },
    methods: {
        selectFile(e) {
            console.log(e)
        },
        uploadFile() {},
        beforeUpload(file) {
            // 在这里可以对文件进行一些预处理，比如检查文件类型、大小等
            this.file = file
            return false // 返回 false 以阻止自动上传
        },
        handleSuccess(response, file, fileList) {
            // 上传成功时的回调函数
            // console.log('Upload success:', response);
            // 可以在这里做一些其他的操作，比如清空文件输入框等
        },
        handleError(err, file, fileList) {
            // 上传失败时的回调函数
            // console.error('Upload error:', err);
            // 可以在这里做一些其他的操作，比如显示错误信息等
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const formData = new FormData()

                    // let jobid=document.querySelector('.hidejobid').value;

                    formData.append('email', this.form.email)
                    formData.append('name', this.form.name)
                    if (document.querySelectorAll('.hidejobid').length > 0) {
                        formData.append('jobid', document.querySelector('.hidejobid').value)
                    }
                    formData.append('lastname', this.form.lastname)
                    if (this.file) {
                        formData.append('file', this.file)
                    }
                    axios
                        .post('http://192.168.0.45/resumeregisterjob', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then((response) => {
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
                                var elements = document.querySelectorAll(
                                    '.el-dialog__body .el-icon'
                                )
                                var firstElement = elements[0]
                                firstElement.click()
                                this.$emit('close')
                                // this.$router.push({
                                //   name: 'Index',
                                //   query: {}
                                // });
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
.apply-form {
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
    h1 {
        margin: 0 0 10px;
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
}
</style>
