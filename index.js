const chalk = require('chalk');

module.exports = function () {
    _log = global.console.log
    global.console.log = function () {
        var args = Array.prototype.slice.call(arguments);
        var rand = () => Math.round(Math.random() * 255);
        args = args.map(arg => chalk.bold.rgb(rand(), rand(), rand())(arg))
        return _log.apply(null, args)
    }
}