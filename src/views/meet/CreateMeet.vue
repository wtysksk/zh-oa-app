<template>
    <div class="component-content">
        <van-form>
            <van-field label="会议室名称："  readonly input-align="right" placeholder="请输入会议室名称" />
            <van-field label="电话："  readonly input-align="right" placeholder="请输入电话" />

            <van-field readonly input-align="right" placeholder="请输入人数" name="stepper" label="人数：">
                <template #input>
                    <van-stepper v-model="stepper" />
                </template>
            </van-field>

            <!-- 我就写一个，剩下的自己写 -->
            <van-field
                readonly
                clickable
                :value="type"
                input-align="right"
                label="设备："
                placeholder="点击选择类型"
                right-icon="arrow-down"
                @click="showTypePicker = true"
            />

            <van-field label="相关附件：">
                <template #input>
                    <van-uploader v-model="uploader" />
                </template>
            </van-field>

            <van-field
                v-model="message"
                rows="2"
                autosize
                label="备注："
                type="textarea"
                maxlength="50"
                placeholder="请输入留言"
                show-word-limit
            />
        </van-form>

        <van-popup v-model="showTypePicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="typePicker"
                @confirm="onTypePickerConfirm"
                @cancel="showTypePicker = false"
            />
        </van-popup>

        <div class="tools">
            <van-button class="btn-edit" size="normal" type="default">取消</van-button>
            <van-button class="btn-edit" size="normal" type="info">提交</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MeetCreateMeet',
        components: {
            //
        },
        data() {
            return {
                type: '',
                date: '',
                message: '',

                uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],

                showTypePicker: false, // 流程类型弹窗
                showCalendar: false, // 显示日历弹窗

                typePicker: ['类型1', '类型2', '类型3'],
                showTypePicker: false,
            };
        },
        methods: {
            onTypePickerConfirm(value) {
                this.type = value;
                this.showTypePicker = false;
            }
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
