# 智恒oa-app


### 如何启动这个项目
 - npm install (仅第一次需要)
 - npm run serve （开发）
 - npm run build （生产）
 - npm run lint （代码校验）


### 用了什么框架
 - 有赞的 [vant][1]

### 前端崽的开发环境
 - mac os 10.15.4 (19E287)
 - node v-11.15.0
 - npm v-6.7.0


### 前端崽的提交规范
 - feat: 新增一个页面
 - fix：修补bug
 - style： 格式（不影响代码运行的变动）
 - chore：构建过程或辅助工具的变动
 - refactor：重构（即不是新增功能，也不是修改bug的代码变动）
 - docs：文档


### 相比原生脚手架靓仔做了哪些改动
 - 移动端适配
 - 代码校验规则更改
 - 修改一些文件的代码排版
 - 基础样式重置
 - 导入全局的mixin
 - 规划一些静态资源文件目录


### 前端崽有什么话要说
 - 路由目前都是一级，建议实际使用时用二级路由形式，例如 /car/createUseCar (/car 标识都是关于车的页面)
 - 其实我配置了一些代码书写规范校验  如果愿意的话，可以去修改这些规则，然后让团队去遵守，良好的书写习惯从你我做起

[1]: https://youzan.github.io/vant/#/zh-CN/