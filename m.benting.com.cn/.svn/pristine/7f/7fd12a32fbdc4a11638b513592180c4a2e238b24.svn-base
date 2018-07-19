/**
 * const prefixCls = 'style-103610';
 * const images = '/static/images/src/bbs/Article';
 * @Author: czy0729
 * @Date: 2018-07-11 16:49:28
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-18 09:22:15
 * @Path m.benting.com.cn /src/bbs/Article/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { injectV2, observer } from '@';
import { Layout } from '@_';
import Const from '@const';
import UI from '@stores/ui';
import BaiduCambrian from './_BaiduCambrian';
import Comment from './_Comment';
import Competition from './_Competition';
import Content from './_Content';
import Egg from './_Egg';
import FixedTextarea from './_FixedTextarea';
import Head from './_Head';
import Reward from './_Reward';
import RewardList from './_RewardList';
import store from './store';

@injectV2(store)
@observer
export default class Article extends React.Component {
  static contextTypes = {
    $: PropTypes.object
  };

  state = {
    baiduPushImgSrc: '' // 百度统计推送方式为访问一个img
  };

  componentDidMount() {
    if (Const.__CLIENT__) {
      const { $ } = this.context;
      $.page.setHeader();

      // 百度统计主动推送收录
      const { baiduPushImgSrc } = this.state;
      if (baiduPushImgSrc) {
        return;
      }

      /* eslint-disable-next-line */
      const e = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi;
      const r = window.location.href;
      const t = document.referrer;

      if (!e.test(r)) {
        let o = 'https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif';

        /* eslint-disable-next-line */
        t ? ((o += '?r=' + document.referrer), r && (o += '&l=' + r)) : r && (o += '?l=' + r);

        this.setState({
          baiduPushImgSrc: o
        });
      }
    }
  }

  componentWillUnmount() {
    if (Const.__CLIENT__) {
      const { $ } = this.context;

      $.page.hideFixedTextarea();
      UI.resetHeader();
    }
  }

  render() {
    const { $ } = this.context;
    const { title } = $.getState('detail');
    const { baiduPushImgSrc } = this.state;

    return (
      <Layout title={title || '帖子详情'}>
        <Head />
        <Content />
        <RewardList className="mt-d" />
        <Competition className="mt-d" />
        <Comment className="mt-d" />
        <FixedTextarea />
        <Reward />
        <Egg />
        {Const.__SERVER__ && <BaiduCambrian />}
        {baiduPushImgSrc && (
          <img src={baiduPushImgSrc} alt="" style={{ display: 'none' }} />
        )}
      </Layout>
    );
  }
}
