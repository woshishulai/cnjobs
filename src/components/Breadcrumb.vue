<template>
    <el-breadcrumb separator="/" class="breadcrumb" style="padding: 20px 0">
        <el-breadcrumb-item
            v-for="(breadcrumb, index) in breadcrumbs"
            :key="index"
            :to="{ path: breadcrumb.url ? breadcrumb.url : '#' }"
        >
            {{ breadcrumb.name }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    name: "Breadcrumb",
    props: {
        breadcrumbs: [Array],
    },
    created() {},
    data() {
        return {};
    },
    methods: {},
    watch: {},
};
</script>

<style lang="scss" scoped></style>
