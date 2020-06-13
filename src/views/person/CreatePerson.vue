<template>
    <div class="component-content">
        <!--
            我看设计稿这个页面需要tab选项卡
            不知道是UI画错了还是怎么的，我是觉得不需要，如果后面需要找我补
         -->
        <van-form>
            <van-field label-width="120px" input-align="right" placeholder="请输入工号..." label="工号："/>
            <van-field label-width="120px" input-align="right" placeholder="请输入档案姓名..." label="档案姓名："/>

            <!--
                我就写一个示范一下，像是学历、政治面貌也是同理
             -->
            <van-field
                readonly
                clickable
                :value="state"
                label-width="120px"
                label="状态："
                placeholder="点击选择状态"
                input-align="right"
                right-icon="arrow-down"
                @click="showStatePicker = true"
            />

            <van-field label-width="120px" input-align="right" placeholder="请输入所属公司..." label="所属公司："/>
            <van-field label-width="120px" input-align="right" placeholder="请输入部门..." label="部门："/>
            <van-field label-width="120px" input-align="right" placeholder="请输入岗位..." label="岗位："/>

            <van-field
                readonly
                clickable
                :value="date"
                label-width="120px"
                label="参加工作时间："
                input-align="right"
                right-icon="calender-o"
                placeholder="点击选择时间"
                @click="showCalendar = true"
            />

            <van-field label-width="120px" input-align="right" placeholder="请输入加入本单位时间..." label="加入本单位时间："/>
            <van-field label-width="120px" input-align="right" placeholder="请输入合同开始时间..." label="合同开始时间："/>
            <van-field label-width="120px" input-align="right" placeholder="请输入合同结束时间..." label="合同结束时间："/>
            <van-field label-width="120px" input-align="right" placeholder="请输入出生年月..." label="出生年月："/>

            <van-field label-width="120px" input-align="right" label="性别：">
                <template #input>
                    <van-radio-group v-model="sex" direction="horizontal">
                        <van-radio name="1">男</van-radio>
                        <van-radio name="2">女</van-radio>
                    </van-radio-group>
                </template>
            </van-field>

            <van-field label-width="120px" input-align="right" placeholder="请选择学历" label="学历："/>
            <van-field label-width="120px" input-align="right" placeholder="请选择婚姻状况" label="婚姻状况："/>
            <van-field label-width="120px" input-align="right" placeholder="请选择政治面貌" label="政治面貌："/>
            <van-field label-width="120px" input-align="right" placeholder="请输入民族..." label="民族："/>
            <van-field label-width="120px" input-align="right" placeholder="请输入身份证号..." label="身份证号："/>
            <van-field label-width="120px" input-align="right" placeholder="请输入贯籍..." label="贯籍"/>
        </van-form>

        <div class="tools">
            <van-button class="btn-edit" size="normal" type="default">取消</van-button>
            <van-button class="btn-edit" size="normal" type="info">保存</van-button>
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
        name: 'PersonCreatePerson',
        components: {
            //
        },
        data() {
            return {
                state: '',
                date: '',
                sex: '1',

                showStatePicker: false, // 流程类型弹窗
                showCalendar: false, // 显示日历弹窗
                statePicker: ['状态1', '状态2', '状态3'],
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
