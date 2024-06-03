<template>
    <el-container>
        <el-header height="112px" class="fiexd" :class="height > 100 ? 'active' : ''">
            <page-header />
        </el-header>
        <el-main>
            <router-view> </router-view>
        </el-main>
        <el-footer height="310px">
            <page-footer />
        </el-footer>
    </el-container>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'

export default {
    name: 'CNJobsApp',
    components: { PageHeader, PageFooter },
    created() {},
    data() {
        return {
            height: null
        }
    },
    props: {},
    methods: {
        handleScroll() {
            var scrollTop =
                window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.height = Number(scrollTop)
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>
<style>
@font-face {
    font-family: 'iconfont'; /* Project id 4572259 */
    src:
        url('//at.alicdn.com/t/c/font_4572259_f89hs432v1n.woff2?t=1717404350021') format('woff2'),
        url('//at.alicdn.com/t/c/font_4572259_f89hs432v1n.woff?t=1717404350021') format('woff'),
        url('//at.alicdn.com/t/c/font_4572259_f89hs432v1n.ttf?t=1717404350021') format('truetype');
}

.iconfont {
    font-family: 'iconfont' !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-chakantiezidingwei:before {
    content: '\e65f';
}

.icon-time:before {
    content: '\e69d';
}

.icon-qian:before {
    content: '\e634';
}
</style>

<style lang="scss">
* {
    box-sizing: border-box;
    font-family: Arial;
}
.fiexd {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    transition: all 0.5s;
    opacity: 1;
    &:hover,
    &.active {
        opacity: 1;
    }
}
body {
    margin: 0;
    padding: 0;
    border-color: #ffffff;
}
a {
    text-decoration: none;
    color: #4f4f4f;
}

a:hover {
    color: #ff9300;
}

.el-header {
    padding: 0;
}
.el-main {
    padding: 0;
}
.el-footer {
    padding: 0;
    background-color: #f5f5f7;
}

.bg-gray {
    background-color: #f5f5f7;
}
.bg-thickblue {
    background-color: #265fbe;
}
.btn-primary {
    color: #ffffff;
    border-color: #265fbe;
    background-color: #265fbe;
}
.btn-yellow {
    color: #ffffff;
    border-color: #ff9300;
    background-color: #ff9300;
}

.btn-yellow:hover {
    color: #ff9300;
    border-color: #ff9300;
    background-color: #ffffff;
}

.btn-lightblue {
    width: 130px;
    height: 43px;
    color: #1f2f57;
    font-weight: 400;
    font-size: 12px;
    background: #e1eef5;
    border-radius: 8px;
    border: none;
}
.btn-lightblue:hover {
    color: #ffffff;
    border-color: #ff9300;
    background-color: #ff9300;
}

.btn-outline-yellow:hover {
    color: #ff9300;
    border-color: #ff9300;
    background-color: #ffffff;
}
.btn-black {
    border: 2px solid #000000;
}
.btn-gray {
    border: none;
    color: #000000;
    background-color: #ebebeb;
    font-weight: 400;
    font-size: 16px;
}
.btn-gray:hover,
.btn-gray.active {
    color: #ffffff;
    border-color: #ff9300;
    background-color: #ff9300;
}

.btn-lightgray {
    color: #ffffff;
    background-color: #c5c5c5;
}
.btn-lightgray:hover {
    color: #ffffff;
    border-color: #ff9300;
    background-color: #ff9300;
}

.btn-submit {
    width: 100%;
    height: 60px;
    color: #ffffff;
    background: #474747;
    border-radius: 8px;
    &:hover {
        color: #ffffff;
        background: #ff9300;
    }
}

.text-left {
    text-align: left;
}
.text-center {
    text-align: center;
}
.text-right {
    text-align: right;
}
.text-orange {
    color: #ff9300;
}
.text-gray {
    color: #4f4f4f;
}
.text-lightgray {
    color: #aeaeae;
}
.text-primary {
    color: #1f2f57;
}

.text-one-line {
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.cnjob-card {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
    background-color: #ffffff;
    border: 1px solid #eaeaea;
}

.card-title {
    color: #1f2f57;
    font-size: 20px;
    font-weight: 400;
}
.card-noborder {
    padding: 20px;
    border: none;
    border-radius: 8px;
    background-color: #ffffff;
}
.card-noshadow {
    box-shadow: 1px 1px 0px 0px #eaeaea;
}
</style>
