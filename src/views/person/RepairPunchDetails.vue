<template>
    <div class="component-content">
        <van-cell-group>
            <van-cell value="查看更多记录" is-link>
            <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-title">审批结果：</span>
                    <van-tag plain type="danger">不同意</van-tag>
                </template>
            </van-cell>

            <van-cell title="审批编号" value="1234567890"/>
            <van-cell title="所在部门" value="大前端部"/>
            <van-cell title="补卡班次" value="2019-05-24 15:34"/>
            <van-cell title="补卡时间" value="2019-05-24 15:34"/>
            <van-cell title="补卡理由" value="熬夜写代码，写到不能自拔"/>
        </van-cell-group>

        <dl class="step-info">
            <dt>流程信息</dt>

            <dd v-for="n in 5" class="step-item" :key="n">
                <i class="line"></i>
                <i
                    style="background: url('https://cdn.weipaitang.com/static/20200604efeab889-5439-b8895439-6fe1-d1a1fde73ae7-W1344H1344') no-repeat center / cover;"
                    class="user-img">
                </i>
                <span class="user-name">前端吴彦祖{{n}}</span>
                <van-tag plain type="success">已同意</van-tag>
                <time>2019-05-24 15:34</time>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: 'PersonRepairPunchDetails',
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
        padding-bottom: .64rem;
        min-height: 100vh;
        background: $color-2;
    }
    .step-info {
        margin-top: .3rem;
        user-select: none;
        background: #fff;

        dt {
            padding: .3rem;
            font-size: .3rem;
            font-weight: bold;
        }
    }
    .step-item {
        position: relative;
        display: flex;
        align-items: center;
        padding: .3rem .3rem .3rem .6rem;
        transition: all .3s;

        &:active {
            background: #f3f3f3;
        }
        &:first-of-type {
            .line {
                top: .7rem;

                &:before,
                &:after {
                    margin-top: -.25rem;
                }
            }
        }
        &:last-child {
            .line {
                bottom: .7rem;

                &:before,
                &:after {
                    margin-top: .25rem;
                }
            }
        }
        .line {
            position: absolute;
            left: .3rem; top: 0; bottom: 0;
            width: 1px;
            background: #eee;

            &:before,
            &:after {
                position: absolute;
                content: "";
                left: 50%; top: 50%;
                transform: translate(-50%, -50%);
            }
            &:before {
                width: .26rem; height: .26rem;
                border: 1px solid #2e7ae6;
                border-radius: 50%;
                background: #fff;
            }
            &:after {
                width: .14rem; height: .14rem;
                border-radius: 50%;
                overflow: hidden;
                background: #2e7ae6;
            }
        }
        .user-img {
            width: .8rem; height: .8rem;
            border-radius: .08rem;
            background: rgba(46, 122, 230, .1) url("../../assets/images/demo-lijun.png") no-repeat center / 60% 60%;
        }
        .user-name {
            margin: 0 .2rem;
            font-size: .3rem;
            color: #333;
        }
        time {
            width: 0;
            flex-grow: 1;
            font-size: .24rem;
            color: #999;
            text-align: right;
        }
    }
</style>
