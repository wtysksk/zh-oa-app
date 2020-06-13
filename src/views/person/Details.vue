<template>
    <div class="component-content">
        <!--
            我的档案，这个页面是一个仅读的页面，
            按理说应该还有一个编辑页面，如果需要编辑页面，也是这个页面。把 readonly 属性去除即可

            还有一个新建页面，理论上也可以复用这个页面，
            但是为了简单化，新建页面做成单独一个
         -->
        <van-form>
            <van-field readonly label-width="120px" input-align="right" label="工号：" value="475"/>
            <van-field readonly label-width="120px" input-align="right" label="档案姓名：" value="前端吴彦祖"/>
            <van-field readonly label-width="120px" input-align="right" label="状态：" value="在职"/>
            <van-field readonly label-width="120px" input-align="right" label="所属公司：" value="杭州微拍堂"/>
            <van-field readonly label-width="120px" input-align="right" label="部门：" value="前端部"/>
            <van-field readonly label-width="120px" input-align="right" label="岗位：" value="前端落魄崽"/>
            <van-field readonly label-width="120px" input-align="right" label="参加工作时间：" value="2020-05-20"/>
            <van-field readonly label-width="120px" input-align="right" label="加入本单位时间：" value="2020-05-20"/>
            <van-field readonly label-width="120px" input-align="right" label="合同开始时间：" value="2020-05-20"/>
            <van-field readonly label-width="120px" input-align="right" label="合同结束时间：" value="2020-05-20"/>
            <van-field readonly label-width="120px" input-align="right" label="出生年月：" value="2020-05-20"/>
            <van-field readonly label-width="120px" input-align="right" label="性别：" value="男"/>
            <van-field readonly label-width="120px" input-align="right" label="学历：" value="本科"/>
            <van-field readonly label-width="120px" input-align="right" label="婚姻状况：" value="母胎单身狗"/>
            <van-field readonly label-width="120px" input-align="right" label="政治面貌：" value="群众"/>
            <van-field readonly label-width="120px" input-align="right" label="民族：" value="汉"/>
            <van-field readonly label-width="120px" input-align="right" label="身份证号：" value="12345678"/>
            <van-field readonly label-width="120px" input-align="right" label="贯籍" value="江西"/>
        </van-form>

        <div class="tools">
            <van-button class="btn-edit" size="normal" type="default">取消</van-button>
            <van-button class="btn-edit" size="normal" type="info">确认修改</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PersonDetails',
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
        padding-bottom: 1rem;
    }
    .tools {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        padding: 0 .3rem;
        user-select: none;

        .btn-edit {
            width: 0;
            flex-grow: 1;
            border-radius: .12rem;

            & + .btn-edit {
                margin-left: .2rem;
            }
        }
    }
</style>
