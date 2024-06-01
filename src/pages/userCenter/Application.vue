<template>
    <user-center active-menu="apply">
        <job-card v-for="(job, index) in jobs" :key="index" :job="job" :applied="true"></job-card>

        <div style="padding-bottom: 40px">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="totalnum"
                @current-change="handlePageChange"
                style=""
            />
        </div>
    </user-center>
</template>

<script>
import UserCenter from './UserCenter.vue'
import JobCard from '../jobs/JobCard.vue'
import axios from 'axios'
import { myjobslistApi } from '@/request/api'
export default {
    name: 'MyApplication',
    components: { UserCenter, JobCard },
    props: {},
    created() {
        this.fetchData()
    },
    data() {
        return {
            totalnum: 0,
            currentPage: 1,
            jobs: [],
            jobs1: [
                {
                    logo: '/images/school_logo.jpeg',
                    province: 'Hunan',
                    city: 'Changsha',
                    startDate: 'Aug, 2024',
                    position: 1,
                    salary: '¥20-25k/RMB after tax',
                    name: 'High School Art Teacher',
                    no: 'MC1200'
                },
                {
                    logo: '/images/school_logo.jpeg',
                    province: 'Hunan',
                    city: 'Changsha',
                    startDate: 'Aug, 2024',
                    position: 1,
                    salary: '¥20-25k/RMB after tax',
                    name: 'High School Art Teacher',
                    no: 'MC1200'
                },
                {
                    logo: '/images/school_logo.jpeg',
                    province: 'Hunan',
                    city: 'Changsha',
                    startDate: 'Aug, 2024',
                    position: 1,
                    salary: '¥20-25k/RMB after tax',
                    name: 'High School Art Teacher',
                    no: 'MC1200'
                },
                {
                    logo: '/images/school_logo.jpeg',
                    province: 'Hunan',
                    city: 'Changsha',
                    startDate: 'Aug, 2024',
                    position: 1,
                    salary: '¥20-25k/RMB after tax',
                    name: 'High School Art Teacher',
                    no: 'MC1200'
                },
                {
                    logo: '/images/school_logo.jpeg',
                    province: 'Hunan',
                    city: 'Changsha',
                    startDate: 'Aug, 2024',
                    position: 1,
                    salary: '¥20-25k/RMB after tax',
                    name: 'High School Art Teacher',
                    no: 'MC1200'
                }
            ]
        }
    },
    methods: {
        async fetchData() {
            try {
                const formData = {
                    page: this.currentPage
                }
                const response = await myjobslistApi(formData)

                this.totalnum = response.totalnum
                this.jobs = response.data
            } catch (error) {
                // 处理请求错误
                console.error(error)
            }
        },
        handlePageChange(newPage) {
            this.currentPage = newPage
            this.fetchData() // 发送请求获取数据
        }
    }
}
</script>

<style lang="scss" scoped></style>
