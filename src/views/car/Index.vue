<template>
    <div class="component-content">
        <div class="cell-list">
            <div v-for="item in carMenu" :key="item.title" class="p-cell-item">
                <i style="color: #f00" class="icon-type">&#xe628;</i>
                <span class="title">{{item.title}}</span>
                <i class="icon-arrow">&#xe62e;</i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CarIndex',
        components: {
            //
        },
        data() {
            return {
                carMenu: [
                    {
                        title: '用车申请'
                    },
                    {
                        title: '车辆管理'
                    },
                    {
                        title: '车辆使用情况'
                    },
                    {
                        title: '维护管理'
                    },
                    {
                        title: '保险管理'
                    },
                    {
                        title: '年检管理'
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
