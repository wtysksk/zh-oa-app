<template>
    <div class="component-content">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" />

        <van-dropdown-menu>
            <van-dropdown-item v-model="classify" :options="classifyOption" />
            <van-dropdown-item v-model="state" :options="stateOption" />
        </van-dropdown-menu>

        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onProcessLoad"
        >
            <!-- // status = “urge”;//催办
            // status = “delay”;//延期
            // status = “unread”;//草稿
            // status = “processing”;//处理中
            // status = “file”;//办结 -->
            <div v-for="item in list" :key="item" class="p-order-item urge">
                <div class="text-wrap">
                    <p class="order-name">RX-客服工单-201908210089</p>
                    <p class="tips">【客服服务】刘亦菲小姐姐</p>
                </div>

                <time>2019-10-12 14:30</time>
            </div>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: 'ProcessList',
        components: {
            //
        },
        data() {
            return {
                searchValue: '',

                classify: 0,
                state: 'a',

                classifyOption: [
                    { text: '分类', value: 0 },
                    { text: '分类1', value: 1 },
                    { text: '分类2', value: 2 },
                ],
                stateOption: [
                    { text: '状态', value: 'a' },
                    { text: '状态1', value: 'b' },
                    { text: '状态2', value: 'c' },
                ],

                list: [1, 2, 3, 4, 5, 6],
                loading: false,
                finished: false,
            };
        },
        methods: {
            onProcessLoad() {
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }

                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 10) {
                        this.finished = true;
                    }
                }, 1000);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
    }
</style>
