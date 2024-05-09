<template>
    <div class="header">
        <img class="logo" @click="showHomePage" src="@/images/logo.jpg" />
        <div class="isyincang phone queshi">
            <el-button
                @click="() => $router.push({ path: '/register' })"
                icon=""
                round
                class="btn-primary"
            >
                <img
                    class="hidden-xs-only"
                    src="/public/login/register.png"
                    style="width: 15px; height: 16px; display: inline-block; margin-right: 10px"
                />
                Register</el-button
            >
            <el-button
                @click="() => $router.push({ path: '/logon' })"
                icon=""
                round
                class="btn-primary"
            >
                <img
                    class="hidden-xs-only"
                    src="@/images/icon-logon.png"
                    style="width: 15px; height: 16px; display: inline-block; margin-right: 10px"
                />
                Logon</el-button
            >
        </div>

        <div style="display: none" class="isxianshi phone xomdeua">
            <table>
                <tr>
                    <td style="padding-right: 10px">
                        <div @click="gouser">{{ user_info.email }}</div>
                    </td>
                    <td>
                        <div
                            @click="logout"
                            style="
                                width: 70px;
                                height: 30px;
                                border-radius: 20px;
                                background: red;
                                text-align: center;
                                line-height: 30px;
                                color: white;
                            "
                        >
                            logout
                        </div>
                    </td>
                </tr>
            </table>
            <!--      <el-col   :xs="14" :sm="8" :md="6" style="width:300px;">-->
            <!--        <span class="username">{{ user_info.name }}&nbsp;&nbsp;</span>-->
            <!--        <el-button @click="logout" icon="" round class="btn-primary" style="display: inline-block">-->
            <!--          <img-->
            <!--                  class="hidden-xs-only"-->
            <!--                  src="@/images/icon-logon.png"-->
            <!--                  style="width: 15px; height: 16px; display: inline-block; margin-right: 10px"-->
            <!--          />-->
            <!--          Logout</el-button-->
            <!--        >-->
            <!--      </el-col>-->
        </div>
        <div class="menu">
            <div
                class="nav-item"
                v-bind:class="this.$route.path == item.path ? 'is-active' : ''"
                v-for="(item, index) in list"
                :key="index"
                @click="this.$router.push(item.path)"
            >
                {{ item.text }}
            </div>
        </div>
        <div class="isyincang pc zheli">
            <el-button
                @click="() => $router.push({ path: '/register' })"
                icon=""
                round
                class="btn-primary"
            >
                <img
                    class="hidden-xs-only"
                    src="/public/login/register.png"
                    style="width: 15px; height: 16px; display: inline-block; margin-right: 10px"
                />
                Register</el-button
            >
            <el-button
                @click="() => $router.push({ path: '/logon' })"
                icon=""
                round
                class="btn-primary"
            >
                <img
                    class="hidden-xs-only"
                    src="@/images/icon-logon.png"
                    style="width: 15px; height: 16px; display: inline-block; margin-right: 10px"
                />
                Logon</el-button
            >
        </div>

        <div style="display: none" class="isxianshi pc xinde">
            <table>
                <tr>
                    <td style="padding-right: 10px">
                        <div @click="gouser">{{ user_info.email }}</div>
                    </td>
                    <td>
                        <div
                            @click="logout"
                            style="
                                width: 70px;
                                height: 30px;
                                border-radius: 20px;
                                background: red;
                                text-align: center;
                                line-height: 30px;
                                color: white;
                            "
                        >
                            logout
                        </div>
                    </td>
                </tr>
            </table>
            <!--      <el-col   :xs="14" :sm="8" :md="6" style="width:300px;">-->
            <!--        <span class="username">{{ user_info.name }}&nbsp;&nbsp;</span>-->
            <!--        <el-button @click="logout" icon="" round class="btn-primary" style="display: inline-block">-->
            <!--          <img-->
            <!--                  class="hidden-xs-only"-->
            <!--                  src="@/images/icon-logon.png"-->
            <!--                  style="width: 15px; height: 16px; display: inline-block; margin-right: 10px"-->
            <!--          />-->
            <!--          Logout</el-button-->
            <!--        >-->
            <!--      </el-col>-->
        </div>
    </div>
</template>

<script>
import { getUserInfoApi, removeUserInfo } from '../request/api'

export default {
    name: 'Header',
    async created() {
        console.log(this.$route.path)
        let res = await getUserInfoApi()
        if (res.code == 1) {
            this.isLoggedIn = false
            this.$router.push('/logon')
        } else {
            this.isLoggedIn = true
            this.user_info = res.data
            console.log(this.user_info)
            document.querySelector('.isyincang').style.display = 'none'
            document.querySelector('.queshi').style.display = 'none'
            document.querySelector('.zheli').style.display = 'none'
            document.querySelector('.xinde').style.display = ''
            document.querySelector('.xomdeua').style.display = ''
            // document.querySelector('.username').innerHTML = this.user_info.email
        }
        return
        // axios
        //     .post(
        //         'http://192.168.0.45/userinfo',
        //         {},
        //         {
        //             headers: {
        //                 'Content-Type': 'multipart/form-data'
        //             }
        //         }
        //     )
        //     .then((response) => {
        //         // 处理服务器响应
        //         if (
        //             typeof response.data != 'undefined' &&
        //             response.data.code == 1 &&
        //             typeof response.data.msg != 'undefined'
        //         ) {
        //             // openMessage(response.data.msg);
        //             this.isLoggedIn = false
        //         } else {
        //             this.isLoggedIn = true

        //             this.user_info = response.data.data
        //             document.querySelector('.isyincang').style.display = 'none'
        //             document.querySelector('.isxianshi').style.display = ''
        //             // alert(response.data.data.name)
        //             document.querySelector('.username').innerHTML = response.data.data.name
        //             // this.resume_info=response.data.data;
        //         }

        //         // 根据需要更新UI或执行其他操作
        //     })
        //     .catch((error) => {
        //         // 处理错误
        //         console.error(error)
        //     })

        //获取用户状态
    },
    data() {
        return {
            activeIndex: '1',
            isLoggedIn: false,
            user_info: {
                name: '用户名'
            },
            list: [
                {
                    text: 'Home',
                    path: '/'
                },
                {
                    text: 'Jobs',
                    path: '/jobs'
                },
                {
                    text: 'Schools',
                    path: '/schools'
                },
                {
                    text: 'News',
                    path: '/news'
                },

                {
                    text: 'Download',
                    path: '/downloads'
                },
                {
                    text: 'About Us',
                    path: '/about'
                }
            ]
        }
    },
    props: {},
    methods: {
        showHomePage() {
            this.$router.push('/')
        },
        selectMenu() {
            //@todo switch page
        },
        handleChildEvent(dataFromChild) {
            // 处理从子组件传递过来的数据
            // console.log(dataFromChild); // 输出：这是从子组件传递的数据
        },
        gouser() {
            this.$router.push('/user_center')
        },

        async logout() {
            let res = await removeUserInfo()
            if (
                typeof res.data != 'undefined' &&
                res.data.code == 1 &&
                typeof res.data.msg != 'undefined'
            ) {
                // openMessage(res.data.msg);
                this.isLoggedIn = false
            } else {
                // alert(JSON.stringify(res.data))
                // this.user_info=res.data.data;
                this.isLoggedIn = false
                document.querySelector('.isyincang').style.display = ''
                document.querySelector('.isxianshi').style.display = 'none'
                // document.querySelector('.username').innerHTML=res.data.info.name+'&nbsp;&nbsp;';
                // this.resume_info=res.data.data;
            }
            return
            axios
            // .post(
            //     'http://192.168.0.45/userlogout',
            //     {},
            //     {
            //         headers: {
            //             'Content-Type': 'multipart/form-data'
            //         }
            //     }
            // )
            // .then((response) => {
            //     // 处理服务器响应
            //     if (
            //         typeof response.data != 'undefined' &&
            //         response.data.code == 1 &&
            //         typeof response.data.msg != 'undefined'
            //     ) {
            //         // openMessage(response.data.msg);
            //         this.isLoggedIn = false
            //     } else {
            //         // alert(JSON.stringify(response.data))
            //         // this.user_info=response.data.data;
            //         this.isLoggedIn = false
            //         document.querySelector('.isyincang').style.display = ''
            //         document.querySelector('.isxianshi').style.display = 'none'
            //         // document.querySelector('.username').innerHTML=response.data.info.name+'&nbsp;&nbsp;';
            //         // this.resume_info=response.data.data;
            //     }

            //     // 根据需要更新UI或执行其他操作
            // })
            // .catch((error) => {
            //     // 处理错误
            //     console.error(error)
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1300px;
    height: 112px;
    margin: 0 auto;
    .phone {
        display: none;
    }
    @media (max-width: 1041px) {
        width: 100%;
        flex-wrap: wrap;
        padding: 10px 16px;
        max-width: auto;
        .pc {
            display: none;
        }
        .phone {
            display: block;
        }
    }
    @media (max-width: 1041px) {
        gap: 0 30px;
        justify-content: center;
    }
    @media (max-width: 500px) {
        .logo {
            height: 40px;
            width: auto;
        }
    }
    .menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 535px;
        height: 14px;
        font-family: Arial;
        font-weight: 400;
        font-size: 16px;
        .nav-item {
            position: relative;
            cursor: pointer;
            &.is-active,
            &:hover {
                color: #ff9300;
                &::after {
                    display: block;
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 30px;
                    height: 3px;
                    background: #ff9300;
                    border-radius: 1px;
                }
            }
        }
    }
}

.isxianshi {
    cursor: pointer;
}
.logo {
    width: 100%;
    max-width: 210px;
    height: auto;
    cursor: pointer;
}
.el-menu--horizontal.el-menu {
    border-bottom: 0;
}

.el-menu-item {
    color: #1f2f57;
    font-size: 16px;
    font-weight: 400;
    border-bottom: solid #ffffff 2px;
}
.el-menu--horizontal li.el-menu-item:hover,
.el-menu--horizontal li.el-menu-item.is-active {
    color: #ff9300 !important;
    font-size: 16px;
    font-weight: 400;
    border-bottom: solid #ff9300 2px;
    background-color: #ffffff;
}

:deep(.el-sub-menu.is-active .el-sub-menu__title) {
    border-color: #ff9300;
    color: #ff9300;
}
:deep(.el-sub-menu:hover) {
    * {
        color: #ff9300;
    }
}
</style>
