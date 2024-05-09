<template>
  <el-row class="text-primary" style="background-color: #f8f9fa">
    <el-col :span="20" :offset="2">
      <breadcrumb :breadcrumbs="breadcrumbs" />
      <el-row class="about-us" style="">
        <el-col :xs="24" :sm="12" :md="12">
          <div style="padding: 40px">
            <h1 class="about-title left-border">About Us</h1>
            <p>
              {{ aboutInfo.content }}
              <!--              We are a service organization dedicated to foreign personnel, and our management team-->
              <!--              consists of educators who have been deeply involved ir the international education-->
              <!--              field for many years. We are commited to providing one-on-one talent consultants for-->
              <!--              schools and enterprises to gai a deeper understandina of the school's culture and iob-->
              <!--              reauirements, This will enable us to stnictly monitor and closely communicate with-->
              <!--              schools and enterprises during the recommendation and intenview of candidates, teacher-->
              <!--              onboarding, and onboarding foow-up stages. Our service plat form includes the website-->
              <!--              www.cnjobs.vip and the WeChat public platform Information for Experiment. 276. nulated-->
            </p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12">
          <el-row class="number-container" :gutter="20" style="color: #ff9300">
            <el-col :xs="24" :sm="24" :md="12">
              <div class="card-noborder">
                <div>
                  <label class="big-number">
                    <count-to
                      :start-val="1900"
                      :end-val="aboutInfo.start_time"
                      :duration="5000"
                      separator=""
                    />
                  </label>
                  <span>year</span>
                </div>
                <div>The company founded on</div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12">
              <div class="card-noborder">
                <div>
                  <label class="big-number">
                    <count-to
                      :start-val="0"
                      :end-val="aboutInfo.service_num"
                      :duration="5000"
                      separator=""
                    />
                  </label>
                  <span>+</span>
                </div>
                <div>Accumulated customer service</div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12">
              <div class="card-noborder">
                <div>
                  <label class="big-number">
                    <count-to
                      :start-val="0"
                      :end-val="aboutInfo.success_rate"
                      :duration="5000"
                      separator=""
                    />
                  </label>
                  <span>%</span>
                </div>
                <div>Job success rate</div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12">
              <div class="card-noborder">
                <div>
                  <label class="big-number">
                    <count-to
                      :start-val="0"
                      :end-val="aboutInfo.friend_num"
                      :duration="5000"
                      separator=""
                    />
                  </label>
                  <span>family</span>
                </div>
                <div>Having partners</div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <el-row>
        <el-col :xs="24" :sm="8">
          <div style="margin: 40px">
            <div class="firm-info">
              <div class="icon-box">
                <img src="@/images/icon-telephone.png" />
              </div>
              <span class="icon-text">Phone</span>
              <label>{{ aboutInfo.phone }}</label>
              <!--              <label>18500391478</label>-->
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8">
          <div style="margin: 40px">
            <div class="firm-info">
              <div class="icon-box">
                <img src="@/images/icon-envelope.png" />
              </div>
              <span class="icon-text">Phone</span>
              <label>{{ aboutInfo.email }}</label>
              <!--              <label>MartinLee@bwlf-edu.com</label>-->
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8">
          <div style="margin: 40px">
            <div class="firm-info">
              <div class="icon-box">
                <img src="@/images/icon-map-position.png" />
              </div>
              <span class="icon-text">Phone</span>
              <label>{{ aboutInfo.address }}</label>
              <!--              <label>Haidian District, Beijing</label>-->
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import axios from 'axios'
export default {
  name: 'AboutUs',
  props: {},
  components: { Breadcrumb },
  created() {
    this.id = this.$route.params.id
    const formData = new FormData()
    formData.append('id', this.id)
    axios
      .post('http://192.168.0.45/aboutdetail', formData, {
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
          this.aboutInfo = response.data.data
          // alert(JSON.stringify(this.aboutInfo) )
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
        { url: '/about', name: 'About' }
      ],
      aboutInfo: []
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.about-us {
  background-image: url('@/images/bg-about-us.png');
  color: #4e5a77;
  padding: 50px 0;
}
.about-title {
  color: #2b3b61;
  font-size: 32px;
  padding-left: 20px;
}
.left-border {
  border-left: 5px solid #2b3b61;
}
.big-number {
  font-size: 50px;
  font-weight: bold;
}

.number-container {
  padding: 30px;
  .el-col {
    text-align: center;
    margin-bottom: 40px;
  }
  .card-noborder {
    min-height: 140px;
  }
}

.firm-info {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 30px;
  font-weight: bold;
  color: #030303;
  .icon-box {
    border: 1px solid #e1dfdf;
    border-radius: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    img {
      vertical-align: middle;
    }
  }
  .icon-text {
    color: #686868;
    font-size: 16px;
  }
}
</style>
