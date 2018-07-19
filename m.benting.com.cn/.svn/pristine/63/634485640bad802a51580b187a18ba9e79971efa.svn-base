/**
 * const prefixCls = 'style-124767';
 * const images = '/static/images/src/index/Home';
 * @Author: czy0729
 * @Date: 2018-06-21 16:14:29
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 10:56:05
 * @Path m.benting.com.cn \src\index\Home\_FamousPeople.js
 */
import React from 'react';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import { Link } from '@components';
import Const from '@const';
import Styles from '@styles';
import { images } from './ds';

const prefixCls = 'style-124767';

const _ = props => {
  const { className } = props;

  return (
    <Link
      className={classNames(prefixCls, className)}
      href="https://www.tw-bt.com/star"
      block
    >
      <Flex justify="center">
        <div>
          <p className="t-32 l-48 t-title">粉丝名人堂</p>
          <p className="t-24 l-34 t-sub">荣光 · 因您更耀眼！</p>
        </div>
        <img
          className="img-famous ml-54"
          src={`${images}/famous${Const.__IMG_DPR__}.png`}
          alt=""
        />
      </Flex>

      <style jsx global>{`
        .style-124767 {
          min-height: 1.58rem;
          padding: 0.38rem 0;
          background: ${Styles.color_theme};
        }
      `}</style>
      <style jsx>{`
        .style-124767 {
        }
        .img-famous {
          height: 0.6rem;
        }
      `}</style>
    </Link>
  );
};

export default _;
