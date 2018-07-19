/**
 * const prefixCls = 'style-110449';
 * const images = '/static/images/src/bbs/Index';
 * @Author: czy0729
 * @Date: 2018-07-10 14:34:50
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-18 15:22:52
 * @Path m.benting.com.cn /src/bbs/Index/_PostTop.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List } from '@components';
import { observer } from '@';
import Styles from '@styles';

const prefixCls = 'style-110449';

const _PostTop = (props, { $ }) => {
  const { className } = props;
  const postTop = $.getState('postTop');

  return (
    <List className={classNames(prefixCls, className)}>
      {postTop.list.map(item => (
        <List.Item
          key={item.threadId}
          thumb={<span className="t-30 l-42 t-primary">置顶</span>}
          href={`/bbs/article?id=${item.threadId}`}
          as={`/bbs/article/${item.threadId}`}
        >
          <p className="t-30 l-42 t-c1">{item.title}</p>
        </List.Item>
      ))}

      <style jsx global>{`
        .style-110449 {
          min-height: 2.64rem;
          background: ${Styles.color_theme};
        }
      `}</style>
    </List>
  );
};

_PostTop.contextTypes = {
  $: PropTypes.object
};

export default observer(_PostTop);
