(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b890fb86"],{4850:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"component-content"},[a("van-form",[a("van-field",{attrs:{label:"申请部门：","input-align":"right",placeholder:"请输入申请部门"}}),a("van-field",{attrs:{label:"申请人：","input-align":"right",placeholder:"请输入申请人"}}),a("van-field",{attrs:{readonly:"",clickable:"",value:e.type,"input-align":"right",label:"补卡班次：",placeholder:"点击选择类型","right-icon":"arrow-down"},on:{click:function(t){e.showTypePicker=!0}}}),a("van-field",{attrs:{readonly:"",clickable:"",value:e.date,"label-width":"120px",label:"补卡时间：","input-align":"right","right-icon":"calender-o",placeholder:"点击选择时间"},on:{click:function(t){e.show=!0}}}),a("van-field",{attrs:{rows:"2",autosize:"",label:"补卡事由：",type:"textarea",maxlength:"50",placeholder:"请输入补卡事由","show-word-limit":""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),a("van-popup",{attrs:{position:"bottom"},model:{value:e.showTypePicker,callback:function(t){e.showTypePicker=t},expression:"showTypePicker"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:e.typePicker},on:{confirm:e.onTypePickerConfirm,cancel:function(t){e.showTypePicker=!1}}})],1),a("van-popup",{attrs:{position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("van-datetime-picker",{attrs:{type:"date",title:"选择年月日","min-date":e.minDate,"max-date":e.maxDate},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1),a("div",{staticClass:"tools"},[a("van-button",{staticClass:"btn-edit",attrs:{size:"normal",type:"default"}},[e._v("取消")]),a("van-button",{staticClass:"btn-edit",attrs:{size:"normal",type:"info"}},[e._v("提交")])],1)],1)},o=[],i=a("ade3"),r={name:"PersonCreateRepairPunch",components:{},data:function(){return Object(i["a"])({type:"",date:"",message:"",show:!1,minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),currentDate:new Date,showTypePicker:!1,showCalendar:!1,typePicker:["调休","年假","病假"]},"showTypePicker",!1)},methods:{showPopup:function(){this.show=!0},onTypePickerConfirm:function(e){this.type=e,this.showTypePicker=!1}}},l=r,c=(a("faf1"),a("2877")),s=Object(c["a"])(l,n,o,!1,null,"7254d8dd",null);t["default"]=s.exports},9844:function(e,t,a){},ade3:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},faf1:function(e,t,a){"use strict";var n=a("9844"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-b890fb86.552c05af.js.map