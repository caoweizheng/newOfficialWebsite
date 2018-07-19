/**
 * const prefixCls = 'style-700432';
 * const images = '/static/images/src/discovery/Index';
 * @Author: czy0729
 * @Date: 2018-07-04 14:40:16
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-10 09:14:51
 * @Path m.benting.com.cn /src/discovery/Index/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'antd-mobile';
import { inject, observer } from '@';
import { Layout } from '@_';
import { Header, Tabs, ListView } from '@components';
import Utils from '@utils';
import G from '@stores/g';
import UI from '@stores/ui';
import Row from './_Row';
import FixedTextarea from './_FixedTextarea';
import store from './store';
import { tabsDS } from './ds';

@inject(store)
@observer
export default class Discovery extends React.Component {
  static contextTypes = {
    $: PropTypes.object
  };

  componentWillUnmount() {
    const { $ } = this.context;

    $.hideFixedTextarea();
    UI.hideMask();
  }

  render() {
    const { $ } = this.context;
    const { count, isRead } = G.getState('discoverySpecial');
    const { page } = $.getState('_affixTabs');
    const { redOpenIds, likeOpenIds } = $.getState('_discoveryRow');
    const discovery = $.getState('discovery');

    const _tabsDS = Utils.deepCopy(tabsDS);
    if (!isRead && count) {
      const index = _tabsDS.findIndex(item => item.title === '精选');
      _tabsDS[index] = {
        title: <Badge dot>精选</Badge>
      };
    }

    return (
      <Layout title="发现" hide>
        <Header show style={{ height: '0.9rem' }}>
          <Tabs tabs={_tabsDS} page={page} onTabClick={$.onTabClick}>
            <div />
          </Tabs>
        </Header>
        <ListView
          className="mt-d"
          data={discovery}
          renderRow={item => (
            <Row
              redRecordsOpen={redOpenIds.includes(item.infoId)}
              likeRecordsOpen={likeOpenIds.includes(item.infoId)}
              {...item}
            />
          )}
          onEndReached={$.fetchDiscovery}
        />
        <FixedTextarea />
      </Layout>
    );
  }
}
