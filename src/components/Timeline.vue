<template>
    <div class="timeline">
        <div class="node" v-for="step in list" :key="step">
            <div class="icon-box" style="">
                <div class="node-trunk" style="">
                    <div class="node-icon" style="">
                        <img class="icon" :src="step.icon" />
                    </div>
                    <div class="node-branch" style=""></div>
                    <div class="node-dot">
                        <div style=""></div>
                        <div style=""></div>
                    </div>
                </div>
            </div>

            <div class="content-box" style="">
                <div class="title">
                    {{ step.title }}
                </div>
                <div class="desc">
                    {{ step.stitle }}
                </div>
                <div class="arrow">
                    <img src="/images/arrow-down.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Timeline',
    props: {
        nodes: [Array],
        list: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    created() {},
    data() {
        return {
            activities: [
                {
                    title: 'step 1',
                    desc: 'Apply for a job submit your resume.',
                    color: '#ff9300',
                    icon: '/images/icon-edit.png'
                },
                {
                    title: 'step 2',
                    desc: 'Talk to our recruiter to get connected with schools that are hiring.',
                    color: '#ff9300',
                    icon: '/images/icon-msg.png'
                },
                {
                    title: 'step 3',
                    desc: 'Start your visa preparation for this new adventure!',
                    color: '#ff9300',
                    icon: '/images/icon-global.png'
                }
            ]
        }
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.icon-box {
    display: inline-block;
    width: 240px;
}
.node-trunk {
    width: 220px;
    border-right: 2px dotted #1f2f57;
    position: relative;
    padding: 30px 0;
}
.node-branch {
    position: absolute;
    top: 0;
    display: inline-block;
    border-bottom: solid 3px #ff9300;
    width: 100px;
    height: 89px;
}
.node-icon {
    background-color: #ff9300;
    border-radius: 50%;
    width: 116px;
    height: 116px;
    line-height: 116px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    .icon {
        vertical-align: middle;
        width: auto;
        height: 40px;
    }
}
.node-dot {
    display: inline-block;
    position: relative;
    top: -13px;
    right: -95px;

    div:first-child {
        background-color: #ff9300;
        opacity: 0.3;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        position: absolute;
        left: -8px;
        top: -8px;
    }
    div:nth-child(2) {
        background-color: #ff9300;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0;
    }
}
.content-box {
    display: inline-block;
    width: calc(100% - 240px);
    height: 176px;
    vertical-align: middle;
    color: #1f2f57;
    padding-left: 40px;
    overflow: hidden;
    .title {
        font-size: 30px;
        padding: 30px 0 10px 0;
    }
    .desc {
        font-size: 16px;
        margin-bottom: 10px;
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .arrow {
        padding-top: 20px;
    }
}
.timeline {
    .node:last-child {
        .arrow {
            display: none;
        }
    }
}
@media (max-width: 400px) {
    .timeline {
        zoom: 0.7;
    }
}
</style>
