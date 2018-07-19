/**
 * const prefixCls = 'style-177288';
 * const images = '/static/images/src/person/Index';
 * @Author: cwz0525
 * @Date: 2018-07-16 12:05:35
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-17 10:21:49
 * @Path m.benting.com.cn /src/person/Index/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { injectV2, observer } from '@';
import { Layout } from '@_';
import Top from './_Top';
import Menu from './_Menu';
import List from './_List';
import store from './store';

@injectV2(store)
@observer
export default class Article extends React.Component {
  static contextTypes = {
    $: PropTypes.object
  };
  render() {
    return (<Layout title="个人中心" hide>
      <Top />
      <Menu />
      <List className="mt-16" />
    </Layout>);
  }
}
