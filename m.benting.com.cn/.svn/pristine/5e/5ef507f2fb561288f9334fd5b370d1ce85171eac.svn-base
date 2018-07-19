/**
 * const prefixCls = 'style-191166';
 * const images = '/static/images/src/index/VIP';
 * @Author: cwz0525
 * @Date: 2018-07-16 18:33:20
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-18 11:39:01
 * @Path m.benting.com.cn /src/person/Index/_Menu.js
 */
import React from 'react';
import classNames from 'classnames';
import { Badge } from 'antd-mobile';
import { Flex, Link, Icon } from '@components';
import Styles from '@styles';
// import Const from '@const';
import { menuDS } from './ds';

const prefixCls = 'style-191166';

const Menu = props => {
  const { className } = props;

  return (
    <div className={classNames(prefixCls, className)}>
      <Flex
        justify="between"
        wrap="wrap"
        style={{ padding: '0.56rem 0.5rem 0.5rem 0.4rem' }}
      >
        {menuDS.map((item, index) => (
          <div
            key={item.label}
            className={classNames('menu-item', {
              'mt-64': index >= 4
            })}
          >
            <Link key={item.label} href={item.href}>
              <Badge
                dot={item.isHot}
                style={{
                  top: '-0.05rem',
                  right: '-0.13rem',
                  border: '0.01rem solid #fff'
                }}
              >
                <Icon
                  className="m-icon t-56"
                  type={item.type}
                  style={{ color: item.color }}
                />
              </Badge>
              <p className="t-24 l-34 mt-18 t-sub">{item.label}</p>
            </Link>
          </div>
        ))}
      </Flex>

      <style jsx>{`
        .style-191166 {
          // padding: ;
          background: ${Styles.color_theme};
        }
        .menu-item {
          position: relative;
          display: inline-block;
          width: 25%;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Menu;
