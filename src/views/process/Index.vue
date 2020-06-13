<template>
    <div class="component-content">
        <div class="cell-list">
            <div v-for="item in processMenu" :key="item.title" class="p-cell-item">
                <i style="color: #f00" class="icon-type">&#xe628;</i>
                <span class="title">{{item.title}}</span>
                <i class="icon-arrow">&#xe62e;</i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProcessIndex',
        components: {
            //
        },
        data() {
            return {
                processMenu: [
                    {
                        title: '新建流程'
                    },
                    {
                        title: '待办事宜'
                    },
                    {
                        title: '已办事宜'
                    },
                    {
                        title: '我的请求'
                    },
                    {
                        title: '流程查询'
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
