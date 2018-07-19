/**
 * const prefixCls = 'style-687483';
 * const images = '/static/images/src/index/Home';
 * @Author: czy0729
 * @Date: 2018-06-21 09:45:00
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 10:26:40
 * @Path m.benting.com.cn \src\index\Home\_Menu.js
 */
import React from 'react';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import { Link } from '@components';
import Const from '@const';
import Styles from '@styles';
import { images, menuDS } from './ds';

const prefixCls = 'style-687483';

const _ = props => {
  const { className } = props;

  return (
    <Flex className={classNames(prefixCls, className)}>
      {menuDS.map(item => (
        <Flex.Item key={item.label} className={`${prefixCls}__item`}>
          <Link href={item.href}>
            <img className="img-icon" src={item.src} alt={item.label} />
            <p className="t-22 l-32 mt-16">{item.label}</p>
            {item.isHot && (
              <img
                className="img-hot"
                src={`${images}/hot${Const.__IMG_DPR__}.png`}
                alt=""
              />
            )}
          </Link>
        </Flex.Item>
      ))}

      <style jsx global>{`
        .style-687483 {
          min-height: 1.78rem;
          padding: 0.34rem 0.68rem 0.5rem;
          background: ${Styles.color_theme};
        }
        .${prefixCls}__item {
          position: relative;
          text-align: center;
        }
      `}</style>
      <style jsx>{`
        .style-687483 {
        }
        .img-icon {
          width: 0.56rem;
          height: 0.56rem;
        }
        .img-hot {
          position: absolute;
          top: 0;
          right: 0;
          width: 0.68rem;
          height: 0.38rem;
          margin-top: -0.16rem;
          margin-right: -0.16rem;
        }
      `}</style>
    </Flex>
  );
};

export default _;
