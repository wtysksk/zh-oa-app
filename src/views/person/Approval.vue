<template>
    <div class="component-content">
        <div class="herader">
            <van-dropdown-menu class="serach-type">
                <van-dropdown-item v-model="type" :options="typeOption" />
            </van-dropdown-menu>

            <van-search class="serach-item" v-model="serachKeyWord" placeholder="请输入搜索关键词" />
        </div>

        <van-list>
            <div class="approval-item">
                <div class="main-wrap">
                    <div class="title-wrap">
                        <p class="title">前端吴彦祖提交的补卡申请</p>
                        <van-tag class="state" plain type="success">已通过</van-tag>
                    </div>
                    <p class="tips">补卡时间：2020-05-23 12:34</p>
                    <p class="tips">补卡备注：忘记打卡</p>
                </div>

                <time class="time">
                    <span>2020-05-23</span>
                    <span>12:34</span>
                </time>
            </div>

            <div class="approval-item">
                <div class="main-wrap">
                    <div class="title-wrap">
                        <p class="title">前端吴彦祖提交的补卡申请</p>
                        <van-tag class="state" plain type="danger">已驳回</van-tag>
                    </div>
                    <p class="tips">补卡时间：2020-05-23 12:34</p>
                    <p class="tips">补卡备注：忘记打卡</p>
                </div>

                <time class="time">
                    <span>2020-05-23</span>
                    <span>12:34</span>
                </time>
            </div>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: 'PersonApproval',
        components: {
            //
        },
        data() {
            return {
                serachKeyWord: '',
                type: 0,
                typeOption: [
                    { text: '全部', value: 0 },
                    { text: '待审批', value: 1 },
                    { text: '已审批', value: 2 },
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
        width: 1.5rem;

        ::v-deep .van-dropdown-menu__bar {
            box-shadow: none;
        }
    }
    .serach-item {
        width: 0;
        flex-grow: 1;
    }
    .approval-item {
        @include thinLine($useBefore: true, $position: 'bottom', $backgroundColor: #eee, $top: 0, $right: .3rem, $bottom: 0, $left: .3rem);
        position: relative;
        display: flex;
        align-items: flex-start;
        padding: 0.3rem;
        background: #fff;
        transition: all 0.3s;
        user-select: none;

        &:active {
            background: #f3f3f3;
        }
        .main-wrap {
            width: 0;
            flex-grow: 1;
            margin-right: .2rem;

            .title-wrap {
                display: flex;
                align-items: center;
                margin-bottom: .1rem;

                .title {
                    @include textEllipsis($type: 'multipleRows', $row: 1);
                    font-size: .3rem;
                    color: $color-1;
                    font-weight: bold;
                }
                .state {
                    flex-shrink: 0;
                    margin-left: .2rem;
                }
            }
            .tips {
                font-size: .24rem;
                color: #666;
            }
        }
        .time {
            text-align: right;
            font-size: .24rem;
            color: #999;

            span {
                display: block;
            }
        }
    }
</style>
