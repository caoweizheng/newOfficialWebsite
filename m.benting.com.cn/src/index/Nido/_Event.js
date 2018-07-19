/**
 * const prefixCls = 'style-987873';
 * const images = '/static/images/src/index/Nido';
 * @Author: czy0729
 * @Date: 2018-06-24 18:00:29
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 12:02:56
 * @Path m.benting.com.cn /src/index/Nido/_Event.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { CountDown, Img, Link } from '@components';
import Const from '@const';
import Utils from '@utils';
import Styles from '@styles';
import { images } from './ds';

const prefixCls = 'style-987873';

const _ = props => {
  const { className } = props;

  return (
    <div className={classNames(prefixCls, className)} onClick={() => Utils.u()}>
      <Top />
      <Middle />
      <Bottom />

      <style jsx>{`
        .style-987873 {
          min-height: 8.14rem;
        }
      `}</style>
    </div>
  );
};

export default _;

const Top = observer((props, { $ }) => {
  const { panic, floor, goldAuction } = $.getState('event');

  return (
    <React.Fragment>
      <Link
        className={`${prefixCls}__top__block`}
        href="https://www.tw-bt.com/shop/miaosha"
      >
        <div className="content">
          <p>
            <span className="t-34 l-48 t-danger">极速秒杀</span>
            <span className="t-24 l-34 t-sub ml-8">倒计时：</span>
          </p>
          <CountDown className="mt-10" beginTime={panic.beginTime}>
            <span className="t-24 mt-10">进行中</span>
          </CountDown>
          <Img
            className={`${prefixCls}__top__img-lg`}
            src={Utils.getAppImgUrl(panic.imgId)}
          />
        </div>
      </Link>
      <div className={`${prefixCls}__top__block`}>
        <Link
          className={`${prefixCls}__top__square`}
          href="https://www.tw-bt.com/event/floor"
        >
          <div className="content">
            <p className="t-30 l-42">金币踩楼</p>
            <img
              className="img-processing mt-6"
              src={`${images}/processing${Const.__IMG_DPR__}.png`}
              alt=""
            />
            <Img
              className={`${prefixCls}__top__img-sm`}
              src={Utils.getAppImgUrl(floor.imgId, 'scale')}
            />
          </div>
        </Link>
        <Link
          className={`${prefixCls}__top__square`}
          href="https://www.tw-bt.com/shop/auction"
        >
          <div className="content">
            <p className="t-30 l-42">金币竞拍</p>
            {goldAuction.state === 2 && (
              <img
                className="img-processing mt-6"
                src={`${images}/processing${Const.__IMG_DPR__}.png`}
                alt=""
              />
            )}
            <Img
              className={`${prefixCls}__top__img-sm`}
              src={Utils.getAppImgUrl(goldAuction.imgId, 'scale')}
            />
          </div>
        </Link>
      </div>

      <style jsx global>{`
        .style-987873 {
        }
        .${prefixCls}__top__block {
          display: inline-block;
          position: relative;
          vertical-align: top;
          width: 50%;
          padding-bottom: 45.6%;
          background: ${Styles.color_theme};
        }
        .${prefixCls}__top__block:first-child {
          border-right: ${Styles.border}
        }
        .${prefixCls}__top__square {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding-bottom: 45.6%;
        }
        .${prefixCls}__top__square:last-child {
          top: 50%;
          border-top: ${Styles.border}
        }
        .${prefixCls}__top__img-lg {
          position: absolute;
          right: 0.2rem;
          bottom: 0.2rem;
          width: 44%;
          padding-bottom: 44%;
          background-color: transparent;
          background-size: contain;
        }
        .${prefixCls}__top__img-sm {
          position: absolute;
          top: 50%;
          left: 1.8rem;
          width: 32%;
          padding-bottom: 32%;
          background-color: transparent;
          background-size: contain;
          transform: translateY(-50%);
        }
      `}</style>
      <style jsx>{`
        .style-987873 {
        }
        .content {
          ${Styles._full};
          padding: 6.4% 8%;
        }
        .img-processing {
          width: 1rem;
          height: 0.4rem;
        }
      `}</style>
    </React.Fragment>
  );
});

Top.contextTypes = {
  $: PropTypes.object
};

const Middle = () => (
  <Flex className={`${prefixCls}__middle`}>
    {[
      {
        title: '精彩视频',
        desc: '精彩视频尽在本汀',
        icon: 'video',
        href: 'https://www.tw-bt.com/videos'
      },
      {
        title: '本汀直播',
        desc: '直播有礼，乐开怀',
        icon: 'now',
        href: 'https://www.tw-bt.com/bbs/block/95'
      }
    ].map((item, index) => (
      <Flex.Item
        key={item.title}
        className={classNames(`${prefixCls}__middle__item`, {
          'ml-16': index > 0
        })}
      >
        <Link href={item.href} block>
          <Flex justify="center" align="start">
            <img
              className="img-icon"
              src={`${images}/${item.icon}${Const.__IMG_DPR__}.png`}
              alt=""
            />
            <div className="ml-8">
              <p className="t-34 l-48 t-title">{item.title}</p>
              <p className="t-24 l-34 t-sub mt-2">{item.desc}</p>
            </div>
          </Flex>
          <img
            className="img-goto"
            src={`${images}/goto${Const.__IMG_DPR__}.png`}
            alt=""
          />
        </Link>
      </Flex.Item>
    ))}

    <style jsx global>{`
      .style-987873 {
      }
      .${prefixCls}__middle {
        padding: 0.16rem 0.16rem 0.5rem;
      }
      .${prefixCls}__middle__item {
        position: relative;
        padding: 0.3rem 0 0.52rem;
        background: ${Styles.color_theme};
        border-radius: 0.06rem;
      }
    `}</style>
    <style jsx>{`
      .style-987873 {
      }
      .img-icon {
        width: 0.5rem;
        height: 0.5rem;
      }
      .img-goto {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0.6rem;
        height: 0.6rem;
        transform: translate(-50%, 50%);
      }
    `}</style>
  </Flex>
);

const Bottom = observer((props, { $ }) => {
  const { panicGold, pointOncebuy, guess, pointAuction } = $.getState('event');

  return (
    <React.Fragment>
      <div className="block block-1">
        <Link
          className={`${prefixCls}__bottom__square`}
          href="https://www.tw-bt.com/shop/jianlou"
        >
          <Flex className={`${prefixCls}__bottom__content`}>
            <Img
              className={`${prefixCls}__bottom__img-sm`}
              src={Utils.getAppImgUrl(panicGold.imgId, 'scale')}
            />
            <div className="ml-16">
              <p className="t-30 l-42 t-title">金币捡漏</p>
              {panicGold.state === 1 && (
                <Flex className="mt-6">
                  <CountDown
                    className="t-24 l-34 t-danger"
                    beginTime={panicGold.beginTime}
                    theme={false}
                  />
                  <span className="t-24 l-34 t-sub">后开始</span>
                </Flex>
              )}
              {panicGold.state === 2 && (
                <img
                  className="img-processing mt-6"
                  src={`${images}/processing${Const.__IMG_DPR__}.png`}
                  alt=""
                />
              )}
              {panicGold.state === undefined && (
                <p className="t-22 l-48 t-sub">暂无活动</p>
              )}
            </div>
          </Flex>
        </Link>
        <Link
          className={`${prefixCls}__bottom__square`}
          href="https://www.nidosport.com/event/integral_indiana"
        >
          <Flex className={`${prefixCls}__bottom__content`}>
            <Img
              className={`${prefixCls}__bottom__img-sm`}
              src={Utils.getAppImgUrl(pointOncebuy.imgId, 'scale')}
            />
            <div className="ml-16">
              <p className="t-30 l-42 t-title">积分挖宝</p>
              {pointOncebuy.state === 2 ? (
                <img
                  className="img-processing mt-6"
                  src={`${images}/processing${Const.__IMG_DPR__}.png`}
                  alt=""
                />
              ) : (
                <p className="t-22 l-48 t-sub">暂无活动</p>
              )}
            </div>
          </Flex>
        </Link>
      </div>
      <div className="block">
        <Link
          className={`${prefixCls}__bottom__square`}
          href="https://www.tw-bt.com/event/guess"
        >
          <Flex className={`${prefixCls}__bottom__content`}>
            <Img
              className={`${prefixCls}__bottom__img-sm`}
              src={Utils.getAppImgUrl(guess.imgId, 'scale')}
            />
            <div className="ml-16">
              <p className="t-30 l-42 t-title">欢乐猜鱼</p>
              {guess.state === 2 ? (
                <img
                  className="img-processing mt-6"
                  src={`${images}/processing${Const.__IMG_DPR__}.png`}
                  alt=""
                />
              ) : (
                <p className="t-22 l-48 t-sub">暂无活动</p>
              )}
            </div>
          </Flex>
        </Link>
        <Link
          className={`${prefixCls}__bottom__square`}
          href="https://www.tw-bt.com/shop/auction?type=score"
        >
          <Flex className={`${prefixCls}__bottom__content`}>
            <Img
              className={`${prefixCls}__bottom__img-sm`}
              src={Utils.getAppImgUrl(pointAuction.imgId, 'scale')}
            />
            <div className="ml-16">
              <p className="t-30 l-42 t-title">积分竞拍</p>
              {pointAuction.state === 2 ? (
                <img
                  className="img-processing mt-6"
                  src={`${images}/processing${Const.__IMG_DPR__}.png`}
                  alt=""
                />
              ) : (
                <p className="t-22 l-48 t-sub">暂无活动</p>
              )}
            </div>
          </Flex>
        </Link>
      </div>

      <style jsx global>{`
        .style-987873 {
        }
        .${prefixCls}__bottom__square {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding-bottom: 45.6%;
        }
        .${prefixCls}__bottom__square:last-child {
          top: 50%;
          border-top: ${Styles.border}
        }
        .${prefixCls}__bottom__content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          padding: 6.4% 8%;
        }
        .${prefixCls}__bottom__img-sm {
          width: 32%;
          padding-bottom: 32%;
          background-color: transparent;
          background-size: contain;
        }
      `}</style>
      <style jsx>{`
        .style-987873 {
        }
        .block {
          display: inline-block;
          position: relative;
          vertical-align: top;
          width: 50%;
          padding-bottom: 45.6%;
          background: ${Styles.color_theme};
        }
        .block-1 {
          border-right: ${Styles.border}
        }
        .img-processing {
          width: 1rem;
          height: 0.4rem;
        }
      `}</style>
    </React.Fragment>
  );
});

Bottom.contextTypes = {
  $: PropTypes.object
};
