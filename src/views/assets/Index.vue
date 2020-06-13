<template>
    <div class="component-content">
        <div class="cell-list">
            <div v-for="item in assetsMenu" :key="item.title" class="p-cell-item">
                <i style="color: #f00" class="icon-type">&#xe628;</i>
                <span class="title">{{item.title}}</span>
                <i class="icon-arrow">&#xe62e;</i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AssetsIndex',
        components: {
            //
        },
        data() {
            return {
                assetsMenu: [
                    {
                        title: '资产管理'
                    },
                    {
                        title: '类目管理'
                    },
                    {
                        title: '资产使用情况'
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
