/**
 * const prefixCls = 'style-175060';
 * const images = '/static/images/src/bbs/Article';
 * @Author: czy0729
 * @Date: 2018-07-11 18:19:10
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-16 09:31:40
 * @Path m.benting.com.cn /src/bbs/Article/_Content.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { DiscuzContent, RichEditor } from '@components';
import Const from '@const';
import Utils from '@utils';
import Styles from '@styles';
import Score from './_Score';
import Registration from './_Registration';

const prefixCls = 'style-175060';

const _Content = (props, { $ }) => {
  const { className } = props;
  const { json, title, content, viewNum } = $.getState('detail');

  let elDraft;
  if (json) {
    // 自定义微信分享内容
    let imgUrl;
    if (Const.__WX__) {
      let draftData = [];

      try {
        if (json) {
          draftData = Utils.getRealDraftEntityMap(JSON.parse(json), true);
        }
      } catch (ex) {
        const { id } = $.params.params;
        console.error(`[JSON.parse Draft data error.][threadId: ${id}]`);
      }

      imgUrl = draftData.length ? draftData[0] : Const.__SHARE_IMG__;
      setTimeout(() => {
        Utils.wxShareUpdate({
          title,
          desc: Utils.getCharFilterEmoji(Utils.removeHTMLTag(content)),
          imgUrl: Utils.getAppImgUrl(imgUrl)
        });
      }, 1000);
    }

    elDraft = (
      <RichEditor className="t-34 l-48 t-title" data={json} readOnly imgView />
    );
  }

  return (
    <div className={classNames(prefixCls, className)}>
      <div className="content user-select">
        {elDraft || (
          <DiscuzContent
            className="t-34 l-48 t-title"
            html={{ __html: content }}
            imgView
          />
        )}
      </div>
      <Score className="mt-60" />
      <Registration className="mt-60" />
      {viewNum && (
        <p className="t-28 l-40 mt-60">
          <span className="t-primary">{viewNum}</span>
          <span className="t-sub ml-xs">人次查看</span>
        </p>
      )}

      <style jsx>{`
        .style-175060 {
          position: relative;
          padding: 0.4rem ${Styles.wind} 0.32rem;
          background: ${Styles.color_theme};
        }
        .content {
          min-height: 40vw;
        }
      `}</style>
    </div>
  );
};

_Content.contextTypes = {
  $: PropTypes.object
};

export default observer(_Content);
