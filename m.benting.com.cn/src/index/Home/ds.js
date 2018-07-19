/**
 * const prefixCls = 'style-204082';
 * const images = '/static/images/src/index/Home';
 * @Author: czy0729
 * @Date: 2018-06-20 18:10:53
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 10:16:52
 * @Path m.benting.com.cn \src\index\Home\ds.js
 */
import Const from '@const';
import Utils from '@utils';

export const images = Utils.cdn('/static/images/src/index/Home');
export const menuDS = [
  {
    src: `${images}/icon-nido${Const.__IMG_DPR__}.png`,
    label: '灵动社区',
    href: '/nido',
    isHot: true
  },
  {
    src: `${images}/icon-shop${Const.__IMG_DPR__}.png`,
    label: '本汀商城',
    // href: '/shop'
    href: 'https://www.tw-bt.com/shop'
  },
  {
    src: `${images}/icon-server${Const.__IMG_DPR__}.png`,
    label: '售后中心',
    // href: '/person/order/add'
    href: 'https://www.tw-bt.com/person/order/add'
  },
  {
    src: `${images}/icon-safe${Const.__IMG_DPR__}.png`,
    label: '防伪中心',
    // href: '/auth'
    href: 'https://www.tw-bt.com/auth'
  },
  {
    src: `${images}/icon-school${Const.__IMG_DPR__}.png`,
    label: '垂钓学院'
  }
];
export const numberMap = {
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '七',
  8: '八',
  9: '九',
  10: '十',
  11: '十一',
  12: '十二'
};
export const footerDS = [
  {
    label: '意见反馈',
    icon: 'feedback'
  },
  {
    label: '疑问帮助',
    icon: 'question'
  },
  {
    label: '商家加盟',
    icon: 'cooperation'
  },
  {
    label: '商家福利',
    icon: 'gift'
  }
];
