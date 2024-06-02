<template>
    <div class="">
        <div style="margin-bottom: 42px">
            <label
                style="
                    height: 16px;
                    font-family: Arial;
                    font-weight: bold;
                    font-size: 22px;
                    color: #000000;
                    line-height: 28px;
                "
            >
                Similar Schools</label
            >
            <el-icon><CaretBottom /></el-icon>
        </div>
        <el-row :gutter="20">
            <el-col :xs="14" :sm="12" :md="8" v-for="(school, index) in schools" :key="index">
                <div class="card-noborder school-card" @click="show(school)">
                    <div class="school-title" style="display: flex; align-items: center">
                        <img
                            src="/images/school_logo.jpeg"
                            style="width: auto; height: 50px; vertical-align: middle"
                        />
                        <div
                            style="
                                display: inline-block;
                                vertical-align: middle;
                                padding-left: 20px;
                                font-family: Arial;
                                font-weight: 400;
                                font-size: 16px;
                                color: #474747;
                            "
                        >
                            <label style="vertical-align: middle">
                                {{ school.name }}
                            </label>
                            <div style="margin-top: 5px">
                                {{ school.province }}
                            </div>
                        </div>
                    </div>
                    <div class="job-detail">
                        <div
                            class="job-name"
                            style="
                                font-family: Arial;
                                font-weight: 400;
                                font-size: 16px;
                                color: #1f2f57;
                            "
                        >
                            {{ school.job.name }}
                        </div>
                        <div
                            style="
                                font-family: Arial;
                                font-weight: 400;
                                font-size: 16px;
                                color: #474747;
                            "
                        >
                            {{ school.job.position }} position available
                        </div>
                        <div
                            style="
                                font-family: Arial;
                                font-weight: 400;
                                font-size: 16px;
                                color: #474747;
                            "
                        >
                            {{ school.job.salary }}
                        </div>
                        <div
                            style="
                                font-family: Arial;
                                font-weight: 400;
                                font-size: 16px;
                                color: #474747;
                            "
                        >
                            {{ school.job.start_date }}
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'SimilarSchools',
    props: {
        schools: [Array]
    },
    created() {},
    data() {
        return {}
    },
    methods: {
        show(item) {
            this.$emit('changeShow', item.id)

            this.$router.push({ path: '/schools/' + item.id })
        }
    }
}
</script>

<style lang="scss" scoped>
.school-card {
    padding: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
        box-shadow: 3px 3px 3px 3px rgba(0, 0, 0.1, 0.3);
    }
    .school-title {
        padding: 10px 0 40px 0;
        border-bottom: 1px dotted #b4b4b4;
    }
    .job-detail {
        line-height: 30px;
        div {
            padding-left: 10px;
        }
        .job-name {
            padding: 10px;
            background-color: #f8f8fa;
            font-weight: 400;
            font-size: 16px;
            color: #1f2f57;
        }
    }
}
</style>
