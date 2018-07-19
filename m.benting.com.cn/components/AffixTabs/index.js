/**
 * const prefixCls = 'style-103463';
 * const images = '/static/images/components/AffixTabs';
 * @Author: czy0729
 * @Date: 2018-07-04 14:30:22
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-11 11:29:55
 * @Path m.benting.com.cn /components/AffixTabs/index.js
 */
import React from 'react';
import classNames from 'classnames';
import { StickyContainer, Sticky } from 'react-sticky';
import Tabs from '../Tabs';

const prefixCls = 'c-affix-tabs';

const AffixTabs = props => {
  const { tabs = [], page = 0, className, children, ...other } = props;

  return (
    <StickyContainer className={classNames(prefixCls, className)}>
      <Tabs
        tabs={tabs}
        page={parseInt(page)}
        renderTabBar={props => (
          <Sticky>
            {({ style }) => (
              <div style={{ ...style, zIndex: 1 }}>
                <Tabs.DefaultTabBar {...props} />
              </div>
            )}
          </Sticky>
        )}
        destroyInactiveTab
        animated={false}
        swipeable={false}
        prerenderingSiblingsNumber={0}
        {...other}
      >
        {children}
      </Tabs>
    </StickyContainer>
  );
};

export default AffixTabs;
