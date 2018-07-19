/**
 * const prefixCls = 'style-807782';
 * const images = '/static/images/src/index/Sign';
 * @Author: cwz0525
 * @Date: 2018-07-02 10:00:49
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-19 10:05:40
 * @Path m.benting.com.cn /src/index/Sign/_Main.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import Styles from '@styles';
import Progress from './_Progress';

const prefixCls = 'style-807782';
const MainComponent = props => {
  const { className } = props;

  return (
    <div className={classNames(prefixCls, className)}>
      <div className="wrap">
        <Progress className="mt-50" />
        <style jsx global>{`
          .style-807782 {
            padding: 1.54rem ${Styles.wind} 1.35rem ${Styles.wind};
            background: ${Styles.color_desc};
          }
          .mt-50 {
            margin-top: 0.5rem;
          }
        `}</style>
      </div>
    </div>
  );
};

MainComponent.contextTypes = {
  $: PropTypes.object
};

export default observer(MainComponent);
