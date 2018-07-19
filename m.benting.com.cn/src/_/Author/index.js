/**
 * const prefixCls = 'style-133496';
 * const images = '/static/images/src/_/Author';
 * @Author: czy0729
 * @Date: 2018-07-04 16:51:33
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-18 12:28:58
 * @Path m.benting.com.cn /src/_/Author/index.js
 */
import React from 'react';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import Avatar from '../Avatar';
import Level from '../Level';
// import FansAuth from '../FansAuth';

const prefixCls = 'styles-133496';

const Author = props => {
  const {
    userId,
    img,
    name,
    level,
    fansAuth,
    date,
    left,
    vip,
    className,
    ...other
  } = props;

  return (
    <Flex className={classNames(prefixCls, className)} {...other}>
      <Avatar userId={userId} img={img} vip={vip} />
      <div
        className={classNames({
          'ml-sm': !!img
        })}
      >
        <Flex>
          <p className="t-30 l-44 t-title">{name}</p>
          <Level className="ml-8" value={level} />
          {/* <FansAuth value={fansAuth} /> */}
        </Flex>
        <p className="t-24 l-36 t-sub">
          <span>{left}</span>
          <span>{date}</span>
        </p>
      </div>

      <style jsx global>{`
        .styles-133496 {
        }
      `}</style>
    </Flex>
  );
};

export default Author;
