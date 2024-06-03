<template>
    <div class="wrap">
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

            <div class="isxianshi phone xomdeua" style="display: none">
                <table>
                    <tr>
                        <td style="padding-right: 10px">
                            <div @click="gouser" class="names">{{ user_info.email }}</div>
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
                                    display: none;
                                "
                            >
                                logout
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="menu">
                <div
                    class="nav-item"
                    :class="isActive(item.path) ? 'is-active' : ''"
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
                            <div @click="gouser" class="names">{{ user_info.email }}</div>
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
            </div>
        </div>
    </div>
</template>

<script>
import { getUserInfoApi, removeUserInfo } from '../request/api'
import { ElMessage } from 'element-plus'

export default {
    name: 'Header',
    async created() {
        let res = await getUserInfoApi()
        if (res.code == 1) {
        } else {
            this.user_info = res.data
            document.querySelector('.isyincang').style.display = 'none'
            document.querySelector('.queshi').style.display = 'none'
            document.querySelector('.zheli').style.display = 'none'
            document.querySelector('.xinde').style.display = ''
            document.querySelector('.xomdeua').style.display = ''
        }
    },
    data() {
        return {
            activeIndex: '1',
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
        gouser() {
            this.$router.push('/user_center/info')
        },
        isActive(path) {
            const currentPath = this.$route.path
            const regex = new RegExp(`^${path}(\\/|$)`)
            return regex.test(currentPath)
        },
        async logout() {
            let res = await removeUserInfo()
            console.log(res)
            if (res.code == 0) {
                document.querySelector('.isyincang').style.display = ''
                document.querySelector('.xomdeua').style.display = 'none'
                document.querySelector('.zheli').style.display = ''
                document.querySelector('.xinde').style.display = 'none'

                this.$router.push('/')
            } else {
                ElMessage({
                    message: res.msg,
                    type: 'error'
                })
            }
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
    padding: 0 20px;
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
