/**
 * const prefixCls = 'style-198943';
 * const images = '/static/images/components/Form';
 * @Author: czy0729
 * @Date: 2018-07-02 14:53:26
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-02 15:42:42
 * @Path m.benting.com.cn /components/Form/Input.js
 */
import React from 'react';
import classNames from 'classnames';
import { InputItem, Modal } from 'antd-mobile';
import Const from '@const';
import utils from './utils';

class Input extends React.Component {
  state = {
    passwordView: false
  };

  render() {
    const {
      form,
      option,
      name,
      label,
      initialValue,
      type,
      extra,
      className,
      ...other
    } = this.props;
    const { passwordView } = this.state;

    const isPassword = type === 'password';
    const _type = isPassword && !passwordView ? type : 'text';
    let _extra;

    if (isPassword) {
      _extra = (
        <img
          src={
            passwordView
              ? `${Const.__IMG__}/icon/eye${Const.__IMG_DPR__}.png`
              : `${Const.__IMG__}/icon/eye-close${Const.__IMG_DPR__}.png`
          }
          onClick={() => this.setState({ passwordView: !passwordView })}
          alt=""
        />
      );
    }

    return (
      <InputItem
        {...form.getFieldProps(name, {
          initialValue,
          ...option
        })}
        className={classNames(utils.getFormItemCls(name), className)}
        name={name}
        clear
        placeholder="请输入"
        updatePlaceholder
        error={!!form.getFieldError(name)}
        type={isPassword ? _type : type}
        extra={isPassword ? _extra : extra}
        onErrorClick={() => {
          Modal.alert('提示', form.getFieldError(name).join('，'));
        }}
        {...other}
      >
        {label && utils.getLabelDecorator(option)(label)}
      </InputItem>
    );
  }
}

export default Input;
