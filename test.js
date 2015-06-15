/**
 * To test module.exports feature:
 * $ node test.js
 * expected output: i-used-to-have-ugly-text-now-i-just-have-1
 */
var text = require('./dist/Sluggin.min.js');
console.log( text.Sluggin("I used to have ugly text. Now I just have 1.") );