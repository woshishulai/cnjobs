<template>
    <user-center active-menu="resume" max-width="">
        <el-form :model="form" ref="form" label-position="left" label-width="150px">
            <el-form-item label="Name:">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Contact information:">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="Education:">
                <el-input v-model="form.edu"></el-input>
            </el-form-item>
            <el-form-item label="Basic Information:">
                <el-input v-model="form.basic_information"></el-input>
            </el-form-item>
            <el-form-item label="Work experience:">
                <el-input
                    v-model="form.work_experience"
                    type="textarea"
                    placeholder=""
                    rows="3"
                ></el-input>
            </el-form-item>
            <el-form-item label="Resume" class="resume">
                <el-upload
                    ref="upload"
                    class="upload-demo"
                    :on-remove="handleRemove1"
                    :limit="1"
                    @change="handleFileChange"
                    :auto-upload="false"
                >
                    <template #trigger>
                        <el-button>
                            <el-icon style="color: #000" lass="el-icon--right"><Upload /></el-icon>
                            <span style="margin: 0 10px; color: #000"> Upload </span>
                        </el-button>
                        <p style="font-size: 14px; margin-left: 10px">
                            Last Format : doc/docx. pdf
                        </p>
                    </template>
                </el-upload>
            </el-form-item>
            <el-form-item label="Video" class="resume">
                <el-upload
                    ref="upload"
                    class="upload-demo"
                    :limit="1"
                    @change="handleFileChanges"
                    :auto-upload="false"
                    :on-remove="handleRemove"
                >
                    <el-button
                        @click="selectFile"
                        class="btn-upload"
                        style="width: 150px; height: 100px"
                    >
                        <div style="display: block">
                            <img src="@/images/icon-video.png" style="width: 50px; height: 50px" />
                            <div>Upload</div>
                        </div>
                    </el-button>
                    <p
                        style="
                            color: #474747;
                            font-size: 14px;
                            padding-left: 20px;
                            line-height: 24px;
                        "
                    >
                        Video size does not exceed 100m, Time is 2 minutes, format is mp4
                    </p>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button
                    @click="submitForm('form')"
                    size="large"
                    class="btn-submit"
                    style="width: 100%"
                >
                    CONFIRM
                </el-button>
            </el-form-item>
        </el-form>
    </user-center>
</template>

<script>
import UserCenter from './UserCenter.vue'
import { userInfoCenterApi, userInfoCenterChangeApi } from '@/request/api'
import { ElMessage } from 'element-plus'
import { ElLoading } from 'element-plus'
const openMessage = (message) => {
    ElMessage({
        message: message,
        type: 'info',
        offset: window.screen.height / 3
    })
}
export default {
    name: 'MyResume',
    components: { UserCenter },
    async created() {
        // let id=this.$route.query.id;
        if (typeof this.$route.query != 'undefined' && typeof this.$route.query.id != 'undefined') {
            let id = this.$route.query.id

            this.school_id = id
        }
        try {
            let response = await userInfoCenterApi()
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
            resumeForm: {
                basic_info: '',
                work_experience: ''
            },
            form: {
                name: '',
                phone: '',
                edu: '',
                basic_information: '',
                work_experience: ''
            },
            school_id: 0,
            resume: '',
            video: '',
            resume_info: []
        }
    },
    props: {},
    methods: {
        handleRemove1() {
            this.resume = ''
        },
        handleRemove() {
            this.video = ''
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
            this.resume = ''
            // 设置新选择的文件
            this.resume = newFile.raw
        },
        handleFileChanges(files) {
            const newFile = files
            const validFormats = [
                'video/mp4',
                'video/avi'
                // 其他视频格式
            ]
            const isVideo = validFormats.includes(newFile.raw.type)

            if (!isVideo) {
                this.$message.error('上传文件必须是 mp4、avi 或其他视频格式！')
                this.$refs.upload.clearFiles()
                return false // 阻止上传
            }

            // 清空之前选择的文件
            this.video = ''
            // 设置新选择的文件
            this.video = newFile.raw
        },

        // selectFile() {},
        uploadFile() {},
        beforeUpload(file) {
            // 在这里可以对文件进行一些预处理，比如检查文件类型、大小等
            this.resume = file
            return false // 返回 false 以阻止自动上传
        },
        beforeUploadtwo(file) {
            // 在这里可以对文件进行一些预处理，比如检查文件类型、大小等
            this.video = file
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
        async submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    try {
                        const formData = new FormData()
                        formData.append('name', this.form.name)
                        formData.append('edu', this.form.edu)
                        formData.append('basic_information', this.form.basic_information)
                        formData.append('work_experience', this.form.work_experience)
                        formData.append('phone', this.form.phone)
                        formData.append('school_id', this.school_id)
                        if (this.resume) {
                            formData.append('resume', this.resume)
                        }
                        if (this.video) {
                            formData.append('video', this.video)
                        }
                        const loading = ElLoading.service({
                            lock: true,
                            text: 'Loading',
                            background: 'rgba(0, 0, 0, 0.7)'
                        })
                        let response = await userInfoCenterChangeApi(formData)
                        console.log(response)
                        if (response.code == 0) {
                            ElMessage({
                                message: response.msg,
                                type: 'success',
                                offset: window.screen.height / 3
                            })
                            loading.close()
                        } else {
                            ElMessage({
                                message: response.msg,
                                offset: window.screen.height / 3
                            })
                            loading.close()
                        }
                    } catch (error) {
                        console.error('Form submission error:', error)
                        ElMessage({
                            message: 'Form submission failed',
                            type: 'error',
                            offset: window.screen.height / 3
                        })
                    }
                } else {
                    console.error('Form validation failed')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
:deep(.el-form-item) {
    div.el-input__wrapper,
    input,
    textarea {
        background-color: #f4f4f4;
    }
}
.btn-upload {
    color: #262626;
    font-weight: 400;
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
    img {
        vertical-align: middle;
        width: auto;
        height: 16px;
        display: inline-block;
        margin-right: 10px;
    }
}
</style>
