<template>
  <div class="job-list">
    <div class="cnjob-card">
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
            <img class="job-location" src="@/images/icon-position.png" />
            <span class="job-city">{{ job.city }}</span>
            <span class="job-province">{{ job.province }}</span>
          </div>
          <div>
            <img class="job-watch" src="@/images/icon-watch.png" />
            <span class="job-date">Start in {{ job.startDate }}</span>
          </div>
        </div>
        <div class="job-body-right">
          <div>{{ job.position }} position available</div>
          <div>{{ job.salary }}</div>
          <router-link class="btn-apply" :to="'/jobs/1'">
            <el-icon style="color: #ff0000"><CircleCheckFilled /></el-icon>
            <span style="padding-left: 10px">Apply</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    job: [Object],
    applied: [Boolean]
  },
  created() {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
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
        display: inline-block;
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
