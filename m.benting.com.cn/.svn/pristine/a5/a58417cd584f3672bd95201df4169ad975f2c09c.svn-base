/**
 * const prefixCls = 'style-213201';
 * const images = '/static/images/src/index/Home';
 * @Author: czy0729
 * @Date: 2018-06-21 15:26:28
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 10:39:19
 * @Path m.benting.com.cn \src\index\Home\_NewGoods.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import { observer } from '@';
import { Img, Link } from '@components';
import Const from '@const';
import Utils from '@utils';
import Styles from '@styles';
import { images } from './ds';

const prefixCls = 'style-213201';

const _ = (props, { $ }) => {
  const { className } = props;
  const newGoods = $.getState('newGoods');

  return (
    <div className={classNames(prefixCls, className)}>
      <Flex justify="center">
        <p className="t-32 l-44 t-c t-b">本汀新品震撼上市</p>
        <Link href="https://www.tw-bt.com/shop">
          <img
            className="img-right ml-20"
            src={`${images}/right${Const.__IMG_DPR__}.png`}
            alt=""
          />
        </Link>
      </Flex>
      <div className="mt-32">
        {newGoods.list.map(item => (
          <Link
            key={item.gid}
            className={`${prefixCls}__item`}
            href={`https://www.tw-bt.com/shop/goods/${item.gid}`}
          >
            <p className="t-28 l-40 t-c1">{item.title}</p>
            <Flex className="mt-12" justify="between" align="start">
              <img
                className="img-new"
                src={`${images}/new${Const.__IMG_DPR__}.png`}
                alt=""
              />
              <Img
                className={`${prefixCls}__img`}
                src={Utils.getAppImgUrl(item.imgs, 'scale')}
              />
            </Flex>
          </Link>
        ))}
      </div>

      <style jsx global>{`
        .style-213201 {
          min-height: 5.41rem;
          padding: 0.36rem 0.48rem 0.48rem;
          background: ${Styles.color_theme};
        }
        .${prefixCls}__img {
          width: 46%;
          padding-bottom: 46%;
        }
        .${prefixCls}__item {
          display: inline-block;
          vertical-align: top;
          position: relative;
          width: 50%;
        }
        .${prefixCls}__item:nth-of-type(1) {
          padding: 0 0.32rem 0.28rem 0;
          border-right: 0.01rem solid ${Styles.color_border};
          border-bottom: 0.01rem solid ${Styles.color_border};
        }
        .${prefixCls}__item:nth-of-type(2) {
          padding: 0 0 0.28rem 0.33rem;
          border-bottom: 0.01rem solid ${Styles.color_border};
        }
        .${prefixCls}__item:nth-of-type(3) {
          padding: 0.28rem 0.32rem 0 0;
          border-right: 0.01rem solid ${Styles.color_border};
        }
        .${prefixCls}__item:nth-of-type(4) {
          padding: 0.28rem 0 0 0.33rem;
        }
      `}</style>
      <style jsx>{`
        .style-213201 {
        }
        .img-right {
          width: 0.28rem;
          height: 0.28rem;
        }
        .img-new {
          width: 0.8rem;
          height: 0.36rem;
        }
      `}</style>
    </div>
  );
};

_.contextTypes = {
  $: PropTypes.object
};

export default observer(_);
