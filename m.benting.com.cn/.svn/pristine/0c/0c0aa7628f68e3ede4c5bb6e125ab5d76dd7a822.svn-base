/**
 * const prefixCls = 'style-522813';
 * const images = '/static/images/src/index/Home';
 * @Author: czy0729
 * @Date: 2018-06-20 17:47:38
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 16:46:38
 * @Path m.benting.com.cn /src/index/Home/store.js
 */
import { observable } from 'mobx';
import common from '@stores/common';
import Const from '@const';
import G from '@stores/g';

export default class Store extends common {
  @observable
  state = this.initState({
    // 用户信息
    userInfo: G.toJS('userInfo'),

    // 首页轮播图
    carousel: Const.__EMPTY__,

    // 新品
    newGoods: Const.__EMPTY__,

    // 视频
    videos: Const.__EMPTY__,

    // 资讯
    information: Const.__EMPTY__
  });

  initFetch = {
    static: [['fetchUserInfo', 'userInfo']],
    one: [
      ['fetchCarousel', true],
      ['fetchNewGoods', true],
      'fetchVideos',
      'fetchInformation'
    ]
  };

  /* ==================== DS ==================== */
  // 用户信息
  fetchUserInfo = async () => {
    const res = G.fetchUserInfo();

    this.setState(await res, 'userInfo');

    return res;
  };

  // 首页轮播图
  fetchCarousel = () =>
    this.fetchThenSetState('get_carousel_list', 'carousel', {
      imgType: 41
    });

  // 新品
  fetchNewGoods = () =>
    this.fetchThenSetState('get_goods-list', 'newGoods', {
      _: {
        limit: 4,
        search: {
          goodsType: 48,
          disable: 0
        }
      }
    });

  // 视频推荐
  fetchVideos = () =>
    this.fetchThenSetState('get_video_list-list', 'videos', {
      _: {
        search: {
          from: 0
        }
      }
    });

  // 资讯
  fetchInformation = refresh =>
    this.fetchListThenSetState(
      'get_article_list',
      'information',
      {
        _: {
          limit: Const.__LIMIT__
        }
      },
      refresh
    );

  /* ==================== Action ==================== */

  /* ==================== Page ==================== */
}
