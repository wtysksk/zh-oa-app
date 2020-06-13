<template>
    <div class="component-content">
        <van-form>
            <van-field v-model="title" label="车型名称：" placeholder="请输入车型名称" />
            <van-field v-model="order" label="车牌号：" placeholder="请输入车牌号" />

            <!-- 我就写一个，剩下的自己写 -->
            <van-field
                readonly
                clickable
                :value="type"
                label="状态："
                placeholder="点击选择状态"
                right-icon="arrow-down"
                @click="showTypePicker = true"
            />

            <van-field
                readonly
                clickable
                :value="date"
                label="创建日期："
                right-icon="calender-o"
                placeholder="点击选择日期"
                @click="showCalendar = true"
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

        <!-- 日历 -->
        <van-calendar v-model="showCalendar" @confirm="onCalendarConfirm" />
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

                user: '',
                department: '',
                state: '',
                date: '',

                showTypePicker: false, // 流程类型弹窗
                showCalendar: false, // 显示日历弹窗

                typePicker: ['状态1', '状态2', '状态3'],
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
