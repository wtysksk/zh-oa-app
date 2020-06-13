<template>
    <div class="component-content">
        <van-form>
            <van-field label="申请部门：" input-align="right" placeholder="请输入申请部门" />
            <van-field label="申请人：" input-align="right" placeholder="请输入申请人" />

            <!-- 我就写一个，剩下的自己写 -->
            <van-field
                readonly
                clickable
                :value="type"
                input-align="right"
                label="补卡班次："
                placeholder="点击选择类型"
                right-icon="arrow-down"
                @click="showTypePicker = true"
            />

            <van-field
                readonly
                clickable
                :value="date"
                label-width="120px"
                label="补卡时间："
                input-align="right"
                right-icon="calender-o"
                placeholder="点击选择时间"
                @click="show = true"
            />

            <van-field
                v-model="message"
                rows="2"
                autosize
                label="补卡事由："
                type="textarea"
                maxlength="50"
                placeholder="请输入补卡事由"
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

        <van-popup v-model="show" position="bottom">
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                title="选择年月日"
                :min-date="minDate"
                :max-date="maxDate"
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
        name: 'PersonCreateRepairPunch',
        components: {
            //
        },
        data() {
            return {
                type: '',
                date: '',
                message: '',
                show: false,
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
                showTypePicker: false, // 流程类型弹窗
                showCalendar: false, // 显示日历弹窗
                typePicker: ['调休', '年假', '病假'],
                showTypePicker: false,
            };
        },
        methods: {
            showPopup() {
                this.show = true;
            },
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
