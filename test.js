/**
 * To test module.exports feature:
 * $ node test.js
 * expected output: 
 * - Test 1: i-used-to-have-ugly-text-now-i-just-have-1
 * - Test 2: ["i-used-to-have-ugly-text-now-i-just-have-1", "solia-tener-texto-feo-ahora-solo-tengo-1", "jai-lhabitude-davoir-un-texte-laid-je-dois-maintenant-juste-1", "fruher-habe-ich-hasslich-text-jetzt-habe-ich-nur-noch-1"]
 */
 
var text = require('./dist/Sluggin.js');

// Test 1: output 1 string of text
console.log('\n# Test 1: output 1 string of text:');
console.log( text.Sluggin("I used to have ugly text. Now I just have 1.") );

// Test 2: output an array of texts
console.log('\n# Test 2: output an array of texts:');
console.log( text.Sluggin( [
	"I used to have ugly text. Now I just have 1.",
	"Solía tener texto feo. Ahora sólo tengo 1.",
	"J'ai l'habitude d'avoir un texte laid. Je dois maintenant juste 1.",
	"Früher habe ich hässlich Text. Jetzt habe ich nur noch 1."
] ) );
