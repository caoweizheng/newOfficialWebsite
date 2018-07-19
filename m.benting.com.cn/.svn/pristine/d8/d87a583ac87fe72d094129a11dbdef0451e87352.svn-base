/**
 * const prefixCls = 'style-156338';
 * const images = '/static/images/src/index/VIP';
 * @Author: cwz0525
 * @Date: 2018-07-09 11:43:35
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-10 18:07:29
 * @Path m.benting.com.cn /src/index/VIP/_Top.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import Styles from '@styles';
import Const from '@const';
import { images } from './ds';
import { Img } from '@components';

const prefixCls = 'style-156338';
const iconSize = '1.36rem';

const Top = (props, { $ }) => {
  const { className } = props;
  const { vip, niname, faceImg } = $.getState('userInfo');
  return (
    <div className={classNames(prefixCls, className)}>
      <div className="personal-box">
        <div className="personal">
          <Flex direction="column" align="center" justify="around">
            <Flex>
              <Img className="face-icon" src={faceImg} size={iconSize} />
              <Flex direction="column" justify="around" className="ml-20">
                <p className="t-24 l-34">{niname}</p>
                <p className="vip-state t-34 l-48 t-b mt-4">
                  {vip > 0 ? '本汀会员' : '注册会员'}
                </p>
              </Flex>
            </Flex>
            <p className="btn-now mt-22">{vip > 0 ? '续费' : '立即开通'}</p>
          </Flex>
        </div>
      </div>
      <style jsx>{`
        .style-156338 {
          position: relative;
          padding-top: 1.92rem;
          background: ${Styles.color_desc};
        }
        .personal-box {
          padding: 0 0.8rem;
        }
        .personal {
          padding: 0.26rem 0.54rem;
          background-image: url(${images}/personal-bg${Const.__IMG_DPR__}.png);
          background-size: cover;
          background-repeat: no-repeat;
        }
        .face-icon {
          border-radius: 50%;
          border: 1px solid red;
        }
        .btn-now {
          position: relative;
          z-index: 100;
          width: 100%;
          padding: 0.16rem 0;
          text-align: center;
          font-size: 0.34rem;
          line-height: 0.48rem;
          border-radius: 0.4rem;
          background: ${Styles.color_desc};
          color: #c6a96f;
        }
        .${prefixCls}:after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0.68rem;
          transform: translate(-50%, 100%);
          display: block;
          width: 110%;
          height: 1.08rem;
          background: #fff;
          border-radius: 50% 50% 0 0;
        }
      `}</style>
    </div>
  );
};

Top.contextTypes = {
  $: PropTypes.object
};

export default observer(Top);
