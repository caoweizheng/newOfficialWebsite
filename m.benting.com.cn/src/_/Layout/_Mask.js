/**
 * const prefixCls = 'style-103278';
 * const images = '/static/images/src/_/Layout';
 * @Author: czy0729
 * @Date: 2018-06-20 17:24:33
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-08 21:00:09
 * @Path m.benting.com.cn \src\_\Layout\_Mask.js
 */
import React from 'react';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Animate } from '@components';
import Styles from '@styles';
import UI from '@stores/ui';

const prefixCls = 'style-103278';

const _Mask = () => {
  const { show, children } = UI.getState('mask');

  return (
    <React.Fragment>
      <Animate type="fade">
        {show && (
          <Flex className={`${prefixCls} am-modal-mask`} justify="center">
            {children}
          </Flex>
        )}
      </Animate>

      <style jsx global>{`
        .styles-103278 {
          ${Styles._full};
          z-index: ${Styles.z_mask};
        }
      `}</style>
    </React.Fragment>
  );
};

export default observer(_Mask);
