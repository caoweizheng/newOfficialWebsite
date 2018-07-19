/**
 * const prefixCls = 'style-131181';
 * const images = '/static/images/src/_/BBSItem';
 * @Author: czy0729
 * @Date: 2018-07-10 15:45:41
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-18 17:18:48
 * @Path m.benting.com.cn /src/_/BBSItem/index.js
 */
import React from 'react';
import classNames from 'classnames';
import { List, Flex, Icon } from '@components';
import Utils from '@utils';
import Avatar from '../Avatar';
import Level from '../Level';

const prefixCls = 'styles-131181';

const BBSItem = props => {
  const {
    threadId,
    userId,
    faceImg,
    title,
    niname,
    vip,
    grade,
    createTime,
    viewNum,
    isRegistration,
    className
  } = props;

  let prefix;
  if (isRegistration == '1') {
    prefix = '活动';
  }

  return (
    <List.Item
      className={classNames(prefixCls, className)}
      thumb={<Avatar userId={userId} img={faceImg} vip={vip} />}
      thumbPosition="top"
      href={`/bbs/article?id=${threadId}`}
      as={`/bbs/article/${threadId}`}
    >
      <p className="t-28 l-40 t-m t-c2">
        {prefix && <span className="t-danger">{prefix} · </span>}
        <span className="t-title">{title}</span>
      </p>
      <Flex className="t-24 t-sub l-34 mt-16">
        <Flex.Item>
          <Flex>
            <span>{niname}</span>
            <Level className={`${prefixCls}__level ml-xs`} value={grade} />
            <span className="ml-xs">{Utils.lastDate(createTime)}</span>
          </Flex>
        </Flex.Item>
        <Icon className="t-32 l-34 t-sub" type="eye" />
        <span className="ml-xs">{viewNum}</span>
      </Flex>

      <style jsx global>{`
        .styles-131181 {
        }
        .${prefixCls}__level {
          width: 0.3rem !important;
          height: 0.28rem !important;
        }
      `}</style>
    </List.Item>
  );
};

export default BBSItem;
