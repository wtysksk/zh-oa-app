<template>
    <div class="component-content">
        <div class="herader">
            <van-dropdown-menu class="serach-type">
                <van-dropdown-item v-model="type" :options="typeOption" />
            </van-dropdown-menu>

            <van-search class="serach-item" v-model="serachKeyWord" placeholder="请输入搜索关键词" />
        </div>

        <!--
            其实我觉得这边不应该是显示日历
            正确的姿势应该是一个开始时间 和 一个结束时间

            和产品去讨论下~
         -->
        <van-calendar
            :show-title="false"
            :poppable="false"
            :show-confirm="false"
            :style="{ height: '240px' }"
        />

        <van-list class="record-list">
            <div class="record-item warn">
                <div class="text-wrap">
                    <div class="car">
                        <p class="car-name">本田思域秒天秒地秒空气</p>
                        <p class="car-id">浙A8888888</p>
                    </div>

                    <p class="time">2020-05-23 13:45 至 2020-05-23 13:45</p>
                </div>

                <p class="state">待审批</p>
            </div>

            <div class="record-item error">
                <div class="text-wrap">
                    <div class="car">
                        <p class="car-name">本田思域秒天秒地秒空气</p>
                        <p class="car-id">浙A8888888</p>
                    </div>

                    <p class="time">2020-05-23 13:45 至 2020-05-23 13:45</p>
                </div>

                <p class="state">拒绝</p>
            </div>

            <div class="record-item normal">
                <div class="text-wrap">
                    <div class="car">
                        <p class="car-name">本田思域秒天秒地秒空气</p>
                        <p class="car-id">浙A8888888</p>
                    </div>

                    <p class="time">2020-05-23 13:45 至 2020-05-23 13:45</p>
                </div>

                <p class="state">通过</p>
            </div>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: 'CarUseStateList',
        components: {
            //
        },
        data() {
            return {
                type: 0,
                typeOption: [
                    { text: '已审批', value: 0 },
                    { text: '待审批', value: 1 },
                    { text: '已完成', value: 2 },
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
        min-height: 100vh;
        background: $color-2;
    }
    .herader {
        display: flex;
        align-items: center;
        background: #fff;
    }
    .serach-type {
        width: 1.5rem;

        ::v-deep .van-dropdown-menu__bar {
            box-shadow: none;
        }
    }
    .serach-item {
        width: 0;
        flex-grow: 1;
    }
    .record-list {
        margin-top: .3rem;
        background: #fff;
    }
    .record-item {
        @include thinLine($useBefore: false, $position: 'bottom', $backgroundColor: #eee, $right: .3rem, $bottom: 0, $left: .3rem);
        display: flex;
        align-items: center;
        padding: .2rem .3rem;

        &.warn {
            .state {
                color: #f90;
            }
        }
        &.error {
            .state {
                color: #ee0a24;
            }
        }
        &.normal {
            .state {
                color: #07c160;
            }
        }
        .text-wrap {
            width: 0;
            flex-grow: 1;

            .car {
                display: flex;
                align-items: center;

                .car-name {
                    font-size: .3rem;
                    font-weight: bold;
                    color: $color-1;
                }
                .car-id {
                    margin-left: .1rem;
                    font-size: .26rem;
                    color: #666;
                }
            }
            .time {
                margin-top: .05rem;
                font-size: .24rem;
                color: #999;
                user-select: none;
            }
        }
        .state {
            user-select: none;
        }
    }
</style>
