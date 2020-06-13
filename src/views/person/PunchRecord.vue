<template>
    <div class="component-content">
        <van-calendar
            :show-title="false"
            :poppable="false"
            :show-confirm="false"
            :style="{ height: '380px' }"
        />

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
    </div>
</template>

<script>
    export default {
        name: 'PersonPunchRecord',
        components: {
            //
        },
        data() {
            return {

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
</style>
