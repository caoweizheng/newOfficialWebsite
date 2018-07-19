/**
 * const prefixCls = 'style-178183';
 * const images = '/static/images/src/index/Sign';
 * @Author: cwz0525
 * @Date: 2018-07-02 10:00:49
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-08 18:17:15
 * @Path m.benting.com.cn /src/index/Sign/index.js
 */
import React from 'react';
import { observer, inject } from '@';
import { Layout } from '@_';
import List from './_List';
import Main from './_Main';
import store from './store';

@inject(store)
@observer
export default class Sign extends React.Component {
  render() {
    return (
      <Layout title="每日签到" hide style={{ paddingBottom: 0 }}>
        <Main />
        <List />
      </Layout>
    );
  }
}
