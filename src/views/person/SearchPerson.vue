<template>
    <div class="component-content">
        <div class="herader">
            <van-dropdown-menu class="serach-type">
                <van-dropdown-item v-model="type" :options="typeOption" />
            </van-dropdown-menu>

            <van-search class="serach-item" v-model="serachKeyWord" placeholder="请输入搜索关键词" />
        </div>

        <van-list>
            <!--
                离职：quit
                在职：in-job
            -->
            <div class="business-card quit">
                <i
                    style="background: url('https://cdn.weipaitang.com/static/20200604efeab889-5439-b8895439-6fe1-d1a1fde73ae7-W1344H1344') no-repeat center / cover;"
                    class="user-img">
                </i>

                <div class="main-info">
                    <p class="user">
                        <span class="user-name">小小俊</span>
                        <span class="user-post">大前端部-前端工程师</span>
                    </p>

                    <p class="company">公司：杭州微拍堂科文化创意有限公司</p>
                </div>

                <p class="state">离职</p>
            </div>

            <div class="business-card in-job">
                <i
                    style="background: url('https://cdn.weipaitang.com/static/20200604efeab889-5439-b8895439-6fe1-d1a1fde73ae7-W1344H1344') no-repeat center / cover;"
                    class="user-img">
                </i>

                <div class="main-info">
                    <p class="user">
                        <span class="user-name">小小俊</span>
                        <span class="user-post">大前端部-前端工程师</span>
                    </p>

                    <p class="company">公司：杭州微拍堂科文化创意有限公司</p>
                </div>

                <p class="state">在职</p>
            </div>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: 'PersonSearchPerson',
        components: {
            //
        },
        data() {
            return {
                serachKeyWord: '',
                type: 0,
                typeOption: [
                    { text: '全部', value: 0 },
                    { text: '在职', value: 1 },
                    { text: '离职', value: 2 },
                ]
            };
        },
        methods: {
            //
        }
    };
</script>

<style lang="scss" scoped>
    .business-card {
        @include thinLine($useBefore: true, $position: 'bottom', $backgroundColor: #eee, $top: 0, $right: .3rem, $bottom: 0, $left: .3rem);
        position: relative;
        display: flex;
        align-items: center;
        padding: .3rem;
        background: #fff;
        transition: all .3s;

        &:active {
            background: #f3f3f3;
        }
        &.quit {
            .state {
                color: #ee0a24;
            }
        }
        &.in-job {
            .state {
                color: #07c160;
            }
        }
        .user-img {
            width: .8rem; height: .8rem;
            border-radius: .08rem;
            background: rgba(46, 122, 230, .1) url("../../assets/images/demo-lijun.png") no-repeat center / 60% 60%;
        }
        .main-info {
            width: 0;
            flex-grow: 1;
            margin: 0 .3rem;

            .user {
                display: flex;
                align-items: center;
            }
            .user-name {
                @include textEllipsis($type: 'singleRow', $maxLength: 6em);
                flex-shrink: 0;
                margin-right: .2rem;
                font-size: .28rem;
                font-weight: bold;
            }
            .user-post {
                @include textEllipsis($type: 'multipleRows', $row: 1);
                font-size: .24rem;
                color: #555;
            }
            .company {
                @include textEllipsis($type: 'multipleRows', $row: 1);
                margin-top: .05rem;
                font-size: .24rem;
                color: #555;
            }
        }
    }
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
</style>
