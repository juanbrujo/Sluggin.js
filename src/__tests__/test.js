const { Sluggin } = require('../Sluggin.js');

describe('Sluggin.js', () => {
  describe('Basic String Slugification', () => {
    it('should slugify a simple string', () => {
      expect(Sluggin('Hello World')).toBe('hello-world');
    });

    it('should slugify a string with special characters', () => {
      expect(Sluggin('This is a test!')).toBe('this-is-a-test');
    });

    it('should slugify a string with numbers', () => {
      expect(Sluggin('Test 123')).toBe('test-123');
    });

    it('should handle multiple spaces', () => {
      expect(Sluggin('Hello    World')).toBe('hello-world');
    });

    it('should handle leading and trailing spaces', () => {
      expect(Sluggin('  Hello World  ')).toBe('hello-world');
    });

    it('should handle tabs and newlines', () => {
      expect(Sluggin('Hello\tWorld\nTest')).toBe('hello-world-test');
    });

    it('should remove special punctuation', () => {
      expect(Sluggin('Hello, World! How are you?')).toBe('hello-world-how-are-you');
    });

    it('should handle underscores as separators', () => {
      expect(Sluggin('hello_world_test')).toBe('hello-world-test');
    });

    it('should not create multiple consecutive dashes', () => {
      expect(Sluggin('Hello---World')).toBe('hello-world');
    });

    it('should not have leading or trailing dashes', () => {
      expect(Sluggin('---Hello World---')).toBe('hello-world');
    });

    it('should convert to lowercase', () => {
      expect(Sluggin('HELLO WORLD')).toBe('hello-world');
    });

    it('should handle mixed case', () => {
      expect(Sluggin('HeLoWoRLd')).toBe('heloworld');
    });

    it('should handle empty string', () => {
      expect(Sluggin('')).toBe('');
    });

    it('should handle string with only spaces', () => {
      expect(Sluggin('   ')).toBe('');
    });

    it('should handle string with only special characters', () => {
      expect(Sluggin('!!!@@@###')).toBe('');
    });

    it('should handle ampersand', () => {
      expect(Sluggin('Salt & Pepper')).toBe('salt-pepper');
    });

    it('should handle parentheses', () => {
      expect(Sluggin('Test (Demo)')).toBe('test-demo');
    });

    it('should handle brackets', () => {
      expect(Sluggin('Test [Demo]')).toBe('test-demo');
    });

    it('should handle braces', () => {
      expect(Sluggin('Test {Demo}')).toBe('test-demo');
    });

    it('should handle quotation marks', () => {
      expect(Sluggin('Test "Demo"')).toBe('test-demo');
    });

    it('should handle apostrophes', () => {
      expect(Sluggin("It's a test")).toBe('its-a-test');
    });

    it('should handle periods', () => {
      expect(Sluggin('Dr. Smith')).toBe('dr-smith');
    });

    it('should handle hyphens in input', () => {
      expect(Sluggin('Hello-World')).toBe('hello-world');
    });

    it('should handle slashes', () => {
      expect(Sluggin('Hello/World')).toBe('helloworld');
    });

    it('should handle backslashes', () => {
      expect(Sluggin('Hello\\World')).toBe('helloworld');
    });

    it('should handle percent signs', () => {
      expect(Sluggin('100% Test')).toBe('100-test');
    });

    it('should handle plus signs', () => {
      expect(Sluggin('C++ Program')).toBe('c-program');
    });

    it('should handle equal signs', () => {
      expect(Sluggin('a=b Test')).toBe('ab-test');
    });

    it('should handle colon', () => {
      expect(Sluggin('Test: Demo')).toBe('test-demo');
    });

    it('should handle semicolon', () => {
      expect(Sluggin('Test; Demo')).toBe('test-demo');
    });

    it('should handle comma', () => {
      expect(Sluggin('Test, Demo')).toBe('test-demo');
    });

    it('should handle pipe character', () => {
      expect(Sluggin('Test | Demo')).toBe('test-demo');
    });

    it('should handle at symbol', () => {
      expect(Sluggin('email@domain Test')).toBe('emaildomain-test');
    });

    it('should handle hash symbol', () => {
      expect(Sluggin('Test #1')).toBe('test-1');
    });

    it('should handle dollar sign', () => {
      expect(Sluggin('$100 Test')).toBe('dollar100-test');
    });

    it('should handle caret', () => {
      expect(Sluggin('Test ^ Demo')).toBe('test-demo');
    });

    it('should handle asterisk', () => {
      expect(Sluggin('Test * Demo')).toBe('test-demo');
    });

    it('should handle tilde', () => {
      expect(Sluggin('Test ~ Demo')).toBe('test-demo');
    });

    it('should handle backtick', () => {
      expect(Sluggin('Test ` Demo')).toBe('test-demo');
    });

    it('should handle angle brackets', () => {
      expect(Sluggin('Test <Demo>')).toBe('test-demo');
    });

    it('should handle question mark', () => {
      expect(Sluggin('What?')).toBe('what');
    });

    it('should handle exclamation mark', () => {
      expect(Sluggin('What!')).toBe('what');
    });

    it('should handle long strings with punctuation', () => {
      expect(Sluggin('I used to have ugly text. Now I just have 1.'))
        .toBe('i-used-to-have-ugly-text-now-i-just-have-1');
    });
  });

  describe('Array Handling', () => {
    it('should slugify an array of strings', () => {
      expect(Sluggin(['Hello', 'World'])).toEqual(['hello', 'world']);
    });

    it('should return an array when given an array', () => {
      const result = Sluggin(['Test', 'Demo']);
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(2);
    });

    it('should handle array with special characters', () => {
      expect(Sluggin(['Hello World!', 'Test 123'])).toEqual(['hello-world', 'test-123']);
    });

    it('should handle empty array', () => {
      expect(Sluggin([])).toEqual([]);
    });

    it('should handle array with empty strings', () => {
      expect(Sluggin(['', 'Test', ''])).toEqual(['', 'test', '']);
    });

    it('should handle array with spaces only', () => {
      expect(Sluggin(['   ', 'Test'])).toEqual(['', 'test']);
    });

    it('should handle large arrays', () => {
      const input = Array(10).fill('Hello World');
      const result = Sluggin(input);
      expect(result).toEqual(Array(10).fill('hello-world'));
      expect(result.length).toBe(10);
    });

    it('should handle array with mixed content', () => {
      expect(Sluggin(['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5']))
        .toEqual(['test-1', 'test-2', 'test-3', 'test-4', 'test-5']);
    });
  });

  describe('Russian Characters', () => {
    it('should transliterate Russian lowercase letters', () => {
      expect(Sluggin('привет')).toBe('privet');
    });

    it('should transliterate Russian uppercase letters', () => {
      expect(Sluggin('ПРИВЕТ')).toBe('pribet');
    });

    it('should handle mixed case Russian', () => {
      expect(Sluggin('ПриВеТ')).toBe('pribet');
    });

    it('should handle Russian with spaces', () => {
      expect(Sluggin('Привет Мир')).toBe('privet-mir');
    });

    it('should handle complex Russian words', () => {
      expect(Sluggin('Многоуважаемый')).toBe('mnogouvazhaemiy');
    });

    it('should handle Russian with numbers', () => {
      expect(Sluggin('Тест 123')).toBe('test-123');
    });

    it('should handle Ukrainian characters', () => {
      expect(Sluggin('Привіт')).toBeTruthy();
    });

    it('should handle Cyrillic yo character', () => {
      expect(Sluggin('ёлка')).toBeTruthy();
    });
  });

  describe('Spanish/Portuguese Characters', () => {
    it('should transliterate accented a', () => {
      expect(Sluggin('á')).toBe('a');
    });

    it('should transliterate accented e', () => {
      expect(Sluggin('é')).toBe('e');
    });

    it('should transliterate accented i', () => {
      expect(Sluggin('í')).toBe('i');
    });

    it('should transliterate accented o', () => {
      expect(Sluggin('ó')).toBe('o');
    });

    it('should transliterate accented u', () => {
      expect(Sluggin('ú')).toBe('u');
    });

    it('should transliterate tilded n', () => {
      expect(Sluggin('ñ')).toBe('n');
    });

    it('should handle Spanish phrase', () => {
      expect(Sluggin('Solía tener texto feo'))
        .toBe('solia-tener-texto-feo');
    });

    it('should handle Portuguese words', () => {
      expect(Sluggin('São Paulo')).toBeTruthy();
    });

    it('should transliterate cedilla c', () => {
      expect(Sluggin('ç')).toBe('c');
    });

    it('should handle accented uppercase', () => {
      expect(Sluggin('ÁÉÍÓÚ')).toBe('aeiou');
    });
  });

  describe('French Characters', () => {
    it('should handle French accents', () => {
      expect(Sluggin('café')).toBe('cafe');
    });

    it('should handle French phrase', () => {
      expect(Sluggin("J'ai l'habitude d'avoir un texte")).toBeTruthy();
    });

    it('should handle cedilla in French', () => {
      expect(Sluggin('ça va')).toBeTruthy();
    });

    it('should handle French with diacritics', () => {
      expect(Sluggin('façade')).toBeTruthy();
    });

    it('should handle French circumflex', () => {
      expect(Sluggin('château')).toBeTruthy();
    });

    it('should handle French diaeresis', () => {
      expect(Sluggin('naïve')).toBeTruthy();
    });
  });

  describe('German Characters', () => {
    it('should transliterate umlaut u', () => {
      expect(Sluggin('ü')).toBe('u');
    });

    it('should transliterate umlaut o', () => {
      expect(Sluggin('ö')).toBe('o');
    });

    it('should transliterate umlaut a', () => {
      expect(Sluggin('ä')).toBe('a');
    });

    it('should handle German sharp s lowercase', () => {
      expect(Sluggin('ß')).toBe('ss');
    });

    it('should handle German sharp s uppercase', () => {
      expect(Sluggin('ẞ')).toBe('ss');
    });

    it('should handle German phrase', () => {
      expect(Sluggin('Früher habe ich hässlich Text'))
        .toBeTruthy();
    });

    it('should handle German umlauts with uppercase', () => {
      expect(Sluggin('ÜÖÄB')).toBe('uoab');
    });
  });

  describe('Greek Characters', () => {
    it('should transliterate Greek alpha', () => {
      expect(Sluggin('α')).toBe('a');
    });

    it('should transliterate Greek beta', () => {
      expect(Sluggin('β')).toBe('b');
    });

    it('should transliterate Greek gamma', () => {
      expect(Sluggin('γ')).toBe('g');
    });

    it('should transliterate Greek uppercase', () => {
      expect(Sluggin('Α')).toBe('a');
    });

    it('should handle Greek word', () => {
      expect(Sluggin('Ελληνικά')).toBeTruthy();
    });

    it('should handle Greek with accents', () => {
      expect(Sluggin('ά')).toBeTruthy();
    });
  });

  describe('Turkish Characters', () => {
    it('should handle Turkish i without dot', () => {
      expect(Sluggin('ı')).toBeTruthy();
    });

    it('should handle Turkish I with dot', () => {
      expect(Sluggin('İ')).toBeTruthy();
    });

    it('should handle Turkish g with breve', () => {
      expect(Sluggin('ğ')).toBe('g');
    });

    it('should handle Turkish u with breve', () => {
      expect(Sluggin('Ğ')).toBe('g');
    });

    it('should handle Turkish s with cedilla', () => {
      expect(Sluggin('ş')).toBe('s');
    });

    it('should handle Turkish c with cedilla', () => {
      expect(Sluggin('ç')).toBe('c');
    });

    it('should handle Turkish o with umlaut', () => {
      expect(Sluggin('ö')).toBe('o');
    });

    it('should handle Turkish u with umlaut', () => {
      expect(Sluggin('ü')).toBe('u');
    });
  });

  describe('Polish Characters', () => {
    it('should handle Polish a with ogonek', () => {
      expect(Sluggin('ą')).toBe('a');
    });

    it('should handle Polish c with acute', () => {
      expect(Sluggin('ć')).toBe('c');
    });

    it('should handle Polish e with ogonek', () => {
      expect(Sluggin('ę')).toBe('e');
    });

    it('should handle Polish l with stroke', () => {
      expect(Sluggin('ł')).toBe('l');
    });

    it('should handle Polish n with acute', () => {
      expect(Sluggin('ń')).toBe('n');
    });

    it('should handle Polish s with acute', () => {
      expect(Sluggin('ś')).toBe('s');
    });

    it('should handle Polish z with acute', () => {
      expect(Sluggin('ź')).toBe('z');
    });

    it('should handle Polish z with dot', () => {
      expect(Sluggin('ż')).toBe('z');
    });
  });

  describe('Vietnamese Characters', () => {
    it('should handle Vietnamese a with breve and tilde', () => {
      expect(Sluggin('ẩ')).toBeTruthy();
    });

    it('should handle Vietnamese d with stroke', () => {
      expect(Sluggin('đ')).toBe('d');
    });

    it('should handle Vietnamese e with circumflex and grave', () => {
      expect(Sluggin('ề')).toBeTruthy();
    });

    it('should handle Vietnamese word', () => {
      expect(Sluggin('Việt Nam')).toBeTruthy();
    });
  });

  describe('Arabic Characters', () => {
    it('should handle Arabic letter alef', () => {
      expect(Sluggin('ا')).toBeTruthy();
    });

    it('should handle Arabic letter ba', () => {
      expect(Sluggin('ب')).toBeTruthy();
    });

    it('should handle Arabic with diacritics', () => {
      expect(Sluggin('َ')).toBeTruthy();
    });

    it('should handle Arabic numerals', () => {
      expect(Sluggin('٠١٢٣')).toBeTruthy();
    });

    it('should handle Arabic word', () => {
      expect(Sluggin('مرحبا')).toBeTruthy();
    });

    it('should handle Extended Arabic numerals', () => {
      expect(Sluggin('۰۱۲۳')).toBeTruthy();
    });
  });

  describe('Currency Symbols', () => {
    it('should handle euro symbol', () => {
      expect(Sluggin('€100')).toBe('euro100');
    });

    it('should handle dollar symbol', () => {
      expect(Sluggin('$100')).toBe('dollar100');
    });

    it('should handle pound symbol', () => {
      expect(Sluggin('£100')).toBeTruthy();
    });

    it('should handle yen symbol', () => {
      expect(Sluggin('¥100')).toBeTruthy();
    });

    it('should handle various currency symbols', () => {
      const result = Sluggin('Price: €$£¥');
      expect(typeof result).toBe('string');
    });
  });

  describe('Multilingual Examples', () => {
    it('should handle Spanish text', () => {
      const result = Sluggin('Solía tener texto feo. Ahora sólo tengo 1.');
      expect(typeof result).toBe('string');
      expect(result).toMatch(/[a-z0-9-]/);
    });

    it('should handle French text', () => {
      const result = Sluggin("J'ai l'habitude d'avoir un texte laid. Je dois maintenant juste 1.");
      expect(typeof result).toBe('string');
      expect(result).toMatch(/[a-z0-9-]/);
    });

    it('should handle German text', () => {
      const result = Sluggin('Früher habe ich hässlich Text. Jetzt habe ich nur noch 1.');
      expect(typeof result).toBe('string');
      expect(result).toMatch(/[a-z0-9-]/);
    });

    it('should handle mixed language array', () => {
      const result = Sluggin([
        'Hello World',
        'Привет Мир',
        'Hola Mundo',
        'Bonjour le Monde'
      ]);
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(4);
      result.forEach(item => {
        expect(typeof item).toBe('string');
      });
    });

    it('should handle array of multilingual examples', () => {
      const input = [
        'I used to have ugly text. Now I just have 1.',
        'Solía tener texto feo. Ahora sólo tengo 1.',
        "J'ai l'habitude d'avoir un texte laid. Je dois maintenant juste 1.",
        'Früher habe ich hässlich Text. Jetzt habe ich nur noch 1.'
      ];
      const result = Sluggin(input);
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(4);
      expect(result[0]).toBe('i-used-to-have-ugly-text-now-i-just-have-1');
    });
  });

  describe('Edge Cases and Error Handling', () => {
    it('should handle very long strings', () => {
      const longString = 'Hello World '.repeat(100);
      const result = Sluggin(longString);
      expect(typeof result).toBe('string');
      expect(result.length > 0).toBe(true);
    });

    it('should return empty string for non-string non-array input', () => {
      expect(Sluggin(123)).toBe('');
      expect(Sluggin(null)).toBe('');
      expect(Sluggin(undefined)).toBe('');
      expect(Sluggin({})).toBe('');
      expect(Sluggin(true)).toBe('');
    });

    it('should handle string with only numbers', () => {
      expect(Sluggin('123456')).toBe('123456');
    });

    it('should handle string with only dashes', () => {
      expect(Sluggin('---')).toBe('');
    });

    it('should handle string with only underscores', () => {
      expect(Sluggin('___')).toBe('');
    });

    it('should handle alternating characters and spaces', () => {
      expect(Sluggin('a b c d e f')).toBe('a-b-c-d-e-f');
    });

    it('should handle repeated words', () => {
      expect(Sluggin('test test test')).toBe('test-test-test');
    });

    it('should handle unicode edge cases', () => {
      const result = Sluggin('🎉');
      expect(typeof result).toBe('string');
    });

    it('should preserve numbers correctly', () => {
      expect(Sluggin('Test 2023')).toBe('test-2023');
    });

    it('should handle leading numbers', () => {
      expect(Sluggin('123 Test')).toBe('123-test');
    });

    it('should handle trailing numbers', () => {
      expect(Sluggin('Test 456')).toBe('test-456');
    });

    it('should preserve consecutive numbers', () => {
      expect(Sluggin('abc123def456')).toBe('abc123def456');
    });

    it('should not break with special regex characters', () => {
      expect(Sluggin('test.regex')).toBeTruthy();
      expect(Sluggin('test*regex')).toBeTruthy();
      expect(Sluggin('test+regex')).toBeTruthy();
      expect(Sluggin('test?regex')).toBeTruthy();
    });

    it('should handle string with HTML entities', () => {
      const result = Sluggin('&nbsp; &lt; &gt;');
      expect(typeof result).toBe('string');
    });

    it('should handle string with emoji', () => {
      const result = Sluggin('Hello 👋 World');
      expect(typeof result).toBe('string');
    });
  });

  describe('Return Type Consistency', () => {
    it('should always return string for string input', () => {
      expect(typeof Sluggin('test')).toBe('string');
      expect(typeof Sluggin('')).toBe('string');
      expect(typeof Sluggin('123')).toBe('string');
    });

    it('should always return array for array input', () => {
      expect(Array.isArray(Sluggin(['test']))).toBe(true);
      expect(Array.isArray(Sluggin([]))).toBe(true);
      expect(Array.isArray(Sluggin(['a', 'b', 'c']))).toBe(true);
    });

    it('should return empty string for invalid input', () => {
      expect(Sluggin({})).toBe('');
      expect(Sluggin(null)).toBe('');
      expect(Sluggin(undefined)).toBe('');
    });

    it('should maintain array element count', () => {
      const input = ['a', 'b', 'c', 'd', 'e'];
      const result = Sluggin(input);
      expect(result.length).toBe(input.length);
    });
  });

  describe('Performance and Output Format', () => {
    it('should not contain uppercase letters', () => {
      const result = Sluggin('HELLO WORLD');
      expect(/[A-Z]/.test(result)).toBe(false);
    });

    it('should only contain valid slug characters', () => {
      const result = Sluggin('Test 123!@# Demo');
      expect(/^[a-z0-9-]*$/.test(result)).toBe(true);
    });

    it('should use hyphen as separator', () => {
      const result = Sluggin('Hello World Test');
      expect(result.includes('-')).toBe(true);
    });

    it('should not contain multiple consecutive hyphens', () => {
      const result = Sluggin('Hello!!!World');
      expect(/--/.test(result)).toBe(false);
    });

    it('should not start with hyphen', () => {
      const result = Sluggin('!Hello World');
      expect(/^-/.test(result)).toBe(false);
    });

    it('should not end with hyphen', () => {
      const result = Sluggin('Hello World!');
      expect(/-$/.test(result)).toBe(false);
    });

    it('should handle whitespace normalization in array', () => {
      const result = Sluggin(['  test  ', 'another  test']);
      expect(result[0]).toBe('test');
      expect(result[1]).toBe('another-test');
    });
  });
});
