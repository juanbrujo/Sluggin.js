# Sluggin.js

![NPM version](https://badge.fury.io/js/sluggin.png)

> Converts string/array into websafe-friendly-clean piece of text 

### Languages supported

latin languages, greek, turkish, cyrillic, czech, polish, latvian, currencies, macedonian, serbian, slovak, vietnamese, arabic and persian. 

### Install

```
$ npm install sluggin
```

### Use

```
const Sluggin = require('sluggin').Sluggin;
```


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
