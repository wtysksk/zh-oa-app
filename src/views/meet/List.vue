<template>
    <div class="component-content">
        <div class="herader">
            <van-dropdown-menu class="serach-type">
                <van-dropdown-item v-model="type" :options="typeOption" />
            </van-dropdown-menu>

            <van-search class="serach-item" v-model="serachKeyWord" placeholder="请输入搜索关键词" />
        </div>

        <van-list>
            <div class="meet-item">
                <div class="main-wrap">
                    <div class="title-wrap">
                        <p class="title">部门月度总结会议</p>
                        <van-tag class="state" type="success">进行中</van-tag>
                    </div>
                    <p class="tips">机构本地会议室之一（大）</p>
                    <p class="tips">2020-05-23 12:34 至 2020-05-23 12:34</p>
                </div>
            </div>

            <div class="meet-item">
                <div class="main-wrap">
                    <div class="title-wrap">
                        <p class="title">前端吴彦祖提交的补卡申请</p>
                        <van-tag class="state">已结束</van-tag>
                    </div>
                    <p class="tips">机构本地会议室之一（大）</p>
                    <p class="tips">2020-05-23 12:34 至 2020-05-23 12:34</p>
                </div>
            </div>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: 'MeetList',
        components: {
            //
        },
        data() {
            return {
                serachKeyWord: '',
                type: 0,
                typeOption: [
                    { text: '全部', value: 0 },
                    { text: '未开始', value: 1 },
                    { text: '进行中', value: 2 },
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
    .meet-item {
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
    }
</style>
