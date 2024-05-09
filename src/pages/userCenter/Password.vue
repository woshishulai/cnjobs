<template>
  <user-center active-menu="password">
    <el-form :model="form" ref="form" class="block-form" label-width="160px" label-position="left">
      <el-form-item label="Old password:">
        <el-input v-model="form.old_password" />
      </el-form-item>
      <el-form-item label="New password:">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="Confirm new password:">
        <el-input v-model="form.new_password" />
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
      }
    }
  },
  props: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const formData = new FormData()
          formData.append('password', this.form.password)
          formData.append('old_password', this.form.old_password)
          formData.append('new_password', this.form.new_password)

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
.el-form-item {
  input {
    width: 330px;
  }
}
</style>
