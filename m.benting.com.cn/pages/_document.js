/**
 * const prefixCls = 'styles-10838017';
 * const images = '/static/images/pages';
 * @Author: Jack
 * @Date:   2018-06-14 18:08:35
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-15 11:09:53
 * @Path m.benting.com.cn \pages\_document.js
 */
import React from 'react';
import Document, { Main, NextScript } from 'next/document';
import { Head } from '@components/_/next@5.1.0/document';
import { Global } from '@components';

export default class extends Document {
  render() {
    return (
      <html lang="zh">
        <Head>
          <script src="https://os.alipayobjects.com/rmsportal/wzWaWInUcXErDyTwvySY.js" />
          {/* <script src="//msite.baidu.com/sdk/c.js?appid=1588542739025543" /> */}
          <script src="/static/js/init.js" />
          <script src="/static/js/hd.min.js" />
          <script src="https://at.alicdn.com/t/font_739329_n5s3379nkyh.js" />
          {/* <script src="https://webapi.amap.com/maps?v=1.3&key=391ea18afd825f915a99f50df946bf03" /> */}
          {/* <script src="//webapi.amap.com/ui/1.0/main.js?v=1.0.11" /> */}
          {/* <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js" /> */}
          <link rel="stylesheet" href="/static/css/iconfont/iconfont.css" />
        </Head>
        <body>
          <Global />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
