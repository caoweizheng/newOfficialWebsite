/**
 * const prefixCls = 'style-164777';
 * const images = '/static/images/src/index/Home';
 * @Author: czy0729
 * @Date: 2018-06-20 18:52:52
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-05 10:30:54
 * @Path m.benting.com.cn \src\index\Home\_Carousel.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Carousel } from '@components';
import Utils from '@utils';
import Styles from '@styles';

const prefixCls = 'style-164777';

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
        .style-164777 {
          min-height: 2.88rem;
          padding: 0.16rem ${Styles.wind};
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
