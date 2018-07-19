/**
 * const prefixCls = 'style-225472';
 * const images = '/static/images/src/_/Layout';
 * @Author: czy0729
 * @Date: 2018-07-01 17:48:18
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-10 11:16:24
 * @Path m.benting.com.cn /src/_/Layout/ds.js
 */
import Utils from '@utils';

export const images = Utils.cdn('/static/images/src/_/Layout');
export const menuDS = [
  {
    icon: 'nido',
    label: '首页',
    href: '/nido'
  },
  {
    icon: 'discovery',
    label: '发现',
    href: '/discovery'
  },
  {
    icon: 'bbs',
    label: '社区',
    href: '/bbs'
  },
  {
    icon: 'person',
    label: '我的'
  }
];
