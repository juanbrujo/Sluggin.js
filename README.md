# Sluggin.js

![Bower version](https://img.shields.io/bower/v/sluggin.svg)
![NPM version](https://badge.fury.io/js/sluggin.png)
![CircleCI Build Status](https://circleci.com/gh/juanbrujo/Sluggin.js.png?style=shield&circle-token=:circle-token)
![Lib size](https://badge-size.herokuapp.com/juanbrujo/Sluggin.js/master/dist/Sluggin.min.js)

> Converts string/array into websafe-friendly-clean piece of text 

### Install

```
$ npm install sluggin
```

```
$ bower install sluggin
```

### Use

**Require:**
var Sluggin = require('Sluggin').Sluggin;


**String:**
```
Sluggin( "I used to have ugly text. Now I just have 1." );
➤ i-used-to-have-ugly-text-now-i-just-have-1
```

```
Sluggin( "Solía tener texto feo. Ahora sólo tengo 1." );
➤ solia-tener-texto-feo-ahora-solo-tengo-1
```

```
Sluggin( "J'ai l'habitude d'avoir un texte laid. Je dois maintenant juste 1." );
➤ jai-lhabitude-davoir-un-texte-laid-je-dois-maintenant-juste-1
```

```
Sluggin( "Früher habe ich hässlich Text. Jetzt habe ich nur noch 1." );
➤ fruher-habe-ich-hasslich-text-jetzt-habe-ich-nur-noch-1
```

**Array:**

```
Sluggin( [
    "I used to have ugly text. Now I just have 1.",
    "Solía tener texto feo. Ahora sólo tengo 1.",
    "J'ai l'habitude d'avoir un texte laid. Je dois maintenant juste 1.",
    "Früher habe ich hässlich Text. Jetzt habe ich nur noch 1."
  ] );
➤ [
    "i-used-to-have-ugly-text-now-i-just-have-1", 
    "solia-tener-texto-feo-ahora-solo-tengo-1", 
    "jai-lhabitude-davoir-un-texte-laid-je-dois-maintenant-juste-1", 
    "fruher-habe-ich-hasslich-text-jetzt-habe-ich-nur-noch-1"
  ]
```

**Thanks:**

- [SpeakingURL](https://github.com/pid/speakingurl)
- [FriendURL](https://github.com/riverside/friendurl)
- [DevsChile Crew](http://www.devschile.cl/)
