# 鲨鲨 - 一个 Vue UI 组件

## 介绍

这是本人在学习 Vue 过程中做的一个 UI 框架，希望对你有所帮助。

## 开始使用

1. 添加 CSS 样式
   使用本框架前，请在 CSS 中开启 border-box

    ```css
    *,*::before,*::after{box-sizing: border-box;}
    ```
   IE 8 及以上浏览器都支持此样式

   你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    ```css
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
   IE 15 及以上浏览器都支持此样式

2. 安装 shashark
   ```
   npm i --save shashark
   ```

3. 引入 shashark
   ```
   import {Button, ButtonGroup, Icon} from 'shashark'
   import 'shashark/dist/index.css'
   
   export default {
      name: 'app',
      components: {
         HelloWorld,
         'sh-button': Button,
         'sh-icon': Icon
      }
   }
   ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码