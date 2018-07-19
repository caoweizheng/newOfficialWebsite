/**
 * const prefixCls = 'style-888122';
 * const images = '/static/images/src/index/Sign';
 * @Author: cwz0525
 * @Date: 2018-07-11 11:08:34
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-12 17:02:09
 * @Path m.benting.com.cn /src/person/wallet/Index/index.js
 */
import React from 'react';
import { Layout } from '@_';
import { observer, inject } from '@';
import store from './store';
import Main from './_Main';
import Menu from './_Menu';
import List from './_List';

@inject(store)
@observer
export default class Wallet extends React.Component {
  render() {
    return (
      <Layout title="我的资产" hide style={{ paddingBottom: 0 }}>
        <Main />
        <Menu />
        <List className="mt-16" />
      </Layout>
    );
  }
}
