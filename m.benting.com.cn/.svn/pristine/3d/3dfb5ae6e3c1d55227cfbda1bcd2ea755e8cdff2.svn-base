/**
 * const prefixCls = 'style-419025';
 * const images = '/static/images/src/index/Nido';
 * @Author: czy0729
 * @Date: 2018-06-22 18:27:44
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 11:40:32
 * @Path m.benting.com.cn /src/index/Nido/_Menu.js
 */
import React from 'react';
import classNames from 'classnames';
import { Link } from '@components';
import Styles from '@styles';
import { menuDS } from './ds';

const prefixCls = 'style-419025';

const _ = props => {
  const { className } = props;

  return (
    <div className={classNames(prefixCls, className)}>
      {menuDS.map(item => (
        <Link
          key={item.label}
          className={`${prefixCls}__item t-c`}
          href={item.href}
        >
          <img className="img-icon" src={item.src} alt={item.label} />
          <p className="t-24 l-34 t-sub mt-16">{item.label}</p>
        </Link>
      ))}

      <style jsx global>{`
        .style-419025 {
        }
        .${prefixCls}__item {
          display: inline-block;
          width: 25%;
        }
        .${prefixCls}__item:nth-of-type(n + 5) {
          margin-top: 0.42rem;
        }
      `}</style>
      <style jsx>{`
        .style-419025 {
          min-height: 3.24rem;
          padding: 0.36rem ${Styles.wind} 0.34rem;
          background: ${Styles.color_theme};
        }
        .img-icon {
          widht: 0.56rem;
          height: 0.56rem;
        }
      `}</style>
    </div>
  );
};

export default _;
