<template>
    <div class="component-content">
        <div class="herader">
            <van-dropdown-menu class="serach-type">
                <van-dropdown-item v-model="type" :options="typeOption" />
            </van-dropdown-menu>

            <van-search class="serach-item" v-model="serachKeyWord" placeholder="请输入搜索关键词" />
        </div>

        <van-list>
            <van-card
                v-for="n in 5"
                :key="n"
                num="134"
                desc="2020年最新款，星巴克装逼神器"
                title="apple mac pro 16G 小小俊同款"
                thumb="https://cdn.weipaitang.com/static/202006060f39b761-9747-b7619747-29a8-432a47bca049-W2000H1125"
            />
        </van-list>
    </div>
</template>

<script>
    export default {
        name: 'AssetsList',
        components: {
            //
        },
        data() {
            return {
                serachKeyWord: '',
                type: -1,
                typeOption: [
                    { text: '分类', value: -1 },
                    { text: '计算机设备', value: 0 },
                    { text: '办公设备', value: 1 },
                    { text: '电子产品', value: 2 },
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
    .herader {
        display: flex;
        align-items: center;
    }
    .serach-type {
        width: 2.4rem;

        ::v-deep .van-dropdown-menu__bar {
            box-shadow: none;
        }
    }
    .serach-item {
        width: 0;
        flex-grow: 1;
    }
</style>
