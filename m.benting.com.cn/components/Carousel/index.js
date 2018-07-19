/**
 * const prefixCls = 'style-127857';
 * const images = '/static/images/components/Carousel';
 * @Author: czy0729
 * @Date: 2018-06-24 18:14:09
 * @Last Modified by:   czy0729
 * @Last Modified time: 2018-06-24 18:14:09
 * @Path m.benting.com.cn /components/Carousel/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Carousel } from 'antd-mobile';
import Const from '@const';
import Utils from '@utils';
import Styles from '@styles';

const prefixCls = 'c-carousel';
const urlLocation = (e, href) => {
  if (!href) return;

  e.stopPropagation();

  if (href.toString().indexOf(Const.__WEB__) !== -1) {
    // 暂时只能对本域名而且结尾为数字的地址，做处理，并且都为?id=
    // #todo /id/postId 这类路由会误解释，需要处理
    const path = href.replace(Const.__WEB__, '');
    const reg = /\/\d+$/;
    const match = path.match(reg);

    if (match) {
      Utils.router.push(
        `${path.replace(reg, '')}?id=${match[0].replace('/', '')}`,
        path
      );
    } else {
      Utils.router.push(path);
    }
  } else {
    window.location = href;
  }
};

const _Carousel = props => {
  const {
    data,
    height,
    style,
    onImgClick = Function.prototype,
    className,
    ...other
  } = props;

  if (data.length === 1) {
    return (
      <div
        className={classNames(prefixCls, className)}
        onClick={() => onImgClick(0)}
      >
        <div
          className="t-bg"
          style={{
            height,
            backgroundImage: `url(${Utils.getAppImgUrl(
              data[0].src,
              'scale',
              true
            )})`,
            ...style
          }}
          onClick={e => urlLocation(e, data[0].href)}
        />
      </div>
    );
  }

  return (
    <React.Fragment>
      <Carousel
        className={classNames(prefixCls, className)}
        infinite
        autoplay
        autoplayInterval={6000}
        style={{
          minHeight: height
        }}
        {...other}
      >
        {data.map((item, index) => (
          <div
            key={item.src}
            className="t-bg"
            style={{
              height,
              backgroundImage: `url(${Utils.getAppImgUrl(
                item.src,
                'scale',
                true
              )})`,
              ...style
            }}
            onClick={e => {
              onImgClick(index);
              urlLocation(e, item.href);
            }}
          />
        ))}
      </Carousel>

      <style jsx global>{`
        .c-carousel {
        }
        .${prefixCls} .slider-list {
          height: ${height} !important;
        }
        .${prefixCls} .slider-slide {
          ${Styles._bg};
          background-image: url(${Const.__IMG_DEFAULT__});
          background-size: contain;
        }
        .${prefixCls} .am-carousel-wrap {
          margin-bottom: 0.08rem;
        }
        .${prefixCls} .am-carousel-wrap-dot > span {
          width: 0.24rem;
          height: 0.12rem;
          margin: 0 0.06rem;
          background: #ccc;
          border-radius: 0;
        }
        .${prefixCls} .am-carousel-wrap-dot-active > span {
          background: #999;
        }
        .${prefixCls} .slider-decorator-0 {
          width: 90%;
        }
      `}</style>
    </React.Fragment>
  );
};

_Carousel.propTypes = {
  height: PropTypes.string
};
_Carousel.defaultProps = {
  height: '46vw'
};

export default _Carousel;
