/**
 * const prefixCls = 'style-176472';
 * const images = '/static/images/components/RichEditor';
 * @Author: czy0729
 * @Date: 2018-07-11 23:34:54
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-11 23:37:03
 * @Path m.benting.com.cn /components/RichEditor/_Media.js
 */
import React from 'react';
import LazyLoad from 'react-lazyload';
import Utils from '@utils';
import Styles from '@styles';
import Video from '../Video';

const prefixCls = 'style-176472';

const Placeholder = () => (
  <div>
    <style jsx>{`
      .style-176472 {
      }
      div {
        height: 8rem;
        background: ${Styles.color_bg};
      }
    `}</style>
  </div>
);

const _Media = props => {
  const { onClick } = props;
  const entity = props.contentState.getEntity(props.block.getEntityAt(0));
  const data = entity.getData();
  const type = entity.getType();

  let media;
  if (type === 'image' || type === 'link-image') {
    media = (
      <LazyLoad height="8rem" once placeholder={<Placeholder />}>
        <Image {...data} onClick={onClick} />
      </LazyLoad>
    );
  } else if (type === 'video') {
    media = <MediaVideo {...data} />;
  }
  return media;
};

const Image = props => {
  const { src, onClick } = props;

  return (
    <div>
      <img
        className={`${prefixCls}__image`}
        src={Utils.getAppImgUrl(src, 'scale')}
        onClick={onClick ? () => onClick(src) : undefined}
        alt=""
      />

      <style jsx global>{`
        .style-176472 {
        }
        .${prefixCls}__image {
          display: block;
          width: 100%;
          margin: ${Styles.distance} auto;
          vertical-align: top;
        }
      `}</style>
    </div>
  );
};

const MediaVideo = props => {
  const { src, poster, size, playTime } = props;

  return (
    <div>
      <Video
        className={`${prefixCls}__video`}
        src={src}
        poster={poster}
        fileSize={size}
        playSecond={playTime}
      />

      <style jsx global>{`
        .style-176472 {
        }
        .${prefixCls}__video {
          display: block;
          width: 100%;
          margin: ${Styles.distance} auto;
          vertical-align: top;
          border: 0.01rem solid #eee;
        }
      `}</style>
    </div>
  );
};

export default _Media;
