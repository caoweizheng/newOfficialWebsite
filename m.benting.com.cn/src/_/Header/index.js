/**
 * const prefixCls = 'style-549353';
 * const images = '/static/images/src/_/Header';
 * @Author: czy0729
 * @Date: 2018-06-24 16:35:49
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-18 09:53:50
 * @Path m.benting.com.cn /src/_/Header/index.js
 */
import React from 'react';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import { Link, Icon } from '@components';
import Styles from '@styles';

const prefixCls = 'style-549353';

const Header = props => {
  const { title, desc, href, extra, className } = props;

  let right;
  if (extra) {
    right = extra;
  } else if (href) {
    right = (
      <Link href={href}>
        <Flex>
          <span className="t-30 l-42 t-sub">更多</span>
          <Icon className="t-40 t-sub" type="right" />
        </Flex>
      </Link>
    );
  }

  return (
    <Flex
      className={classNames(prefixCls, className)}
      justify="between"
      align="start"
    >
      <Flex.Item>
        <p className="t-36 l-48 t-title t-b">{title}</p>
        {desc && <p className="t-24 l-34 t-sub mt-8">{desc}</p>}
      </Flex.Item>
      {right}

      <style jsx global>{`
        .style-549353 {
          padding: 0.32rem ${Styles.wind};
          background: ${Styles.color_theme};
        }
      `}</style>
    </Flex>
  );
};

export default Header;
