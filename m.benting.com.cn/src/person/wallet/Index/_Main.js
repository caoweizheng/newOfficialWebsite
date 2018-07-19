/**
 * const prefixCls = 'style-133454';
 * const images = '/static/images/src/index/Sign';
 * @Author: cwz0525
 * @Date: 2018-07-12 11:02:12
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-13 18:17:35
 * @Path m.benting.com.cn /src/person/wallet/Index/_Main.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import { observer } from '@';
// import Styles from '@styles';

const prefixCls = 'style-133454';
const Main = (props, { $ }) => {
  const { className } = props;
  const { btAmount, sysAmount } = $.getState('walletInfo');
  const { point } = $.getState('userInfo');
  return (
    <div className={classNames(prefixCls, className)}>
      <div className="title" />
      <div>
        <p className="t-c t-30 l-42 mt-18 t-void">我的余额(元)</p>
        <p className={`${prefixCls}__money t-c t-72 l-100 t-void`}>
          {btAmount}
        </p>
        <div className="gold-point">
          <Flex justify="around" className="mt-22">
            <Flex direction="column">
              <span className="t-24 l-34 t-void">我的金币</span>
              <span className="t-48 l-66 mt-4 t-void">{sysAmount}</span>
            </Flex>
            <p className="line t-void" />
            <Flex direction="column">
              <span className="t-24 l-34 t-void">我的积分</span>
              <span className="t-48 l-66 mt-4 t-void">{point}</span>
            </Flex>
          </Flex>
        </div>
      </div>
      <style jsx>{`
        .style-133454 {
          background: linear-gradient(
            90deg,
            rgba(90, 194, 255, 1),
            rgba(46, 142, 255, 1)
          );
        }
        .title {
          height: 0.88rem;
        }
        .gold-point {
          padding: 0 1.52rem 1.17rem;
        }
        .line {
          width: 0.06rem;
          height: 1.04rem;
          opacity: 0.2;
          border: 0.02rem solid rgba(255, 255, 255, 1);
        }
        .${prefixCls}__money {
          font-size: 0.72rem;
          line-height: 1rem;
        }
      `}</style>
    </div>
  );
};

Main.contextTypes = {
  $: PropTypes.object
};

export default observer(Main);
