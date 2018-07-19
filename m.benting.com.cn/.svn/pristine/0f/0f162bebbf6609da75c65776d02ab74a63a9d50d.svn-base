/**
 * const prefixCls = 'style-150495';
 * const images = '/static/images/src/bbs/Index';
 * @Author: czy0729
 * @Date: 2018-07-10 09:47:12
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-10 16:34:12
 * @Path m.benting.com.cn /src/bbs/Index/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout, HeadMenu } from '@_';
import PostTop from './_PostTop';
import Post from './_Post';
import store from './store';
import { headMenuDS } from './ds';

@inject(store)
@observer
export default class BBS extends React.Component {
  static contextTypes = {
    $: PropTypes.object
  };

  render() {
    return (
      <Layout title="社区" hide>
        <HeadMenu data={headMenuDS} active="社区" />
        <PostTop />
        <Post className="mt-d" />
      </Layout>
    );
  }
}
