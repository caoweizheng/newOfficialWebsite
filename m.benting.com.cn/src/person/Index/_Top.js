/**
 * const prefixCls = 'style-562167';
 * const images = '/static/images/src/person/Index';
 * @Author: cwz0525
 * @Date: 2018-07-16 12:18:46
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-19 11:44:44
 * @Path m.benting.com.cn /src/person/Index/_Top.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Badge } from 'antd-mobile';
import { Flex, Icon, Img, Link } from '@components';
import { Level } from '@_';
import Styles from '@styles';
import Const from '@const';
import { images, badgeDS, fanDS } from './ds';

const prefixCls = 'style-562167';

const Top = (props, { $ }) => {
  const { className } = props;
  const { niname, faceImg, grade, vip, fanAuth } = $.getState('userInfo');
  const fans = $.getState('fans');
  const publishList = $.getState('publishList');
  const postList = $.getState('postList');
  if (publishList) {
    fanDS[0].num = publishList.list.length;
    fanDS[1].num = postList.list.length;
    fanDS[2].num = fans.list.length;
  }
  return (
    <div className={classNames(prefixCls, className)}>
      <div className="top">
        <Flex justify="end">
          <Badge
            dot
            style={{
              top: 0,
              right: '-0.13rem',
              border: '0.01rem solid #404040'
            }}
          >
            <Link>
              <Icon className="t-40 t-void" type="message" />
            </Link>
          </Badge>
          <Link>
            <Icon className="t-40 ml-32 t-void" type="setting" />
          </Link>
        </Flex>
        <div className="icon-box">
          <Img className="face-icon" size="1.2rem" circle src={faceImg} />
        </div>
      </div>
      <div className="info">
        <Flex justify="between">
          <p className="t-34 l-48 t-b">{niname}</p>
          <Icon className="t-28 t-sub" type="right" />
        </Flex>
        <Flex className="mt-14">
          {badgeDS.map((item, index) => (
            <p
              className={classNames('badge-item mr-sm', {
                first: index == 0 && vip > 0,
                sec: index == 1,
                thir: index == 2 && fanAuth == 2,
                last: index == 3 && fanAuth == 1
              })}
              key={item.label}
            >
              <Icon
                className={item.tName}
                type={item.type}
                style={{ color: index == 0 ? '#f9bf17' : '' }}
              />
              <span
                className={classNames('t-20 l-28 t-void ml-xs', {
                  't-vip': index == 0
                })}
              >
                {item.label}
              </span>
            </p>
          ))}
        </Flex>
        <Flex className="mt-36">
          {fanDS.map(item => (
            <Flex.Item key={item.label}>
              <span className="t-40 l-56 t-b">{item.num}</span>
              <span className="t-24 l-34 ml-xs t-sub">{item.label}</span>
            </Flex.Item>
          ))}
        </Flex>
      </div>
      <div className="level mt-16">
        <Flex justify="between">
          <Flex align="end">
            <span className="t-40 l-56 t-primary t-b">灵动Lv.{grade}</span>
            <span className="t-20 l-40 ml-xs t-sub">12000经验</span>
          </Flex>
          <Flex align="center">
            <Level
              value={grade}
              style={{ width: '0.28rem', height: '0.26rem' }}
            />
            <span className="t-30 l-42 ml-xs t-sub">灵动等级</span>
            <Icon className="t-28 ml-12 t-sub" type="right" />
          </Flex>
        </Flex>
      </div>
      <p className="line" />
      <style jsx>{`
        .style-562167 {
        }
        .top {
          padding: 0.42rem ${Styles.wind} 0;
          background: ${Styles.color_desc}
            url(${images}/person-bg${Const.__IMG_DPR__}.png) no-repeat right
            bottom;
          background-size: 2.5rem;
        }
        .icon-box {
          display: inline-block;
          padding: 0.1rem;
          transform: translateY(50%);
          border-radius: 50%;
          background: ${Styles.color_theme};
        }
        .info {
          background: ${Styles.color_theme};
          padding: 0.74rem 0.35rem 0.2rem 0.38rem;
        }
        .badage {
          padding-right: 1.6rem;
        }
        .badge-item {
          display: none;
          padding: 0.04rem 0.2rem;
          border-radius: 0.22rem;
        }
        .first {
          display: block;
          background: ${Styles.color_desc};
        }
        .sec {
          display: block;
          background: #212c4c;
        }
        .thir {
          display: block;
          background: #f55b23;
        }
        .last {
          display: block;
          margin-right: 0 !important;
          background: #bbc5ca;
        }
        .t-vip {
          color: #f9bf17 !important;
        }
        .level {
          padding: 0.22rem 0.35rem 0.18rem 0.38rem;
          background: ${Styles.color_theme};
        }
        .line {
          height: 0.02rem;
          border-top: 0.01rem solid #e9e9e9;
        }
        .mr-16 {
          margin-right: 0.16rem;
        }
      `}</style>
    </div>
  );
};

Top.contextTypes = {
  $: PropTypes.object
};

export default observer(Top);
