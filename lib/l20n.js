'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var L20n = function () {
  'use strict';

  /*  eslint no-magic-numbers: [0]  */

  var locales2rules = {
    'af': 3,
    'ak': 4,
    'am': 4,
    'ar': 1,
    'asa': 3,
    'az': 0,
    'be': 11,
    'bem': 3,
    'bez': 3,
    'bg': 3,
    'bh': 4,
    'bm': 0,
    'bn': 3,
    'bo': 0,
    'br': 20,
    'brx': 3,
    'bs': 11,
    'ca': 3,
    'cgg': 3,
    'chr': 3,
    'cs': 12,
    'cy': 17,
    'da': 3,
    'de': 3,
    'dv': 3,
    'dz': 0,
    'ee': 3,
    'el': 3,
    'en': 3,
    'eo': 3,
    'es': 3,
    'et': 3,
    'eu': 3,
    'fa': 0,
    'ff': 5,
    'fi': 3,
    'fil': 4,
    'fo': 3,
    'fr': 5,
    'fur': 3,
    'fy': 3,
    'ga': 8,
    'gd': 24,
    'gl': 3,
    'gsw': 3,
    'gu': 3,
    'guw': 4,
    'gv': 23,
    'ha': 3,
    'haw': 3,
    'he': 2,
    'hi': 4,
    'hr': 11,
    'hu': 0,
    'id': 0,
    'ig': 0,
    'ii': 0,
    'is': 3,
    'it': 3,
    'iu': 7,
    'ja': 0,
    'jmc': 3,
    'jv': 0,
    'ka': 0,
    'kab': 5,
    'kaj': 3,
    'kcg': 3,
    'kde': 0,
    'kea': 0,
    'kk': 3,
    'kl': 3,
    'km': 0,
    'kn': 0,
    'ko': 0,
    'ksb': 3,
    'ksh': 21,
    'ku': 3,
    'kw': 7,
    'lag': 18,
    'lb': 3,
    'lg': 3,
    'ln': 4,
    'lo': 0,
    'lt': 10,
    'lv': 6,
    'mas': 3,
    'mg': 4,
    'mk': 16,
    'ml': 3,
    'mn': 3,
    'mo': 9,
    'mr': 3,
    'ms': 0,
    'mt': 15,
    'my': 0,
    'nah': 3,
    'naq': 7,
    'nb': 3,
    'nd': 3,
    'ne': 3,
    'nl': 3,
    'nn': 3,
    'no': 3,
    'nr': 3,
    'nso': 4,
    'ny': 3,
    'nyn': 3,
    'om': 3,
    'or': 3,
    'pa': 3,
    'pap': 3,
    'pl': 13,
    'ps': 3,
    'pt': 3,
    'rm': 3,
    'ro': 9,
    'rof': 3,
    'ru': 11,
    'rwk': 3,
    'sah': 0,
    'saq': 3,
    'se': 7,
    'seh': 3,
    'ses': 0,
    'sg': 0,
    'sh': 11,
    'shi': 19,
    'sk': 12,
    'sl': 14,
    'sma': 7,
    'smi': 7,
    'smj': 7,
    'smn': 7,
    'sms': 7,
    'sn': 3,
    'so': 3,
    'sq': 3,
    'sr': 11,
    'ss': 3,
    'ssy': 3,
    'st': 3,
    'sv': 3,
    'sw': 3,
    'syr': 3,
    'ta': 3,
    'te': 3,
    'teo': 3,
    'th': 0,
    'ti': 4,
    'tig': 3,
    'tk': 3,
    'tl': 4,
    'tn': 3,
    'to': 0,
    'tr': 0,
    'ts': 3,
    'tzm': 22,
    'uk': 11,
    'ur': 3,
    've': 3,
    'vi': 0,
    'vun': 3,
    'wa': 4,
    'wae': 3,
    'wo': 0,
    'xh': 3,
    'xog': 3,
    'yo': 0,
    'zh': 0,
    'zu': 3
  };

  // utility functions for plural rules methods
  function isIn(n, list) {
    return list.indexOf(n) !== -1;
  }
  function isBetween(n, start, end) {
    return (typeof n === 'undefined' ? 'undefined' : _typeof(n)) === (typeof start === 'undefined' ? 'undefined' : _typeof(start)) && start <= n && n <= end;
  }

  // list of all plural rules methods:
  // map an integer to the plural form name to use
  var pluralRules = {
    '0': function _() {
      return 'other';
    },
    '1': function _(n) {
      if (isBetween(n % 100, 3, 10)) {
        return 'few';
      }
      if (n === 0) {
        return 'zero';
      }
      if (isBetween(n % 100, 11, 99)) {
        return 'many';
      }
      if (n === 2) {
        return 'two';
      }
      if (n === 1) {
        return 'one';
      }
      return 'other';
    },
    '2': function _(n) {
      if (n !== 0 && n % 10 === 0) {
        return 'many';
      }
      if (n === 2) {
        return 'two';
      }
      if (n === 1) {
        return 'one';
      }
      return 'other';
    },
    '3': function _(n) {
      if (n === 1) {
        return 'one';
      }
      return 'other';
    },
    '4': function _(n) {
      if (isBetween(n, 0, 1)) {
        return 'one';
      }
      return 'other';
    },
    '5': function _(n) {
      if (isBetween(n, 0, 2) && n !== 2) {
        return 'one';
      }
      return 'other';
    },
    '6': function _(n) {
      if (n === 0) {
        return 'zero';
      }
      if (n % 10 === 1 && n % 100 !== 11) {
        return 'one';
      }
      return 'other';
    },
    '7': function _(n) {
      if (n === 2) {
        return 'two';
      }
      if (n === 1) {
        return 'one';
      }
      return 'other';
    },
    '8': function _(n) {
      if (isBetween(n, 3, 6)) {
        return 'few';
      }
      if (isBetween(n, 7, 10)) {
        return 'many';
      }
      if (n === 2) {
        return 'two';
      }
      if (n === 1) {
        return 'one';
      }
      return 'other';
    },
    '9': function _(n) {
      if (n === 0 || n !== 1 && isBetween(n % 100, 1, 19)) {
        return 'few';
      }
      if (n === 1) {
        return 'one';
      }
      return 'other';
    },
    '10': function _(n) {
      if (isBetween(n % 10, 2, 9) && !isBetween(n % 100, 11, 19)) {
        return 'few';
      }
      if (n % 10 === 1 && !isBetween(n % 100, 11, 19)) {
        return 'one';
      }
      return 'other';
    },
    '11': function _(n) {
      if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) {
        return 'few';
      }
      if (n % 10 === 0 || isBetween(n % 10, 5, 9) || isBetween(n % 100, 11, 14)) {
        return 'many';
      }
      if (n % 10 === 1 && n % 100 !== 11) {
        return 'one';
      }
      return 'other';
    },
    '12': function _(n) {
      if (isBetween(n, 2, 4)) {
        return 'few';
      }
      if (n === 1) {
        return 'one';
      }
      return 'other';
    },
    '13': function _(n) {
      if (n % 1 !== 0) {
        return 'other';
      }
      if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) {
        return 'few';
      }
      if (n !== 1 && isBetween(n % 10, 0, 1) || isBetween(n % 10, 5, 9) || isBetween(n % 100, 12, 14)) {
        return 'many';
      }
      if (n === 1) {
        return 'one';
      }
      return 'other';
    },
    '14': function _(n) {
      if (isBetween(n % 100, 3, 4)) {
        return 'few';
      }
      if (n % 100 === 2) {
        return 'two';
      }
      if (n % 100 === 1) {
        return 'one';
      }
      return 'other';
    },
    '15': function _(n) {
      if (n === 0 || isBetween(n % 100, 2, 10)) {
        return 'few';
      }
      if (isBetween(n % 100, 11, 19)) {
        return 'many';
      }
      if (n === 1) {
        return 'one';
      }
      return 'other';
    },
    '16': function _(n) {
      if (n % 10 === 1 && n !== 11) {
        return 'one';
      }
      return 'other';
    },
    '17': function _(n) {
      if (n === 3) {
        return 'few';
      }
      if (n === 0) {
        return 'zero';
      }
      if (n === 6) {
        return 'many';
      }
      if (n === 2) {
        return 'two';
      }
      if (n === 1) {
        return 'one';
      }
      return 'other';
    },
    '18': function _(n) {
      if (n === 0) {
        return 'zero';
      }
      if (isBetween(n, 0, 2) && n !== 0 && n !== 2) {
        return 'one';
      }
      return 'other';
    },
    '19': function _(n) {
      if (isBetween(n, 2, 10)) {
        return 'few';
      }
      if (isBetween(n, 0, 1)) {
        return 'one';
      }
      return 'other';
    },
    '20': function _(n) {
      if ((isBetween(n % 10, 3, 4) || n % 10 === 9) && !(isBetween(n % 100, 10, 19) || isBetween(n % 100, 70, 79) || isBetween(n % 100, 90, 99))) {
        return 'few';
      }
      if (n % 1000000 === 0 && n !== 0) {
        return 'many';
      }
      if (n % 10 === 2 && !isIn(n % 100, [12, 72, 92])) {
        return 'two';
      }
      if (n % 10 === 1 && !isIn(n % 100, [11, 71, 91])) {
        return 'one';
      }
      return 'other';
    },
    '21': function _(n) {
      if (n === 0) {
        return 'zero';
      }
      if (n === 1) {
        return 'one';
      }
      return 'other';
    },
    '22': function _(n) {
      if (isBetween(n, 0, 1) || isBetween(n, 11, 99)) {
        return 'one';
      }
      return 'other';
    },
    '23': function _(n) {
      if (isBetween(n % 10, 1, 2) || n % 20 === 0) {
        return 'one';
      }
      return 'other';
    },
    '24': function _(n) {
      if (isBetween(n, 3, 10) || isBetween(n, 13, 19)) {
        return 'few';
      }
      if (isIn(n, [2, 12])) {
        return 'two';
      }
      if (isIn(n, [1, 11])) {
        return 'one';
      }
      return 'other';
    }
  };

  function getPluralRule(code) {
    // return a function that gives the plural form name for a given integer
    var index = locales2rules[code.replace(/-.*$/, '')];
    if (!(index in pluralRules)) {
      return function () {
        return 'other';
      };
    }
    return pluralRules[index];
  }

  /**
   * An `L10nError` with information about language and entity ID in which
   * the error happened.
   */

  var L10nError = function (_Error) {
    _inherits(L10nError, _Error);

    function L10nError(message, id, lang) {
      _classCallCheck(this, L10nError);

      var _this = _possibleConstructorReturn(this, _Error.call(this));

      _this.name = 'L10nError';
      _this.message = message;
      _this.id = id;
      _this.lang = lang;
      return _this;
    }

    return L10nError;
  }(Error);

  /*  eslint no-magic-numbers: [0]  */

  var MAX_PLACEABLES = 100;

  /**
   * The `Parser` class is responsible for parsing FTL resources.
   *
   * It's only public method is `getResource(source)` which takes an FTL
   * string and returns a two element Array with an Object of entries
   * generated from the source as the first element and an array of L10nError
   * objects as the second.
   *
   * This parser is optimized for runtime performance.
   *
   * There is an equivalent of this parser in ftl/ast/parser which is
   * generating full AST which is useful for FTL tools.
   */

  var EntriesParser = function () {
    function EntriesParser() {
      _classCallCheck(this, EntriesParser);
    }

    /**
     * @param {string} string
     * @returns {{}, []]}
     */
    EntriesParser.prototype.getResource = function getResource(string) {
      this._source = string;
      this._index = 0;
      this._length = string.length;

      // This variable is used for error recovery and reporting.
      this._lastGoodEntryEnd = 0;

      var entries = {};
      var errors = [];

      this.getWS();
      while (this._index < this._length) {
        try {
          this.getEntry(entries);
        } catch (e) {
          if (e instanceof L10nError) {
            errors.push(e);
            this.getJunkEntry();
          } else {
            throw e;
          }
        }
        this.getWS();
      }

      return [entries, errors];
    };

    EntriesParser.prototype.getEntry = function getEntry(entries) {
      // The pointer here should either be at the beginning of the file
      // or right after new line.
      if (this._index !== 0 && this._source[this._index - 1] !== '\n') {
        throw this.error('Expected new line and a new entry');
      }

      var ch = this._source[this._index];

      // We don't care about comments or sections at runtime
      if (ch === '#') {
        this.getComment();
        return;
      }

      if (ch === '[') {
        this.getSection();
        return;
      }

      if (ch !== '\n') {
        this.getEntity(entries);
      }
    };

    EntriesParser.prototype.getSection = function getSection() {
      this._index += 1;
      if (this._source[this._index] !== '[') {
        throw this.error('Expected "[[" to open a section');
      }

      this._index += 1;

      this.getLineWS();
      this.getKeyword();
      this.getLineWS();

      if (this._source[this._index] !== ']' || this._source[this._index + 1] !== ']') {
        throw this.error('Expected "]]" to close a section');
      }

      this._index += 2;

      // sections are ignored in the runtime ast
      return undefined;
    };

    EntriesParser.prototype.getEntity = function getEntity(entries) {
      var id = this.getIdentifier();

      this.getLineWS();

      var ch = this._source[this._index];

      if (ch !== '=') {
        throw this.error('Expected "=" after Entity ID');
      }

      this._index++;

      this.getLineWS();

      var val = this.getPattern();

      ch = this._source[this._index];

      // In the scenario when the pattern is quote-delimited
      // the pattern ends with the closing quote.
      if (ch === '\n') {
        this._index++;
        this.getLineWS();
        ch = this._source[this._index];
      }

      if (ch === '[' && this._source[this._index + 1] !== '[' || ch === '*') {

        var members = this.getMembers();
        entries[id] = {
          traits: members[0],
          def: members[1],
          val: val
        };
      } else if (typeof val === 'string') {
        entries[id] = val;
      } else if (val === undefined) {
        throw this.error('Expected a value (like: " = value") or a trait (like: "[key] value")');
      } else {
        entries[id] = {
          val: val
        };
      }
    };

    EntriesParser.prototype.getWS = function getWS() {
      var cc = this._source.charCodeAt(this._index);
      // space, \n, \t, \r
      while (cc === 32 || cc === 10 || cc === 9 || cc === 13) {
        cc = this._source.charCodeAt(++this._index);
      }
    };

    EntriesParser.prototype.getLineWS = function getLineWS() {
      var cc = this._source.charCodeAt(this._index);
      // space, \t
      while (cc === 32 || cc === 9) {
        cc = this._source.charCodeAt(++this._index);
      }
    };

    EntriesParser.prototype.getIdentifier = function getIdentifier() {
      var start = this._index;
      var cc = this._source.charCodeAt(this._index);

      if (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc === 95) {
        // _
        cc = this._source.charCodeAt(++this._index);
      } else {
        throw this.error('Expected an identifier (starting with [a-zA-Z_])');
      }

      while (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc >= 48 && cc <= 57 || // 0-9
      cc === 95 || cc === 45) {
        // _-
        cc = this._source.charCodeAt(++this._index);
      }

      return this._source.slice(start, this._index);
    };

    EntriesParser.prototype.getKeyword = function getKeyword() {
      var name = '';
      var namespace = this.getIdentifier();

      // If the first character after identifier string is '/', it means
      // that what we collected so far is actually a namespace.
      //
      // But if it is not '/', that means that what we collected so far
      // is just the beginning of the keyword and we should continue collecting
      // it.
      // In that scenario, we're going to move charcters collected so far
      // from namespace variable to name variable and set namespace to null.
      //
      // For example, if the keyword is "Foo bar", at this point we only
      // collected "Foo", the index character is not "/", so we're going
      // to move on and see if the next character is allowed in the name.
      //
      // Because it's a space, it is and we'll continue collecting the name.
      //
      // In case the keyword is "Foo/bar", we're going to keep what we collected
      // so far as `namespace`, bump the index and start collecting the name.
      if (this._source[this._index] === '/') {
        this._index++;
      } else if (namespace) {
        name = namespace;
        namespace = null;
      }

      var start = this._index;
      var cc = this._source.charCodeAt(this._index);

      if (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc === 95 || cc === 32) {
        //  _
        cc = this._source.charCodeAt(++this._index);
      } else if (name.length === 0) {
        throw this.error('Expected an identifier (starting with [a-zA-Z_])');
      }

      while (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc >= 48 && cc <= 57 || // 0-9
      cc === 95 || cc === 45 || cc === 32) {
        //  _-
        cc = this._source.charCodeAt(++this._index);
      }

      // If we encountered the end of name, we want to test is the last
      // collected character is a space.
      // If it is, we will backtrack to the last non-space character because
      // the keyword cannot end with a space character.
      while (this._source.charCodeAt(this._index - 1) === 32) {
        this._index--;
      }

      name += this._source.slice(start, this._index);

      return namespace ? { type: 'kw', ns: namespace, name: name } : { type: 'kw', name: name };
    };

    // We're going to first try to see if the pattern is simple.
    // If it is a simple, not quote-delimited string,
    // we can just look for the end of the line and read the string.
    //
    // Then, if either the line contains a placeable opening `{` or the
    // next line starts with a pipe `|`, we switch to complex pattern.


    EntriesParser.prototype.getPattern = function getPattern() {
      var start = this._index;
      if (this._source[start] === '"') {
        return this.getComplexPattern();
      }
      var eol = this._source.indexOf('\n', this._index);

      if (eol === -1) {
        eol = this._length;
      }

      var line = start !== eol ? this._source.slice(start, eol) : undefined;

      if (line !== undefined && line.includes('{')) {
        return this.getComplexPattern();
      }

      this._index = eol + 1;

      this.getLineWS();

      if (this._source[this._index] === '|') {
        this._index = start;
        return this.getComplexPattern();
      }

      return line;
    };

    /* eslint-disable complexity */


    EntriesParser.prototype.getComplexPattern = function getComplexPattern() {
      var buffer = '';
      var content = [];
      var placeables = 0;

      // We actually use all three possible states of this variable:
      // true and false indicate if we're within a quote-delimited string
      // null indicates that the string is not quote-delimited
      var quoteDelimited = null;
      var firstLine = true;

      var ch = this._source[this._index];

      // If the string starts with \", \{ or \\ skip the first `\` and add the
      // following character to the buffer without interpreting it.
      if (ch === '\\' && (this._source[this._index + 1] === '"' || this._source[this._index + 1] === '{' || this._source[this._index + 1] === '\\')) {
        buffer += this._source[this._index + 1];
        this._index += 2;
        ch = this._source[this._index];
      } else if (ch === '"') {
        // If the first character of the string is `"`, mark the string
        // as quote delimited.
        quoteDelimited = true;
        this._index++;
        ch = this._source[this._index];
      }

      while (this._index < this._length) {
        // This block handles multi-line strings combining strings seaprated
        // by new line and `|` character at the beginning of the next one.
        if (ch === '\n') {
          if (quoteDelimited) {
            throw this.error('Unclosed string');
          }
          this._index++;
          this.getLineWS();
          if (this._source[this._index] !== '|') {
            break;
          }
          if (firstLine && buffer.length) {
            throw this.error('Multiline string should have the ID line empty');
          }
          firstLine = false;
          this._index++;
          if (this._source[this._index] === ' ') {
            this._index++;
          }
          if (buffer.length) {
            buffer += '\n';
          }
          ch = this._source[this._index];
          continue;
        } else if (ch === '\\') {
          // We only handle `{` as a character that can be escaped in a string
          // and `"` if the string is quote delimited.
          var ch2 = this._source[this._index + 1];
          if (quoteDelimited && ch2 === '"' || ch2 === '{') {
            ch = ch2;
            this._index++;
          }
        } else if (quoteDelimited && ch === '"') {
          this._index++;
          quoteDelimited = false;
          break;
        } else if (ch === '{') {
          // Push the buffer to content array right before placeable
          if (buffer.length) {
            content.push(buffer);
          }
          if (placeables > MAX_PLACEABLES - 1) {
            throw this.error('Too many placeables, maximum allowed is ' + MAX_PLACEABLES);
          }
          buffer = '';
          content.push(this.getPlaceable());
          ch = this._source[this._index];
          placeables++;
          continue;
        }

        if (ch) {
          buffer += ch;
        }
        this._index++;
        ch = this._source[this._index];
      }

      if (quoteDelimited) {
        throw this.error('Unclosed string');
      }

      if (content.length === 0) {
        if (quoteDelimited !== null) {
          return buffer.length ? buffer : '';
        }
        return buffer.length ? buffer : undefined;
      }

      if (buffer.length) {
        content.push(buffer);
      }

      return content;
    };
    /* eslint-enable complexity */

    EntriesParser.prototype.getPlaceable = function getPlaceable() {
      this._index++;

      var expressions = [];

      this.getLineWS();

      while (this._index < this._length) {
        var start = this._index;
        try {
          expressions.push(this.getPlaceableExpression());
        } catch (e) {
          throw this.error(e.description, start);
        }
        var ch = this._source[this._index];
        if (ch === '}') {
          this._index++;
          break;
        } else if (ch === ',') {
          this._index++;
          this.getWS();
        } else {
          throw this.error('Expected "}" or ","');
        }
      }

      return expressions;
    };

    EntriesParser.prototype.getPlaceableExpression = function getPlaceableExpression() {
      var selector = this.getCallExpression();
      var members = void 0;

      this.getWS();

      var ch = this._source[this._index];

      // If the expression is followed by `->` we're going to collect
      // its members and return it as a select expression.
      if (ch !== '}' && ch !== ',') {
        if (ch !== '-' || this._source[this._index + 1] !== '>') {
          throw this.error('Expected "}", "," or "->"');
        }
        this._index += 2; // ->

        this.getLineWS();

        if (this._source[this._index] !== '\n') {
          throw this.error('Members should be listed in a new line');
        }

        this.getWS();

        members = this.getMembers();

        if (members[0].length === 0) {
          throw this.error('Expected members for the select expression');
        }
      }

      if (members === undefined) {
        return selector;
      }
      return {
        type: 'sel',
        exp: selector,
        vars: members[0],
        def: members[1]
      };
    };

    EntriesParser.prototype.getCallExpression = function getCallExpression() {
      var exp = this.getMemberExpression();

      if (this._source[this._index] !== '(') {
        return exp;
      }

      this._index++;

      var args = this.getCallArgs();

      this._index++;

      if (exp.type === 'ref') {
        exp.type = 'fun';
      }

      return {
        type: 'call',
        name: exp,
        args: args
      };
    };

    EntriesParser.prototype.getCallArgs = function getCallArgs() {
      var args = [];

      if (this._source[this._index] === ')') {
        return args;
      }

      while (this._index < this._length) {
        this.getLineWS();

        var exp = this.getCallExpression();

        // EntityReference in this place may be an entity reference, like:
        // `call(foo)`, or, if it's followed by `:` it will be a key-value pair.
        if (exp.type !== 'ref' || exp.namespace !== undefined) {
          args.push(exp);
        } else {
          this.getLineWS();

          if (this._source[this._index] === ':') {
            this._index++;
            this.getLineWS();

            var val = this.getCallExpression();

            // If the expression returned as a value of the argument
            // is not a quote delimited string, number or
            // external argument, throw an error.
            //
            // We don't have to check here if the pattern is quote delimited
            // because that's the only type of string allowed in expressions.
            if (typeof val === 'string' || Array.isArray(val) || val.type === 'num' || val.type === 'ext') {
              args.push({
                type: 'kv',
                name: exp.name,
                val: val
              });
            } else {
              this._index = this._source.lastIndexOf(':', this._index) + 1;
              throw this.error('Expected string in quotes, number or external argument');
            }
          } else {
            args.push(exp);
          }
        }

        this.getLineWS();

        if (this._source[this._index] === ')') {
          break;
        } else if (this._source[this._index] === ',') {
          this._index++;
        } else {
          throw this.error('Expected "," or ")"');
        }
      }

      return args;
    };

    EntriesParser.prototype.getNumber = function getNumber() {
      var num = '';
      var cc = this._source.charCodeAt(this._index);

      // The number literal may start with negative sign `-`.
      if (cc === 45) {
        num += '-';
        cc = this._source.charCodeAt(++this._index);
      }

      // next, we expect at least one digit
      if (cc < 48 || cc > 57) {
        throw this.error('Unknown literal "' + num + '"');
      }

      // followed by potentially more digits
      while (cc >= 48 && cc <= 57) {
        num += this._source[this._index++];
        cc = this._source.charCodeAt(this._index);
      }

      // followed by an optional decimal separator `.`
      if (cc === 46) {
        num += this._source[this._index++];
        cc = this._source.charCodeAt(this._index);

        // followed by at least one digit
        if (cc < 48 || cc > 57) {
          throw this.error('Unknown literal "' + num + '"');
        }

        // and optionally more digits
        while (cc >= 48 && cc <= 57) {
          num += this._source[this._index++];
          cc = this._source.charCodeAt(this._index);
        }
      }

      return {
        type: 'num',
        val: num
      };
    };

    EntriesParser.prototype.getMemberExpression = function getMemberExpression() {
      var exp = this.getLiteral();

      // the obj element of the member expression
      // must be either an entity reference or another member expression.
      while (['ref', 'mem'].includes(exp.type) && this._source[this._index] === '[') {
        var keyword = this.getMemberKey();
        exp = {
          type: 'mem',
          key: keyword,
          obj: exp
        };
      }

      return exp;
    };

    EntriesParser.prototype.getMembers = function getMembers() {
      var members = [];
      var index = 0;
      var defaultIndex = void 0;

      while (this._index < this._length) {
        var ch = this._source[this._index];

        if ((ch !== '[' || this._source[this._index + 1] === '[') && ch !== '*') {
          break;
        }
        if (ch === '*') {
          this._index++;
          defaultIndex = index;
        }

        if (this._source[this._index] !== '[') {
          throw this.error('Expected "["');
        }

        var key = this.getMemberKey();

        this.getLineWS();

        var member = {
          key: key,
          val: this.getPattern()
        };
        members[index++] = member;

        this.getWS();
      }

      return [members, defaultIndex];
    };

    // MemberKey may be a Keyword or Number


    EntriesParser.prototype.getMemberKey = function getMemberKey() {
      this._index++;

      var cc = this._source.charCodeAt(this._index);
      var literal = void 0;

      if (cc >= 48 && cc <= 57 || cc === 45) {
        literal = this.getNumber();
      } else {
        literal = this.getKeyword();
      }

      if (this._source[this._index] !== ']') {
        throw this.error('Expected "]"');
      }

      this._index++;
      return literal;
    };

    EntriesParser.prototype.getLiteral = function getLiteral() {
      var cc = this._source.charCodeAt(this._index);
      if (cc >= 48 && cc <= 57 || cc === 45) {
        return this.getNumber();
      } else if (cc === 34) {
        // "
        return this.getPattern();
      } else if (cc === 36) {
        // $
        this._index++;
        return {
          type: 'ext',
          name: this.getIdentifier()
        };
      }

      return {
        type: 'ref',
        name: this.getIdentifier()
      };
    };

    // At runtime, we don't care about comments so we just have
    // to parse them properly and skip their content.


    EntriesParser.prototype.getComment = function getComment() {
      var eol = this._source.indexOf('\n', this._index);

      while (eol !== -1 && this._source[eol + 1] === '#') {
        this._index = eol + 2;

        eol = this._source.indexOf('\n', this._index);

        if (eol === -1) {
          break;
        }
      }

      if (eol === -1) {
        this._index = this._length;
      } else {
        this._index = eol + 1;
      }
    };

    EntriesParser.prototype.error = function error(message) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var pos = this._index;

      if (start === null) {
        start = pos;
      }
      start = this._findEntityStart(start);

      var context = this._source.slice(start, pos + 10);

      var msg = '\n\n  ' + message + '\nat pos ' + pos + ':\n------\n\u2026' + context + '\n------';
      var err = new L10nError(msg);

      var row = this._source.slice(0, pos).split('\n').length;
      var col = pos - this._source.lastIndexOf('\n', pos - 1);
      err._pos = { start: pos, end: undefined, col: col, row: row };
      err.offset = pos - start;
      err.description = message;
      err.context = context;
      return err;
    };

    EntriesParser.prototype.getJunkEntry = function getJunkEntry() {
      var pos = this._index;

      var nextEntity = this._findNextEntryStart(pos);

      if (nextEntity === -1) {
        nextEntity = this._length;
      }

      this._index = nextEntity;

      var entityStart = this._findEntityStart(pos);

      if (entityStart < this._lastGoodEntryEnd) {
        entityStart = this._lastGoodEntryEnd;
      }
    };

    EntriesParser.prototype._findEntityStart = function _findEntityStart(pos) {
      var start = pos;

      while (true) {
        start = this._source.lastIndexOf('\n', start - 2);
        if (start === -1 || start === 0) {
          start = 0;
          break;
        }
        var cc = this._source.charCodeAt(start + 1);

        if (cc >= 97 && cc <= 122 || // a-z
        cc >= 65 && cc <= 90 || // A-Z
        cc === 95) {
          // _
          start++;
          break;
        }
      }

      return start;
    };

    EntriesParser.prototype._findNextEntryStart = function _findNextEntryStart(pos) {
      var start = pos;

      while (true) {
        if (start === 0 || this._source[start - 1] === '\n') {
          var cc = this._source.charCodeAt(start);

          if (cc >= 97 && cc <= 122 || // a-z
          cc >= 65 && cc <= 90 || // A-Z
          cc === 95 || cc === 35 || cc === 91) {
            // _#[
            break;
          }
        }

        start = this._source.indexOf('\n', start);

        if (start === -1) {
          break;
        }
        start++;
      }

      return start;
    };

    return EntriesParser;
  }();

  var FTLRuntimeParser = {
    parseResource: function parseResource(string) {
      var parser = new EntriesParser();
      return parser.getResource(string);
    }
  };

  /**
   * The `FTLType` class is the base of FTL's type system.
   *
   * FTL types wrap JavaScript values and store additional configuration for
   * them, which can then be used in the `toString` method together with a proper
   * `Intl` formatter.
   */

  var FTLType = function () {

    /**
     * Create an `FTLType` instance.
     *
     * @param   {Any}    value - JavaScript value to wrap.
     * @param   {Object} opts  - Configuration.
     * @returns {FTLType}
     */
    function FTLType(value, opts) {
      _classCallCheck(this, FTLType);

      this.value = value;
      this.opts = opts;
    }

    /**
     * Get the JavaScript value wrapped by this `FTLType` instance.
     *
     * @returns {Any}
     */


    FTLType.prototype.valueOf = function valueOf() {
      return this.value;
    };

    /**
     * Stringify an instance of `FTLType`.
     *
     * This method can use `Intl` formatters memoized by the `MessageContext`
     * instance passed as an argument.
     *
     * @param   {MessageContext} ctx
     * @returns {string}
     */


    FTLType.prototype.toString = function toString(ctx) {
      return this.value.toString(ctx);
    };

    return FTLType;
  }();

  var FTLNone = function (_FTLType) {
    _inherits(FTLNone, _FTLType);

    function FTLNone() {
      _classCallCheck(this, FTLNone);

      return _possibleConstructorReturn(this, _FTLType.apply(this, arguments));
    }

    FTLNone.prototype.toString = function toString() {
      return this.value || '???';
    };

    return FTLNone;
  }(FTLType);

  var FTLNumber = function (_FTLType2) {
    _inherits(FTLNumber, _FTLType2);

    function FTLNumber(value, opts) {
      _classCallCheck(this, FTLNumber);

      return _possibleConstructorReturn(this, _FTLType2.call(this, parseFloat(value), opts));
    }

    FTLNumber.prototype.toString = function toString(ctx) {
      var nf = ctx._memoizeIntlObject(Intl.NumberFormat, this.opts);
      return nf.format(this.value);
    };

    return FTLNumber;
  }(FTLType);

  var FTLDateTime = function (_FTLType3) {
    _inherits(FTLDateTime, _FTLType3);

    function FTLDateTime(value, opts) {
      _classCallCheck(this, FTLDateTime);

      return _possibleConstructorReturn(this, _FTLType3.call(this, new Date(value), opts));
    }

    FTLDateTime.prototype.toString = function toString(ctx) {
      var dtf = ctx._memoizeIntlObject(Intl.DateTimeFormat, this.opts);
      return dtf.format(this.value);
    };

    return FTLDateTime;
  }(FTLType);

  var FTLKeyword = function (_FTLType4) {
    _inherits(FTLKeyword, _FTLType4);

    function FTLKeyword() {
      _classCallCheck(this, FTLKeyword);

      return _possibleConstructorReturn(this, _FTLType4.apply(this, arguments));
    }

    FTLKeyword.prototype.toString = function toString() {
      var _value = this.value,
          name = _value.name,
          namespace = _value.namespace;

      return namespace ? namespace + ':' + name : name;
    };

    FTLKeyword.prototype.match = function match(ctx, other) {
      var _value2 = this.value,
          name = _value2.name,
          namespace = _value2.namespace;

      if (other instanceof FTLKeyword) {
        return name === other.value.name && namespace === other.value.namespace;
      } else if (namespace) {
        return false;
      } else if (typeof other === 'string') {
        return name === other;
      } else if (other instanceof FTLNumber) {
        var pr = ctx._memoizeIntlObject(Intl.PluralRules, other.opts);
        return name === pr.select(other.valueOf());
      }
      return false;
    };

    return FTLKeyword;
  }(FTLType);

  var FTLList = function (_Array) {
    _inherits(FTLList, _Array);

    function FTLList() {
      _classCallCheck(this, FTLList);

      return _possibleConstructorReturn(this, _Array.apply(this, arguments));
    }

    FTLList.prototype.toString = function toString(ctx) {
      var lf = ctx._memoizeIntlObject(Intl.ListFormat // XXX add this.opts
      );
      var elems = this.map(function (elem) {
        return elem.toString(ctx);
      });
      return lf.format(elems);
    };

    return FTLList;
  }(Array);

  /**
   * @module
   *
   * The FTL resolver ships with a number of functions built-in.
   *
   * Each function take two arguments:
   *   - args - an array of positional args
   *   - opts - an object of key-value args
   *
   * Arguments to functions are guaranteed to already be instances of `FTLType`.
   * Functions must return `FTLType` objects as well.  For this reason it may be
   * necessary to unwrap the JavaScript value behind the FTL Value and to merge
   * the configuration of the argument with the configuration of the return
   * value.
   */


  var builtins = {
    'NUMBER': function NUMBER(_ref, opts) {
      var arg = _ref[0];
      return new FTLNumber(arg.valueOf(), merge(arg.opts, opts));
    },
    'DATETIME': function DATETIME(_ref2, opts) {
      var arg = _ref2[0];
      return new FTLDateTime(arg.valueOf(), merge(arg.opts, opts));
    },
    'LIST': function LIST(args) {
      return FTLList.from(args);
    },
    'LEN': function LEN(_ref3) {
      var arg = _ref3[0];
      return new FTLNumber(arg.valueOf().length);
    },
    'TAKE': function TAKE(_ref4) {
      var num = _ref4[0],
          arg = _ref4[1];
      return FTLList.from(arg.valueOf().slice(0, num.value));
    },
    'DROP': function DROP(_ref5) {
      var num = _ref5[0],
          arg = _ref5[1];
      return FTLList.from(arg.valueOf().slice(num.value));
    }
  };

  function merge(argopts, opts) {
    return Object.assign({}, argopts, valuesOf(opts));
  }

  function valuesOf(opts) {
    return Object.keys(opts).reduce(function (seq, cur) {
      var _Object$assign;

      return Object.assign({}, seq, (_Object$assign = {}, _Object$assign[cur] = opts[cur].valueOf(), _Object$assign));
    }, {});
  }

  /**
   * @module
   *
   * The role of the FTL resolver is to format a translation object to an
   * instance of `FTLType`.
   *
   * Translations can contain references to other entities or external arguments,
   * conditional logic in form of select expressions, traits which describe their
   * grammatical features, and can use FTL builtins which make use of the `Intl`
   * formatters to format numbers, dates, lists and more into the context's
   * language.  See the documentation of the FTL syntax for more information.
   *
   * In case of errors the resolver will try to salvage as much of the
   * translation as possible.  In rare situations where the resolver didn't know
   * how to recover from an error it will return an instance of `FTLNone`.
   *
   * `EntityReference`, `MemberExpression` and `SelectExpression` resolve to raw
   * Runtime Entries objects and the result of the resolution needs to be passed
   * into `Value` to get their real value.  This is useful for composing
   * expressions.  Consider:
   *
   *     brand-name[nominative]
   *
   * which is a `MemberExpression` with properties `obj: EntityReference` and
   * `key: Keyword`.  If `EntityReference` was resolved eagerly, it would
   * instantly resolve to the value of the `brand-name` entity.  Instead, we want
   * to get the entity object and look for its `nominative` trait.
   *
   * All other expressions (except for `FunctionReference` which is only used in
   * `CallExpression`) resolve to an instance of `FTLType`, which must then be
   * sringified with its `toString` method by the caller.
   */

  // Prevent expansion of too long placeables.
  var MAX_PLACEABLE_LENGTH = 2500;

  /**
   * Map an array of JavaScript values into FTL Values.
   *
   * Used for external arguments of Array type and for implicit Lists in
   * placeables.
   *
   * @private
   */
  function mapValues(env, arr) {
    var values = new FTLList();
    for (var _iterator = arr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref6;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref6 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref6 = _i.value;
      }

      var elem = _ref6;

      values.push(Value(env, elem));
    }
    return values;
  }

  /**
   * Helper for choosing the default value from a set of members.
   *
   * Used in SelectExpressions and Value.
   *
   * @private
   */
  function DefaultMember(env, members, def) {
    if (members[def]) {
      return members[def];
    }

    var errors = env.errors;

    errors.push(new RangeError('No default'));
    return new FTLNone();
  }

  /**
   * Resolve a reference to an entity to the entity object.
   *
   * @private
   */
  function EntityReference(env, _ref7) {
    var name = _ref7.name;
    var ctx = env.ctx,
        errors = env.errors;

    var entity = ctx.messages.get(name);

    if (!entity) {
      errors.push(new ReferenceError('Unknown entity: ' + name));
      return new FTLNone(name);
    }

    return entity;
  }

  /**
   * Resolve a member expression to the member object.
   *
   * @private
   */
  function MemberExpression(env, _ref8) {
    var obj = _ref8.obj,
        key = _ref8.key;

    var entity = EntityReference(env, obj);
    if (entity instanceof FTLNone) {
      return entity;
    }

    var ctx = env.ctx,
        errors = env.errors;

    var keyword = Value(env, key);

    if (entity.traits) {
      // Match the specified key against keys of each trait, in order.
      for (var _iterator2 = entity.traits, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref9;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref9 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref9 = _i2.value;
        }

        var member = _ref9;

        var memberKey = Value(env, member.key);
        if (keyword.match(ctx, memberKey)) {
          return member;
        }
      }
    }

    errors.push(new ReferenceError('Unknown trait: ' + keyword.toString(ctx)));
    return Value(env, entity);
  }

  /**
   * Resolve a select expression to the member object.
   *
   * @private
   */
  function SelectExpression(env, _ref10) {
    var exp = _ref10.exp,
        vars = _ref10.vars,
        def = _ref10.def;

    var selector = Value(env, exp);
    if (selector instanceof FTLNone) {
      return DefaultMember(env, vars, def);
    }

    // Match the selector against keys of each variant, in order.
    for (var _iterator3 = vars, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref11;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref11 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref11 = _i3.value;
      }

      var variant = _ref11;

      var key = Value(env, variant.key);

      // XXX A special case of numbers to avoid code repetition in types.js.
      if (key instanceof FTLNumber && selector instanceof FTLNumber && key.valueOf() === selector.valueOf()) {
        return variant;
      }

      var ctx = env.ctx;


      if (key instanceof FTLKeyword && key.match(ctx, selector)) {
        return variant;
      }
    }

    return DefaultMember(env, vars, def);
  }

  /**
   * Resolve expression to an FTL type.
   *
   * JavaScript strings are a special case.  Since they natively have the
   * `toString` method they can be used as if they were an FTL type without
   * paying the cost of creating a instance of one.
   *
   * @param   {Object} expr
   * @returns {FTLType}
   * @private
   */
  function Value(env, expr) {
    // A fast-path for strings which are the most common case, and for `FTLNone`
    // which doesn't require any additional logic.
    if (typeof expr === 'string' || expr instanceof FTLNone) {
      return expr;
    }

    // The Runtime AST (Entries) encodes patterns (complex strings with
    // placeables) as Arrays.
    if (Array.isArray(expr)) {
      return Pattern(env, expr);
    }

    switch (expr.type) {
      case 'kw':
        return new FTLKeyword(expr);
      case 'num':
        return new FTLNumber(expr.val);
      case 'ext':
        return ExternalArgument(env, expr);
      case 'fun':
        return FunctionReference(env, expr);
      case 'call':
        return CallExpression(env, expr);
      case 'ref':
        {
          var entity = EntityReference(env, expr);
          return Value(env, entity);
        }
      case 'mem':
        {
          var member = MemberExpression(env, expr);
          return Value(env, member);
        }
      case 'sel':
        {
          var _member = SelectExpression(env, expr);
          return Value(env, _member);
        }
      case undefined:
        {
          // If it's a node with a value, resolve the value.
          if (expr.val !== undefined) {
            return Value(env, expr.val);
          }

          var def = DefaultMember(env, expr.traits, expr.def);
          return Value(env, def);
        }
      default:
        return new FTLNone();
    }
  }

  /**
   * Resolve a reference to an external argument.
   *
   * @private
   */
  function ExternalArgument(env, _ref12) {
    var name = _ref12.name;
    var args = env.args,
        errors = env.errors;


    if (!args || !args.hasOwnProperty(name)) {
      errors.push(new ReferenceError('Unknown external: ' + name));
      return new FTLNone(name);
    }

    var arg = args[name];

    if (arg instanceof FTLType) {
      return arg;
    }

    // Convert the argument to an FTL type.
    switch (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) {
      case 'string':
        return arg;
      case 'number':
        return new FTLNumber(arg);
      case 'object':
        if (Array.isArray(arg)) {
          return mapValues(env, arg);
        }
        if (arg instanceof Date) {
          return new FTLDateTime(arg);
        }
      default:
        errors.push(new TypeError('Unsupported external type: ' + name + ', ' + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg))));
        return new FTLNone(name);
    }
  }

  /**
   * Resolve a reference to a function.
   *
   * @private
   */
  function FunctionReference(env, _ref13) {
    var name = _ref13.name;

    // Some functions are built-in.  Others may be provided by the runtime via
    // the `MessageContext` constructor.
    var functions = env.ctx.functions,
        errors = env.errors;

    var func = functions[name] || builtins[name];

    if (!func) {
      errors.push(new ReferenceError('Unknown function: ' + name + '()'));
      return new FTLNone(name + '()');
    }

    if (typeof func !== 'function') {
      errors.push(new TypeError('Function ' + name + '() is not callable'));
      return new FTLNone(name + '()');
    }

    return func;
  }

  /**
   * Resolve a call to a Function with positional and key-value arguments.
   *
   * @private
   */
  function CallExpression(env, _ref14) {
    var name = _ref14.name,
        args = _ref14.args;

    var callee = FunctionReference(env, name);

    if (callee instanceof FTLNone) {
      return callee;
    }

    var posargs = [];
    var keyargs = [];

    for (var _iterator4 = args, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref15;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref15 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref15 = _i4.value;
      }

      var arg = _ref15;

      if (arg.type === 'kv') {
        keyargs[arg.name] = Value(env, arg.val);
      } else {
        posargs.push(Value(env, arg));
      }
    }

    // XXX functions should also report errors
    return callee(posargs, keyargs);
  }

  /**
   * Resolve a pattern (a complex string with placeables).
   *
   * @private
   */
  function Pattern(env, ptn) {
    var ctx = env.ctx,
        dirty = env.dirty,
        errors = env.errors;


    if (dirty.has(ptn)) {
      errors.push(new RangeError('Cyclic reference'));
      return new FTLNone();
    }

    // Tag the pattern as dirty for the purpose of the current resolution.
    dirty.add(ptn);
    var result = '';

    for (var _iterator5 = ptn, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
      var _ref16;

      if (_isArray5) {
        if (_i5 >= _iterator5.length) break;
        _ref16 = _iterator5[_i5++];
      } else {
        _i5 = _iterator5.next();
        if (_i5.done) break;
        _ref16 = _i5.value;
      }

      var part = _ref16;

      if (typeof part === 'string') {
        result += part;
      } else {
        // Optimize the most common case: the placeable only has one expression.
        // Otherwise map its expressions to Values.
        var value = part.length === 1 ? Value(env, part[0]) : mapValues(env, part);

        var str = value.toString(ctx);
        if (str.length > MAX_PLACEABLE_LENGTH) {
          errors.push(new RangeError('Too many characters in placeable ' + ('(' + str.length + ', max allowed is ' + MAX_PLACEABLE_LENGTH + ')')));
          result += str.substr(0, MAX_PLACEABLE_LENGTH);
        } else {
          result += str;
        }
      }
    }

    dirty.delete(ptn);
    return result;
  }

  /**
   * Format a translation into an `FTLType`.
   *
   * The return value must be sringified with its `toString` method by the
   * caller.
   *
   * @param   {MessageContext} ctx
   * @param   {Object}         args
   * @param   {Object}         entity
   * @param   {Array}          errors
   * @returns {FTLType}
   */
  function resolve(ctx, args, entity) {
    var errors = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    var env = {
      ctx: ctx, args: args, errors: errors, dirty: new WeakSet()
    };
    return Value(env, entity);
  }

  /**
   * Message contexts are single-language stores of translations.  They are
   * responsible for parsing translation resources in the FTL syntax and can
   * format translation units (entities) to strings.
   *
   * Always use `MessageContext.format` to retrieve translation units from
   * a context.  Translations can contain references to other entities or
   * external arguments, conditional logic in form of select expressions, traits
   * which describe their grammatical features, and can use FTL builtins which
   * make use of the `Intl` formatters to format numbers, dates, lists and more
   * into the context's language.  See the documentation of the FTL syntax for
   * more information.
   */

  var MessageContext = function () {

    /**
     * Create an instance of `MessageContext`.
     *
     * The `lang` argument is used to instantiate `Intl` formatters used by
     * translations.  The `options` object can be used to configure the context.
     *
     * Available options:
     *
     *   - functions - an object of additional functions available to
     *                 translations as builtins.
     *
     * @param   {string} lang      - Language of the context.
     * @param   {Object} [options]
     * @returns {MessageContext}
     */
    function MessageContext(lang) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, MessageContext);

      this.lang = lang;
      this.functions = options.functions || {};
      this.messages = new Map();
      this.intls = new WeakMap();
    }

    /**
     * Add a translation resource to the context.
     *
     * The translation resource must use the FTL syntax.  It will be parsed by
     * the context and each translation unit (entity) will be available in the
     * `messages` map by its identifier.
     *
     *     ctx.addMessages('foo = Foo');
     *     ctx.messages.get('foo');
     *
     *     // Returns a raw representation of the 'foo' entity.
     *
     * Parsed entities should be formatted with the `format` method in case they
     * contain logic (references, select expressions etc.).
     *
     * @param   {string} source - Text resource with translations.
     * @returns {Array<Error>}
     */


    MessageContext.prototype.addMessages = function addMessages(source) {
      var _FTLRuntimeParser$par = FTLRuntimeParser.parseResource(source),
          entries = _FTLRuntimeParser$par[0],
          errors = _FTLRuntimeParser$par[1];

      for (var id in entries) {
        this.messages.set(id, entries[id]);
      }

      return errors;
    };

    /**
     * Format an entity to a string or null.
     *
     * Format a raw `entity` from the context's `messages` map into a string (or
     * a null if it has a null value).  `args` will be used to resolve references
     * to external arguments inside of the translation.
     *
     * In case of errors `format` will try to salvage as much of the translation
     * as possible and will still return a string.  For performance reasons, the
     * encountered errors are not returned but instead are appended to the
     * `errors` array passed as the third argument.
     *
     *     const errors = [];
     *     ctx.addMessages('hello = Hello, { $name }!');
     *     const hello = ctx.messages.get('hello');
     *     ctx.format(hello, { name: 'Jane' }, errors);
     *
     *     // Returns 'Hello, Jane!' and `errors` is empty.
     *
     *     ctx.format(hello, undefined, errors);
     *
     *     // Returns 'Hello, name!' and `errors` is now:
     *
     *     [<ReferenceError: Unknown external: name>]
     *
     * @param   {Object | string}    entity
     * @param   {Object | undefined} args
     * @param   {Array}              errors
     * @returns {?string}
     */


    MessageContext.prototype.format = function format(entity, args, errors) {
      // optimize entities which are simple strings with no traits
      if (typeof entity === 'string') {
        return entity;
      }

      // optimize entities whose value is a simple string, and traits
      if (typeof entity.val === 'string') {
        return entity.val;
      }

      // optimize entities with null values and no default traits
      if (entity.val === undefined && entity.def === undefined) {
        return null;
      }

      var result = resolve(this, args, entity, errors);
      return result instanceof FTLNone ? null : result;
    };

    MessageContext.prototype._memoizeIntlObject = function _memoizeIntlObject(ctor, opts) {
      var cache = this.intls.get(ctor) || {};
      var id = JSON.stringify(opts);

      if (!cache[id]) {
        cache[id] = new ctor(this.lang, opts);
        this.intls.set(ctor, cache);
      }

      return cache[id];
    };

    return MessageContext;
  }();

  Intl.MessageContext = MessageContext;
  Intl.MessageNumberArgument = FTLNumber;
  Intl.MessageDateTimeArgument = FTLDateTime;

  if (!Intl.NumberFormat) {
    Intl.NumberFormat = function () {
      return {
        format: function format(n) {
          return n;
        }
      };
    };
  }

  if (!Intl.PluralRules) {
    Intl.PluralRules = function (code) {
      var fn = getPluralRule(code);
      return {
        select: function select(n) {
          return fn(n);
        }
      };
    };
  }

  if (!Intl.ListFormat) {
    Intl.ListFormat = function () {
      return {
        format: function format(list) {
          return list.join(', ');
        }
      };
    };
  }

  var Node = function Node() {
    _classCallCheck(this, Node);
  };

  var Resource = function (_Node) {
    _inherits(Resource, _Node);

    function Resource() {
      var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var comment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, Resource);

      var _this7 = _possibleConstructorReturn(this, _Node.call(this));

      _this7.type = 'Resource';
      _this7.body = body;
      _this7.comment = comment;
      return _this7;
    }

    return Resource;
  }(Node);

  var Entry = function (_Node2) {
    _inherits(Entry, _Node2);

    function Entry() {
      _classCallCheck(this, Entry);

      var _this8 = _possibleConstructorReturn(this, _Node2.call(this));

      _this8.type = 'Entry';
      return _this8;
    }

    return Entry;
  }(Node);

  var Identifier = function (_Node3) {
    _inherits(Identifier, _Node3);

    function Identifier(name) {
      _classCallCheck(this, Identifier);

      var _this9 = _possibleConstructorReturn(this, _Node3.call(this));

      _this9.type = 'Identifier';
      _this9.name = name;
      return _this9;
    }

    return Identifier;
  }(Node);

  var Section = function (_Node4) {
    _inherits(Section, _Node4);

    function Section(key) {
      var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var comment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      _classCallCheck(this, Section);

      var _this10 = _possibleConstructorReturn(this, _Node4.call(this));

      _this10.type = 'Section';
      _this10.key = key;
      _this10.body = body;
      _this10.comment = comment;
      return _this10;
    }

    return Section;
  }(Node);

  var Pattern$1 = function (_Node5) {
    _inherits(Pattern$1, _Node5);

    function Pattern$1(source, elements) {
      _classCallCheck(this, Pattern$1);

      var _this11 = _possibleConstructorReturn(this, _Node5.call(this));

      _this11.type = 'Pattern';
      _this11.source = source;
      _this11.elements = elements;
      return _this11;
    }

    return Pattern$1;
  }(Node);

  var Member = function (_Node6) {
    _inherits(Member, _Node6);

    function Member(key, value) {
      var def = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _classCallCheck(this, Member);

      var _this12 = _possibleConstructorReturn(this, _Node6.call(this));

      _this12.type = 'Member';
      _this12.key = key;
      _this12.value = value;
      _this12.default = def;
      return _this12;
    }

    return Member;
  }(Node);

  var Entity = function (_Entry) {
    _inherits(Entity, _Entry);

    function Entity(id) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var traits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var comment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      _classCallCheck(this, Entity);

      var _this13 = _possibleConstructorReturn(this, _Entry.call(this));

      _this13.type = 'Entity';
      _this13.id = id;
      _this13.value = value;
      _this13.traits = traits;
      _this13.comment = comment;
      return _this13;
    }

    return Entity;
  }(Entry);

  var Placeable = function (_Node7) {
    _inherits(Placeable, _Node7);

    function Placeable(expressions) {
      _classCallCheck(this, Placeable);

      var _this14 = _possibleConstructorReturn(this, _Node7.call(this));

      _this14.type = 'Placeable';
      _this14.expressions = expressions;
      return _this14;
    }

    return Placeable;
  }(Node);

  var SelectExpression$1 = function (_Node8) {
    _inherits(SelectExpression$1, _Node8);

    function SelectExpression$1(expression) {
      var variants = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, SelectExpression$1);

      var _this15 = _possibleConstructorReturn(this, _Node8.call(this));

      _this15.type = 'SelectExpression';
      _this15.expression = expression;
      _this15.variants = variants;
      return _this15;
    }

    return SelectExpression$1;
  }(Node);

  var MemberExpression$1 = function (_Node9) {
    _inherits(MemberExpression$1, _Node9);

    function MemberExpression$1(obj, keyword) {
      _classCallCheck(this, MemberExpression$1);

      var _this16 = _possibleConstructorReturn(this, _Node9.call(this));

      _this16.type = 'MemberExpression';
      _this16.object = obj;
      _this16.keyword = keyword;
      return _this16;
    }

    return MemberExpression$1;
  }(Node);

  var CallExpression$1 = function (_Node10) {
    _inherits(CallExpression$1, _Node10);

    function CallExpression$1(callee, args) {
      _classCallCheck(this, CallExpression$1);

      var _this17 = _possibleConstructorReturn(this, _Node10.call(this));

      _this17.type = 'CallExpression';
      _this17.callee = callee;
      _this17.args = args;
      return _this17;
    }

    return CallExpression$1;
  }(Node);

  var ExternalArgument$1 = function (_Node11) {
    _inherits(ExternalArgument$1, _Node11);

    function ExternalArgument$1(name) {
      _classCallCheck(this, ExternalArgument$1);

      var _this18 = _possibleConstructorReturn(this, _Node11.call(this));

      _this18.type = 'ExternalArgument';
      _this18.name = name;
      return _this18;
    }

    return ExternalArgument$1;
  }(Node);

  var KeyValueArg = function (_Node12) {
    _inherits(KeyValueArg, _Node12);

    function KeyValueArg(name, value) {
      _classCallCheck(this, KeyValueArg);

      var _this19 = _possibleConstructorReturn(this, _Node12.call(this));

      _this19.type = 'KeyValueArg';
      _this19.name = name;
      _this19.value = value;
      return _this19;
    }

    return KeyValueArg;
  }(Node);

  var EntityReference$1 = function (_Identifier) {
    _inherits(EntityReference$1, _Identifier);

    function EntityReference$1(name) {
      _classCallCheck(this, EntityReference$1);

      var _this20 = _possibleConstructorReturn(this, _Identifier.call(this, name));

      _this20.type = 'EntityReference';
      return _this20;
    }

    return EntityReference$1;
  }(Identifier);

  var FunctionReference$1 = function (_Identifier2) {
    _inherits(FunctionReference$1, _Identifier2);

    function FunctionReference$1(name) {
      _classCallCheck(this, FunctionReference$1);

      var _this21 = _possibleConstructorReturn(this, _Identifier2.call(this, name));

      _this21.type = 'FunctionReference';
      return _this21;
    }

    return FunctionReference$1;
  }(Identifier);

  var Keyword = function (_Identifier3) {
    _inherits(Keyword, _Identifier3);

    function Keyword(name) {
      var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, Keyword);

      var _this22 = _possibleConstructorReturn(this, _Identifier3.call(this, name));

      _this22.type = 'Keyword';
      _this22.namespace = namespace;
      return _this22;
    }

    return Keyword;
  }(Identifier);

  var Number = function (_Node13) {
    _inherits(Number, _Node13);

    function Number(value) {
      _classCallCheck(this, Number);

      var _this23 = _possibleConstructorReturn(this, _Node13.call(this));

      _this23.type = 'Number';
      _this23.value = value;
      return _this23;
    }

    return Number;
  }(Node);

  var TextElement = function (_Node14) {
    _inherits(TextElement, _Node14);

    function TextElement(value) {
      _classCallCheck(this, TextElement);

      var _this24 = _possibleConstructorReturn(this, _Node14.call(this));

      _this24.type = 'TextElement';
      _this24.value = value;
      return _this24;
    }

    return TextElement;
  }(Node);

  var Comment = function (_Node15) {
    _inherits(Comment, _Node15);

    function Comment(content) {
      _classCallCheck(this, Comment);

      var _this25 = _possibleConstructorReturn(this, _Node15.call(this));

      _this25.type = 'Comment';
      _this25.content = content;
      return _this25;
    }

    return Comment;
  }(Node);

  var JunkEntry = function (_Entry2) {
    _inherits(JunkEntry, _Entry2);

    function JunkEntry(content) {
      _classCallCheck(this, JunkEntry);

      var _this26 = _possibleConstructorReturn(this, _Entry2.call(this));

      _this26.type = 'JunkEntry';
      _this26.content = content;
      return _this26;
    }

    return JunkEntry;
  }(Entry);

  var AST = {
    Node: Node,
    Pattern: Pattern$1,
    Member: Member,
    Identifier: Identifier,
    Entity: Entity,
    Section: Section,
    Resource: Resource,
    Placeable: Placeable,
    SelectExpression: SelectExpression$1,
    MemberExpression: MemberExpression$1,
    CallExpression: CallExpression$1,
    ExternalArgument: ExternalArgument$1,
    KeyValueArg: KeyValueArg,
    Number: Number,
    EntityReference: EntityReference$1,
    FunctionReference: FunctionReference$1,
    Keyword: Keyword,
    TextElement: TextElement,
    Comment: Comment,
    JunkEntry: JunkEntry
  };

  /*  eslint no-magic-numbers: [0]  */

  var MAX_PLACEABLES$1 = 100;

  function isIdentifierStart(cc) {
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc === 95; // _
  }

  /**
   * The `Parser` class is responsible for parsing FTL resources.
   *
   * It's only public method is `getResource(source)` which takes an FTL
   * string and returns a two element Array with FTL AST
   * generated from the source as the first element and an array of L10nError
   * objects as the second.
   *
   * This parser is aiming for generating full AST which is useful for FTL tools.
   *
   * There is an equivalent of this parser in ftl/entries/parser which is meant
   * for runtime performance and generates an optimized entries object.
   */

  var Parser = function () {
    function Parser() {
      _classCallCheck(this, Parser);
    }

    /**
     * @param {string} string
     * @returns {[AST.Resource, []]}
     */
    Parser.prototype.getResource = function getResource(string) {
      this._source = string;
      this._index = 0;
      this._length = string.length;

      // This variable is used for error recovery and reporting.
      this._lastGoodEntryEnd = 0;

      var resource = new AST.Resource();
      var errors = [];
      var comment = null;

      // Indicates which section entries should be added to.
      // At the moment it may be either Resource.body, or Section.body
      var section = resource.body;

      // If the file starts with a comment not followed immediatelly by
      // an entry, the comment is going to be assigned to the Resource
      if (this._source[this._index] === '#') {
        comment = this.getComment();

        var cc = this._source.charCodeAt(this._index);
        if (!isIdentifierStart(cc)) {
          resource.comment = comment;
          comment = null;
        }
      }

      this.getWS();

      while (this._index < this._length) {
        try {
          var entry = this.getEntry(comment);

          // If retrieved entry is a Section, switch the section pointer to it.
          if (entry.type === 'Section') {
            resource.body.push(entry);
            section = entry.body;
          } else {
            section.push(entry);
          }
          this._lastGoodEntryEnd = this._index;

          // If there was a comment at the beginning of the file, and it was
          // immediatelly followed by an Entity, we passed the comment to getEntry
          // and now we want to mark it as null to prevent it from being
          // fed to the next entry.
          if (comment !== null) {
            comment = null;
          }
        } catch (e) {
          if (e instanceof L10nError) {
            errors.push(e);
            section.push(this.getJunkEntry());
          } else {
            throw e;
          }
        }
        this.getWS();
      }

      return [resource, errors];
    };

    Parser.prototype.getEntry = function getEntry() {
      var comment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // The pointer here should either be at the beginning of the file
      // or right after new line.
      if (this._index !== 0 && this._source[this._index - 1] !== '\n') {
        throw this.error('Expected new line and a new entry');
      }

      if (comment === null && this._source[this._index] === '#') {
        comment = this.getComment();
      }

      if (this._source[this._index] === '[') {
        return this.getSection(comment);
      }

      if (this._source[this._index] !== '\n') {
        return this.getEntity(comment);
      }
      return comment;
    };

    Parser.prototype.getSection = function getSection() {
      var comment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this._index += 1;
      if (this._source[this._index] !== '[') {
        throw this.error('Expected "[[" to open a section');
      }

      this._index += 1;

      this.getLineWS();

      var key = this.getKeyword();

      this.getLineWS();

      if (this._source[this._index] !== ']' || this._source[this._index + 1] !== ']') {
        throw this.error('Expected "]]" to close a section');
      }

      this._index += 2;

      return new AST.Section(key, [], comment);
    };

    Parser.prototype.getEntity = function getEntity() {
      var comment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var id = this.getIdentifier();

      var members = [];
      var value = null;

      this.getLineWS();

      var ch = this._source[this._index];

      if (ch !== '=') {
        throw this.error('Expected "=" after Entity ID');
      }

      this._index++;

      this.getLineWS();

      value = this.getPattern();

      ch = this._source[this._index];

      // In the scenario when the pattern is quote-delimited
      // the pattern ends with the closing quote.
      if (ch === '\n') {
        this._index++;
        this.getLineWS();
        ch = this._source[this._index];
      }

      if (ch === '[' && this._source[this._index + 1] !== '[' || ch === '*') {
        members = this.getMembers();
      } else if (value === null) {
        throw this.error('Expected a value (like: " = value") or a trait (like: "[key] value")');
      }

      return new AST.Entity(id, value, members, comment);
    };

    Parser.prototype.getWS = function getWS() {
      var cc = this._source.charCodeAt(this._index);
      // space, \n, \t, \r
      while (cc === 32 || cc === 10 || cc === 9 || cc === 13) {
        cc = this._source.charCodeAt(++this._index);
      }
    };

    Parser.prototype.getLineWS = function getLineWS() {
      var cc = this._source.charCodeAt(this._index);
      // space, \t
      while (cc === 32 || cc === 9) {
        cc = this._source.charCodeAt(++this._index);
      }
    };

    Parser.prototype.getIdentifier = function getIdentifier() {
      var start = this._index;
      var cc = this._source.charCodeAt(this._index);

      if (isIdentifierStart(cc)) {
        cc = this._source.charCodeAt(++this._index);
      } else {
        throw this.error('Expected an identifier (starting with [a-zA-Z_])');
      }

      while (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc >= 48 && cc <= 57 || // 0-9
      cc === 95 || cc === 45) {
        // _-
        cc = this._source.charCodeAt(++this._index);
      }

      var name = this._source.slice(start, this._index);

      return new AST.Identifier(name);
    };

    Parser.prototype.getKeyword = function getKeyword() {
      var name = '';
      var namespace = this.getIdentifier().name;

      // If the first character after identifier string is '/', it means
      // that what we collected so far is actually a namespace.
      //
      // But if it is not '/', that means that what we collected so far
      // is just the beginning of the keyword and we should continue collecting
      // it.
      // In that scenario, we're going to move charcters collected so far
      // from namespace variable to name variable and set namespace to null.
      //
      // For example, if the keyword is "Foo bar", at this point we only
      // collected "Foo", the index character is not "/", so we're going
      // to move on and see if the next character is allowed in the name.
      //
      // Because it's a space, it is and we'll continue collecting the name.
      //
      // In case the keyword is "Foo/bar", we're going to keep what we collected
      // so far as `namespace`, bump the index and start collecting the name.
      if (this._source[this._index] === '/') {
        this._index++;
      } else if (namespace) {
        name = namespace;
        namespace = null;
      }

      var start = this._index;
      var cc = this._source.charCodeAt(this._index);

      if (isIdentifierStart(cc)) {
        cc = this._source.charCodeAt(++this._index);
      } else if (name.length === 0) {
        throw this.error('Expected an identifier (starting with [a-zA-Z_])');
      }

      while (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc >= 48 && cc <= 57 || // 0-9
      cc === 95 || cc === 45 || cc === 32) {
        //  _-
        cc = this._source.charCodeAt(++this._index);
      }

      // If we encountered the end of name, we want to test is the last
      // collected character is a space.
      // If it is, we will backtrack to the last non-space character because
      // the keyword cannot end with a space character.
      while (this._source.charCodeAt(this._index - 1) === 32) {
        this._index--;
      }

      name += this._source.slice(start, this._index);

      return new AST.Keyword(name, namespace);
    };

    /* eslint-disable complexity */


    Parser.prototype.getPattern = function getPattern() {
      var buffer = '';
      var source = '';
      var placeables = 0;
      var content = [];
      // We actually use all three possible states of this variable:
      // true and false indicate if we're within a quote-delimited string
      // null indicates that the string is not quote-delimited
      var quoteDelimited = null;
      var firstLine = true;

      var ch = this._source[this._index];

      // If the string starts with \", \{ or \\ skip the first `\` and add the
      // following character to the buffer without interpreting it.
      if (ch === '\\' && (this._source[this._index + 1] === '"' || this._source[this._index + 1] === '{' || this._source[this._index + 1] === '\\')) {
        buffer += this._source[this._index + 1];
        this._index += 2;
        ch = this._source[this._index];
      } else if (ch === '"') {
        // If the first character of the string is `"`, mark the string
        // as quote delimited.
        quoteDelimited = true;
        this._index++;
        ch = this._source[this._index];
      }

      while (this._index < this._length) {
        // This block handles multi-line strings combining strings seaprated
        // by new line and `|` character at the beginning of the next one.
        if (ch === '\n') {
          if (quoteDelimited) {
            throw this.error('Unclosed string');
          }
          this._index++;
          this.getLineWS();
          if (this._source[this._index] !== '|') {
            break;
          }
          if (firstLine && buffer.length) {
            throw this.error('Multiline string should have the ID line empty');
          }
          firstLine = false;
          this._index++;
          if (this._source[this._index] === ' ') {
            this._index++;
          }
          if (buffer.length) {
            buffer += '\n';
          }
          ch = this._source[this._index];
          continue;
        } else if (ch === '\\') {
          var ch2 = this._source[this._index + 1];
          // We only handle `{` as a character that can be escaped in a string
          // and `"` if the string is quote delimited.
          if (quoteDelimited && ch2 === '"' || ch2 === '{') {
            ch = ch2;
            this._index++;
          }
        } else if (quoteDelimited && ch === '"') {
          this._index++;
          quoteDelimited = false;
          break;
        } else if (ch === '{') {
          // Push the buffer to content array right before placeable
          if (buffer.length) {
            content.push(new AST.TextElement(buffer));
          }
          if (placeables > MAX_PLACEABLES$1 - 1) {
            throw this.error('Too many placeables, maximum allowed is ' + MAX_PLACEABLES$1);
          }
          source += buffer;
          buffer = '';
          var start = this._index;
          content.push(this.getPlaceable());
          source += this._source.substring(start, this._index);
          ch = this._source[this._index];
          placeables++;
          continue;
        }

        if (ch) {
          buffer += ch;
        }
        this._index++;
        ch = this._source[this._index];
      }

      if (quoteDelimited) {
        throw this.error('Unclosed string');
      }

      if (buffer.length) {
        source += buffer;
        content.push(new AST.TextElement(buffer));
      }

      if (content.length === 0) {
        if (quoteDelimited !== null) {
          content.push(new AST.TextElement(source));
        } else {
          return null;
        }
      }

      var pattern = new AST.Pattern(source, content);
      pattern._quoteDelim = quoteDelimited !== null;
      return pattern;
    };
    /* eslint-enable complexity */

    Parser.prototype.getPlaceable = function getPlaceable() {
      this._index++;

      var expressions = [];

      this.getLineWS();

      while (this._index < this._length) {
        var start = this._index;
        try {
          expressions.push(this.getPlaceableExpression());
        } catch (e) {
          throw this.error(e.description, start);
        }
        this.getWS();
        if (this._source[this._index] === '}') {
          this._index++;
          break;
        } else if (this._source[this._index] === ',') {
          this._index++;
          this.getWS();
        } else {
          throw this.error('Expected "}" or ","');
        }
      }

      return new AST.Placeable(expressions);
    };

    Parser.prototype.getPlaceableExpression = function getPlaceableExpression() {
      var selector = this.getCallExpression();
      var members = null;

      this.getWS();

      // If the expression is followed by `->` we're going to collect
      // its members and return it as a select expression.
      if (this._source[this._index] !== '}' && this._source[this._index] !== ',') {
        if (this._source[this._index] !== '-' || this._source[this._index + 1] !== '>') {
          throw this.error('Expected "}", "," or "->"');
        }
        this._index += 2; // ->

        this.getLineWS();

        if (this._source[this._index] !== '\n') {
          throw this.error('Members should be listed in a new line');
        }

        this.getWS();

        members = this.getMembers();

        if (members.length === 0) {
          throw this.error('Expected members for the select expression');
        }
      }

      if (members === null) {
        return selector;
      }
      return new AST.SelectExpression(selector, members);
    };

    Parser.prototype.getCallExpression = function getCallExpression() {
      var exp = this.getMemberExpression();

      if (this._source[this._index] !== '(') {
        return exp;
      }

      this._index++;

      var args = this.getCallArgs();

      this._index++;

      if (exp instanceof AST.EntityReference) {
        exp = new AST.FunctionReference(exp.name);
      }

      return new AST.CallExpression(exp, args);
    };

    Parser.prototype.getCallArgs = function getCallArgs() {
      var args = [];

      if (this._source[this._index] === ')') {
        return args;
      }

      while (this._index < this._length) {
        this.getLineWS();

        var exp = this.getCallExpression();

        // EntityReference in this place may be an entity reference, like:
        // `call(foo)`, or, if it's followed by `:` it will be a key-value pair.
        if (!(exp instanceof AST.EntityReference)) {
          args.push(exp);
        } else {
          this.getLineWS();

          if (this._source[this._index] === ':') {
            this._index++;
            this.getLineWS();

            var val = this.getCallExpression();

            // If the expression returned as a value of the argument
            // is not a quote delimited string, number or
            // external argument, throw an error.
            //
            // We don't have to check here if the pattern is quote delimited
            // because that's the only type of string allowed in expressions.
            if (val instanceof AST.Pattern || val instanceof AST.Number || val instanceof AST.ExternalArgument) {
              args.push(new AST.KeyValueArg(exp.name, val));
            } else {
              // If we encountered an error, get back to the last kvp separator
              // and throw an error from there.
              this._index = this._source.lastIndexOf(':', this._index) + 1;
              throw this.error('Expected string in quotes, number or external argument');
            }
          } else {
            args.push(exp);
          }
        }

        this.getLineWS();

        if (this._source[this._index] === ')') {
          break;
        } else if (this._source[this._index] === ',') {
          this._index++;
        } else {
          throw this.error('Expected "," or ")"');
        }
      }

      return args;
    };

    Parser.prototype.getNumber = function getNumber() {
      var num = '';
      var cc = this._source.charCodeAt(this._index);

      // The number literal may start with negative sign `-`.
      if (cc === 45) {
        num += '-';
        cc = this._source.charCodeAt(++this._index);
      }

      // next, we expect at least one digit
      if (cc < 48 || cc > 57) {
        throw this.error('Unknown literal "' + num + '"');
      }

      // followed by potentially more digits
      while (cc >= 48 && cc <= 57) {
        num += this._source[this._index++];
        cc = this._source.charCodeAt(this._index);
      }

      // followed by an optional decimal separator `.`
      if (cc === 46) {
        num += this._source[this._index++];
        cc = this._source.charCodeAt(this._index);

        // followed by at least one digit
        if (cc < 48 || cc > 57) {
          throw this.error('Unknown literal "' + num + '"');
        }

        // and optionally more digits
        while (cc >= 48 && cc <= 57) {
          num += this._source[this._index++];
          cc = this._source.charCodeAt(this._index);
        }
      }

      return new AST.Number(num);
    };

    Parser.prototype.getMemberExpression = function getMemberExpression() {
      var exp = this.getLiteral();

      // the obj element of the member expression
      // must be either an entity reference or another member expression.
      while ((exp instanceof AST.EntityReference || exp instanceof AST.MemberExpression) && this._source[this._index] === '[') {
        var keyword = this.getMemberKey();
        exp = new AST.MemberExpression(exp, keyword);
      }

      return exp;
    };

    Parser.prototype.getMembers = function getMembers() {
      var members = [];

      while (this._index < this._length) {
        if ((this._source[this._index] !== '[' || this._source[this._index + 1] === '[') && this._source[this._index] !== '*') {
          break;
        }
        var def = false;
        if (this._source[this._index] === '*') {
          this._index++;
          def = true;
        }

        if (this._source[this._index] !== '[') {
          throw this.error('Expected "["');
        }

        var key = this.getMemberKey();

        this.getLineWS();

        var value = this.getPattern();

        var member = new AST.Member(key, value, def);

        members.push(member);

        this.getWS();
      }

      return members;
    };

    // MemberKey may be a Keyword or Number


    Parser.prototype.getMemberKey = function getMemberKey() {
      this._index++;

      var cc = this._source.charCodeAt(this._index);
      var literal = void 0;

      if (cc >= 48 && cc <= 57 || cc === 45) {
        literal = this.getNumber();
      } else {
        literal = this.getKeyword();
      }

      if (this._source[this._index] !== ']') {
        throw this.error('Expected "]"');
      }

      this._index++;
      return literal;
    };

    Parser.prototype.getLiteral = function getLiteral() {
      var cc = this._source.charCodeAt(this._index);
      if (cc >= 48 && cc <= 57 || cc === 45) {
        // 0-9, -
        return this.getNumber();
      } else if (cc === 34) {
        // "
        return this.getPattern();
      } else if (cc === 36) {
        // $
        this._index++;
        var _name = this.getIdentifier().name;
        return new AST.ExternalArgument(_name);
      }

      var name = this.getIdentifier().name;
      return new AST.EntityReference(name);
    };

    Parser.prototype.getComment = function getComment() {
      this._index++;

      // We ignore the first white space of each line
      if (this._source[this._index] === ' ') {
        this._index++;
      }

      var eol = this._source.indexOf('\n', this._index);

      var content = this._source.substring(this._index, eol);

      while (eol !== -1 && this._source[eol + 1] === '#') {
        this._index = eol + 2;

        if (this._source[this._index] === ' ') {
          this._index++;
        }

        eol = this._source.indexOf('\n', this._index);

        if (eol === -1) {
          break;
        }

        content += '\n' + this._source.substring(this._index, eol);
      }

      if (eol === -1) {
        this._index = this._length;
      } else {
        this._index = eol + 1;
      }

      return new AST.Comment(content);
    };

    Parser.prototype.error = function error(message) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var pos = this._index;

      if (start === null) {
        start = pos;
      }
      start = this._findEntityStart(start);

      var context = this._source.slice(start, pos + 10);

      var msg = '\n\n  ' + message + '\nat pos ' + pos + ':\n------\n\u2026' + context + '\n------';
      var err = new L10nError(msg);

      var row = this._source.slice(0, pos).split('\n').length;
      var col = pos - this._source.lastIndexOf('\n', pos - 1);
      err._pos = { start: pos, end: undefined, col: col, row: row };
      err.offset = pos - start;
      err.description = message;
      err.context = context;
      return err;
    };

    Parser.prototype.getJunkEntry = function getJunkEntry() {
      var pos = this._index;

      var nextEntity = this._findNextEntryStart(pos);

      if (nextEntity === -1) {
        nextEntity = this._length;
      }

      this._index = nextEntity;

      var entityStart = this._findEntityStart(pos);

      if (entityStart < this._lastGoodEntryEnd) {
        entityStart = this._lastGoodEntryEnd;
      }

      var junk = new AST.JunkEntry(this._source.slice(entityStart, nextEntity));
      return junk;
    };

    Parser.prototype._findEntityStart = function _findEntityStart(pos) {
      var start = pos;

      while (true) {
        start = this._source.lastIndexOf('\n', start - 2);
        if (start === -1 || start === 0) {
          start = 0;
          break;
        }
        var cc = this._source.charCodeAt(start + 1);

        if (isIdentifierStart(cc)) {
          start++;
          break;
        }
      }

      return start;
    };

    Parser.prototype._findNextEntryStart = function _findNextEntryStart(pos) {
      var start = pos;

      while (true) {
        if (start === 0 || this._source[start - 1] === '\n') {
          var cc = this._source.charCodeAt(start);

          if (isIdentifierStart(cc) || cc === 35 || cc === 91) {
            break;
          }
        }

        start = this._source.indexOf('\n', start);

        if (start === -1) {
          break;
        }
        start++;
      }

      return start;
    };

    return Parser;
  }();

  var FTLASTParser = {
    parseResource: function parseResource(string) {
      var parser = new Parser();
      return parser.getResource(string);
    }
  };

  function transformEntity(entity) {
    if (entity.traits.length === 0) {
      var val = transformPattern(entity.value);
      return Array.isArray(val) ? { val: val } : val;
    }

    var _transformMembers = transformMembers(entity.traits),
        traits = _transformMembers[0],
        def = _transformMembers[1];

    var ret = {
      traits: traits,
      def: def
    };

    return entity.value !== null ? Object.assign(ret, { val: transformPattern(entity.value) }) : ret;
  }

  function transformExpression(exp) {
    switch (exp.type) {
      case 'EntityReference':
        return {
          type: 'ref',
          name: exp.name
        };
      case 'FunctionReference':
        return {
          type: 'fun',
          name: exp.name
        };
      case 'ExternalArgument':
        return {
          type: 'ext',
          name: exp.name
        };
      case 'Pattern':
        return transformPattern(exp);
      case 'Number':
        return {
          type: 'num',
          val: exp.value
        };
      case 'Keyword':
        var kw = {
          type: 'kw',
          name: exp.name
        };

        return exp.namespace ? Object.assign(kw, { ns: exp.namespace }) : kw;
      case 'KeyValueArg':
        return {
          type: 'kv',
          name: exp.name,
          val: transformExpression(exp.value)
        };
      case 'SelectExpression':
        var _transformMembers2 = transformMembers(exp.variants),
            vars = _transformMembers2[0],
            def = _transformMembers2[1];

        return {
          type: 'sel',
          exp: transformExpression(exp.expression),
          vars: vars,
          def: def
        };
      case 'MemberExpression':
        return {
          type: 'mem',
          obj: transformExpression(exp.object),
          key: transformExpression(exp.keyword)
        };
      case 'CallExpression':
        return {
          type: 'call',
          name: transformExpression(exp.callee),
          args: exp.args.map(transformExpression)
        };
      default:
        return exp;
    }
  }

  function transformPattern(pattern) {
    if (pattern === null) {
      return null;
    }

    if (pattern.elements.length === 1 && pattern.elements[0].type === 'TextElement') {
      return pattern.source;
    }

    return pattern.elements.map(function (chunk) {
      if (chunk.type === 'TextElement') {
        return chunk.value;
      }
      if (chunk.type === 'Placeable') {
        return chunk.expressions.map(transformExpression);
      }
      return chunk;
    });
  }

  function transformMembers(members) {
    var def = members.findIndex(function (member) {
      return member.default;
    });
    if (def === -1) {
      def = undefined;
    }
    var traits = members.map(transformMember);
    return [traits, def];
  }

  function transformMember(member) {
    var ret = {
      key: transformExpression(member.key),
      val: transformPattern(member.value)
    };

    return ret;
  }

  function getEntitiesFromBody(body) {
    var entities = {};
    body.forEach(function (entry) {
      if (entry.type === 'Entity') {
        entities[entry.id.name] = transformEntity(entry);
      } else if (entry.type === 'Section') {
        Object.assign(entities, getEntitiesFromBody(entry.body));
      }
    });
    return entities;
  }

  function createEntriesFromAST(_ref17) {
    var resource = _ref17[0],
        errors = _ref17[1];

    var entities = getEntitiesFromBody(resource.body);
    return [entities, errors];
  }

  /**
   * @private
   *
   * This function is an inner function for `Localization.formatWithFallback`.
   *
   * It takes a `MessageContext`, list of l10n-ids and a method to be used for
   * key resolution (either `valueFromContext` or `entityFromContext`) and
   * optionally a value returned from `keysFromContext` executed against
   * another `MessageContext`.
   *
   * The idea here is that if the previous `MessageContext` did not resolve
   * all keys, we're calling this function with the next context to resolve
   * the remaining ones.
   *
   * In the function, we loop oer `keys` and check if we have the `prev`
   * passed and if it has an error entry for the position we're in.
   *
   * If it doesn't, it means that we have a good translation for this key and
   * we return it. If it does, we'll try to resolve the key using the passed
   * `MessageContext`.
   *
   * In the end, we return an Object with resolved translations, errors and
   * a boolean indicating if there were any errors found.
   *
   * The translations are either strings, if the method is `valueFromContext`
   * or objects with value and attributes if the method is `entityFromContext`.
   *
   * See `Localization.formatWithFallback` for more info on how this is used.
   *
   * @param {MessageContext} ctx
   * @param {Array<string>}  keys
   * @param {Function}       method
   * @param {{
   *   errors: Array<Error>,
   *   hasErrors: boolean,
   *   translations: Array<string>|Array<{value: string, attrs: Object}>}} prev
   *
   * @returns {{
   *   errors: Array<Error>,
   *   hasErrors: boolean,
   *   translations: Array<string>|Array<{value: string, attrs: Object}>}}
   */
  function keysFromContext(method, sanitizeArgs, ctx, keys, prev) {
    var entityErrors = [];
    var result = {
      errors: new Array(keys.length),
      withoutFatal: new Array(keys.length),
      hasFatalErrors: false
    };

    result.translations = keys.map(function (key, i) {
      // Use a previously formatted good value if it had no errors.
      if (prev && !prev.errors[i]) {
        return prev.translations[i];
      }

      // Clear last entity's errors.
      entityErrors.length = 0;
      var args = sanitizeArgs(key[1]);
      var translation = method(ctx, entityErrors, key[0], args);

      // No errors still? Use this translation as fallback to the previous one
      // which had errors.
      if (entityErrors.length === 0) {
        return translation;
      }

      // The rest of this function handles the scenario in which the translation
      // was formatted with errors.  Copy the errors to the result object so that
      // the Localization can handle them (e.g. console.warn about them).
      result.errors[i] = entityErrors.slice();

      // Formatting errors are not fatal and the translations are usually still
      // usable and can be good fallback values.  Fatal errors should signal to
      // the Localization that another fallback should be loaded.
      if (!entityErrors.some(isL10nError)) {
        result.withoutFatal[i] = true;
      } else if (!result.hasFatalErrors) {
        result.hasFatalErrors = true;
      }

      // Use the previous translation for this `key` even if it had formatting
      // errors.  This is usually closer the user's preferred language anyways.
      if (prev && prev.withoutFatal[i]) {
        // Mark this previous translation as a good potential fallback value in
        // case of further fallbacks.
        result.withoutFatal[i] = true;
        return prev.translations[i];
      }

      // If no good or almost good previous translation is available, return the
      // current translation.  In case of minor errors it's a partially
      // formatted translation.  In the worst-case scenario it an identifier of
      // the requested entity.
      return translation;
    });

    return result;
  }

  /**
   * @private
   *
   * This function is passed as a method to `keysFromContext` and resolve
   * a value of a single L10n Entity using provided `MessageContext`.
   *
   * If the function fails to retrieve the entity, it will return an ID of it.
   * If formatting fails, it will return a partially resolved entity.
   *
   * In both cases, an error is being added to the errors array.
   *
   * @param   {MessageContext} ctx
   * @param   {Array<Error>}   errors
   * @param   {string}         id
   * @param   {Object}         args
   * @returns {string}
   */
  function valueFromContext(ctx, errors, id, args) {
    var entity = ctx.messages.get(id);

    if (entity === undefined) {
      errors.push(new L10nError('Unknown entity: ' + id));
      return id;
    }

    return ctx.format(entity, args, errors);
  }

  /**
   * @private
   *
   * This function is passed as a method to `keysFromContext` and resolve
   * a single L10n Entity using provided `MessageContext`.
   *
   * The function will return an object with a value and attributes of the
   * entity.
   *
   * If the function fails to retrieve the entity, the value is set to the ID of
   * an entity, and attrs to `null`. If formatting fails, it will return
   * a partially resolved value and attributes.
   *
   * In both cases, an error is being added to the errors array.
   *
   * @param   {MessageContext} ctx
   * @param   {Array<Error>}   errors
   * @param   {String}         id
   * @param   {Object}         args
   * @returns {Object}
   */
  function entityFromContext(ctx, errors, id, args) {
    var entity = ctx.messages.get(id);

    if (entity === undefined) {
      errors.push(new L10nError('Unknown entity: ' + id));
      return { value: id, attrs: null };
    }

    var formatted = {
      value: ctx.format(entity, args, errors),
      attrs: null
    };

    if (entity.traits) {
      formatted.attrs = [];
      for (var i = 0, trait; trait = entity.traits[i]; i++) {
        if (!trait.key.hasOwnProperty('ns')) {
          continue;
        }
        var attr = ctx.format(trait, args, errors);
        if (attr !== null) {
          formatted.attrs.push([trait.key.ns, trait.key.name, attr]);
        }
      }
    }

    return formatted;
  }

  /**
   * @private
   *
   * Test if an error is an instance of L10nError.
   *
   * @param   {Error}   error
   * @returns {boolean}
   */
  function isL10nError(error) {
    return error instanceof L10nError;
  }

  var HTTP_STATUS_CODE_OK = 200;

  function load(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();

      if (xhr.overrideMimeType) {
        xhr.overrideMimeType('text/plain');
      }

      xhr.open('GET', url, true);

      xhr.addEventListener('load', function (e) {
        if (e.target.status === HTTP_STATUS_CODE_OK || e.target.status === 0) {
          resolve(e.target.responseText);
        } else {
          reject(new Error(url + ' not found'));
        }
      });

      xhr.addEventListener('error', function () {
        return reject(new Error(url + ' failed to load'));
      });
      xhr.addEventListener('timeout', function () {
        return reject(new Error(url + ' timed out'));
      });

      xhr.send(null);
    });
  }

  function fetchResource(res, lang) {
    var url = res.replace('{locale}', lang);
    return load(url).catch(function () {
      return null;
    });
  }

  var index = {
    FTLASTParser: FTLASTParser, FTLEntriesParser: FTLRuntimeParser, createEntriesFromAST: createEntriesFromAST, L10nError: L10nError,
    keysFromContext: keysFromContext, valueFromContext: valueFromContext, entityFromContext: entityFromContext, fetchResource: fetchResource
  };

  return index;
}();