/**
 * const prefixCls = 'style-962115';
 * const images = '/static/images/src/bbs/Index';
 * @Author: czy0729
 * @Date: 2018-07-10 09:49:43
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-11 16:19:39
 * @Path m.benting.com.cn /src/bbs/Index/store.js
 */
import { observable } from 'mobx';
import common from '@stores/common';
import Const from '@const';
import Utils from '@utils';
import { tabsDS } from './ds';

export default class Store extends common {
  @observable
  state = this.initState({
    _affixTabs: {
      page: 0
    },

    // 置顶文章
    postTop: Const.__EMPTY__,

    // 帖子列表
    post: Const.__EMPTY__
  });

  initFetch = {
    one: ['fetchPostTop'],
    update: ['fetchPost']
  };

  storeInit() {
    const { id = 0 } = this.getParams().params;

    this.setQueryPost(id);
    this.setState({ page: id }, '_affixTabs');
  }

  /* ==================== params ==================== */
  initParams = {
    __cache: true,

    // 帖子列表Query
    queryPost: {}
  };

  // 帖子列表Query
  setQueryPost = index => {
    const { title } = tabsDS[index];
    let query;

    switch (title) {
      case '推荐':
        query = {
          _: {
            limit: Const.__LIMIT__,
            order: {
              displayState: 'desc',
              createTime: 'desc'
            },
            search: {}
          }
        };
        break;

      case '最新':
        query = {
          _: {
            limit: Const.__LIMIT__,
            order: {
              createTime: 'desc'
            },
            search: {}
          }
        };
        break;

      case '精华':
        query = {
          _: {
            limit: Const.__LIMIT__,
            search: {
              isDigest: 1
            }
          }
        };
        break;

      case '官方':
        query = {
          _: {
            limit: Const.__LIMIT__,
            search: {
              forumId: [75, 77]
            }
          }
        };
        break;

      default:
        break;
    }

    this.setParams({
      queryPost: query
    });
  };

  /* ==================== DS ==================== */
  // 置顶文章
  fetchPostTop = () =>
    this.fetchThenSetState('get_bbs_list', 'postTop', {
      _: {
        limit: Const.__LIMIT__,
        search: {
          displayState: 3
        }
      }
    });

  // 帖子列表
  fetchPost = refresh => {
    const { queryPost } = this.getParams();

    return this.fetchListThenSetState(
      'get_bbs_list',
      'post',
      queryPost,
      refresh
    );
  };
  updateOnePostList = postId =>
    this.updateOneThenSetState('get_bbs_list', 'post', { postId });

  /* ==================== Page ==================== */
  // Tab点击
  onTabClick = (item, index) => {
    this.setQueryPost(index);
    this.fetchPost(true);
    this.setState({ page: index }, '_affixTabs');

    Utils.scrollTo(0);
  };
}
