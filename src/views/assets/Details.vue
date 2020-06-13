<template>
    <div class="component-content">
        <van-form>
            <van-field label-width="120px" input-align="right" placeholder="请输入登记号" label="登记号："/>
            <van-field label-width="120px" input-align="right" placeholder="请输入资产名称" label="资产名称："/>

            <van-field
                readonly
                clickable
                :value="state"
                label-width="120px"
                label="资产分类："
                placeholder="点击选择状态"
                input-align="right"
                right-icon="arrow-down"
                @click="showStatePicker = true"
            />

            <van-field label-width="120px" input-align="right" placeholder="请输入资产编码" label="资产编码："/>

            <van-field
                readonly
                clickable
                :value="date"
                label-width="120px"
                label="生产日期："
                input-align="right"
                right-icon="calender-o"
                placeholder="点击选择时间"
                @click="showCalendar = true"
            />

            <van-field label-width="120px" input-align="right" placeholder="请输入产品价格" label="产品价格："/>
            <van-field label-width="120px" input-align="right" placeholder="请输入产品型号" label="产品型号："/>

            <van-field label-width="120px" input-align="right" placeholder="请输入单位" label="单位："/>
            <van-field label-width="120px" input-align="right" placeholder="请输入数量" label="数量："/>

            <van-field
                v-model="message"
                rows="2"
                autosize
                label="备注信息："
                type="textarea"
                maxlength="50"
                placeholder="请输入备注信息"
                show-word-limit
            />

            <van-field label="相关附件：">
                <template #input>
                    <van-uploader v-model="uploader" />
                </template>
            </van-field>
        </van-form>

        <div class="tools">
            <van-button class="btn-edit" size="normal" type="danger">删除</van-button>
            <van-button class="btn-edit" size="normal" type="info">提交</van-button>
        </div>

        <van-popup v-model="showStatePicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="statePicker"
                @confirm="onStatePickerConfirm"
                @cancel="showStatePicker = false"
            />
        </van-popup>

        <!-- 日历 -->
        <van-calendar v-model="showCalendar" @confirm="onCalendarConfirm" />
    </div>
</template>

<script>
    export default {
        name: 'AssetsDetails',
        components: {
            //
        },
        data() {
            return {
                state: '',
                date: '',
                sex: '1',
                message: '',
                uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],

                showStatePicker: false, // 流程类型弹窗
                showCalendar: false, // 显示日历弹窗
                statePicker: ['电子产品', '计算机设备', '办公设备'],
            };
        },
        methods: {
            onCalendarConfirm(date) {
                this.date = `${date.getMonth() + 1}/${date.getDate()}`;
                this.showCalendar = false;
            },
            onStatePickerConfirm(value) {
                this.state = value;
                this.showStatePicker = false;
            },
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
