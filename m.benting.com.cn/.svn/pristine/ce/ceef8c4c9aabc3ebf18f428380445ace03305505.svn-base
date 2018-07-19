/**
 * const prefixCls = 'style-116571';
 * const images = '/static/images/src/_/Layout';
 * @Author: czy0729
 * @Date: 2018-06-20 17:18:35
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-20 17:20:17
 * @Path m.benting.com.cn \src\_\Layout\_Header.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Header } from '@components';
import UI from '@stores/ui';

const _Header = (props, { pathname }) => {
  const { title, hideBack, hideLogo } = props;
  const header = UI.getState('header');

  return (
    <Header
      title={title}
      pathname={pathname}
      hideBack={hideBack}
      hideLogo={hideLogo}
      {...header}
    />
  );
};

_Header.contextTypes = {
  pathname: PropTypes.string
};

export default observer(_Header);
