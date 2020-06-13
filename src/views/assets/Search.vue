<template>
    <div class="component-content">
        <van-form>
            <van-field v-model="title" label="资产登记号：" placeholder="请输入流程标题" />
            <van-field v-model="order" label="资产名称：" placeholder="请输入流程编号" />

            <!-- 我就写一个，剩下的自己写 -->
            <van-field
                readonly
                clickable
                :value="type"
                label="资产分类："
                placeholder="点击选择资产分类"
                right-icon="arrow-down"
                @click="showTypePicker = true"
            />

            <van-field v-model="order" label="资产编码：" placeholder="请输入资产编码" />

            <van-field
                readonly
                clickable
                label="登记操作员："
                right-icon="arrow-down"
                placeholder="请选择用户"
            />
        </van-form>

        <div class="tools">
            <van-button class="btn-search" loading size="normal" block square type="info" loading-text="查询中..." />
        </div>

        <van-popup v-model="showTypePicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="typePicker"
                @confirm="onTypePickerConfirm"
                @cancel="showTypePicker = false"
            />
        </van-popup>
    </div>
</template>

<script>
    export default {
        name: 'CarSearch',
        components: {
            //
        },
        data() {
            return {
                title: '',
                order: '',
                type: '',
                showTypePicker: false, // 流程类型弹窗
                typePicker: ['分类1', '分类2', '分类3'],
            };
        },
        methods: {
            onTypePickerConfirm(value) {
                this.type = value;
                this.showTypePicker = false;
            },
        }
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
    }
    .tools {
        margin-top: 1rem;
        padding: 0 .3rem;
        user-select: none;

        .btn-search {
            border-radius: .12rem;
        }
    }
</style>
