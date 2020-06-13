<template>
    <div class="component-content">
        <div class="header">
            <van-image
                class="user-image"
                lazy-load
                src="https://img.yzcdn.cn/vant/cat.jpeg"
            />

            <div class="text-wrap">
                <p class="user-name">前端吴彦祖</p>
                <p class="tips">杭州微拍堂 前端部</p>
                <time>2010-06-06 12:45 星期6</time>
            </div>

            <button class="btn-link">
                <span>打卡记录</span>
                <i>&#xe62e;</i>
            </button>
        </div>

        <div class="punch">
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

            <div class="punch-record error">
                <i class="icon-time">&#xe624;</i>

                <div class="text-wrap">
                    <p class="standard-time">上班时间：09:30</p>
                    <p class="my-time">打卡时间：未打卡</p>
                </div>

                <van-button plain type="danger" size="small">缺卡，提交申请</van-button>
            </div>
        </div>

        <div class="tools">
            <van-button type="info" class="btn-edit">打卡</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PersonClockIn',
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
        min-height: 100vh;
        background: $color-2;
        user-select: none;
    }
    .header {
        display: flex;
        align-items: center;
        padding: .5rem .3rem;
        background: $color-1;

        .user-image {
            width: 1.6rem; height: 1.6rem;
            border-radius: 50%;
            overflow: hidden;
        }
        .text-wrap {
            flex-grow: 1;
            margin: 0 .2rem;
            width: 0;
            color: #fff;

            .user-name {
                margin-bottom: .2rem;
                font-size: .3rem;
            }
            .tips {
                font-size: .24rem;
            }
            time {
                font-size: .24rem;
            }
        }
        .btn-link {
            color: #fff;
            border: none;
            background: transparent;

            i {
                @include iconfont;
            }
        }
    }
    .punch {
        margin-top: .3rem;
        background: #fff;
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
    .tools {
        position: fixed;
        display: flex;
        justify-content: center;
        bottom: 2rem; left: .3rem; right: .3rem;
        padding: 0 .3rem;
        user-select: none;

        .btn-edit {
            width: 2rem; height: 2rem;
            border-radius: 50%;
            font-size: .28rem;
        }
    }
</style>
