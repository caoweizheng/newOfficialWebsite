/**
 * const prefixCls = 'style-395636';
 * const images = '/static/images/src/index/VIP';
 * @Author: cwz0525
 * @Date: 2018-07-09 11:43:35
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-13 18:15:19
 * @Path m.benting.com.cn /src/index/VIP/_List.js
 */
import React from 'react';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import { Link, Img } from '@components';
import Styles from '@styles';
import { ListDS } from './ds';

const prefixCls = 'style-395636';
const List = props => {
  const { className } = props;

  return (
    <div className={classNames(prefixCls, className)}>
      <p className="t-b t-36 l-50">福利特权</p>
      <p className="content t-24 l-34 mt-4">开通VIP，各类专属福利特权</p>
      {ListDS.map(item => (
        <div key={item.label}>
          <Link href={item.href} className="mt-44">
            <Flex>
              <Img src={item.src} alt={item.label} size={item.size} />
              <p className="t-34 l-48 ml-32 t-m">{item.label}</p>
            </Flex>
            <p className="content desc t-24 l-34 mt-4">{item.content}</p>
          </Link>
        </div>
      ))}

      <style jsx global>{`
        .style-395636 {
          padding: 0.44rem 0.48rem 0.66rem;
          background: ${Styles.color_theme};
        }
        .content {
          color: #bbb;
        }
        .desc {
          padding-left: 0.78rem;
        }
      `}</style>
    </div>
  );
};

export default List;
