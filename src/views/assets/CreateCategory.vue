<template>
    <div class="component-content">
        <van-form>
            <van-field label="分类名称：" input-align="right" placeholder="请输入分类名称..." />
            <van-field label="分类编号：" input-align="right" placeholder="请输入分类编号" />

            <van-field
                v-model="message"
                rows="2"
                autosize
                label="备注信息："
                type="textarea"
                maxlength="50"
                placeholder="请输入备注信息..."
                show-word-limit
            />
        </van-form>

        <div class="tools">
            <van-button class="btn-edit" size="normal" type="danger">删除</van-button>
            <van-button class="btn-edit" size="normal" type="info">提交</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AssetsCreateCategory',
        components: {
            //
        },
        data() {
            return {
                message: ''
            };
        },
        methods: {

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
