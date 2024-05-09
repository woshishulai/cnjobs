<template>
    <div class="">
        <div>
            <label style="padding-right: 10px; font-size: 22px">
                Similar Schools</label
            >
            <el-icon><CaretBottom /></el-icon>
        </div>
        <el-row :gutter="20">
            <el-col
                :xs="14"
                :sm="12"
                :md="8"
                v-for="(school, index) in schools"
                :key="index"
            >
                <div class="card-noborder school-card">
                    <div class="school-title">
                        <img
                            src="/images/school_logo.jpeg"
                            style="
                                width: auto;
                                height: 40px;
                                vertical-align: middle;
                            "
                        />
                        <div
                            style="
                                display: inline-block;
                                vertical-align: middle;
                                padding-left: 20px;
                            "
                        >
                            <label style="vertical-align: middle">
                                {{ school.name }}
                            </label>
                            <div>
                                {{ school.province }}
                            </div>
                        </div>
                    </div>
                    <div class="job-detail">
                        <div class="job-name">{{ school.job.name }}</div>
                        <div>{{ school.job.position }}  position available</div>
                        <div>{{ school.job.salary }}</div>
                        <div>{{ school.job.start_date }}</div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "SimilarSchools",
    props: {
        schools: [Array],
    },
    created() {},
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.school-card {
    padding: 20px;
    margin-bottom: 20px;
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
