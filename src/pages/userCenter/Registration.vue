<template>
  <user-center active-menu="registration">
    <el-form :model="form" ref="form" class="block-form" label-width="160px" label-position="left">
      <el-form-item label="Email:">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="Re-enter Password:">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="First Name:">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Last Name:">
        <el-input v-model="form.surname" />
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
  created() {
    axios
      .post(
        'http://192.168.0.45/userinfo',
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
      form: {
        name: '',
        email: '',
        password: '',
        surname: ''
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const formData = new FormData()
          formData.append('name', this.form.name)
          formData.append('email', this.form.email)
          formData.append('lastname', this.form.surname)
          formData.append('password', this.form.password)
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
