/**
 * const prefixCls = 'style-144253';
 * const images = '/static/images/src/_/Layout';
 * @Author: czy0729
 * @Date: 2018-07-09 18:25:54
 * @Last Modified by:   czy0729
 * @Last Modified time: 2018-07-09 18:25:54
 * @Path m.benting.com.cn /src/_/Layout/_TabBarScroll.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Icon, Link } from '@components';
import Const from '@const';
import Styles from '@styles';
import { images, menuDS } from './ds';

const prefixCls = 'styles-144253';

@observer
export default class _TabBar extends React.Component {
  static contextTypes = {
    pathname: PropTypes.string
  };

  state = {
    freeze: false,
    open: true
  };

  componentDidMount() {
    if (Const.__CLIENT__) {
      const scroll = (fn = Function.prototype) => {
        let beforeScrollTop =
          document.body.scrollTop || document.documentElement.scrollTop;

        this.onScroll = debounce(() => {
          const afterScrollTop =
            document.body.scrollTop || document.documentElement.scrollTop;
          const delta = afterScrollTop - beforeScrollTop;

          if (delta === 0) {
            return false;
          }

          const direction = delta > 0 ? 'down' : 'up';

          // 向下要超过160px才触发
          if (direction === 'down' && afterScrollTop < 160) {
            return false;
          }

          // 向上滚动距离要超过320px才触发，到顶必定触发
          if (
            direction === 'up' &&
            Math.abs(delta) < 320 &&
            afterScrollTop !== 0
          ) {
            return false;
          }

          fn(direction);
          beforeScrollTop = afterScrollTop;

          return true;
        }, 50);

        window.addEventListener('scroll', this.onScroll, { passive: true });
      };

      scroll(direction => {
        const { pathname } = this.context;
        const { freeze, open } = this.state;

        if (this.currentPathname === undefined) {
          this.currentPathname = pathname;
        }

        if (this.currentPathname !== pathname) {
          this.currentPathname = pathname;
          this.setState({
            freeze: true
          });
        } else if (direction === 'down' && (open || freeze)) {
          this.setState({
            freeze: false,
            open: false
          });
        } else if (direction === 'up' && (!open || freeze)) {
          this.setState({
            freeze: false,
            open: true
          });
        }
      });
    }
  }

  componentWillUnmount() {
    if (Const.__CLIENT__) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  onScroll;
  currentPathname;

  render() {
    const { pathname } = this.context;
    const { freeze, open } = this.state;
    const hidden = !['/nido', '/discovery', '/bbs', '/person'].includes(
      pathname
    );

    if (hidden) return null;

    let cls;
    if (Const.__SERVER__) {
      cls = classNames(`${prefixCls}__wrap`, `${prefixCls}__wrap_open`);
    } else {
      cls = classNames({
        [`${prefixCls}__wrap`]: true,
        [`${prefixCls}__wrap_freeze`]: freeze,
        [`${prefixCls}__wrap_open`]: freeze
          ? document.body.scrollTop === 0
          : open
      });
    }

    return (
      <div className={classNames(prefixCls, cls)}>
        <Flex justify="around">
          {menuDS.map(item => {
            const isCurrent = pathname === item.href;

            return (
              <Link
                key={item.label}
                className={`${prefixCls}__item`}
                href={item.href}
              >
                <img
                  className="img-icon"
                  src={`${images}/${item.icon}${isCurrent ? '-active' : ''}${
                    Const.__IMG_DPR__
                  }.png`}
                  alt=""
                />
                <p
                  className={classNames('t-20 l-28 t-c', {
                    't-sub': !isCurrent,
                    't-primary': isCurrent
                  })}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
        </Flex>
        <div className="btn-center">
          <Icon className="t-48 t-void" type="plus" />
        </div>

        <style jsx global>{`
          .style-144253 {
          }
          .${prefixCls}__wrap {
            transition: transform 0.16s ease-in-out;
          }
          .${prefixCls}__wrap_freeze {
            transition: initial !important;
          }
          .${prefixCls}__wrap_open {
            transform: translate3d(0, 0, 0) !important;
          }
          .${prefixCls}__item:nth-of-type(3) {
            margin-left: 20%;
          }
        `}</style>
        <style jsx>{`
          .styles-144253 {
            position: fixed;
            z-index: ${Styles.z_tabbar};
            bottom: 0;
            width: 100%;
            padding: 0.06rem 0 0.04rem;
            margin-bottom: -0.01rem;
            background: ${Styles.color_tab_bar};
            border-top: ${Styles.border};
            transform: translate3d(0, 120%, 0);
          }
          .img-icon {
            width: 0.64rem;
            height: 0.64rem;
          }
          .btn-center {
            display: inline-block;
            position: absolute;
            top: 0;
            left: 50%;
            width: 1.16rem;
            height: 1.16rem;
            margin-top: -0.2rem;
            text-align: center;
            line-height: 1.28rem;
            background: ${Styles.color_primary};
            border-radius: 50%;
            transform: translateX(-50%);
          }
        `}</style>
      </div>
    );
  }
}
