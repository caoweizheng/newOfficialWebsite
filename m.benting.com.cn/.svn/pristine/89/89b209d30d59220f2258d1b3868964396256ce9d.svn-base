/**
 * const prefixCls = 'style-200074';
 * const images = '/static/images/src/index/Nido';
 * @Author: czy0729
 * @Date: 2018-06-24 17:59:26
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 11:35:24
 * @Path m.benting.com.cn /src/index/Nido/index.js
 */
import React from 'react';
import { inject, observer } from '@';
import Layout from '@_/Layout';
import Carousel from './_Carousel';
import Menu from './_Menu';
import Event from './_Event';
import Topic from './_Topic';
import Fish from './_Fish';
import Discovery from './_Discovery';
import BBS from './_BBS';
import store from './store';

@inject(store)
@observer
export default class Nido extends React.Component {
  render() {
    return (
      <Layout title="灵动社区" hideBack>
        <Carousel />
        <Menu />
        <Event className="mt-d" />
        <Topic className="mt-d" />
        <Fish className="mt-d" />
        <Discovery className="mt-d" />
        <BBS className="mt-d" />
      </Layout>
    );
  }
}
