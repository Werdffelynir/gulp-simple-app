var text = Error;
var Animate = /** @class */ (function () {
    function Animate(config) {
        if (config === void 0) { config = {}; }
        this.version = 1.54;
        this.owner = 'root';
        this.config = config;
        this.clip = new Clip({}, function () { });
    }
    return Animate;
}());
var Clip = /** @class */ (function () {
    function Clip(options, callback, thisInstance) {
        return function () {
            return callback.bind(options).apply(thisInstance || {});
        };
    }
    Clip.prototype.m = function () {
    };
    return Clip;
}());
var Movieclip = /** @class */ (function () {
    function Movieclip(options, callback, thisInstance) {
        return function () {
            return callback.bind(options).apply(thisInstance || {});
        };
    }
    Movieclip.prototype.m = function () {
    };
    return Movieclip;
}());
