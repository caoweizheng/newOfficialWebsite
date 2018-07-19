/**
 * const prefixCls = 'style-135473';
 * const images = '/static/images/components/RichEditor';
 * @Author: czy0729
 * @Date: 2018-07-11 23:39:30
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-11 23:40:00
 * @Path m.benting.com.cn /components/RichEditor/_Title.js
 */
import React from 'react';
import classNames from 'classnames';
import { TextareaItem } from 'antd-mobile';
import Styles from '@styles';

const prefixCls = 'style-135473';

const _title = props => {
  const { value, onChange, className } = props;

  return (
    <div>
      <TextareaItem
        className={classNames(prefixCls, className)}
        placeholder="输入贴子标题"
        autoHeight
        clear
        value={value}
        onChange={onChange}
      />

      <style jsx global>{`
        .style-135473 {
          width: 80%;
          margin-left: 10%;
          padding: 0 ${Styles.sm} !important;
          border-bottom: 0.01rem solid ${Styles.color_border};
        }
        .${prefixCls} .am-textarea-clear {
          margin-top: 0;
        }
        .${prefixCls} textarea {
          text-align: center;
          font-size: ${Styles.font_lg};
        }
        .${prefixCls} textarea::-webkit-input-placeholder {
          color: #aaa;
        }
      `}</style>
    </div>
  );
};

export default _title;
