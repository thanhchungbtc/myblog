(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{357:function(n,t){const e={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"frontmatter-markdown"},[e("pre",{staticClass:"language-php"},[e("code",{pre:!0,attrs:{class:"language-php"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("empty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$someVar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// do something")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),e("p",[n._v("こんなのコードを書いたことがありますか。")]),n._v(" "),e("p",[n._v("Objectは"),e("code",{pre:!0},[n._v("null")]),n._v("かどうか、文字列の場合は"),e("code",{pre:!0},[n._v('""')]),n._v("かどうか、数値は"),e("code",{pre:!0},[n._v("0")]),n._v("かどうか、配列は"),e("code",{pre:!0},[n._v("[]")]),n._v("かどうか等とても便利なメソッドですね。")]),n._v(" "),e("p",[n._v("でも、こんな書き方で、不具合が発生して、膨大な改修になったことがあります。")]),n._v(" "),e("h2",[n._v("問題")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://www.php.net/manual/ja/function.empty.php"}},[n._v("php docs")]),n._v("によると、次のような値は空であるとみなされます。")]),n._v(" "),e("ul",[e("li",[n._v('"" (空文字列)')]),n._v(" "),e("li",[n._v("0 (整数 の 0)")]),n._v(" "),e("li",[n._v("0.0 (浮動小数点数の 0)")]),n._v(" "),e("li",[e("strong",[n._v('"0" (文字列 の 0)')])]),n._v(" "),e("li",[n._v("NULL")]),n._v(" "),e("li",[n._v("FALSE")]),n._v(" "),e("li",[n._v("array() (空の配列)")])]),n._v(" "),e("p",[n._v("なんと "),e("strong",[n._v('"0"')]),n._v(" の文字列なのに、空とみなされています！！")]),n._v(" "),e("p",[n._v('例えば必須項目に"0"を入力したにも関わらず、未入力として変な処理になったりとか。。。')]),n._v(" "),e("h2",[n._v("対策")]),n._v(" "),e("ul",[e("li",[n._v("新しい"),e("strong",[n._v("is_blank")]),n._v("関数を作りました。")])]),n._v(" "),e("pre",{staticClass:"language-php"},[e("code",{pre:!0,attrs:{class:"language-php"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("function_exists")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[n._v("'is_blank'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("function")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("is_blank")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("return")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("empty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("&&")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("is_numeric")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),e("ul",[e("li",[n._v("Unit test")])]),n._v(" "),e("pre",{staticClass:"language-php"},[e("code",{pre:!0,attrs:{class:"language-php"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("IsBlankTest")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("extends")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("TestCase")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("function")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("testIsBlank")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[n._v("'文字列'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("assertFalse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("isset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("||")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("is_blank")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[n._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("assertTrue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("isset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("||")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("is_blank")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[n._v("' '")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("assertFalse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("isset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("||")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("is_blank")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("assertFalse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("isset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("||")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("is_blank")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("0.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("assertFalse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("isset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("||")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("is_blank")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[n._v("'0'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("assertFalse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("isset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("||")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("is_blank")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[n._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("assertTrue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("isset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("||")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("is_blank")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[n._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("assertTrue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("isset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("||")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("is_blank")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("assertTrue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("isset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("||")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("is_blank")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("assertTrue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("isset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$undefinedVar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("||")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("empty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$undefinedVar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("&&")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("is_numeric")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$undefinedVar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),e("ul",[e("li",[n._v("使い方")])]),n._v(" "),e("pre",{staticClass:"language-php"},[e("code",{pre:!0,attrs:{class:"language-php"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("isset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$someVar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("||")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("is_blank")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$someVar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// do something")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),e("h2",[n._v("最後に")]),n._v(" "),e("p",[n._v("意外と、PHPでこんな書き方（emptyを使う）が流行っているようなので、\nこんなこともあることから、注意を払っていきましょう。")])])}]};n.exports={attributes:{title:"[PHP]Empty関数の問題",description:"empty関数の落とし穴に不注意となると、微妙なバグになります。",thumbnail:"posts/php-empty.jpg",date:"2019-09-24T21:31:41.000Z",tags:["php"]},html:'<pre class="language-php"><code class="language-php"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$someVar</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token comment">// do something</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>こんなのコードを書いたことがありますか。</p>\n<p>Objectは<code>null</code>かどうか、文字列の場合は<code>&quot;&quot;</code>かどうか、数値は<code>0</code>かどうか、配列は<code>[]</code>かどうか等とても便利なメソッドですね。</p>\n<p>でも、こんな書き方で、不具合が発生して、膨大な改修になったことがあります。</p>\n<h2>問題</h2>\n<p><a href="https://www.php.net/manual/ja/function.empty.php">php docs</a>によると、次のような値は空であるとみなされます。</p>\n<ul>\n<li>&quot;&quot; (空文字列)</li>\n<li>0 (整数 の 0)</li>\n<li>0.0 (浮動小数点数の 0)</li>\n<li><strong>&quot;0&quot; (文字列 の 0)</strong></li>\n<li>NULL</li>\n<li>FALSE</li>\n<li>array() (空の配列)</li>\n</ul>\n<p>なんと <strong>&quot;0&quot;</strong> の文字列なのに、空とみなされています！！</p>\n<p>例えば必須項目に&quot;0&quot;を入力したにも関わらず、未入力として変な処理になったりとか。。。</p>\n<h2>対策</h2>\n<ul>\n<li>新しい<strong>is_blank</strong>関数を作りました。</li>\n</ul>\n<pre class="language-php"><code class="language-php"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">function_exists</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'is_blank\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token function">is_blank</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">is_numeric</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<ul>\n<li>Unit test</li>\n</ul>\n<pre class="language-php"><code class="language-php"><span class="token keyword">class</span> <span class="token class-name">IsBlankTest</span> <span class="token keyword">extends</span> <span class="token class-name">TestCase</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">testIsBlank</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$input</span> <span class="token operator">=</span> <span class="token single-quoted-string string">\'文字列\'</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">assertFalse</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">is_blank</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$input</span> <span class="token operator">=</span> <span class="token single-quoted-string string">\'\'</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">assertTrue</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">is_blank</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$input</span> <span class="token operator">=</span> <span class="token single-quoted-string string">\' \'</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">assertFalse</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">is_blank</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$input</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">assertFalse</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">is_blank</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$input</span> <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">assertFalse</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">is_blank</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$input</span> <span class="token operator">=</span> <span class="token single-quoted-string string">\'0\'</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">assertFalse</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">is_blank</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$input</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">assertTrue</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">is_blank</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$input</span> <span class="token operator">=</span> <span class="token boolean constant">false</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">assertTrue</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">is_blank</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$input</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">assertTrue</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">is_blank</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">assertTrue</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$undefinedVar</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$undefinedVar</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">is_numeric</span><span class="token punctuation">(</span><span class="token variable">$undefinedVar</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<ul>\n<li>使い方</li>\n</ul>\n<pre class="language-php"><code class="language-php"><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$someVar</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">is_blank</span><span class="token punctuation">(</span><span class="token variable">$someVar</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// do something</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2>最後に</h2>\n<p>意外と、PHPでこんな書き方（emptyを使う）が流行っているようなので、\nこんなこともあることから、注意を払っていきましょう。</p>\n',meta:{resourcePath:"/Volumes/Data/github.com/thanhchungbtc/myblog/content/php-empty/index.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(n){return this.templateRender?this.templateRender():n("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);