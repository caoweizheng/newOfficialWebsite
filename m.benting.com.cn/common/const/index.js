/**
 * const prefixCls = 'style-275969';
 * const images = '/static/images/common/const';
 * @Author: czy0729
 * @Date: 2018-06-20 16:13:46
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-17 09:32:35
 * @Path m.benting.com.cn \common\const\index.js
 */
import { __RELEASE_ENV__ } from './env';
import rules from './rules';

function checkDeviceType() {
  if (typeof navigator === 'undefined') return null;

  const agent = navigator.userAgent;
  const isAndroid = /(Android)/i.test(agent);
  const isiOS = /(iPhone|iPad|iPod|iOS)/i.test(agent) && !isAndroid;

  if (isiOS) return 'ios';
  if (isAndroid) return 'android';
  return 'other';
}

const __dev__ = process.env.NODE_ENV !== 'production'; // 开发环境
const __server__ = typeof window === 'undefined'; // 服务器端
const __dpr__ = (!__server__ && window.devicePixelRatio) || 2; // 像素比

// 微信
const __wx__ =
  (!__server__ &&
    navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) ||
  false;

// 是否生产环境
const __release__ = __RELEASE_ENV__ === 'production';

// 是否使用七牛静态资源
// const cdnUsed = true && !__dev__;
const cdnUsed = false;
const cdnUrl = 'https://static.nidosport.com';
const __images__ = cdnUsed
  ? `${cdnUrl}/images/common`
  : '/static/images/common';

const Const = {
  /* ==================== base ==================== */
  __DEV__: __dev__, // 是否开发环境
  __SERVER__: __server__, // 是否服务端
  __CLIENT__: !__server__, // 是否客户端
  __WX__: __wx__, // 是否微信环境

  // 旧API地址 CI
  __API__: __release__
    ? 'https://api.nidosport.com'
    : 'https://dev.nidosport.com',

  // 新API地址 LUMEN
  __NEW_API__: __release__
    ? 'https://service.nidosport.com'
    : 'https://lumen.nidosport.com',
  __IMG_API__: __release__
    ? 'http://nidoimg.tw-bt.com'
    : 'http://csimg.tw-bt.com',
  // __OSS__ : __release__ ? 'https://nidosport.oss-cn-shenzhen.aliyuncs.com' : 'https://csnidosport.oss-cn-shenzhen.aliyuncs.com',

  // websocket地址
  __WSS__: __release__
    ? 'wss://api.nidosport.com/wss'
    : 'wss://dev.nidosport.com/wss',
  __DATE__: 'y.m.d H:i', // 日期格式
  __LIMIT__: 8, // 全局列表默认limit
  __LIMIT_SM__: 4,
  __LS_PREFIX__: '_BENTING_', // localstorage键值前缀

  // 空列表默认结构
  __EMPTY__: {
    list: [],
    pageinfo: { limit: 8, page: 0, pagetotal: 0, recordtotal: 0 },
    _loaded: false
  },

  // 是否IOS环境
  __IOS__: checkDeviceType() === 'ios',

  // 七牛配置
  __CDN_USED__: cdnUsed, // 是否启用七牛静态图片
  __CDN_URL__: cdnUrl, // 七牛静态图片域名

  /* ==================== path ==================== */
  // 全局公用图片目录
  __IMG__: __images__,
  __IMAGES__: __images__,

  // 默认图片
  __IMG_DEFAULT__: `${__images__}/logo-default.png`,

  // 图片倍率
  __IMG_DPR__: '@3x',

  // SVG目录，待方案调整
  __SVG__: '/static/svg',

  // emoji目录
  __EMOJI_PATH__: `${__images__}/emoji`,

  // 灵动默认图片
  __IMG_DEFAULT_THUMB__:
    'https://api.nidosport.com/static/uploads/png/20170519/591e5f9e2c2bc_thumb.png',

  /* ==================== param ==================== */
  // 高德地图KEY
  __AMAP_KEY__: '391ea18afd825f915a99f50df946bf03',

  // 默认路由结构
  __CURRENT_PATH__: { pathname: '/', asPath: '/', query: {} },
  __DPR__: __dpr__, // 像素比

  // 本站域名
  // __WEB__: __release__ ? 'https://www.tw-bt.com' : 'https://dev.tw-bt.com',
  __WEB__: 'http://benting.tw-bt.com',

  // 灵动域名
  __WEB_NIDO__: __release__
    ? 'https://www.nidosport.com'
    : 'https://wap.nidosport.com',

  // 微信JSSDK使用方法
  __JSAPI__: [
    'chooseWXPay',
    'getNetworkType',
    'openLocation',
    'getLocation',
    'hideMenuItems',
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'scanQRCode'
  ],

  /* ==================== share ==================== */
  __SHARE_TITLE__: '本汀官网，欢迎您加入汀友会！',
  __SHARE_DESC__:
    '创始于1976年，本汀将陪伴着每一位同好在寻觅心灵那一汪碧水和快乐直至永恒！',
  // __SHARE_IMG__: cdnUsed ? `${cdnUrl}/images/common/share_image.jpg` : '/static/images/common/share_image.jpg',
  __SHARE_IMG__: 'https://static.nidosport.com/images/common/share_image.jpg',

  // rc-rule
  rules
};
export default Const;

if (!__server__) window.Const = Const;
