
/*
* assets required for test.js
*/

exports = module.exports;

exports.underline = '\x1b[4m';
exports.reset = '\x1b[0m';
exports.green = '\x1b[32m';
exports.red = '\x1b[31m';

/*
* issue #1 Windows not supporting unicode chars
*/

if ('win32' == process.platform) {
  exports.tick = '\u221A';
  exports.cross = '\u00D7';
} else {
  exports.tick = '✔';
  exports.cross = '✗';
}
