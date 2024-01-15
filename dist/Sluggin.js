/*
 *  Sluggin.js - v0.4.2
 *  Converts string into websafe-friendly-clean piece of text
 *
 *  https://github.com/juanbrujo/Sluggin.js
 *  Demo: http://juanbrujo.github.io/Sluggin.js/
 *
 *  Author: Jorge Epuñan H. |  @csslab
 *  License: MIT
 *  ©2015
 */

var Sluggin = function() {
    "use strict";
    
    // // This function converts the given text to lowercase and removes any non-alphanumeric characters.
    function convert(text) {
        return string = str_replace(characters, latin, text).toLowerCase().replace(/^\s+|\s+$/g, "").replace(/[_|\s]+/g, "-").replace(/[^a-z\u0400-\u04FF0-9-]+/g, "").replace(/[-]+/g, "-").replace(/^-+|-+$/g, "").replace(/[-]+/g, "-");
    }

    // A function that replaces all occurrences of a search string with a replacement string in a given subject string, with an optional count parameter.
    function str_replace(search, replace, subject, count) {
        var i = 0, j = 0, temp = "", repl = "", sl = 0, fl = 0, f = [].concat(search), r = [].concat(replace), s = subject, ra = r instanceof Array, sa = s instanceof Array;
        for (s = [].concat(s), count && (window[count] = 0), i = 0, sl = s.length; i < sl; i++) if ("" !== s[i]) for (j = 0, 
        fl = f.length; j < fl; j++) temp = s[i] + "", repl = ra ? void 0 !== r[j] ? r[j] : "" : r[0], 
        s[i] = temp.split(f[j]).join(repl), count && s[i] !== temp && (window[count] += (temp.length - s[i].length) / f[j].length);
        return sa ? s : s[0];
    }

    // This function initializes a slug from a given text by converting it to lowercase, removing spaces, and replacing special characters.
    function InitSluggin(text) {
        var output;
        if ("string" == typeof text) return output = convert(text);
        if ("[object Array]" === Object.prototype.toString.call(text)) {
            var i, values = [];
            for (i = 0; i < text.length; i++) output = convert(text[i]), values.push(output);
            return values;
        }
        return "";
    }

    var characters = [ "а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "ẞ", "ß", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ь", "ю", "я", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ь", "Ю", "Я", "Ї", "ї", "Є", "є", "Ы", "ы", "Ё", "ё", "ı", "İ", "ğ", "Ğ", "ü", "Ü", "ş", "Ş", "ö", "Ö", "ç", "Ç", "Á", "á", "Â", "â", "Ã", "ã", "À", "à", "Ç", "ç", "É", "é", "Ê", "ê", "È", "è", "Ä", "ä", "Å", "å", "Í", "í", "Ó", "ó", "Ô", "ô", "Õ", "õ", "Ú", "ú", "Ñ", "ñ", "ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż", "Ą", "Ć", "Ę", "Ł", "Ń", "Ó", "Ś", "Ź", "Ż", "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω", "ά", "έ", "ί", "ό", "ύ", "ή", "ώ", "ς", "ϊ", "ΰ", "ϋ", "ΐ", "Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω", "Ά", "Έ", "Ί", "Ό", "Ύ", "Ή", "Ώ", "Ϊ", "Ϋ", "ş", "Ş", "ı", "İ", "ç", "Ç", "ü", "Ü", "ö", "Ö", "ğ", "Ğ", "č", "ď", "ě", "ň", "ř", "š", "ť", "ů", "ž", "Č", "Ď", "Ě", "Ň", "Ř", "Š", "Ť", "Ů", "Ž", "ý", "Ý", "ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż", "Ą", "Ć", "Ę", "Ł", "Ń", "Ó", "Ś", "Ź", "Ż", "ā", "č", "ē", "ģ", "ī", "ķ", "ļ", "ņ", "š", "ū", "ž", "Ā", "Č", "Ē", "Ģ", "Ī", "Ķ", "Ļ", "Ņ", "Š", "Ū", "Ž", "€", "$", "₢", "₣", "£", "₤", "₥", "₦", "₧", "₨", "₩", "₪", "₫", "₭", "₮", "₯", "₰", "₱", "₲", "₳", "₴", "₵", "¢", "¥", "元", "円", "﷼", "₠", "¤", "฿", "Ќ", "ќ", "Љ", "љ", "Њ", "њ", "Тс", "тс", "ă", "Ă", "ș", "Ș", "ț", "Ț", "ţ", "Ţ", "ђ", "ј", "ћ", "џ", "Ђ", "Ј", "Ћ", "Џ", "ľ", "ĺ", "ŕ", "Ľ", "Ĺ", "Ŕ", "ả", "Ả", "ẳ", "Ẳ", "ẩ", "Ẩ", "đ", "Đ", "ẹ", "Ẹ", "ẽ", "Ẽ", "ẻ", "Ẻ", "ế", "Ế", "ề", "Ề", "ệ", "Ệ", "ễ", "Ễ", "ể", "Ể", "ọ", "Ọ", "ố", "Ố", "ồ", "Ồ", "ổ", "Ổ", "ộ", "Ộ", "ỗ", "Ỗ", "ơ", "Ơ", "ớ", "Ớ", "ờ", "Ờ", "ợ", "Ợ", "ỡ", "Ỡ", "Ở", "ở", "ị", "Ị", "ĩ", "Ĩ", "ỉ", "Ỉ", "ủ", "Ủ", "ụ", "Ụ", "ũ", "Ũ", "ư", "Ư", "ứ", "Ứ", "ừ", "Ừ", "ự", "Ự", "ữ", "Ữ", "ử", "Ử", "ỷ", "Ỷ", "ỳ", "Ỳ", "ỵ", "Ỵ", "ỹ", "Ỹ", "ạ", "Ạ", "ấ", "Ấ", "ầ", "Ầ", "ậ", "Ậ", "ẫ", "Ẫ", "ắ", "Ắ", "ằ", "Ằ", "ặ", "Ặ", "ẵ", "Ẵ", "ا", "أ", "إ", "آ", "ؤ", "ئ", "ء", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ى", "ة", "ﻻ", "ﻷ", "ﻹ", "ﻵ", "گ", "چ", "پ", "ژ", "ک", "ی", "َ", "ً", "ِ", "ٍ", "ُ", "ٌ", "ْ", "٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹" ], latin = [ "a", "b", "v", "g", "d", "e", "zh", "z", "i", "y", "k", "l", "m", "n", "o", "ss", "ss", "p", "r", "s", "t", "u", "f", "h", "ts", "ch", "sh", "sht", "a", "y", "yu", "ya", "A", "B", "B", "G", "D", "E", "Zh", "Z", "I", "Y", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "H", "Ts", "Ch", "Sh", "Sht", "A", "Y", "Yu", "Ya", "I", "i", "Ye", "ye", "I", "i", "Yo", "yo", "i", "I", "g", "G", "u", "U", "s", "S", "o", "O", "c", "C", "A", "a", "A", "a", "A", "a", "A", "a", "C", "c", "E", "e", "E", "e", "E", "e", "A", "a", "A", "a", "I", "i", "O", "o", "O", "o", "O", "o", "U", "u", "N", "n", "a", "c", "e", "l", "n", "o", "s", "z", "z", "A", "C", "E", "L", "N", "O", "S", "Z", "Z", "a", "b", "g", "d", "e", "z", "h", "u", "i", "k", "l", "m", "n", "3", "o", "p", "r", "s", "t", "y", "f", "x", "ps", "w", "a", "e", "i", "o", "y", "h", "w", "s", "i", "y", "y", "i", "A", "B", "G", "D", "E", "Z", "H", "8", "I", "K", "L", "M", "N", "3", "O", "P", "R", "S", "T", "Y", "F", "X", "PS", "W", "A", "E", "I", "O", "Y", "H", "W", "I", "Y", "s", "S", "i", "I", "c", "C", "u", "U", "o", "O", "g", "G", "c", "d", "e", "n", "r", "s", "t", "u", "z", "C", "D", "E", "N", "R", "S", "T", "U", "Z", "y", "Y", "a", "c", "e", "l", "n", "o", "s", "z", "z", "A", "C", "e", "L", "N", "o", "S", "Z", "Z", "a", "c", "e", "g", "i", "k", "l", "n", "s", "u", "z", "A", "C", "E", "G", "i", "k", "L", "N", "S", "u", "Z", "euro", "dollar", "cruzeiro", "french franc", "pound", "lira", "mill", "naira", "peseta", "rupee", "won", "new shequel", "dong", "kip", "tugrik", "drachma", "penny", "peso", "guarani", "austral", "hryvnia", "cedi", "cent", "yen", "yuan", "yen", "rial", "ecu", "currency", "baht", "Ќ", "ќ", "Љ", "љ", "Њ", "њ", "Тс", "тс", "a", "A", "s", "S", "t", "T", "t", "T", "dj", "j", "c", "dz", "Dj", "j", "C", "Dz", "l", "l", "r", "L", "L", "R", "a", "A", "a", "A", "a", "A", "d", "D", "e", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "E", "o", "o", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "o", "i", "I", "i", "I", "i", "i", "u", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "ư", "y", "y", "y", "Y", "y", "Y", "y", "Y", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "a", "i", "aa", "u", "e", "a", "b", "t", "th", "j", "h", "kh", "d", "th", "r", "z", "s", "sh", "s", "dh", "t", "z", "a", "gh", "f", "q", "k", "l", "m", "n", "h", "w", "y", "a", "h", "la", "laa", "lai", "laa", "g", "ch", "p", "zh", "k", "y", "a", "an", "e", "en", "u", "on", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ], string = "";
    return InitSluggin;
}(this);

// This code exports a function called "Sluggin" as a module if the module.exports object is defined, allowing for easy use in other files.
"undefined" != typeof module && module.exports ? module.exports.Sluggin = function(text) {
    return Sluggin(text);
} : "undefined" != typeof define && define.amd && define([], function(text) {
    return Sluggin(text);
});
