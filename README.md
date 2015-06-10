#Sluggin.js

> Converts string into websafe-friendly-clean piece of text 

###Use
var transformEng = Sluggin( "I used to have ugly text. Now I just have 1." );
```
// i-used-to-have-ugly-text-now-i-just-have-1
```

var transformSpa = Sluggin( "Solía tener texto feo. Ahora sólo tengo 1." );
```
// solia-tener-texto-feo-ahora-solo-tengo-1
```

var transformFre = Sluggin( "Je l'habitude d'avoir un texte laid. Je dois maintenant juste 1." );
```
// je-lhabitude-davoir-un-texte-laid-je-dois-maintenant-juste-1
```

var transformGer = Sluggin( "Früher habe ich hässlich Text. Jetzt habe ich nur noch 1." );
```
// fruher-habe-ich-hasslich-text-jetzt-habe-ich-nur-noch-1
```

###Thanks
- [SpeakingURL](https://github.com/pid/speakingurl)
- [FriendURL](https://github.com/riverside/friendurl)