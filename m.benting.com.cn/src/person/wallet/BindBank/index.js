/**
 * const prefixCls = 'style-929655';
 * const images = '/static/images/src/index/Sign';
 * @Author: cwz0525
 * @Date: 2018-07-13 16:34:14
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-13 18:14:09
 * @Path m.benting.com.cn /src/person/wallet/BindBank/index.js
 */
import React from 'react';
import { Layout } from '@_';
import { observer, inject } from '@';
import Styles from '@styles';
import store from './store';

// const prefixCls = 'style-929655';
@inject(store)
@observer
export default class Wallet extends React.Component {
  render() {
    return (
      <Layout title="绑定银行卡" hide style={{ paddingBottom: 0 }}>
        <div className="top">
          <p className="t-36 l-56 t-b">绑定银行卡</p>

        </div>
        <style jsx>{`
          .style-929655 {
          }
          .top{
            background: ${Styles.color_theme};
          }
        `}</style>
      </Layout>
    );
  }
}
