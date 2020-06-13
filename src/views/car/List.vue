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
                desc="2020-05-06 13:45 至 2020-09-06 13:45"
                title="本田思域"
                thumb="https://cdn.weipaitang.com/static/202006067c4c9f31-5bdc-9f315bdc-fbe3-4ea2982ba47d-W2250H1375"
            >
                <template #tag>
                    <van-tag plain size="medium" type="primary">正常</van-tag>
                </template>

                <template #tags>
                    <van-tag plain size="medium" type="primary">浙A1234</van-tag>
                </template>
            </van-card>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: 'CarList',
        components: {
            //
        },
        data() {
            return {
                serachKeyWord: '',
                type: -1,
                typeOption: [
                    { text: '筛选', value: -1 },
                    { text: '条件1', value: 0 },
                    { text: '条件2', value: 1 },
                    { text: '条件3', value: 2 },
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
