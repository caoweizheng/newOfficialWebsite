/**
 * const prefixCls = 'style-898123';
 * const images = '/static/images/src/_/Avatar';
 * @Author: czy0729
 * @Date: 2018-07-11 10:59:14
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-18 12:28:37
 * @Path m.benting.com.cn /src/_/Avatar/index.js
 */
import React from 'react';
import classNames from 'classnames';
import { Img, Link, Icon } from '@components';

const prefixCls = 'style-898123';

const Avatar = props => {
  const { userId, img, vip, className, ...other } = props;

  if (!img) {
    return null;
  }

  return (
    <React.Fragment>
      <Link
        className={classNames(prefixCls, className)}
        href={`/person/zone?id=${userId}`}
        as={`/person/zone/${userId}`}
      >
        <Img className={`${prefixCls}__img`} src={img} circle {...other}>
          {vip == 1 && (
            <Icon className={`${prefixCls}__vip`} color type="vip" />
          )}
        </Img>
      </Link>

      <style jsx global>{`
        .style-898123 {
        }
        .${prefixCls}__img {
          overflow: initial;
        }
        .${prefixCls}__vip {
          position: absolute;
          right: 0;
          bottom: 0;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Avatar;
