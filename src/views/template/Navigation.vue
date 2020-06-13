<template>
    <div class="component-content">
        <van-notice-bar left-icon="volume-o">
            这个导航页面看起来不错哦，前端靓仔的功劳-nice
        </van-notice-bar>
        <van-cell title="首页" is-link to="/index"/>

        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">华丽分割线</van-divider>

        <van-cell title="流程管理" is-link to="/process/index"/>
        <van-cell title="新建流程列表" is-link to="/process/createList"/>
        <van-cell title="新建流程" is-link to="/process/create"/>
        <van-cell title="代办事宜 (包含流程查询、已办事宜、我的请求)" is-link to="/process/list"/>
        <van-cell title="流程查询-高级搜索" is-link to="/process/search"/>

        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">华丽分割线</van-divider>

        <van-cell title="人事管理" is-link to="/person/index"/>
        <van-cell title="新建人员" is-link to="/person/createPerson"/>
        <van-cell title="我的档案(也可以是别人的，也可以是编辑档案)" is-link to="/person/details"/>
        <van-cell title="档案查询" is-link to="/person/searchPerson"/>
        <van-cell title="考勤打卡" is-link to="/person/clockIn"/>
        <van-cell title="打卡记录" is-link to="/person/punchRecord"/>
        <van-cell title="我审批的" is-link to="/person/approval"/>
        <van-cell title="创建补卡申请" is-link to="/person/createRepairPunch"/>
        <van-cell title="补卡详情" is-link to="/person/repairPunchDetails"/>

        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">华丽分割线</van-divider>

        <van-cell title="会议管理" is-link to="/meet/index"/>
        <van-cell title="会议签到(列表)" is-link to="/meet/list"/>
        <van-cell title="会议签到(详情)" is-link to="/meet/signInDetails"/>
        <van-cell title="新建会议(编辑、详情可以复用)" is-link to="/meet/createMeet"/>

        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">华丽分割线</van-divider>

        <van-cell title="车辆管理" is-link to="/car/index"/>
        <van-cell title="创建用车申请(车辆详情、编辑页面也复用)" is-link to="/car/createUseCar"/>
        <van-cell title="车辆使用情况（维护、保险、年检管理可以复用）" is-link to="/car/useStateList"/>
        <van-cell title="高级搜索" is-link to="car/search"/>
        <van-cell title="车辆列表" is-link to="car/list"/>

        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">华丽分割线</van-divider>

        <van-cell title="资产管理" is-link to="/assets/index"/>
        <van-cell title="新建分类(编辑分类可以复用)" is-link to="/assets/createCategory"/>
        <van-cell title="分类管理" is-link to="/assets/categoryList"/>
        <van-cell title="高级搜索" is-link to="/assets/search"/>
        <van-cell title="资产列表" is-link to="/assets/list"/>
        <van-cell title="资产详情(编辑、新建可以复用)" is-link to="/assets/details"/>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        components: {
            //
        },
        data() {
            return {
                //
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
    }
</style>
