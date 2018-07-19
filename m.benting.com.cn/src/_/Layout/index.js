/**
 * const prefixCls = 'style-886544';
 * const images = '/static/images/src/_/Layout';
 * @Author: czy0729
 * @Date: 2018-06-20 11:16:42
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-15 12:37:53
 * @Path m.benting.com.cn \src\_\Layout\index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Page } from '@components';
import Const from '@const';
import Utils from '@utils';
import Styles from '@styles';
import Header from './_Header';
import TabBar from './_TabBar';
import UI from './_UI';

class Layout extends React.Component {
  static contextTypes = {
    asPath: PropTypes.string
  };

  renderHeader() {
    const { title, hide, hideHeader, hideBack, hideLogo } = this.props;

    if (hide) {
      return null;
    }

    if (hideHeader) {
      /* return (
        <div>
          <img
            className="img-back"
            src={`${Const.__IMAGES__}/back.png`}
            onClick={() => Utils.router.back()}
          />
          <img
            className="img-home"
            src={`${Const.__IMAGES__}/home.png`}
            onClick={() => Utils.router.push('/')}
          />

          <style jsx>{`
            .styles-50327822 {
            }
            img {
              width: 0.64rem;
              height: 0.64rem;
              position: absolute;
              z-index: ${Styles.z_layout_icon};
              top: ${Styles.space};
              opacity: 0.8;
            }
            .img-back {
              left: ${Styles.wind};
            }
            .img-home {
              right: ${Styles.wind};
            }
          `}</style>
        </div>
      ); */
    }

    return <Header title={title} hideBack={hideBack} hideLogo={hideLogo} />;
  }

  render() {
    const { asPath } = this.context;
    const {
      className,
      theme,
      wrapClassName,
      wrapStyle,
      title,
      style = {},
      children
    } = this.props;

    if (title && Const.__CLIENT__) document.title = title;

    let _style;
    if (theme === 'fullTheme') {
      // 满屏白底
      _style = {
        background: Styles.color_theme,
        minHeight: '100vh'
      };
    }

    // UC浏览器需要加max-height，否则字体会被无故放大
    return (
      <Page
        className={classNames(className, {
          uc: Utils.isUC()
        })}
        style={{
          ..._style,
          ...style
        }}
      >
        {this.renderHeader()}
        <div
          key={asPath}
          className={wrapClassName}
          style={{
            position: 'relative',
            ...wrapStyle
          }}
        >
          {children}
        </div>
        <TabBar />
        <UI />
      </Page>
    );
  }
}

export default observer(Layout);
