/**
 * const prefixCls = 'style-145388';
 * const images = '/static/images/src/index/Sign';
 * @Author: cwz0525
 * @Date: 2018-07-12 16:24:05
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-12 16:59:33
 * @Path m.benting.com.cn /src/person/wallet/Index/_Menu.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import Styles from '@styles';
import { Img } from '@components';
import { menuDS } from './ds';

const prefixCls = 'style-145388';
const Menu = props => {
  const { className } = props;

  return (
    <div className={classNames(prefixCls, className)}>
      <Flex justify="between">
        {menuDS.map(item => (
          <Flex direction="column" key={item.label}>
            <Img src={item.src} size={item.size} />
            <span className="mt-28">{item.label}</span>
          </Flex>
        ))}
      </Flex>
      <style jsx>{`
        .style-145388 {
          padding: 0.52rem 0.96rem 0.48rem;
          background: ${Styles.color_theme};
        }
      `}</style>
    </div>
  );
};

Menu.contextTypes = {
  $: PropTypes.object
};

export default observer(Menu);
