/**
 * const prefixCls = 'style-156658';
 * const images = '/static/images/components/Form';
 * @Author: czy0729
 * @Date: 2018-07-02 14:29:54
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-02 16:15:53
 * @Path m.benting.com.cn /components/Form/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List } from 'antd-mobile';
import Input from './Input';
import Styles from '@styles';

const prefixCls = 'c-form';

const Form = props => {
  const {
    form,
    onSubmit,
    id = 'form',
    renderHeader,
    label,
    className,
    children,
    ...other
  } = props;

  return (
    <form
      className={classNames(prefixCls, className, {
        [`${prefixCls}_has-header`]: !!renderHeader,
        [`${prefixCls}_no-label`]: !label
      })}
      id={id}
      onSubmit={onSubmit}
    >
      <List renderHeader={renderHeader} {...other}>
        {React.Children.map(children, (item, index) => {
          if (!item) return null;

          return React.cloneElement(item, {
            key: index,
            form
          });
        })}
      </List>

      <style jsx global>{`
        .c-form {
          margin-top: ${Styles.distance};
        }
        .${prefixCls}_has-header {
          margin-top: 0;
        }
        .${prefixCls}_no-label .am-input-label {
          width: auto !important;
          margin-right: 0.24rem;
        }
        .${prefixCls} .am-list-header {
          background-color: transparent;
        }
        .${prefixCls} .am-list-body {
          border-top: 0;
          border-bottom: 0;
        }
        .${prefixCls} .am-list-body:before,
        .${prefixCls} .am-list-body:after {
          display: none !important;
        }
        .${prefixCls} .am-list-line {
          border-bottom: 0.01rem solid ${Styles.color_border};
        }
        .${prefixCls} .am-list-body > .am-list-item:nth-last-child(1) .am-list-line {
          border-bottom: 0 !important;
        }
        .${prefixCls} .am-list-content {
          padding-top: 0.16rem !important;
          padding-bottom: 0.16rem !important;
        }
        .${prefixCls} input {
          color: ${Styles.color_desc} !important;
        }
        .${prefixCls} input::-webkit-input-placeholder {
          color: ${Styles.color_sub} !important;
        }
        .${prefixCls} .am-input-clear {
          background-color: #999;
        }
      `}</style>
    </form>
  );
};

Form.propTypes = {
  form: PropTypes.object.isRequired
};
Form.Input = Input;

export default Form;
