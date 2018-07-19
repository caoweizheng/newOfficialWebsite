/**
 * const prefixCls = 'style-185133';
 * const images = '/static/images/src/index/Nido';
 * @Author: czy0729
 * @Date: 2018-06-22 17:31:39
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 11:36:29
 * @Path m.benting.com.cn /src/index/Nido/_Carousel.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Carousel } from '@components';
import Utils from '@utils';
import Styles from '@styles';

const prefixCls = 'style-185133';

const _ = (props, { $ }) => {
  const { className } = props;
  const carousel = $.getState('carousel');

  return (
    <div className={classNames(prefixCls, className)}>
      <Carousel
        data={carousel.list.map(item => ({
          src: Utils.getAppImgUrl(item.imgPath, 'scale'),
          href: item.url
        }))}
        height="40vw"
      />

      <style jsx>{`
        .style-185133 {
          min-height: 2.72rem;
          padding: 0 ${Styles.wind} 0.16rem;
          background: ${Styles.color_theme};
        }
      `}</style>
    </div>
  );
};

_.contextTypes = {
  $: PropTypes.object
};

export default observer(_);
