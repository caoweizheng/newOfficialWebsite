/**
 * const prefixCls = 'style-605472';
 * const images = '/static/images/src/index/Home';
 * @Author: czy0729
 * @Date: 2018-06-20 17:57:42
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 12:33:10
 * @Path m.benting.com.cn \src\index\Home\_Header.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img, Link } from '@components';
import Const from '@const';
import Styles from '@styles';
import { images } from './ds';

const prefixCls = 'style-605472';

const _ = (props, { $ }) => {
  const userInfo = $.getState('userInfo');

  return (
    <Flex className={prefixCls} justify="between">
      <img
        className="img-logo"
        src={`${images}/logo${Const.__IMG_DPR__}.png`}
        alt=""
      />
      {userInfo.faceImg ? (
        <Link href="/login">
          <Img src={userInfo.faceImg} size="0.52rem" circle />
        </Link>
      ) : (
        <Link href="/login">
          <Img
            src={`${images}/img-no-user${Const.__IMG_DPR__}.png`}
            size="0.52rem"
          />
        </Link>
      )}

      <style jsx global>{`
        .style-605472 {
          padding: 0.32rem ${Styles.wind} 0.16rem;
          height: 0.88rem;
          background: ${Styles.color_theme};
        }
      `}</style>
      <style jsx>{`
        .style-605472 {
        }
        .img-logo {
          height: 0.6rem;
        }
      `}</style>
    </Flex>
  );
};

_.contextTypes = {
  $: PropTypes.object
};

export default observer(_);
