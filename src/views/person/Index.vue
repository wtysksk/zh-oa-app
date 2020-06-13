<template>
    <div class="component-content">
        <div class="cell-list">
            <div v-for="item in personnelMenu" :key="item.title" class="p-cell-item">
                <i style="color: #f00" class="icon-type">&#xe628;</i>
                <span class="title">{{item.title}}</span>
                <i class="icon-arrow">&#xe62e;</i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PersonIndex',
        components: {
            //
        },
        data() {
            return {
                personnelMenu: [
                    {
                        title: '新建人员'
                    },
                    {
                        title: '我的档案'
                    },
                    {
                        title: '档案查询'
                    },
                    {
                        title: '考勤打卡'
                    },
                    {
                        title: '考勤统计'
                    },
                    {
                        title: '考勤设置'
                    },
                    {
                        title: '我审批的'
                    }
                ]
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
