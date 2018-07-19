/**
 * const prefixCls = 'style-685489';
 * const images = '/static/images/src/index/Sign';
 * @Author: cwz0525
 * @Date: 2018-07-12 16:24:05
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-13 10:49:11
 * @Path m.benting.com.cn /src/person/wallet/Index/_List.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import Styles from '@styles';
import { Img } from '@components';
import { listDS } from './ds';

const prefixCls = 'style-685489';
const List = props => {
  const { className } = props;
  return (
    <div className={classNames(prefixCls, className)}>
      {listDS.map((item, index) => (
        <Flex>
          <Img src={item.src[0]} />
          <Flex.Item>
            <div
              className={classNames('item-all', {
                'item-first': index == 0
              })}
            >
              <Flex justify="between" align="center">
                <span className="t-30 l-42 t-b">{item.label}</span>
                <Img src={item.src[1]} />
              </Flex>
            </div>
          </Flex.Item>
        </Flex>
      ))}
      <style jsx>{`
        .style-685489 {
          padding-left: 0.6rem;
          background: ${Styles.color_theme};
        }
        .item-first {
          border-bottom: 1px solid #ccc;
        }
        .item-all{
          padding: 0.18rem 0;
        }
      `}</style>
    </div>
  );
};

List.contextTypes = {
  $: PropTypes.object
};

export default observer(List);
