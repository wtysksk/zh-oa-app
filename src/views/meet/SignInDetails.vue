<template>
    <div class="component-content">
        <van-cell-group>
            <van-cell title="会议主题：" value="如何迎娶白富美"/>
            <van-cell title="参会人数：" value="12"/>
            <van-cell title="签到人数：" value="3"/>
            <van-cell title="开始时间：" value="2020-05-20 13:14"/>
            <van-cell title="结束时间：" value="2020-05-20 13:14"/>
        </van-cell-group>

        <dl class="panel">
            <dt>
                <p class="title">签到情况</p>
                <span class="tips">(4/12)</span>
            </dt>

            <dd>
                <!--
                    签到应该是只能签自己的，
                    因此我觉得第一个是显示的自己的打卡状态
                 -->
                <div class="col-wrap">
                    <div class="signin-item do-sign-in">
                        <p class="name">小小俊</p>
                        <p class="state">立即签到</p>
                    </div>
                </div>

                <!-- 样式会再调整下 -->
                <div v-for="n in 5" :key="n" class="col-wrap">
                    <div class="signin-item no-signed-in">
                        <p class="name">小小俊{{n}}</p>
                        <p class="state">未签到</p>
                    </div>
                </div>

                <div v-for="n in 5" :key="n" class="col-wrap">
                    <div class="signin-item sign-in">
                        <p class="name">小小俊{{n}}</p>
                        <time>已签到</time>
                    </div>
                </div>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: 'MeetSignInDetails',
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
    }
    .panel {
        margin-top: .3rem;
        padding-bottom: .64rem;
        background: #fff;
        user-select: none;

        .signin-item {
            display: flex;
            flex-direction: column;
            padding: .15rem .1rem;
            border-radius: .12rem;
            border: 1px solid;
            text-align: center;

            &.no-signed-in {
                color: #ee0a24;
            }
            &.do-sign-in {
                color: #1989fa;
            }
            &.sign-in {
                color: #07c160;
            }
            .name {
                margin-bottom: .05rem;
                font-size: .28rem;
            }
            .state {
                font-size: .24rem;
            }
            time {
                font-size: .24rem;
            }
        }
        dt {
            display: flex;
            align-items: center;
            padding: .3rem;

            .title {
                font-size: .3rem;
                font-weight: bold;
                color: $color-1;
            }
            .tips {
                margin-left: .2rem;
                color: #999;
            }
        }
        dd {
            display: flex;
            flex-wrap: wrap;
            margin-left: -.1rem;
            padding: 0 .3rem .3rem;

            .col-wrap {
                flex-basis: 25%;
                padding-left: .1rem;
                padding-top: .1rem;
            }
        }
    }
</style>
