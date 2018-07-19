/**
 * const prefixCls = 'style-159339';
 * const images = '/static/images/src/index/Home';
 * @Author: czy0729
 * @Date: 2018-06-21 16:46:50
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-18 09:49:06
 * @Path m.benting.com.cn \src\index\Home\_Video.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Img, Link } from '@components';
import { Header } from '@_';
import Const from '@const';
import Utils from '@utils';
import Styles from '@styles';
import { images } from './ds';

const prefixCls = 'style-159339';

const _Video = (props, { $ }) => {
  const { className } = props;
  const videos = $.getState('videos');

  const listTop = [];
  const listBottm = [];
  videos.list.forEach((item, index) => {
    if (index < videos.list.length / 2) {
      listTop.push(item);
    } else {
      listBottm.push(item);
    }
  });

  return (
    <div className={classNames(prefixCls, className)}>
      <Header
        className="tool-wind"
        title="视频推荐"
        desc="精彩钓鱼视频尽在本汀！"
        href="https://www.tw-bt.com/video"
      />
      <div className="wrap tool-wrap-scroll">
        {listTop.map(item => <Item key={item.tbId} {...item} />)}
        <br />
        {listBottm.map(item => <Item key={item.tbId} {...item} />)}
      </div>

      <style jsx>{`
        .style-159339 {
          min-height: 8.8rem;
          padding-bottom: ${Styles.bottom};
          background: ${Styles.color_theme};
        }
        .wrap {
          padding: 0 ${Styles.wind} 0.08rem;
        }
      `}</style>
    </div>
  );
};

_Video.contextTypes = {
  $: PropTypes.object
};

export default observer(_Video);

const Item = observer(props => (
  <Link
    className={`${prefixCls}__item`}
    href={`https://www.tw-bt.com/video/detail/${props.tbId}`}
  >
    <Img
      className={`${prefixCls}__thumb`}
      src={Utils.getAppImgUrl(props.fileinfo.surface, 'scale')}
    >
      <img
        className="img-play"
        src={`${images}/play${Const.__IMG_DPR__}.png`}
        alt=""
      />
      <span className="p-play-time t-22 l-32">
        {Utils.getPlayTime(props.fileinfo.play_time)}
      </span>
    </Img>
    <div className="info">
      <p className="p-title p-28 l-40 t-c2">{props.tit}</p>
      <p className="t-22 l-32 t-sub t-c1 mt-6">
        {props.userName}·{Utils.lastDate(props.createTime)}
      </p>
    </div>

    <style jsx global>{`
      .style-159339 {
      }
      .${prefixCls}__item {
        display: inline-block;
        width: 44%;
        margin-left: 0.16rem;
        border-radius: 0.06rem;
        box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.15);
      }
      .${prefixCls}__item:nth-of-type(1),
      .${prefixCls}__item:nth-of-type(5) {
        margin-left: 0;
      }
      .${prefixCls}__item:nth-of-type(5),
      .${prefixCls}__item:nth-of-type(6),
      .${prefixCls}__item:nth-of-type(7),
      .${prefixCls}__item:nth-of-type(8) {
        margin-top: 0.22rem;
      }
      .${prefixCls}__thumb {
        width: 100%;
        padding-bottom: 72%;
        border-top-left-radius: 0.06rem;
        border-top-right-radius: 0.06rem;
      }
    `}</style>
    <style jsx>{`
      .style-159339 {
        min-height: 8.8rem;
      }
      .img-play {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 28%;
        height: initial;
        transform: translate(-50%, -50%);
      }
      .p-play-time {
        display: inline-block;
        position: absolute;
        right: 0.16rem;
        bottom: 0.12rem;
        padding: 0.06rem 0.24rem;
        color: ${Styles.color_void};
        background: rgba(0, 0, 0, 0.4);
        border-radius: 0.24rem;
      }
      .info {
        padding: 0.12rem 0.24rem;
      }
      .p-title {
        height: 0.8rem;
        white-space: initial;
      }
    `}</style>
  </Link>
));
