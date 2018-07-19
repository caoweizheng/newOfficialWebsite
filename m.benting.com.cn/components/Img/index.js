/**
 * const prefixCls = 'style-110612';
 * const images = '/static/images/components/Img';
 * @Author: czy0729
 * @Date: 2018-06-20 17:32:16
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-19 09:39:46
 * @Path m.benting.com.cn \components\Img\index.js
 */
import React from 'react';
import classNames from 'classnames';
import Const from '@const';
import Utils from '@utils';
import Styles from '@styles';

const prefixCls = 'c-img';

const Img = props => {
  const {
    src,
    size,
    circle,
    transparent,
    style,
    className,
    children,
    ...other
  } = props;

  let _src = Utils.getAppImgUrl(src);
  // 灵动默认图改成本汀默认图
  if (_src.indexOf('591e5f9e2c2bc') !== -1) {
    _src = Const.__IMG_DEFAULT__;
  }

  let _style;
  if (circle) {
    _style = {
      borderRadius: '50%'
    };
  }

  return (
    <div
      className={classNames(prefixCls, className)}
      style={
        size
          ? {
            width: size,
            height: size,
            backgroundImage: `url(${_src})`,
            backgroundColor: transparent ? 'transparent' : Styles.color_bg,
            ..._style,
            ...style
          }
          : {
            backgroundImage: `url(${_src})`,
            backgroundColor: transparent ? 'transparent' : Styles.color_bg,
            ..._style,
            ...style
          }
      }
      {...other}
    >
      {children}

      <style jsx global>{`
        .c-img {
          display: inline-block;
          position: relative;
          width: 0.72rem;
          height: 0.72rem;
          vertical-align: top;
          ${Styles._bg};
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Img;
