/**
 * const prefixCls = 'style-490823';
 * const images = '/static/images/components/Global';
 * @Author: czy0729
 * @Date: 2018-06-20 16:57:49
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-18 14:54:44
 * @Path m.benting.com.cn \components\Global\index.js
 */
import React from 'react';
import Styles from '@styles';
import Utils from '@utils';

const images = Utils.cdn('/static/images/components/Global');

export default () => (
  <React.Fragment>
    {/* reset */}
    <style jsx global>{`
      * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
        -webkit-font-smoothing: antialiased;
      }
      html,
      body,
      font,
      input,
      select,
      button,
      p,
      textarea {
        font-family: ${Styles.font_family};
        font-size: 0.28rem;
        font-weight: ${Styles.font_normal};
        line-height: 1;
      }
      html,
      body {
        width: 100%;
      }
      body {
        color: ${Styles.color_desc};
        overflow-x: hidden;
        background: ${Styles.color_bg};
        -webkit-touch-callout: none;
        -webkit-text-size-adjust: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-user-select: none;
      }
      img {
        display: inline-block;
        vertical-align: top;
        outline-width: 0;
      }
      a {
        color: inherit;
      }
      /* 在X5新内核Blink中，在排版页面的时候，会主动对字体进行放大，会检测页面中的主字体，
        当某一块字体在我们的判断规则中，认为字号较小，并且是页面中的主要字体，并且是页面中的主要字体，
        就会采取主动放大的操作。然而这不是我们想要的，可以采取给最大高度解决。*/
      .uc div,
      .uc p,
      .uc span,
      .uc a,
      .uc button,
      .uc input,
      .uc textarea,
      .uc img,
      .uc i,
      .uc ul,
      .uc li,
      .uc form,
      .uc label {
        max-height: 100000px;
      }
    `}</style>

    {/* antd-mobile reset v2 */}
    <style jsx global>{`
      /* <List.Item> 样式 */
      .am-list-body:before,
      .am-list-body:after {
        content: initial !important;
      }
      .am-list-item {
        padding-left: ${Styles.wind} !important;
      }
      .am-list-item .am-list-line:after {
        content: initial !important;
      }
      .am-list-item .am-list-line {
        padding-right: ${Styles.wind} !important;
        border-bottom: ${Styles.border} !important;
      }
      .am-list-body > .am-list-item:nth-last-child(1) .am-list-line {
        border-bottom: 0 !important;
      }
      .am-list-item .am-list-line .am-list-content {
        padding-top: 0.24rem !important;
        padding-bottom: 0.24rem !important;
        line-height: 1;
        color: inherit;
      }
      .am-list-item .am-list-line .am-list-extra {
        line-height: 1;
      }
      .am-list-item .am-list-thumb:first-child {
        margin-right: 0.24rem;
      }

      /* 表单错误按钮看不全 */
      .am-list-item.am-input-error .am-input-error-extra {
        margin-top: 0.02rem;
      }

      /* <Badge> 样式 */
      .am-badge-dot {
        background: ${Styles.color_danger};
      }
    `}</style>

    {/* utils v2 */}
    <style jsx global>{`
      /* margin-top */
      .mt-4 {
        margin-top: 0.04rem !important;
      }
      .mt-6 {
        margin-top: 0.06rem !important;
      }
      .mt-xs,
      .mt-8 {
        margin-top: 0.08rem !important;
      }
      .mt-10 {
        margin-top: 0.1rem !important;
      }
      .mt-12 {
        margin-top: 0.12rem !important;
      }
      .mt-14 {
        margin-top: 0.14rem !important;
      }
      .mt-d,
      .mt-sm,
      .mt-16 {
        margin-top: 0.16rem !important;
      }
      .mt-18 {
        margin-top: 0.18rem !important;
      }
      .mt-20 {
        margin-top: 0.2rem !important;
      }
      .mt-22 {
        margin-top: 0.22rem !important;
      }
      .mt-24 {
        margin-top: 0.24rem !important;
      }
      .mt-28 {
        margin-top: 0.28rem !important;
      }
      .mt-md,
      .mt-32 {
        margin-top: 0.32rem !important;
      }
      .mt-36 {
        margin-top: 0.36rem !important;
      }
      .mt-40 {
        margin-top: 0.4rem !important;
      }
      .mt-42 {
        margin-top: 0.42rem !important;
      }
      .mt-44 {
        margin-top: 0.44rem !important;
      }
      .mt-48 {
        margin-top: 0.48rem !important;
      }
      .mt-52 {
        margin-top: 0.52rem !important;
      }
      .mt-60 {
        margin-top: 0.6rem !important;
      }
      .mt-64 {
        margin-top: 0.64rem !important;
      }
      .mt-72 {
        margin-top: 0.72rem !important;
      }
      .mt-96 {
        margin-top: 0.96rem !important;
      }

      /* margin-left */
      .ml-4 {
        margin-left: 0.04rem !important;
      }
      .ml-xs,
      .ml-8 {
        margin-left: 0.08rem !important;
      }
      .ml-12 {
        margin-left: 0.12rem !important;
      }
      .ml-sm,
      .ml-16 {
        margin-left: 0.16rem !important;
      }
      .ml-20 {
        margin-left: 0.2rem !important;
      }
      .ml-md,
      .ml-32 {
        margin-left: 0.32rem !important;
      }
      .ml-42 {
        margin-left: 0.42rem !important;
      }
      .ml-54 {
        margin-left: 0.54rem !important;
      }

      /* font-size */
      .t-20 {
        font-size: 0.2rem !important;
        line-height: 1.5;
      }
      .t-22 {
        font-size: 0.22rem !important;
        line-height: 1.5;
      }
      .t-24 {
        font-size: 0.24rem !important;
        line-height: 1.5;
      }
      .t-26 {
        font-size: 0.26rem !important;
        line-height: 1.5;
      }
      .t-sm,
      .t-28 {
        font-size: 0.28rem !important;
        line-height: 1.5;
      }
      .t-30 {
        font-size: 0.3rem !important;
        line-height: 1.5;
      }
      .t-32 {
        font-size: 0.32rem !important;
        line-height: 1.5;
      }
      .t-34 {
        font-size: 0.34rem !important;
        line-height: 1.5;
      }
      .t-36 {
        font-size: 0.36rem !important;
        line-height: 1.5;
      }
      .t-40 {
        font-size: 0.4rem !important;
        line-height: 1.5;
      }
      .t-48 {
        font-size: 0.48rem !important;
        line-height: 1.5;
      }
      .t-52 {
        font-size: 0.52rem !important;
        line-height: 1.5;
      }
      .t-56 {
        font-size: 0.56rem !important;
        line-height: 1.5;
      }
      .t-64 {
        font-size: 0.64rem !important;
        line-height: 1.5;
      }

      /* line-height */
      .l-28 {
        min-height: 0.28rem;
        line-height: 0.28rem !important;
      }
      .l-32 {
        min-height: 0.32rem;
        line-height: 0.32rem !important;
      }
      .l-34 {
        min-height: 0.34rem;
        line-height: 0.34rem !important;
      }
      .l-36 {
        min-height: 0.36rem;
        line-height: 0.36rem !important;
      }
      .l-40 {
        min-height: 0.4rem;
        line-height: 0.4rem !important;
      }
      .l-42 {
        min-height: 0.42rem;
        line-height: 0.42rem !important;
      }
      .l-44 {
        min-height: 0.44rem;
        line-height: 0.44rem !important;
      }
      .l-48 {
        min-height: 0.48rem;
        line-height: 0.48rem !important;
      }
      .l-50 {
        min-height: 0.5rem;
        line-height: 0.5rem !important;
      }
      .l-56 {
        min-height: 0.56rem;
        line-height: 0.56rem !important;
      }
      .l-64 {
        min-height: 0.64rem;
        line-height: 0.64rem !important;
      }
      .l-66 {
        min-height: 0.66rem;
        line-height: 0.66rem !important;
      }
      .l-80 {
        min-height: 0.8rem;
        line-height: 0.8rem !important;
      }

      /* color */
      .t-primary {
        color: ${Styles.color_primary} !important;
      }
      .t-danger {
        color: ${Styles.color_danger} !important;
      }
      .t-warning {
        color: ${Styles.color_warning} !important;
      }
      .t-void {
        color: #fff !important;
      }
      .t-title {
        color: ${Styles.color_title} !important;
      }
      .t-sub {
        color: ${Styles.color_sub} !important;
      }
      .t-icon {
        color: #ccc !important;
      }

      /* text other */
      .t-b {
        font-weight: ${Styles.font_bold} !important;
      }
      .t-m {
        font-weight: ${Styles.font_medium} !important;
      }
      .t-c {
        text-align: center !important;
      }
      .t-r {
        text-align: right !important;
      }
      .t-c1 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        word-wrap: break-word;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .t-c2 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      /* letter-spacing */
      .ls-o1 {
        letter-spacing: -0.01rem;
      }
      .ls-1 {
        letter-spacing: 0.01rem;
      }

      /* other useful */
      .p-w {
        padding-left: ${Styles.wind};
        padding-right: ${Styles.wind};
      }
      .user-select {
        -webkit-user-select: text !important;
      }
    `}</style>

    {/* tool v2 */}
    <style jsx global>{`
      /* 180701 wrap */
      .tool-wrap {
        padding: 0.32rem ${Styles.wind} 0.48rem;
        background: ${Styles.color_theme};
      }
      .tool-wrap-no-bottom {
        padding: 0.32rem ${Styles.wind} 0.04rem;
        background: ${Styles.color_theme};
      }
      .tool-wind {
        padding-left: ${Styles.wind};
        padding-right: ${Styles.wind};
      }
      .tool-wrap-scroll {
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        transform: translateZ(0);
      }
      .tool-wrap-empty {
        display: flex;
        justify-content: center;
        align-content: center;
        min-height: 50vw;
        background: ${Styles.color_theme};
      }
      /* 增大Icon的点击面积 */
      .tool-wrap-icon {
        display: inline-block;
        padding: 0.16rem;
      }

      /* 170524 Emoji样式 */
      .tool-emoji {
        width: 0.4rem !important;
        height: 0.4rem !important;
        vertical-align: text-bottom !important;
      }

      /* 170620 老虎洋葱样式 */
      .tool-emoji-lg {
        min-width: 0.8rem;
        min-height: 0.8rem;
        margin-top: 0.04rem;
        margin-right: 0.02rem;
        vertical-align: bottom !important;
      }

      /* 180710 <List> */
      .tool-list-sm .am-list-item .am-list-line .am-list-content {
        padding-top: 0.16rem !important;
        padding-bottom: 0.16rem !important;
      }

      /* 180711 animate */
      .tool-animate-rotate {
        animation: animate-rotate 2s linear infinite;
      }
      @keyframes animate-rotate {
        0% {
          transform: rotate(360deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    `}</style>

    {/* utils */}
    <style jsx global>{`
      /*========== layout ==========*/
      .pull-right {
        float: right;
      }

      /*========== padding ==========*/
      .p-sw {
        padding: ${Styles.space} ${Styles.wind} !important;
      }
      .p-w {
        padding: 0 ${Styles.wind} !important;
      }

      /*========== margin ==========*/
      .mt-md {
        margin-top: ${Styles.md} !important;
      }
      .mt-lg {
        margin-top: ${Styles.lg} !important;
      }

      .mr-xs {
        margin-right: ${Styles.xs} !important;
      }
      .mr-sm {
        margin-right: ${Styles.sm} !important;
      }

      .mb-d {
        margin-bottom: ${Styles.distance} !important;
      }
      .mb-xs {
        margin-bottom: ${Styles.xs} !important;
      }
      .mb-sm {
        margin-bottom: ${Styles.sm} !important;
      }
      .mb-md {
        margin-bottom: ${Styles.md} !important;
      }
      .mb-lg {
        margin-bottom: ${Styles.lg} !important;
      }

      .ml-xxs {
        margin-left: ${Styles.xxs} !important;
      }
      .ml-md {
        margin-left: ${Styles.md} !important;
      }
      .ml-lg {
        margin-left: ${Styles.lg} !important;
      }

      /*========== text ==========*/
      .text-center {
        text-align: center !important;
      }
      .text-right {
        text-align: right !important;
      }
      .text-xxs {
        font-size: ${Styles.font_xxs} !important;
      }
      .text-xs {
        font-size: ${Styles.font_xs} !important;
      }
      .text-sm {
        font-size: ${Styles.font_sm} !important;
      }
      .text-md {
        font-size: ${Styles.font_md} !important;
      }
      .text-lg {
        font-size: ${Styles.font_lg} !important;
      }
      .text-xl {
        font-size: ${Styles.font_xl} !important;
      }
      .text-xxl {
        font-size: ${Styles.font_xxl} !important;
      }
      .text-main {
        color: ${Styles.color_main};
      }
      .text-primary {
        color: ${Styles.color_primary};
      }
      .text-success {
        color: ${Styles.color_success};
      }
      .text-warning {
        color: ${Styles.color_warning};
      }
      .text-danger {
        color: ${Styles.color_danger};
      }
      .text-info-danger {
        color: ${Styles.color_info_danger};
      }
      .text-title {
        color: ${Styles.color_font_title};
      }
      .text-desc {
        color: ${Styles.color_font_desc};
      }
      .text-sub {
        color: ${Styles.color_font_sub};
      }
      .text-light {
        color: #aaa;
      }
      .text-void {
        color: #fff;
      }
      .text-bold {
        font-weight: ${Styles.font_bold};
      }
      .text-clamp-1 {
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        word-wrap: break-word;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .text-clamp-2 {
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .text-del {
        text-decoration: line-through;
      }

      .btn-primary {
        color: #fff;
        background-color: ${Styles.color_primary};
      }
      .btn-primary.am-button-active {
        background-color: #4362d6 !important;
      }
    `}</style>

    {/* tool */}
    <style jsx global>{`
      // 180202 组ListView
      .t-list-view-section .am-list-body {
        background: transparent;
      }
      .t-list-view-section .list-view-section-body:not(:last-child) {
        margin-bottom: ${Styles.distance};
      }
      .t-list-view-section .list-view-section-body .am-list-item:last-child .am-list-line:after {
        display: none;
      }

      // 180528
      .t-hide {
        display: none;
      }

      // 180202
      .t-disabled {
        color: #ccc !important;
      }

      // 171229 间隔线
      .t-line {
        width: 94%;
        margin-left: 3%;
        margin-top: 0.56rem;
        margin-bottom: 0.4rem;
        border-bottom: 0.01rem solid ${Styles.color_border};
      }

      // 170918 图片
      .t-img {
        display: inline-block;
        vertical-align: top;
        outline-width: 0;
      }

      // 171020 背景
      .t-bg {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }

      // 170602 使元素有点击效果
      .t-active {
        transition: all 0.1s ease-in-out;
      }
      .t-active:active {
        opacity: 0.68;
      }



      // 170531 页面偏上居中
      .t-center {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
      }

      // 170609 表单项Label必填样式
      .t-required {
        display: inline-block;
        position: relative;
      }
      .t-required:after {
        content: '*';
        display: inline-block;
        position: absolute;
        top: 50%;
        margin-left: 0.08rem;
        margin-top: -0.2rem;
        font-family: SimSun;
        font-size: 0.24rem;
        line-height: 0.34rem;
        color: ${Styles.color_info_danger};
      }

      // 170601 仿表单项的错误图标
      .t-error {
        height: 0.42rem;
        width: 0.42rem;
        margin-left: 0.12rem;
        background-image: url('${images}/error.png');
        background-size: 0.42rem auto;
      }

      // 170625 模态框的Input样式
      .t-modal-input {
        width: 98%;
        padding: ${Styles.xs} ${Styles.sm};
        margin: 0;
        font-size: ${Styles.font_sm};
        border: 0.01rem solid ${Styles.color_border};
        border-radius: ${Styles.radius_xs};
      }

      // 170914 fixed底按钮
      .t-fixed-btn {
        position: fixed !important;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 0;
      }

      // 180106 圆角小按钮
      .t-btn-sm {
        padding: 0 .24rem;
        height: .48rem;
        line-height: .48rem;
        font-size: ${Styles.font_xs};
      }
      .t-btn-round {
        min-width: 1.6rem;
        font-size: ${Styles.font_sm};
        border-radius: 0.4rem;
      }
      .t-btn-round-sm {
        padding: 0 .24rem;
        height: .48rem;
        line-height: .48rem;
        font-size: ${Styles.font_xs};
        border-radius: 0.4rem;
      }

      // 170918 列表项间隔
      .t-antd-list-split .am-list-body {
        background-color: transparent;
        border-top: none;
      }
      .t-antd-list-split .am-list-body:after {
        border-bottom: none;
      }
      .t-antd-list-split .am-list-body:first-child {
        margin-top: ${Styles.distance};
      }
      .t-antd-list-split .am-list-item {
        margin-top: ${Styles.distance};
        border-top: 0.01rem solid ${Styles.color_border} !important;
        border-bottom: 0.01rem solid ${Styles.color_border} !important;
      }
      .t-antd-list-split .am-list-item:first-child {
        margin-top: 0;
      }
      .t-antd-list-split .am-list-body div:not(:last-child) .am-list-line:after {
        content: initial;
        border-bottom: none;
      }

      // 180102
      .t-antd-list-md .am-list-content {
        padding-top: .36rem !important;
        padding-bottom: .36rem !important;
      }
    `}</style>

    {/* antd reset */}
    <style jsx global>{`
      /*==================== antd global reset ====================*/

      /*========== Toast ==========*/
      // 170527 偏上一点
      .am-toast:not(.am-toast-nomask) .am-toast-notice {
        margin-top: -2.2rem;
      }
      .am-toast:not(.am-toast-nomask) .am-toast-notice .am-toast-text {
        padding: 0.4rem 0.64rem;
        background-color: rgba(58, 58, 58, 0.8);
      }

      // 170718 无遮罩轻提示
      .am-toast.am-toast-nomask {
        position: fixed;
        top: 86%;
      }
      .am-toast.am-toast-nomask .am-toast-text {
        background-color: rgba(58, 58, 58, 0.8);
      }

      /*========== List ==========*/
      // 170517 取消点击效果
      .am-list-item-active {
        background-color: #fff !important;
      }

      // 180112 renderHeader
      .am-list-header {
        padding: 0.22rem 0.3rem 0.22rem 0.2rem;
        background: transparent;
      }
      .am-list-footer {
        padding: 0.22rem 0.3rem 0.22rem 0.2rem;
        background: ${Styles.color_bg};
      }

      /*========== ActionSheet ==========*/
      // 170628 Android 7.0风格
      .am-action-sheet {
        padding: ${Styles.sm};
        background-color: transparent;
      }
      .am-action-sheet-button-list-item {
        background-color: #fff;
      }
      .am-action-sheet-button-list-item:first-child {
        border-top-left-radius: ${Styles.radius_xs};
        border-top-right-radius: ${Styles.radius_xs};
      }
      .am-action-sheet-button-list-item:nth-last-child(2) {
        border-bottom-left-radius: ${Styles.radius_xs};
        border-bottom-right-radius: ${Styles.radius_xs};
      }
      .am-action-sheet-button-list-item:last-child {
        border-radius: ${Styles.radius_xs};
      }
      .am-action-sheet-cancel-button-mask {
        display: none;
      }

      // 170709 ShareActionSheet
      .am-action-sheet.am-action-sheet-share {
        padding: ${Styles.sm};
        background-color: transparent;
      }
      .am-action-sheet.am-action-sheet-share .am-action-sheet-message {
        margin: 0;
        padding: 0.32rem;
        background-color: ${Styles.color_bg};
        border-top-left-radius: ${Styles.radius_xs};
        border-top-right-radius: ${Styles.radius_xs};
      }
      .am-action-sheet.am-action-sheet-share .am-action-sheet-share-list {
        border-top: 0.01rem solid ${Styles.color_border};
        background-color: ${Styles.color_bg};
        border-bottom-left-radius: ${Styles.radius_xs};
        border-bottom-right-radius: ${Styles.radius_xs};
      }
      .am-action-sheet.am-action-sheet-share
        .am-action-sheet-share-list-item:last-child {
        opacity: 0;
        width: 0.08px;
        overflow: hidden;
      }
      .am-action-sheet.am-action-sheet-share
        .am-action-sheet-share-cancel-button {
        margin-top: ${Styles.sm};
        border-radius: ${Styles.radius_xs};
      }

      /*========== InputItem ==========*/
      // 170711 金额键盘动画统一
      .am-number-keyboard-wrapper {
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
      }

      /*========== Modal ==========*/
      // 170802 全屏modal
      .am-modal-wrap {
        z-index: ${Styles.z_modal_wrap};
      }
      // 180104 confirm好的按钮
      .am-modal-button-group-h .am-modal-button {
        color: ${Styles.color_primary};
      }
      .am-modal-input input {
        border-radius: 0.04rem;
      }

      /*========== Search ==========*/
      // 170829
      .am-search {
        background-color: #fff !important;
      }
      .am-search-input {
        background-color: ${Styles.color_bg} !important;
      }
      .am-search-input-start .am-search-input-synthetic-ph {
        width: 2.56rem !important;
        padding-left: ${Styles.wind} !important;
      }
      .am-search-clear-show {
        margin-top: 0.12rem;
        margin-right: ${Styles.wind};
      }

      /*========== Badge ==========*/
      .am-badge-text {
        background: ${Styles.color_danger};
      }
    `}</style>
  </React.Fragment>
);
