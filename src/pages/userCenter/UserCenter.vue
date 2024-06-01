<template>
    <div class="wrap">
        <el-row style="background-color: #f8f9fa; padding: 40px">
            <el-col :xs="24" :sm="20" :md="20" :offset="2">
                <div class="user-center cnjob-card" :style="{ maxWidth: maxWidth }">
                    <el-row>
                        <el-col :span="8">
                            <div class="left-nav">
                                <div class="left-header">
                                    <div>
                                        <img src="/images/icon-user-cneter.png" />
                                    </div>
                                    <div class="member">
                                        <label>MEMBER</label>
                                    </div>
                                </div>
                                <div class="left-nav-items">
                                    <el-menu :default-active="activeMenu" class="">
                                        <el-menu-item index="registration">
                                            <div class="round-item">
                                                <router-link to="/user_center/info">
                                                    <span class="nav-icon nav-icon-regist"></span>
                                                    <span class="">Registration information</span>
                                                </router-link>
                                            </div>
                                        </el-menu-item>
                                        <!--                  <el-menu-item index="password">-->
                                        <!--                    <div class="round-item">-->
                                        <!--                      <router-link to="/user_center/password">-->
                                        <!--                        <span class="nav-icon nav-icon-password"></span>-->
                                        <!--                        <span> Password Management </span>-->
                                        <!--                      </router-link>-->
                                        <!--                    </div>-->
                                        <!--                  </el-menu-item>-->
                                        <el-menu-item index="password">
                                            <div class="round-item">
                                                <router-link to="/user_center/password">
                                                    <span class="nav-icon nav-icon-password"></span>
                                                    <span> Password management </span>
                                                </router-link>
                                            </div>
                                        </el-menu-item>
                                        <el-menu-item index="resume">
                                            <div class="round-item">
                                                <router-link to="/user_center/resume">
                                                    <span class="nav-icon nav-icon-resume"></span>
                                                    <span> Resume management </span>
                                                </router-link>
                                            </div>
                                        </el-menu-item>
                                        <el-menu-item index="apply">
                                            <div class="round-item">
                                                <router-link to="/user_center/application">
                                                    <span class="nav-icon nav-icon-apply"></span>
                                                    <span> Apply for postion </span>
                                                </router-link>
                                            </div>
                                        </el-menu-item>
                                    </el-menu>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="block" style="padding-bottom: 136px">
                                <div class="block-header">
                                    <div class="block-icon">
                                        <img :src="iconBadge" />
                                    </div>
                                    <div class="block-title">{{ title }}</div>
                                </div>
                                <div class="block-body">
                                    <el-row>
                                        <el-col :xs="24" :sm="24" :md="20">
                                            <slot></slot>
                                        </el-col>
                                        <el-col :xs="0" :sm="2" :md="4"> </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'UserCenter',
    props: {
        activeMenu: [String],
        maxWidth: [String]
    },
    created() {},
    data() {
        return {}
    },
    computed: {
        title() {
            const titleList = {
                registration: 'Registration information',
                password: 'Password management',
                resume: 'Resume Management',
                apply: 'Apply for postion'
            }

            if (!this.activeMenu || !titleList[this.activeMenu]) {
                return 'Member'
            }

            return titleList[this.activeMenu]
        },
        iconBadge() {
            const iconList = {
                registration: '/images/badge-userinfo.png',
                password: '/images/badge-password.png',
                resume: '/images/badge-resume.png',
                apply: '/images/badge-apply.png'
            }
            if (!this.activeMenu || !iconList[this.activeMenu]) {
                return '/images/badge-userinfo.png'
            }

            return iconList[this.activeMenu]
        }
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.wrap {
    margin-top: 112px;
}
.user-center {
    margin: 0 auto;
    background-color: #ff9300;
    border-radius: 27px;
    .left-nav {
        color: #ffffff;
        padding: 40px 0;
        .left-header {
            text-align: center;
            margin: 0 30px;
            .member {
                color: #ffffff;
                font-weight: 400;
                font-size: 16px;
                margin-bottom: -11px;
                position: relative;
                label {
                    background-color: #ff9300;
                    position: relative;
                    z-index: 999;
                    padding: 0 10px;
                }
            }
            border-bottom: 2px solid #ffffff;
        }
        .left-nav-items {
            padding: 30px 0;
            .el-menu-item {
                color: #ffffff;
                background-color: #ff9300;
                a {
                    display: block;
                    width: 100%;
                    color: #ffffff;
                    &:hover {
                        color: #1f2f57;
                        .nav-icon-regist {
                            background-image: url(/images/icon-userinfo-black.png);
                        }
                        .nav-icon-password {
                            background-image: url(/images/icon-password-black.png);
                        }
                        .nav-icon-resume {
                            background-image: url(/images/icon-resume-black.png);
                        }
                        .nav-icon-apply {
                            background-image: url(/images/icon-apply-black.png);
                        }
                    }
                    .nav-icon {
                        display: inline-block;
                        margin-right: 10px;
                        width: 18px;
                        height: 18px;
                        background-size: 100%;
                        text-align: center;
                        vertical-align: middle;
                    }
                    .nav-icon-regist {
                        background-image: url(/images/icon-userinfo-white.png);
                    }
                    .nav-icon-password {
                        background-image: url(/images/icon-password-white.png);
                    }
                    .nav-icon-resume {
                        background-image: url(/images/icon-resume-white.png);
                    }
                    .nav-icon-apply {
                        background-image: url(/images/icon-apply-white.png);
                    }
                }
            }

            .round-item {
                padding-left: 10px;
                width: 100%;
                border-radius: 8px;
            }

            .el-menu-item.is-active {
                color: #1f2f57;
                .round-item {
                    background-color: #ffffff;
                }
                a {
                    color: #1f2f57;
                    .nav-icon-regist {
                        background-image: url(/images/icon-userinfo-black.png);
                    }
                    .nav-icon-password {
                        background-image: url(/images/icon-password-black.png);
                    }
                    .nav-icon-resume {
                        background-image: url(/images/icon-resume-black.png);
                    }
                    .nav-icon-apply {
                        background-image: url(/images/icon-apply-black.png);
                    }
                }
            }
        }
    }
    .btn-submit {
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
        line-height: 36px;
        width: 330px;
        height: 60px;
        background: #474747;
        border-radius: 8px;
    }
}
.block {
    border-radius: 25px;
    background-color: #ffffff;
    padding: 40px;
    width: 100%;
    height: 100%;
    .block-header {
        text-align: center;
        font-size: 24px;
        .block-icon {
        }
        .block-title {
            font-weight: 400;
            font-size: 24px;
            color: #1f2f57;
            line-height: 36px;
            padding-bottom: 20px;

            border-bottom: 1px solid #dcdfe6;
        }
    }
    .block-body {
        padding-top: 40px;
    }
    .block-form {
        margin: 20px;
    }
}
.block-form {
    .el-form-item {
        input {
            width: 330px;
        }
    }
}
</style>
