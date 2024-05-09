<template>
  <el-row class="text-primary" style="background-color: #f8f9fa">
    <el-col :span="20" :offset="2">
      <breadcrumb :breadcrumbs="breadcrumbs" />
      <el-row>
        <el-col :xs="24" :sm="16" :md="18">
          <div class="news-detail card-noborder">
            <div class="news-title">{{ newsInfo.title }}</div>
            <div class="news-sub-title">
              <span>{{ newsInfo.date }}</span>
              <span> | </span>
              <span>{{ newsInfo.author }}</span>
              <span class="news-view-data">
                <el-icon><View /></el-icon>
                <span>{{ newsInfo.see_num }}</span>
              </span>
            </div>
            <div class="news-cover">
              <img :src="newsInfo.cover" />
            </div>
            <div class="news-content">
              {{ newsInfo.content }}
            </div>
          </div>
        </el-col>
        <el-col hidden-xs-only :xs="24" :sm="8" :md="6">
          <div class="news-list card-noborder">
            <div class="">Recent Updates</div>
            <div v-for="(news, index) in recentNews" :key="index" class="news-list-item">
              <div><img :src="news.cover" style="" /></div>
              <div>
                <label style=""> {{ news.title }} </label>
              </div>
            </div>
            <div class="link">
              <router-link to="/news">See more</router-link>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb.vue'
import axios from 'axios'
export default {
  name: 'NewsDetail',
  props: {},
  components: { Breadcrumb },
  created() {
    this.id = this.$route.params.id
    const formData = new FormData()
    formData.append('id', this.id)
    axios
      .post('http://192.168.0.45/newsdetail', formData, {
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
        } else {
          this.newsInfo = response.data.data
          this.recentNews = response.data.sdata
        }
      })
      .catch((error) => {
        // 处理错误
        // console.error(error);
      })
  },
  data() {
    return {
      breadcrumbs: [
        { url: '/', name: 'Home' },
        { url: '/news', name: 'News' },
        { url: null, name: 'news title' }
      ],
      newsInfo: [],
      recentNews: []
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.news-detail {
  padding: 40px;
  margin-bottom: 40px;
  .news-title {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    padding: 10px 20px;
  }
  .news-sub-title {
    text-align: center;
    color: #727272;
    padding: 0 20px 40px 0;
  }
  .news-view-data {
    display: inline-block;
    float: right;
  }
  .news-cover {
    img {
      width: 100%;
      height: auto;
    }
  }
  .news-content {
    padding: 20px 0;
  }
}
.news-list {
  padding: 20px;
  margin-bottom: 40px;
  .news-list-item {
    margin: 20px 0;
    padding-bottom: 20px;
    border-bottom: 1px dotted #d3d3d3;
    div {
      display: inline-block;
    }
    div:nth-child(1) {
      width: 100px;
    }
    div:nth-child(2) {
      width: 50%;
      padding: 0 10px;
      vertical-align: middle;
    }
    img {
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
    label {
      vertical-align: middle;
      word-break: break-all;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .link {
    text-align: center;
    a {
      text-decoration: underline;
    }
  }
}
</style>
