<template>
    <div class="page-index">
        <div class="search-wrap">
            <div class="search-input">
                <i class="icon-search">&#xe677;</i>
                <p class="input">请输入应用关键字...</p>
            </div>

            <button class="tool-item">
                <i class="icon">&#xe63c;</i>
            </button>

            <button class="tool-item">
                <i class="icon">&#xe631;</i>
                <!-- 大于9就添加这个类，不是大于99 -->
                <em class="big">99+</em>
            </button>
        </div>

        <van-swipe class="bannerImages" :autoplay="3000" indicator-color="#1989fa">
            <van-swipe-item :key="index" v-for="(image, index) in bannerImages">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>

        <div class="nav-list">
            <div class="nav-item">
                <i class="icon">&#xe62c;</i>
                <span class="name">工单管理</span>
            </div>

            <div class="nav-item">
                <i class="icon">&#xe62c;</i>
                <span class="name">GIS地图</span>
            </div>

            <div class="nav-item">
                <i class="icon">&#xe62c;</i>
                <span class="name">实时地图</span>
            </div>

            <div class="nav-item">
                <i class="icon">&#xe60a;</i>
                <span class="name">更多</span>
            </div>
        </div>

        <dl class="punch-module">
            <dt>考勤打卡</dt>

            <dd>
               <!--
                    normal 正常打卡
                    warn 打卡超时
                    error 未打卡
                -->
                <div class="punch-record normal">
                    <i class="icon-time">&#xe616;</i>

                    <div class="text-wrap">
                        <p class="standard-time">上班时间：09:30</p>
                        <p class="my-time">打卡时间：09:30</p>
                        <address>杭州市西湖区文三路</address>
                    </div>

                    <van-tag plain type="success">正常</van-tag>
                </div>

                <div class="punch-record warn">
                    <i class="icon-time">&#xe624;</i>

                    <div class="text-wrap">
                        <p class="standard-time">上班时间：09:30</p>
                        <p class="my-time">打卡时间：09:30</p>
                        <p class="tips"></p>
                        <address>杭州市西湖区文三路</address>
                    </div>

                    <van-tag plain type="danger">迟到</van-tag>
                </div>
            </dd>
        </dl>

        <div class="panel-item">
            <div class="panel-title-wrap">
                <span class="panel-title">我的工单</span>
            </div>

            <div class="my-order-wrap">
                <div class="my-order-item not-finished">
                    <p class="number">68</p>
                    <p class="title">未完成</p>
                </div>

                <div class="my-order-item finish">
                    <p class="number">68</p>
                    <p class="title">已完成</p>
                </div>

                <div class="my-order-item delay">
                    <p class="number">68</p>
                    <p class="title">已延期</p>
                </div>
            </div>
        </div>

        <div class="panel-item">
            <div class="panel-title-wrap">
                <span class="panel-title">营业所排名</span>
            </div>

            <van-tabs v-model="yysRankTabs" color="#2e7ae6">
                <van-tab title="供水量">
                    <div class="echart-wrap"></div>
                </van-tab>

                <van-tab title="售水量">
                    <van-empty description="没数据呀" />
                </van-tab>

                <van-tab title="产销差">
                    <van-empty description="没数据呀" />
                </van-tab>
            </van-tabs>
        </div>

        <div class="panel-item">
            <div class="panel-title-wrap">
                <span class="panel-title">异常预警</span>

                <button class="edit-item">
                    <time>2020-05-28</time>
                    <i class="icon">&#xe60d;</i>
                </button>
            </div>

            <van-tabs v-model="waringTabs" color="#2e7ae6">
                <van-tab title="管网压力">
                    <div class="echart-wrap"></div>
                </van-tab>

                <van-tab title="供水汞站">
                    <van-empty description="没数据呀" />
                </van-tab>

                <van-tab title="自来水厂">
                    <van-empty description="没数据呀" />
                </van-tab>
            </van-tabs>
        </div>

        <div class="panel-item">
            <div class="panel-title-wrap">
                <span class="panel-title">流程</span>

                <button class="edit-item">
                    <time>2020-05-28</time>
                    <i class="icon">&#xe60d;</i>
                </button>
            </div>

            <van-tabs v-model="processTabs" color="#2e7ae6">
                <van-tab title="待办事宜">
                    <van-list
                        v-model="process.loading"
                        :finished="process.finished"
                        finished-text="没有更多了"
                        @load="onProcessLoad"
                    >
                        <!-- // status = “urge”;//催办
                        // status = “delay”;//延期
                        // status = “unread”;//草稿
                        // status = “processing”;//处理中
                        // status = “file”;//办结 -->
                        <div v-for="item in process.list" :key="item" class="p-order-item urge">
                            <div class="text-wrap">
                                <p class="order-name">RX-客服工单-201908210089</p>
                                <p class="tips">【客服服务】刘亦菲小姐姐</p>
                            </div>

                            <time>2019-10-12 14:30</time>
                        </div>
                    </van-list>
                </van-tab>

                <van-tab title="已办事宜">
                    <van-empty description="没数据呀" />
                </van-tab>

                <van-tab title="我的请求">
                    <van-empty description="没数据呀" />
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import banner1 from '../../assets/images/banner-1.png';
    import { Lazyload } from 'vant';

    Vue.use(Lazyload);

    export default {
        name: 'Index',
        components: {
            //
        },
        data() {
            return {
                // 顶部轮播
                bannerImages: [
                    banner1
                ],

                yysRankTabs: 1, // 营业所排名-选项卡
                waringTabs: 1, // 异常预警-选项卡
                processTabs: 0, // 流程-选项卡

                // 流程-代办事宜
                process: {
                    list: [1, 2, 3, 4, 5, 6],
                    loading: false,
                    finished: false,
                }
            };
        },
        methods: {
            onProcessLoad() {
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.process.list.push(this.process.list.length + 1);
                    }

                    // 加载状态结束
                    this.process.loading = false;

                    // 数据全部加载完成
                    if (this.process.list.length >= 10) {
                        this.process.finished = true;
                    }
                }, 1000);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .page-index {
        position: relative;
    }
    .search-wrap {
        display: flex;
        align-items: center;
        padding: .2rem .3rem;
        background: $color-1;
        user-select: none;

        .search-input {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 1;
            margin-right: .1rem;
            padding: 0 .3rem;
            width: 0; height: .65rem;
            border-radius: 1000px;
            background: #fff;

            .icon-search {
                @include iconfont;
                margin-right: .1rem;
                color: #999;
            }
            .input {
                border: none;
                font-size: .28rem;
                color: #999;
            }
        }
        .tool-item {
            position: relative;
            padding: 0 .1rem;
            border: none;
            color: #fff;
            background: transparent;

            .icon {
                @include iconfont;
                font-size: .4rem;
            }
            em {
                position: absolute;
                right: 0; top: -.1rem;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: .32rem; height: .32rem;
                border-radius: 50%;
                font-size: .2rem;
                background: #f90;

                &.big {
                    right: -.1rem; top: -.15rem;
                    width: .5rem;
                    border-radius: .12rem;
                }
            }
        }
    }
    .bannerImages {
        img {
            display: block;
            width: 100%; height: auto;
            object-fit: cover;
        }
    }
    .nav-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: .2rem;
        user-select: none;

        .nav-item {
            flex-basis: 25%;
            padding: .3rem;
            text-align: center;
            transition: all .2s;

            &:active {
                background: #f3f3f3;
            }
            .icon {
                @include iconfont;
                font-size: .6rem;
                color: $color-1;
            }
            .name {
                margin-top: .08rem;
                display: block;
                font-size: .24rem;
                color: #666;
            }
        }
    }
    .punch-module {
        margin-top: .2rem;
        user-select: none;

        dt {
            padding: 0.1rem 0.3rem;
            font-weight: bold;
            color: $color-1;
        }
        dd {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .punch-record {
                padding: 0.1rem 0.2rem;
                font-size: .24rem;
                white-space:nowrap;
                transition: all 0.3s;

                &:active {
                    background: #f3f3f3;
                }
                .icon-time {
                    font-size: .4rem;
                }
                .text-wrap {
                    margin-left: .1rem;
                    margin-right: .1rem;

                    address {
                        display: none;
                    }
                }
            }
        }
    }
    .punch-record {
        display: flex;
        align-items: center;
        padding: .3rem .3rem;

        &.warn {
            .my-time {
                color: #f90;
            }
        }
        &.error {
            .my-time {
                color: #ee0a24;
            }
        }
        &.normal {
            .my-time {
                color: #07c160;
            }
        }
        .icon-time {
            @include iconfont;
            font-size: 1.2rem;
            color: $color-1;
        }
        .text-wrap {
            flex-grow: 1;
            margin-left: .3rem;

            address {
                font-size: .24rem;
                color: #999;

                &::before {
                    margin-right: .05rem;
                    @include iconfont;
                    content: "\e628";
                }
            }
        }
    }
    .panel-item {
        margin-top: .4rem;
        user-select: none;

        .panel-title-wrap {
            display: flex;
            align-items: center;
            padding: .2rem .3rem;

            .panel-title {
                width: 0;
                flex-grow: 1;
                color: $color-1;
                font-weight: bold;
            }
            .edit-item {
                display: inline-flex;
                align-items: center;
                border: none;
                background: transparent;

                time {
                    color: #555;
                }
                .icon {
                    @include iconfont;
                    margin-left: .1rem;
                    color: #eee;
                    font-size: .2rem;
                }
            }
        }
        ::v-deep .van-hairline--top-bottom {
            &:after {
                display: none;
            }
        }
        .echart-wrap {
            height: 3.5rem;
        }
    }
    .my-order-wrap {
        display: flex;
        align-items: center;
        padding: 0 .3rem;

        .my-order-item {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 0;
            flex-grow: 1;
            height: 2rem;
            border-radius: .12rem;
            text-align: center;
            background: no-repeat center bottom / cover;

            &.not-finished {
                background-image: url("../../assets/images/image-1.png");
            }
            &.finish {
                background-image: url("../../assets/images/image-2.png");
            }
            &.delay {
                background-image: url("../../assets/images/image-3.png");
            }
            & + .my-order-item {
                margin-left: .2rem;
            }
            .number {
                font-size: .6rem;
                color: #fff;
                font-weight: bold;
            }
            .title {
                color: #fff;
            }
        }
    }
</style>
