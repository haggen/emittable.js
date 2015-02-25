// Emittable v1.0.0 Thu Feb 12 16:14:42 BRST 2015
// more on github.com/haggen/emittable.js
;(function(root) {

  'use strict';

  var Emittable;

  Emittable = function(target) {
    if(!(this instanceof Emittable)) {
      Object.assign(target, Emittable.prototype);
    }
  };

  Emittable.prototype.on = function(name, fn) {
    this._e = this._e || {};
    this._e[name] = this._e[name] || [];
    this._e[name].push(fn);
  };

  Emittable.prototype.off = function(name, fn) {
    this._e = this._e || {};
    this._e[name] = this._e[name] || [];

    for(i = 0, n = this._e[name].length; i < n; i++) {
      if(fn === this._e[name][i]) {
        return this._e[name].slice(i, 1);
      }
    }
  };

  Emittable.prototype.once = function(name, fn) {
    this.on(name, function() {
      this.off(name, fn);
      fn.apply(this, arguments);
    });
  };

  Emittable.prototype.emit = function() {
    var i, n, name, args;

    args = [].slice.call(arguments);
    name = args.shift();

    this._e = this._e || {};
    this._e[name] = this._e[name] || [];

    for(i = 0, n = this._e[name].length; i < n; i++) {
      this._e[name][i].apply(this, args);
    }
  };

  root.Emittable = Emittable;

})(this);
