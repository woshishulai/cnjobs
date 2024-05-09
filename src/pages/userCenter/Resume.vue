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
        <el-input v-model="form.work_experience" type="textarea" placeholder="" rows="3"></el-input>
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
          <el-button @click="selectFile" class="btn-upload" style="">
            <img src="@/images/icon-upload-resume.png" />
            Upload
          </el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="Video" class="resume">
        <el-upload
          :action="''"
          :on-success="handleSuccess"
          :on-error="handleError"
          :before-upload="beforeUploadtwo"
          :http-request="uploadFile"
          :multiple="false"
          :limit="1"
          :show-file-list="false"
        >
          <el-button @click="selectFile" class="btn-upload" style="width: 150px; height: 100px">
            <div style="display: block">
              <img src="@/images/icon-video.png" style="width: 50px; height: 50px" />
              <div>Upload</div>
            </div>
          </el-button>
          <p style="color: #474747; font-size: 14px; padding-left: 20px; line-height: 24px">
            Video size does not exceed 100m, Time is 2 minutes, format is mp4
          </p>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('form')" size="large" class="btn-submit" style="width: 100%">
          CONFIRM
        </el-button>
      </el-form-item>
    </el-form>
  </user-center>
</template>

<script>
import UserCenter from './UserCenter.vue'
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
  name: 'MyResume',
  components: { UserCenter },
  created() {
    // let id=this.$route.query.id;
    if (typeof this.$route.query != 'undefined' && typeof this.$route.query.id != 'undefined') {
      let id = this.$route.query.id

      this.school_id = id
    }
    axios
      .post(
        'http://192.168.0.45/resumeget',
        {},
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
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
          // alert(JSON.stringify(response.data))
          this.form = response.data.data
          // this.resume_info=response.data.data;
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
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

          axios
            .post('http://192.168.0.45/resumeregisterlogin', formData, {
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
                // this.$router.push({
                //   name: 'Usercenter',
                //   query: {}
                // });
                // openMessage(response.data.msg);
                ElMessage({
                  message: response.data.msg,
                  type: 'success',
                  offset: window.screen.height / 3
                })
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
