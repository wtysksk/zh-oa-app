<template>
    <div class="component-content">
        <van-form>
            <van-field v-model="userName" label="申请人："  readonly input-align="right" placeholder="请输入流程标题" />
            <van-field v-model="userName" label="申请人部门："  readonly input-align="right" placeholder="请输入流程标题" />
            <van-field v-model="userName" label="所属公司："  readonly input-align="right" placeholder="请输入流程标题" />
            <van-field v-model="userName" label="岗位："  readonly input-align="right" placeholder="请输入流程标题" />
            <van-field v-model="userName" label="申请日期："  readonly input-align="right" placeholder="请输入流程标题" />

            <!-- 我就写一个，剩下的自己写 -->
            <van-field
                readonly
                clickable
                :value="type"
                input-align="right"
                label="请假类型："
                placeholder="点击选择类型"
                right-icon="arrow-down"
                @click="showTypePicker = true"
            />

            <van-field
                readonly
                clickable
                :value="date"
                label="开始日期："
                right-icon="calender-o"
                input-align="right"
                placeholder="点击选择日期"
                @click="showCalendar = true"
            />

            <van-field
                readonly
                clickable
                :value="date"
                label="结束日期："
                right-icon="calender-o"
                input-align="right"
                placeholder="点击选择日期"
                @click="showCalendar = true"
            />

            <van-field label="请假天数：" input-align="right" placeholder="请假天数" />

            <van-field
                v-model="message"
                rows="2"
                autosize
                label="请假事由："
                type="textarea"
                maxlength="50"
                placeholder="请输入留言"
                show-word-limit
            />

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

            <van-field label="相关附件：">
                <template #input>
                    <van-uploader v-model="uploader" />
                </template>
            </van-field>
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
            <van-button class="btn-edit" size="normal" type="default">保存</van-button>
            <van-button class="btn-edit" size="normal" type="default">流程图</van-button>
            <van-button class="btn-edit" size="normal" type="info">提交</van-button>
        </div>

        <!-- 日历 -->
        <van-calendar v-model="showCalendar" @confirm="onCalendarConfirm" />
    </div>
</template>

<script>
    export default {
        name: 'ProcessCreate',
        components: {
            //
        },
        data() {
            return {
                userName: '自动获取',
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
            onCalendarConfirm(date) {
                this.date = `${date.getMonth() + 1}/${date.getDate()}`;
                this.showCalendar = false;
            },
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
