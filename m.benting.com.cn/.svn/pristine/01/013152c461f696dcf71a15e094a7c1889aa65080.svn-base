/**
 * const prefixCls = 'style-174909';
 * const images = '/static/images/components/Tabs';
 * @Author: czy0729
 * @Date: 2018-07-09 16:58:20
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-18 16:01:52
 * @Path m.benting.com.cn /components/Tabs/index.js
 */
import React from 'react';
import classNames from 'classnames';
import { Tabs } from 'antd-mobile';
import Styles from '@styles';

const prefixCls = 'c-tabs';

const _Tabs = props => {
  const { tabs = [], page = 0, className, children, ...other } = props;

  return (
    <div
      className={classNames(prefixCls, className, {
        [`${prefixCls}_len-2`]: tabs.length === 2,
        [`${prefixCls}_len-3`]: tabs.length === 3,
        [`${prefixCls}_len-4`]: tabs.length === 4,
        [`${prefixCls}_len-5`]: tabs.length === 5
      })}
    >
      <Tabs
        tabs={tabs}
        page={parseInt(page)}
        destroyInactiveTab
        animated={false}
        swipeable={false}
        prerenderingSiblingsNumber={0}
        {...other}
      >
        {children}
      </Tabs>

      <style jsx global>{`
        .c-tabs {
          width: 100%;
        }
        /* reset */
        .${prefixCls} .am-tabs-default-bar-content {
          padding: 0 ${Styles.wind};
          border-bottom: ${Styles.border};
        }
        .${prefixCls} .am-tabs-default-bar-tab {
          width: 1.2rem !important;
          height: 0.88rem;
          font-size: 0.3rem;
          color: ${Styles.color_sub};
          transition: color 0.3s cubic-bezier(0.86, 0, 0.07, 1);
        }
        .${prefixCls} .am-tabs-default-bar-tab:after {
          content: initial !important;
        }
        .${prefixCls} .am-tabs-default-bar-tab-active {
          color: ${Styles.color_main};
        }
        .${prefixCls} .am-tabs-default-bar-underline {
          width: 0.4rem !important;
          height: 0.04rem;
          margin-bottom: 0.16rem;
          background-color: ${Styles.color_main};
          border: 0;
          border-radius: 0.04rem;
          transition: margin 0.3s cubic-bezier(0.86, 0, 0.07, 1);
        }

        /* 3 */
        .${prefixCls}_len-3
          .am-tabs-default-bar-tab-active
          + .am-tabs-default-bar-tab
          + .am-tabs-default-bar-tab
          + .am-tabs-default-bar-underline {
          margin-left: ${Styles.wind_raw + 0.4}rem;
        }
        .${prefixCls}_len-3
          .am-tabs-default-bar-tab-active
          + .am-tabs-default-bar-tab
          + .am-tabs-default-bar-underline {
          left: 0 !important;
          margin-left: ${Styles.wind_raw + 1.6}rem;
        }
        .${prefixCls}_len-3
          .am-tabs-default-bar-tab-active
          + .am-tabs-default-bar-underline {
          left: 0 !important;
          margin-left: ${Styles.wind_raw + 2.8}rem;
        }

        /* 4 */
        .${prefixCls}_len-4
          .am-tabs-default-bar-tab-active
          + .am-tabs-default-bar-tab
          + .am-tabs-default-bar-tab
          + .am-tabs-default-bar-tab
          + .am-tabs-default-bar-underline {
          margin-left: ${Styles.wind_raw + 0.4}rem;
        }
        .${prefixCls}_len-4
          .am-tabs-default-bar-tab-active
          + .am-tabs-default-bar-tab
          + .am-tabs-default-bar-tab
          + .am-tabs-default-bar-underline {
          left: 0 !important;
          margin-left: ${Styles.wind_raw + 1.6}rem;
        }
        .${prefixCls}_len-4
          .am-tabs-default-bar-tab-active
          + .am-tabs-default-bar-tab
          + .am-tabs-default-bar-underline {
          left: 0 !important;
          margin-left: ${Styles.wind_raw + 2.8}rem;
        }
        .${prefixCls}_len-4
          .am-tabs-default-bar-tab-active
          + .am-tabs-default-bar-underline {
          left: 0 !important;
          margin-left: ${Styles.wind_raw + 4}rem;
        }
      `}</style>
    </div>
  );
};

_Tabs.DefaultTabBar = Tabs.DefaultTabBar;

export default _Tabs;
