/**
 * const prefixCls = 'style-897441';
 * const images = '/static/images/src/bbs/Article';
 * @Author: czy0729
 * @Date: 2018-07-11 17:27:40
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-16 12:28:16
 * @Path m.benting.com.cn /src/bbs/Article/ds.js
 */
import Utils from '@utils';

export const images = Utils.cdn('/static/images/src/bbs/Article');
export const tabsDS = [{ title: '最新' }, { title: '正序' }, { title: '楼主' }];
export const tabsAllDS = [
  { title: '最新' },
  { title: '正序' },
  { title: '楼主' },
  { title: '我的' }
];
export const competitionTypeDS = [
  {
    label: '金币',
    value: '1'
  },
  {
    label: '积分',
    value: '2'
  }
];
