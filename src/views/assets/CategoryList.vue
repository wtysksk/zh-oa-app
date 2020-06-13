<template>
    <div class="component-content">
        <van-search placeholder="请输入搜索关键词" />

        <div class="cell-list">
            <div class="p-cell-item">
                <i style="color: #f00" class="icon-type">&#xe607;</i>
                <span class="title">电子产品</span>
                <i class="icon-arrow">&#xe62e;</i>
            </div>

            <div class="p-cell-item">
                <i style="color: #f00" class="icon-type">&#xe607;</i>
                <span class="title">计算机设备</span>
                <i class="icon-arrow">&#xe62e;</i>
            </div>

            <div class="p-cell-item">
                <i style="color: #f00" class="icon-type">&#xe607;</i>
                <span class="title">办公设备</span>
                <i class="icon-arrow">&#xe62e;</i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AssetsCategoryList',
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
