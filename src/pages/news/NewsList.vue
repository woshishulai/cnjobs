<template>
  <el-row class="text-primary" style="background-color: #f8f9fa">
    <el-col :span="20" :offset="2">
      <breadcrumb :breadcrumbs="breadcrumbs" />
      <div class="news-btn-group">
        <el-button
          :class="{ active: isActive === 'all' }"
          @click="setActive('all')"
          round
          class="btn-gray"
          >All</el-button
        >
        <el-button
          :class="{ active: isActive === 'information' }"
          @click="setActive('information')"
          round
          class="btn-gray"
          >INFORMATION</el-button
        >
        <el-button
          :class="{ active: isActive === 'news' }"
          @click="setActive('news')"
          round
          class="btn-gray"
          >NEWS</el-button
        >
      </div>
      <el-row :gutter="20">
        <el-col v-for="(news, index) in newsList" :key="index" :xs="24" :sm="12" :md="8">
          <div class="news-card">
            <div class="news-card-cover">
              <img :src="news.cover" />
              <div class="news-img-cover"></div>
            </div>
            <div class="news-card-title">
              <div class="news-date">{{ news.date }}</div>
              <div class="news-title">{{ news.title }}</div>
              <div class="news-link">
                <router-link :to="'/news/' + news.id" class="btn-link">
                  MORE
                  <el-icon style="vertical-align: middle"><Right /></el-icon>
                </router-link>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <div style="padding-bottom: 40px">
        <el-pagination
          :total="totalnum"
          @current-change="handlePageChange"
          background
          layout="prev, pager, next"
          style=""
        />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb.vue'
import axios from 'axios'
export default {
  name: 'NewsList',
  components: { Breadcrumb },
  props: {},
  created() {
    this.fetchData()
  },
  data() {
    return {
      breadcrumbs: [
        { url: '/', name: 'Home' },
        { url: '/news', name: 'News' }
      ],
      newsList: [],
      totalnum: 0,
      isActive: 'all',

      newsList1: [
        {
          cover: '/images/school1.jpg',
          title:
            'Attention! High risk behaviors that may lead to the dismissal of foreign teachers',
          date: 'June 21, 2023'
        },
        {
          cover: '/images/school1.jpg',
          title:
            'Attention! High risk behaviors that may lead to the dismissal of foreign teachers',
          date: 'June 21, 2023'
        },
        {
          cover: '/images/school1.jpg',
          title:
            'Attention! High risk behaviors that may lead to the dismissal of foreign teachers',
          date: 'June 21, 2023'
        },
        {
          cover: '/images/school1.jpg',
          title:
            'Attention! High risk behaviors that may lead to the dismissal of foreign teachers',
          date: 'June 21, 2023'
        },
        {
          cover: '/images/school1.jpg',
          title:
            'Attention! High risk behaviors that may lead to the dismissal of foreign teachers',
          date: 'June 21, 2023'
        }
      ]
    }
  },
  methods: {
    async fetchData() {
      try {
        const formData = {
          page: this.currentPage,
          ntype: this.isActive
        }
        const response = await axios.post('http://192.168.0.45/newslist', formData)
        // 将返回的数据赋值给 data 属性
        // this.title = response.data.title;
        // alert(JSON.stringify(response.data))
        this.totalnum = response.data.totalnum
        this.newsList = response.data.data
      } catch (error) {
        // 处理请求错误
        // console.error(error);
      }
    },
    handlePageChange(newPage) {
      this.currentPage = newPage
      this.fetchData() // 发送请求获取数据
    },
    setActive(type) {
      // 更新 isActive 的值以匹配被点击的按钮类型
      this.isActive = type
      this.fetchData() // 发送请求获取数据
    }
  }
}
</script>

<style lang="scss" scoped>
.news-btn-group {
  margin: 20px;
  text-align: center;
  :deep(.el-button) {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.news-card {
  margin-bottom: 40px;
  position: relative;
  .news-card-cover {
    text-align: center;
    position: relative;
    img {
      width: 100%;
      max-width: 500px;
    }
    .news-img-cover {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      cursor: crosshair;
    }
  }

  .news-card-title {
    width: 80%;
    margin-left: 10%;
    margin-top: -20%;
    padding: 20px;
    display: inline-block;
    line-height: 30px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.12);
    background-color: #ffffff;
    border: none;
    border-radius: 3px;
    position: relative;
    cursor: crosshair;
    .news-date {
      color: #ff9300;
      font-size: 14px;
    }
    .news-title {
      font-weight: 400;
      font-size: 20px;
      color: #010101;
      margin: 10px 0;
    }
    .news-link {
      width: 110px;
      padding: 0 20px;
      border-radius: 20px;
      a {
        color: #474747;
      }
    }
  }

  &:hover {
    .news-img-cover {
      background-color: #000000;
      opacity: 0.3;
    }
    .news-card-title {
      background-color: #ff9300;
      * {
        color: #ffffff;
      }
      .news-link {
        * {
          color: #474747;
        }
        background-color: #ffffff;
      }
    }
  }
}
</style>
