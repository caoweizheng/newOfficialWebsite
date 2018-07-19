/**
 * const prefixCls = 'style-157025';
 * const images = '/static/images/src/index/VIP';
 * @Author: cwz0525
 * @Date: 2018-07-17 09:47:12
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-18 19:27:55
 * @Path m.benting.com.cn /src/person/Index/_List.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Icon, Link } from '@components';
import { listDS } from './ds';

const prefixCls = 'style-157025';
const MyList = props => {
  const { className } = props;
  return (
    <div className={classNames(prefixCls, className)}>
      <List>
        {listDS.map(
          (item, index) =>
            index < 5 && (
              <Link
                href={item.href}
                style={{ display: 'block' }}
                key={item.label}
              >
                <List.Item
                  extra={
                    <span className="t-30 l-42 t-danger">{item.extra}</span>
                  }
                  arrow="horizontal"
                  error="true"
                  thumb={<Icon className="t-32 t-sub" type={item.type} />}
                >
                  <span className="t-30 l-42">{item.label}</span>
                </List.Item>
              </Link>
            )
        )}
      </List>
      <List className="mt-sm">
        {listDS.map(
          (item, index) =>
            index >= 5 && (
              <Link
                href={item.href}
                style={{ display: 'block' }}
                key={item.label}
              >
                <List.Item
                  extra={
                    <span className="t-30 l-42 t-danger">{item.extra}</span>
                  }
                  arrow="horizontal"
                  error="true"
                  thumb={<Icon className="t-32 t-sub" type={item.type} />}
                >
                  <span className="t-30 l-42">{item.label}</span>
                </List.Item>
              </Link>
            )
        )}
      </List>
      <style jsx>{`
        .style-157025 {
        }
      `}</style>
    </div>
  );
};

MyList.contextTypes = {
  $: PropTypes.object
};

export default observer(MyList);
