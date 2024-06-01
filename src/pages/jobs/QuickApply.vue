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
            <el-form :model="form" ref="form" label-position="top" :rules="rules">
                <el-form-item label="First Name" prop="name">
                    <el-input size="large" style="height: 49px" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Last Name" prop="lastname">
                    <el-input size="large" style="height: 49px" v-model="form.lastname"></el-input>
                </el-form-item>
                <el-form-item label="Email" prop="email">
                    <el-input size="large" style="height: 49px" v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="Resume" class="resume">
                    <el-upload
                        ref="upload"
                        class="upload-demo"
                        :limit="1"
                        @change="handleFileChange"
                        :auto-upload="false"
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
                        style="height: 49px; width: 100%"
                        class="btn-yellow"
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
import { resumeregisterjobApi } from '@/request/api'

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
            file: '',
            rules: {
                email: [
                    { required: true, message: 'Please enter your email address', trigger: 'blur' },
                    {
                        type: 'email',
                        message: 'Please enter a valid email address',
                        trigger: ['blur', 'change']
                    }
                ],
                name: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
                lastname: [
                    { required: true, message: 'Please enter your password', trigger: 'blur' }
                ]
            }
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
        handleRemove1() {
            this.file = ''
        },
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
            this.$refs[formName].validate(async (valid) => {
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
                    let response = await resumeregisterjobApi(formData)

                    if (response.code == 0) {
                        var elements = document.querySelectorAll('.el-dialog__body .el-icon')
                        var firstElement = elements[0]
                        firstElement.click()
                        this.$emit('close')
                    } else {
                        ElMessage({
                            message: response.msg,
                            offset: window.screen.height / 3
                        })
                    }
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
            // background-color: #f7f7f7;
            border-radius: 5px;
        }
        .upload-demo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            height: 49px;
            width: 100%;
        }
        .btn-upload {
            width: 100%;
            display: block;
            color: #a5a5a5;
            background-color: #f7f7f7;
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
