/**
 * const prefixCls = 'style-178881';
 * const images = '/static/images';
 * @Author: czy0729
 * @Date: 2018-06-21 23:12:22
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-18 09:51:58
 * @Path m.benting.com.cn /src/index/Home/_Information.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { ListView, Link } from '@components';
import { Header } from '@_';
import Utils from '@utils';
import Styles from '@styles';
import { numberMap } from './ds';

const prefixCls = 'style-178881';

const _Information = (props, { $ }) => {
  const { className } = props;
  const data = $.getState('information');

  return (
    <React.Fragment>
      <div className={classNames(prefixCls, className)}>
        <Header title="本汀资讯" desc="最新行业资讯，尽在本汀官网" />
        <div className="p-w">
          <ListView
            data={data}
            hideFooter
            renderRow={item => <Row {...item} />}
          />
        </div>
      </div>
      <ListView.More onClick={$.fetchInformation} />

      <style jsx>{`
        .style-178881 {
          min-height: 12.26rem;
          padding-bottom: ${Styles.bottom};
          background: ${Styles.color_theme};
        }
      `}</style>
    </React.Fragment>
  );
};

_Information.contextTypes = {
  $: PropTypes.object
};

export default observer(_Information);

// 文章有两种形式，资讯比较官方，帖子比较社交。
// 若后台发布勾选了同步，点击会进入帖子，不同步，进入资讯。
const Row = observer(props => {
  const isPost = props.postId > 0; // 是否帖子
  const linkProps = {};

  // if (isPost) {
  //   linkProps.href = `/bbs/article?id=${props.postId}`;
  //   linkProps.as = `/bbs/article/${props.postId}`;
  // } else {
  //   linkProps.href = `/information/detail?id=${props.tbId}`;
  //   linkProps.as = `/information/detail/${props.tbId}`;
  // }

  if (isPost) {
    linkProps.href = `https://www.tw-bt.com/bbs/article?id=${props.postId}`;
  } else {
    linkProps.href = `https://www.tw-bt.com/information/detail?id=${
      props.tbId
    }`;
  }

  return (
    <Link className={`${prefixCls}__item`} block {...linkProps}>
      <Flex>
        <Flex
          className={`${prefixCls}__date`}
          direction="column"
          justify="center"
        >
          <p className="t-34 l-28 t-void t-c">
            {Utils.date('d', props.createTime)}
          </p>
          <p className="t-24 l-28 t-void t-c mt-4">
            {numberMap[parseInt(Utils.date('m', props.createTime))]}月
          </p>
        </Flex>
        <Flex.Item className={`${prefixCls}_con`}>
          <p className="t-30 l-42 t-c1">{props.introCon}</p>
          <p className="t-24 l-34 mt-8">
            发布于 {Utils.date('H:i', props.createTime)}
          </p>
        </Flex.Item>

        <style jsx global>{`
          .style-178881 {
          }
          .${prefixCls}__item:not(:last-child) {
            margin-bottom: 0.48rem;
          }
          .${prefixCls}__date {
            width: 0.86rem;
            height: 0.86rem;
            background: ${Styles.color_main};
          }
        `}</style>
      </Flex>
    </Link>
  );
});
