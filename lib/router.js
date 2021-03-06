'use strict';

const Router = module.exports = function() {
  this.routes = {};
};

Router.prototype.get = function(url, cb){
  if(!this.routes.GET) this.routes.GET = {};
  this.routes.GET[url] = cb;
};

Router.prototype.post = function(){
  if(!this.routes.POST) this.routes.POST = {};
  this.routes.POST[url] = cb;
};

Router.prototype.put = function(){
  if(!this.routes.PUT) this.routes.PUT = {};
  this.routes.PUT[url] = cb;
};

Router.prototype.delete = function(){
 if(!this.routes.DELETE) this.routes.DELETE = {};
 this.routes.DELETE[url] = cb;
};

Router.prototype.patch = function(){
  if(!this.routes.PATCH) this.routes.PATCH = {};
  this.routes.PATCH[url] = cb;
};

Router.prototype.route = function(){
  return function(req, res){
    send(req, res);
    this.routes[req.method][req.url](req, res);
  }
};

function send(){
  res.send = function(str){
    res.writeHead(200, {
      'Content-Type':'text/html'
    });
    res.write(str);
    res.end();
  }
}

function fail(){
  res.fail = function(str){
    res.writeHead(404, {
      'Content-Type': 'text/html'
    });
    res.write(str);
    res.end();
  }
}
// function create(){
//   create = http.createServer((req, res) => {
//
//   })
// }
