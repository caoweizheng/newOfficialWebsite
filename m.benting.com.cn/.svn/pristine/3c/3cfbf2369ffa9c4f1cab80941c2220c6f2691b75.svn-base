/**
 * const prefixCls = 'style-146076';
 * const images = '/static/images/components/RichEditor/decorator';
 * @Author: czy0729
 * @Date: 2018-07-11 23:03:12
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-11 23:04:38
 * @Path m.benting.com.cn /components/RichEditor/decorator/link.js
 */
import React from 'react';
import { Entity } from 'draft-js';
import Styles from '@styles';

const prefixCls = 'style-146076';

const Link = props => {
  const { offsetKey, entityKey } = props;
  const { link, tag } = Entity.get(entityKey).getData();

  return (
    <a
      className={prefixCls}
      data-offset-key={offsetKey}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {tag}

      <style jsx global>{`
        .style-146076 {
          position: relative;
          color: ${Styles.color_primary};
          word-wrap: break-word;
        }
        .${prefixCls}:before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.02rem;
          border-bottom: 0.01rem solid #333;
        }
      `}</style>
    </a>
  );
};

export default {
  strategy: (contentBlock, callback) => {
    contentBlock.findEntityRanges(character => {
      const entityKey = character.getEntity();

      return entityKey !== null && Entity.get(entityKey).getType() === 'link';
    }, callback);
  },
  component: Link
};
