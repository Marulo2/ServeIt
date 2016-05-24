'use strict';

const http = require('http');
const Router = require('./lib/router');
const router = new Router();


http.createServer((req, res) => {


  router.get('/test', (req, res) => {
    res.write('Hit dat route');
    res.send();
    res.end();
  });


  router.get('/dragonman', (req, res) => {
    res.write('TROGDOOOOOOOR \n');
    res.send();
    res.end();
  });

  res.fail();


}).listen(3000, () => console.log('Up on 3000!'));
