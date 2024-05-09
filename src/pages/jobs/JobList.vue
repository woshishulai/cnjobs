<template>
  <el-row class="text-primary" style="background-color: #f8f9fa">
    <el-col :span="20" :offset="2">
      <el-breadcrumb separator="/" class="breadcrumb" style="padding: 20px 0">
        <el-breadcrumb-item :to="{ path: '/' }"> Home</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/jobs' }"> Jobs</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row :gutter="20">
        <el-col :xs="24" :span="6" style="margin-bottom: 40px">
          <el-card shadow="always">
            <div class="text-primary" style="font-size: 30px; color: #010101; margin-bottom: 20px">
              Search
            </div>
            <el-form :model="form" ref="form" class="search-form">
              <el-form-item>
                <el-input v-model="form.Name" placeholder="try math, physics..."></el-input>
              </el-form-item>
              <el-form-item>
                <el-select v-model="form.Province" placeholder="All Province">
                  <el-option
                    v-for="item in school_locations"
                    :key="item.id"
                    :label="item.province"
                    :value="item.id"
                  ></el-option>
                  <!--                                    <el-option value="beijing">北京</el-option>-->
                  <!--                                    <el-option value="hebei">河北省</el-option>-->
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-date-picker
                  v-model="form.Date"
                  placeholder="Start Date"
                  type="datetime"
                  value-format="YYYY-MM-DD HH:mm:ss"
                >
                </el-date-picker>
              </el-form-item>

              <div class="text-center">
                <el-button
                  @click="submitForm('form')"
                  class="btn-yellow"
                  style="font-size: 16px; width: 100%; border-radius: 8px"
                  size="large"
                >
                  <el-icon style="margin-right: 10px">
                    <Search />
                  </el-icon>
                  SEARCH
                </el-button>
              </div>
            </el-form>
          </el-card>
        </el-col>
        <el-col class="job-list" :xs="24" :span="18">
          <div v-for="(job, index) in jobs" :key="index" class="cnjob-card">
            <div class="job-title">
              <img :src="job.logo" class="job-logo" />
              <span class="job-name">{{ job.name }}</span>
              <span> | </span>
              <span class="job-no">
                {{ job.no }}
              </span>
            </div>
            <div class="job-body">
              <div class="job-body-left">
                <div>
                  <img class="job-location" src="/images/icon-position.png" />
                  <span class="job-city">{{ job.city }}</span>
                  <span class="job-province">{{ job.province }}</span>
                </div>
                <div>
                  <img class="job-watch" src="/images/icon-watch.png" />
                  <span class="job-date">Start in {{ job.startDate }}</span>
                </div>
              </div>
              <div class="job-body-right">
                <div>{{ job.position }} position available</div>
                <div>{{ job.salary }}</div>
                <router-link class="btn-apply" :to="'/jobs/' + job.id"> Apply</router-link>
              </div>
            </div>
          </div>
          <div style="padding-bottom: 40px">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalnum"
              @current-change="handlePageChange"
              style=""
            />
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'JobList',
  created() {
    console.log(this.form.Date)
    // 在组件创建时发送请求并赋值给 data 属性
    this.fetchData()
  },
  data() {
    return {
      jobs: [],
      totalnum: 0,
      currentPage: 1, // 当前页数
      school_locations: [],
      jobs1: [
        {
          logo: '/images/school_logo.jpeg',
          province: 'Hunan',
          city: 'Changsha',
          startDate: 'Aug, 2024',
          position: 1,
          salary: '¥20-25k/RMB after tax',
          name: 'High School Art Teacher',
          no: 'MC1200'
        },
        {
          logo: '/images/school_logo.jpeg',
          province: 'Hunan',
          city: 'Changsha',
          startDate: 'Aug, 2024',
          position: 1,
          salary: '¥20-25k/RMB after tax',
          name: 'High School Art Teacher',
          no: 'MC1200'
        },
        {
          logo: '/images/school_logo.jpeg',
          province: 'Hunan',
          city: 'Changsha',
          startDate: 'Aug, 2024',
          position: 1,
          salary: '¥20-25k/RMB after tax',
          name: 'High School Art Teacher',
          no: 'MC1200'
        },
        {
          logo: '/images/school_logo.jpeg',
          province: 'Hunan',
          city: 'Changsha',
          startDate: 'Aug, 2024',
          position: 1,
          salary: '¥20-25k/RMB after tax',
          name: 'High School Art Teacher',
          no: 'MC1200'
        },
        {
          logo: '/images/school_logo.jpeg',
          province: 'Hunan',
          city: 'Changsha',
          startDate: 'Aug, 2024',
          position: 1,
          salary: '¥20-25k/RMB after tax',
          name: 'High School Art Teacher',
          no: 'MC1200'
        }
      ],
      form: {
        Name: '',
        Date: '',
        Province: ''
      }
    }
  },
  props: {},
  methods: {
    // 处理页数变化事件
    handlePageChange(newPage) {
      this.currentPage = newPage
      this.fetchData() // 发送请求获取数据
    },
    async fetchData() {
      try {
        const formData = {
          page: this.currentPage
        }
        const response = await axios.post('http://192.168.0.45/jobslist', formData)
        // 将返回的数据赋值给 data 属性
        // this.title = response.data.title;
        // alert(JSON.stringify(response.data))
        this.totalnum = response.data.totalnum
        this.jobs = response.data.data
        this.school_locations = response.data.school_locations
        // this.description = response.data.description;
      } catch (error) {
        // 处理请求错误
        console.error(error)
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const formData = new FormData()
          formData.append('name', this.form.Name)
          formData.append('date', this.form.Date)
          formData.append('province', this.form.Province)

          // alert(this.form.Date)
          this.currentPage = 1
          axios
            .post('http://192.168.0.45/jobslist', formData)
            .then((response) => {
              // 处理服务器响应
              if (
                typeof response.data != 'undefined' &&
                response.data.code == 1 &&
                typeof response.data.msg != 'undefined'
              ) {
              } else {
                this.totalnum = response.data.totalnum
                this.jobs = response.data.data
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
:deep(.el-breadcrumb) {
  font-size: 16px;
  font-weight: bold;

  .el-breadcrumb__inner.is-link {
    color: #81818f;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    font-weight: bold;
    color: #1f2f57;
  }
}

.search-form {
  :deep(.el-form-item) {
    div,
    input,
    select {
      background-color: #eff1f3;
    }
  }
}

.job-list {
  .cnjob-card {
    margin-bottom: 30px;
  }

  .job-title {
    padding: 20px 0 20px 20px;
    border-bottom: 1px solid #f6f7f8;
    color: #1f2f57;
    font-size: 18px;
    font-weight: 400;
    line-height: 34px;

    * {
      vertical-align: middle;
    }

    .job-logo {
      width: 34px;
      height: 34px;
    }

    .job-name {
      padding: 0 10px;
    }

    .job-no {
      padding: 0 10px;
      color: #7f7f7f;
    }
  }

  .job-body {
    * {
      vertical-align: middle;
    }

    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .job-body-left {
      padding: 10px;
      color: #474747;
      line-height: 40px;

      img {
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 10px;
      }
    }

    .job-body-right {
      padding: 10px;
      color: #265fbe;
      line-height: 40px;
      text-align: center;

      .btn-apply {
        margin-top: 10px;
        border-radius: 8px;
        width: 130px;
        height: 44px;
        display: inline-flex;
        justify-content: center;
        color: #1f2f57;
        background-color: #e1eef5;

        &:hover {
          color: #ffffff;
          border-color: #ff9300;
          background-color: #ff9300;
        }
      }
    }
  }
}
</style>
