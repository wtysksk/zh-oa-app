<template>
    <div class="component-content">
        <!--
            设计稿有折叠效果， 框架没有因此不做
            反正有搜索功能
            高亮状态：
            <van-cell title="组织关系变动申请表" is-link class="active-cell" />
         -->

        <van-search v-model="searchValue" placeholder="请输入搜索关键词" />

        <van-cell-group title="人事" :border="false">
            <van-cell title="加班申请" is-link />
            <van-cell title="组织关系变动申请表" is-link class="active-cell" />
            <van-cell title="离职申请表" is-link />
            <van-cell title="请假申请单(包含调休)" is-link />
            <van-cell title="外出申请单" is-link />
            <van-cell title="出差申请单" is-link />
        </van-cell-group>

        <van-cell-group title="行政" :border="false">
            <van-cell title="公务用车申请" is-link />
            <van-cell title="嘉善水务集团重大事项报告表" is-link />
            <van-cell title="资产(低值易耗品)领用单" is-link />
            <van-cell title="资产归还单" is-link />
            <van-cell title="维修申请单" is-link />
            <van-cell title="资产报废单" is-link />
            <van-cell title="车辆保养维修审批表" is-link />
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: 'ProcessCreateList',
        components: {
            //
        },
        data() {
            return {
                searchValue: ''
            };
        },
        methods: {
            //
        }
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
        min-height: 100vh;
        padding-bottom: 1rem;
        background: $color-2;
    }
    .active-cell {
        color: $color-1;
    }
</style>
