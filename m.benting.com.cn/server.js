/* eslint-disable no-console */
/**
 * const prefixCls = 'style-130379';
 * const images = '/static/images';
 * @Author: czy0729
 * @Date: 2018-06-22 11:04:33
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-15 10:22:01
 * @Path m.benting.com.cn /server.js
 */
const express = require('express');
const next = require('next');
const mobxReact = require('mobx-react');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

mobxReact.useStaticRendering(true);

app
  .prepare()
  .then(() => {
    const server = express();

    // discovery
    server.get('/discovery(/:id)', (req, res) => {
      app.render(req, res, '/discovery', req.params);
    });

    // bbs
    server.get('/bbs/article/:id', (req, res) => {
      app.render(req, res, '/bbs/article', req.params);
    });

    server.get('/bbs(/:id)', (req, res) => {
      app.render(req, res, '/bbs', req.params);
    });

    // *
    server.get('*', (req, res) => handle(req, res));

    server.listen(8104, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:8104');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
