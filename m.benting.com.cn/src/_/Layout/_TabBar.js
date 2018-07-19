/**
 * const prefixCls = 'style-332723';
 * const images = '/static/images/src/_/Layout';
 * @Author: czy0729
 * @Date: 2018-06-20 17:21:41
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-10 11:16:40
 * @Path m.benting.com.cn \src\_\Layout\_TabBar.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Icon, Link } from '@components';
import Const from '@const';
import Styles from '@styles';
import { images, menuDS } from './ds';

const prefixCls = 'styles-332723';

const _TabBar = (props, { pathname }) => {
  const hidden = !['/nido', '/discovery', '/bbs', '/person'].includes(pathname);

  if (hidden) return null;

  return (
    <div className={prefixCls}>
      <Flex justify="around">
        {menuDS.map(item => {
          const isCurrent = pathname === item.href;

          return (
            <Link key={item.label} className={`${prefixCls}__item`} href={item.href}>
              <img
                className="img-icon"
                src={`${images}/${item.icon}${isCurrent ? '-active' : ''}${
                  Const.__IMG_DPR__
                }.png`}
                alt=""
              />
              <p
                className={classNames('t-20 l-28 t-c', {
                  't-sub': !isCurrent,
                  't-primary': isCurrent
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </Flex>
      <div className="btn-center">
        <Icon className="t-48 t-void" type="plus" />
      </div>

      <style jsx global>{`
        .style-332723 {
        }
        .${prefixCls}__item:nth-of-type(3) {
          margin-left: 20%;
        }
      `}</style>
      <style jsx>{`
        .styles-332723 {
          position: fixed;
          z-index: ${Styles.z_tabbar};
          bottom: 0;
          width: 100%;
          padding: 0.06rem 0 0.04rem;
          margin-bottom: -0.01rem;
          background: ${Styles.color_tab_bar};
          border-top: ${Styles.border};
          transform: translateZ(0);
        }
        .img-icon {
          width: 0.64rem;
          height: 0.64rem;
        }
        .btn-center {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 50%;
          width: 1.16rem;
          height: 1.16rem;
          margin-top: -0.2rem;
          text-align: center;
          line-height: 1.28rem;
          background: ${Styles.color_primary};
          border-radius: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
};

_TabBar.contextTypes = {
  pathname: PropTypes.string
};

export default observer(_TabBar);
