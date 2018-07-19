/**
 * const prefixCls = 'style-116403';
 * const images = '/static/images/src/index/VIP';
 * @Author: cwz0525
 * @Date: 2018-07-09 11:43:35
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-10 09:29:23
 * @Path m.benting.com.cn /src/index/VIP/_Menu.js
 */
import React from 'react';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import { Link, Img } from '@components';
import Styles from '@styles';
import { menuDS } from './ds';

const prefixCls = 'style-116403';

const Menu = props => {
  const { className } = props;

  return (
    <Flex className={classNames(prefixCls, className)}>
      {menuDS.map(item => (
        <Flex.Item key={item.label} className={`${prefixCls}__item`}>
          <Link href={item.href}>
            <Img src={item.src} alt={item.label} size={item.size} />
            <p className="t-24 l-34 mt-16">{item.label}</p>
          </Link>
        </Flex.Item>
      ))}

      <style jsx global>{`
        .style-116403 {
          min-height: 1.78rem;
          padding: 0.3rem 0.56rem 0.5rem;
          background: ${Styles.color_theme};
        }
        .${prefixCls}__item {
          position: relative;
          text-align: center;
        }
      `}</style>
      <style jsx>{`
        .style-116403 {
        }
      `}</style>
    </Flex>
  );
};

export default Menu;
