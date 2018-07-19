/**
 * const prefixCls = 'style-114766';
 * const images = '/static/images/components/Video';
 * @Author: czy0729
 * @Date: 2018-07-04 18:26:52
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-08 01:18:16
 * @Path m.benting.com.cn /components/Video/index.js
 */
import React from 'react';
import classNames from 'classnames';
import ReactPlayer from 'react-player';
import Const from '@const';
import Utils from '@utils';
import Styles from '@styles';

const prefixCls = 'c-video';
const images = Utils.cdn('/static/images/components/Video');

export default class Video extends React.Component {
  played = false;
  state = {
    playing: false
  };

  renderControl() {
    const { fileSize, playSecond } = this.props;
    const { playing } = this.state;

    // 播放中
    if (playing) return null;

    // 微信环境 播放过后不再显示
    if (Const.__WX__ && this.played) return null;

    return (
      <div
        className="control"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();

          this.setState({
            playing: !playing
          });
        }}
      >
        {/* IOS 自带播放按钮；开发环境是PC模拟IOS，需要显示按钮 */}
        {(!Const.__IOS__ || Const.__DEV__) && (
          <img
            className="img-play"
            src={`${Const.__IMG__}/play${Const.__IMG_DPR__}.png`}
            alt=""
          />
        )}
        {/* 视频信息播放过后不再显示 */}
        {!this.played && (
          <p className="p-control t-30 t-void">
            <span>{fileSize ? Utils.getMB(fileSize) : '-'} MB</span>
            <span className="pull-right">
              {playSecond ? Utils.getPlayTime(playSecond) : '00:00'}
            </span>
          </p>
        )}

        <style jsx>{`
          .c-video {
          }
          .control {
            ${Styles._full};
          }
          .img-play {
            position: absolute;
            top: 48%;
            left: 50%;
            width: 0.96rem !important;
            height: 0.96rem !important;
            transform: translate(-50%, -50%);
          }
          .p-control {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            padding: 0.16rem;
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0)
            );
          }
        `}</style>
      </div>
    );
  }

  render() {
    const {
      src,
      poster,
      height = '57.5vw',
      fileSize,
      playSecond,
      placeholderPublish,
      className,
      ...other
    } = this.props;
    const { playing } = this.state;

    let _poster;
    if (poster === '') {
      _poster = placeholderPublish ? `${images}/1.png` : `${images}/2.png`;
    } else {
      _poster = Utils.getImgUrl(poster);

      if (
        _poster ===
        'https://api.nidosport.com/static/uploads/png/20170519/591e5f9e2c2bc_thumb.png'
      ) {
        _poster = placeholderPublish ? `${images}/1.png` : `${images}/2.png`;
      }
    }

    // 通过class去控制是否显示-webkit-media-controls
    return (
      <div
        className={classNames(prefixCls, className, {
          [`${prefixCls}_pause`]: !playing
        })}
      >
        <ReactPlayer
          url={Utils.getImgUrl(src)}
          playing={playing}
          controls
          playsinline
          width="100%"
          height={height}
          fileConfig={{
            attributes: {
              poster: _poster,
              preload: 'none'
            }
          }}
          onPlay={() => {
            this.played = true;
            this.setState({ playing: true });
          }}
          onPause={() => this.setState({ playing: false })}
          {...other}
        />
        {this.renderControl()}

        <style jsx global>{`
          .c-video {
            position: relative;
            overflow: hidden;
            border-radius: ${Styles.radius_xs};
          }
          .${prefixCls} video {
            vertical-align: top;
            background: #000;
          }
          .${prefixCls}_pause video::-webkit-media-controls {
            display: none !important;
          }
        `}</style>
      </div>
    );
  }
}
