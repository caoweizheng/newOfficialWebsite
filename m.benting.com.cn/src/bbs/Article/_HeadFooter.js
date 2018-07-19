/**
 * const prefixCls = 'style-163678';
 * const images = '/static/images/src/bbs/Article';
 * @Author: czy0729
 * @Date: 2018-07-12 18:12:00
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-16 09:32:28
 * @Path m.benting.com.cn /src/bbs/Article/_HeadFooter.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import { observer } from '@';
import { NativeShare, Icon } from '@components';
import Utils from '@utils';

const _HeadFooter = (props, { $ }) => {
  const { config } = props;

  return (
    <Flex>
      <Icon
        className={classNames('t-34 t-b', {
          't-title': !$.isFavor,
          't-primary': $.isFavor
        })}
        type="favor-fill"
        onClick={() => Utils.checkLogin($.do.toggleFavor)}
      />
      <NativeShare
        className="ml-32"
        config={config}
        actionSheetConfig={{
          message: '分享邀请链接到'
        }}
      >
        <Icon className="t-34 t-title t-b" type="share-fill" />
      </NativeShare>
    </Flex>
  );
};

_HeadFooter.contextTypes = {
  $: PropTypes.object
};

export default observer(_HeadFooter);
