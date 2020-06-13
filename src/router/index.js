import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 人事管理路由
const personRoute = [
    {
        path: '/person/index', // 人事管理
        component: () => import('@/views/person/Index')
    },
    {
        path: '/person/details',  // 我的档案
        component: () => import('@/views/person/Details')
    },
    {
        path: '/person/createPerson', // 新建人员
        component: () => import('@/views/person/CreatePerson')
    },
    {
        path: '/person/searchPerson', // 档案查询
        component: () => import('@/views/person/SearchPerson')
    },
    {
        path: '/person/clockIn', // 考勤打卡
        component: () => import('@/views/person/ClockIn')
    },
    {
        path: '/person/punchRecord', // 打卡记录
        component: () => import('@/views/person/PunchRecord')
    },
    {
        path: '/person/approval', // 我的审批
        component: () => import('@/views/person/Approval')
    },
    {
        path: '/person/createRepairPunch', // 创建补卡申请
        component: () => import('@/views/person/CreateRepairPunch')
    },
    {
        path: '/person/repairPunchDetails', // 补卡详情
        component: () => import('@/views/person/RepairPunchDetails')
    }
];

// 流程管理路由
const processRoute = [
    {
        path: '/process/index', // 流程管理
        component: () => import('@/views/process/Index')
    },
    {
        path: '/process/createList', // 创建流程列表
        component: () => import('@/views/process/CreateList')
    },
    {
        path: '/process/create', // 新建流程
        component: () => import('@/views/process/Create')
    },
    {
        path: '/process/list', // 代办事宜
        component: () => import('@/views/process/List')
    },
    {
        path: '/process/search', // 高级搜索
        component: () => import('@/views/process/Search')
    },
];

// 车辆管理路由
const carRoute = [
    {
        path: '/car/index', // 车辆管理
        component: () => import('@/views/car/Index')
    },
    {
        path: '/car/createUseCar',  // 创建用车申请
        component: () => import('@/views/car/CreateUseCar')
    },
    {
        path: '/car/useStateList', // 车辆使用情况
        component: () => import('@/views/car/UseStateList')
    },
    {
        path: '/car/search', // 高级索索
        component: () => import('@/views/car/Search')
    },
    {
        path: '/car/list', // 车辆列表
        component: () => import('@/views/car/List')
    }
];

// 资产管理路由
const assetsRoute = [
    {
        path: '/assets/index', // 资产管理
        component: () => import('@/views/assets/Index')
    },
    {
        path: '/assets/createCategory', // 新建分类
        component: () => import('@/views/assets/CreateCategory')
    },
    {
        path: '/assets/categoryList', // 分类管理
        component: () => import('@/views/assets/CategoryList')
    },
    {
        path: '/assets/search', // 高级搜索
        component: () => import('@/views/assets/Search')
    },
    {
        path: '/assets/list', // 资产清单
        component: () => import('@/views/assets/List')
    },
    {
        path: '/assets/details', // 资产详情
        component: () => import('@/views/assets/Details')
    }
];

// 会议管理
const meetRoute = [
    {
        path: '/meet/index', // 会议管理
        component: () => import('@/views/meet/Index')
    },
    {
        path: '/meet/list', // 签到详情
        component: () => import('@/views/meet/List')
    },
    {
        path: '/meet/signInDetails', // 签到详情
        component: () => import('@/views/meet/SignInDetails')
    },
    {
        path: '/meet/createMeet', // 新建会议
        component: () => import('@/views/meet/CreateMeet')
    }
];

const routes = [
    // 临时路由，记得删除哦
    {
        path: '/', // 这个页面不需要 只是方便你们查看所有页面的入口
        component: () => import('@/views/template/Navigation')
    },
    {
        path: '/index', // 首页
        component: () => import('@/views/index/Index')
    },
    ...personRoute,
    ...processRoute,
    ...carRoute,
    ...assetsRoute,
    ...meetRoute,
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
