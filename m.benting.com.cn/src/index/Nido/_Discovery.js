/**
 * const prefixCls = 'style-903950';
 * const images = '/static/images/src/index/Nido';
 * @Author: czy0729
 * @Date: 2018-06-25 18:33:16
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-18 10:03:59
 * @Path m.benting.com.cn /src/index/Nido/_Discovery.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img, Link } from '@components';
import { Header } from '@_';
import Const from '@const';
import Utils from '@utils';
import Styles from '@styles';
import { images } from './ds';

const prefixCls = 'style-903950';

const _Discovery = (props, { $ }) => {
  const { className } = props;
  const discovery = $.getState('discovery');

  return (
    <div className={classNames(prefixCls, className)}>
      <Header
        title="发现精选"
        desc="精选本汀动态任君查看！"
        href="https://www.nidosport.com/discovery"
      />
      <div className="tool-wind">
        {discovery.list.map(item => (
          <Link
            key={item.tbId}
            className={`${prefixCls}__item`}
            href={`https://www.nidosport.com/discovery/detail/${item.infoId}`}
            block
          >
            <Flex align="start">
              <Img
                className={`${prefixCls}__avatar`}
                src={item.faceImg}
                size="0.72rem"
                circle
              />
              <Flex.Item className={`${prefixCls}__detail`}>
                <p className="p-con t-28 l-40 t-m t-c2">{item.con}</p>
                <Flex className="t-24 t-sub l-34 mt-16">
                  <Flex.Item>
                    <Flex>
                      <span>{item.niname}</span>
                      {item.vip == 1 ? (
                        <img
                          className="img-vip ml-12"
                          src={`${images}/vip${Const.__IMG_DPR__}.png`}
                          alt=""
                        />
                      ) : (
                        <span className="ml-12">·</span>
                      )}
                      <span className="ml-12">
                        {Utils.lastDate(item.publishTime)}
                      </span>
                    </Flex>
                  </Flex.Item>
                  <img
                    className="img-comment"
                    src={`${images}/comment${Const.__IMG_DPR__}.png`}
                    alt=""
                  />
                  <span className="ml-12">{item.commentCount}</span>
                </Flex>
              </Flex.Item>
            </Flex>
          </Link>
        ))}
      </div>

      <style jsx global>{`
        .style-903950 {
        }
        .${prefixCls}__item:not(:last-child) .${prefixCls}__detail {
          border-bottom: 0.01rem solid ${Styles.color_border};
        }
        .${prefixCls}__detail {
          padding: 0.16rem 0;
        }
        .${prefixCls}__item:first-child .${prefixCls}__detail {
          padding-top: 0;
        }
        .${prefixCls}__avatar {
          margin-top: 0.22rem;
        }
        .${prefixCls}__item:first-child .${prefixCls}__avatar {
          margin-top: 0.06rem;
        }
      `}</style>
      <style jsx>{`
        .style-903950 {
          background: ${Styles.color_theme};
        }
        .p-con {
          min-height: 0.8rem;
        }
        .img-vip,
        .img-comment {
          width: 0.24rem;
          height: 0.24rem;
        }
      `}</style>
    </div>
  );
};

_Discovery.contextTypes = {
  $: PropTypes.object
};

export default observer(_Discovery);
