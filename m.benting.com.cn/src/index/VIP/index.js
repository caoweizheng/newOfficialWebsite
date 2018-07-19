/**
 * const prefixCls = 'style-598269';
 * const images = '/static/images/src/index/VIP';
 * @Author: cwz0525
 * @Date: 2018-07-09 11:27:30
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-10 17:56:02
 * @Path m.benting.com.cn /src/index/VIP/index.js
 */
import React from 'react';
import { observer, inject } from '@';
import { Layout } from '@_';
import store from './store';
import Top from './_Top';
import Menu from './_Menu';
import List from './_List';

@inject(store)
@observer
export default class Vip extends React.Component {
  render() {
    return (
      <Layout title="会员中心" hide style={{ paddingBottom: 0 }}>
        <Top />
        <Menu />
        <List className="mt-16" />
      </Layout>
    );
  }
}
