/**
 * const prefixCls = 'style-729139';
 * const images = '/static/images/src/bbs/Index';
 * @Author: czy0729
 * @Date: 2018-07-10 16:34:25
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-10 16:44:53
 * @Path m.benting.com.cn /src/bbs/Index/_Post.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { AffixTabs, ListView } from '@components';
import { BBSItem } from '@_';
import { tabsDS } from './ds';

const prefixCls = 'style-729139';

const _Post = (props, { $ }) => {
  const { className } = props;
  const post = $.getState('post');
  const { page } = $.getState('_affixTabs');

  return (
    <div className={classNames(prefixCls, className)}>
      <AffixTabs tabs={tabsDS} page={page} onTabClick={$.onTabClick}>
        <ListView
          data={post}
          renderRow={item => <BBSItem {...item} />}
          onEndReached={$.fetchPost}
        />
      </AffixTabs>
    </div>
  );
};

_Post.contextTypes = {
  $: PropTypes.object
};

export default observer(_Post);
