/**
 * const prefixCls = 'style-112370';
 * const images = '/static/images/components/Button';
 * @Author: czy0729
 * @Date: 2018-07-03 22:56:23
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-13 18:18:43
 * @Path m.benting.com.cn /components/Button/index.js
 */
import React from 'react';
import classNames from 'classnames';
import { Button } from 'antd-mobile';
import Styles from '@styles';

const prefixCls = 'c-button';

const _Button = props => {
  const {
    className,
    type = 'default',
    ghost,
    size,
    disabled,
    children,
    ...other
  } = props;

  return (
    <React.Fragment>
      <Button
        className={classNames(prefixCls, className, {
          [`${prefixCls}_${type}`]: !disabled,
          [`${prefixCls}_ghost`]: ghost,
          [`${prefixCls}_disabled`]: disabled,
          [`${prefixCls}_${size}`]: !!size
        })}
        disabled={disabled}
        {...other}
      >
        {children}
      </Button>

      <style jsx global>{`
        /* reset */
        .c-button {
          position: relative;
          height: 0.88rem;
          font-size: 0.3rem;
          line-height: 0.88rem;
          border-radius: 0.02rem;
        }
        .${prefixCls}:before {
          content: initial !important;
        }
        .${prefixCls}:after {
          ${Styles._full};
          content: '';
          background: rgba(0, 0, 0, 0);
          transition: all 0.16s;
        }
        /* active */
        .am-button-active.${prefixCls}:not(.${prefixCls}_disabled):after {
          background: rgba(0, 0, 0, 0.48);
        }
        .am-button-active.${prefixCls}.${prefixCls}_default:after {
          background: transparent;
        }
        /* type */
        .${prefixCls}_disabled {
          color: ${Styles.color_void};
          background: #d8d8d8 !important;
        }
        .${prefixCls}_default {
          border: ${Styles.border} !important;
        }
        .${prefixCls}_main {
          color: ${Styles.color_void};
          background: ${Styles.color_main} !important;
        }
        .${prefixCls}_primary {
          color: ${Styles.color_void};
          background: ${Styles.color_primary} !important;
        }
        .${prefixCls}_danger {
          color: ${Styles.color_void};
          background: ${Styles.color_danger} !important;
        }
        .${prefixCls}_wait {
          color: ${Styles.color_void};
          background: ${Styles.color_wait} !important;
        }
        /* ghost */
        .${prefixCls}_primary.${prefixCls}_ghost {
          color: ${Styles.color_primary};
          background: ${Styles.color_theme} !important;
          border: 0.01rem solid ${Styles.color_primary} !important;
        }
        .am-button-active.${prefixCls}_primary.${prefixCls}_ghost:after {
          background: rgba(37, 117, 255, 0.24);
        }
        /* size & inline */
        .${prefixCls}_xs {
          height: 0.4rem;
          font-size: 0.2rem;
          line-height: 0.4rem;
        }
        .am-button-inline.${prefixCls}_xs {
          padding: 0 0.17rem;
        }
        .${prefixCls}_sm {
          height: 0.56rem;
          font-size: 0.24rem;
          line-height: 0.56rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default _Button;
