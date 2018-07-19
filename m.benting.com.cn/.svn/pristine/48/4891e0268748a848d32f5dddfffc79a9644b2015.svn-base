/**
 * const prefixCls = 'style-105182';
 * const images = '/static/images';
 * @Author: czy0729
 * @Date: 2018-06-22 13:34:06
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 11:25:09
 * @Path m.benting.com.cn /src/index/Home/_Footer.js
 */
import React from 'react';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import Const from '@const';
import Utils from '@utils';
import Styles from '@styles';
import { images, footerDS } from './ds';

const prefixCls = 'style-105182';

const _ = props => {
  const { className } = props;

  return (
    <div className={classNames(prefixCls, className)} onClick={Utils.u}>
      <Flex className={`${prefixCls}__btns`} justify="around">
        {footerDS.map(item => (
          <Flex.Item key={item.label}>
            <Flex justify="center">
              <img
                className="img-icon"
                src={`${images}/${item.icon}${Const.__IMG_DPR__}.png`}
                alt=""
              />
              <span className="t-24 l-40 t-title ml-8">{item.label}</span>
            </Flex>
          </Flex.Item>
        ))}
      </Flex>
      <p className="t-24 l-34 t-sub t-c mt-32">全国客户热线：020-31001105</p>
      <p className="t-24 l-34 t-sub t-c mt-14">
        粤 ICP 备 15020540号-1 广州本汀渔具有限公司
      </p>

      <style jsx>{`
        .style-105182 {
          min-height: 2.4rem;
          padding: 0.48rem ${Styles.wind} 0.38rem;
          background: ${Styles.color_theme};
        }
        .img-icon {
          width: 0.28rem;
          height: 0.28rem;
        }
      `}</style>
    </div>
  );
};

export default _;
