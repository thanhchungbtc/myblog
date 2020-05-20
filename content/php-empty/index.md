---
title: "[PHP]Empty関数の問題"
description: empty関数の落とし穴に不注意となると、微妙なバグになります。
thumbnail: posts/php-empty.jpg
date: 2019-09-25T06:31:41+09:00
tags: ["php"]
---

```php
if (empty($someVar)) {
   // do something
}
 ```
こんなのコードを書いたことがありますか。

Objectは`null`かどうか、文字列の場合は`""`かどうか、数値は`0`かどうか、配列は`[]`かどうか等とても便利なメソッドですね。

でも、こんな書き方で、不具合が発生して、膨大な改修になったことがあります。
## 問題
[php docs](https://www.php.net/manual/ja/function.empty.php)によると、次のような値は空であるとみなされます。
- "" (空文字列)
- 0 (整数 の 0)
- 0.0 (浮動小数点数の 0)
- **"0" (文字列 の 0)**
- NULL
- FALSE
- array() (空の配列)

なんと **"0"** の文字列なのに、空とみなされています！！

例えば必須項目に"0"を入力したにも関わらず、未入力として変な処理になったりとか。。。

## 対策

- 新しい**is_blank**関数を作りました。
```php
if (!function_exists('is_blank')) {
    function is_blank($value) {
        return empty($value) && !is_numeric($value);
    }
}
```

- Unit test
```php
class IsBlankTest extends TestCase
{
    public function testIsBlank()
    {
        $input = '文字列';
        $this->assertFalse(!isset($input) || is_blank($input));

        $input = '';
        $this->assertTrue(!isset($input) || is_blank($input));

        $input = ' ';
        $this->assertFalse(!isset($input) || is_blank($input));

        $input = 0;
        $this->assertFalse(!isset($input) || is_blank($input));

        $input = 0.0;
        $this->assertFalse(!isset($input) || is_blank($input));

        $input = '0';
        $this->assertFalse(!isset($input) || is_blank($input));

        $input = null;
        $this->assertTrue(!isset($input) || is_blank($input));

        $input = false;
        $this->assertTrue(!isset($input) || is_blank($input));

        $input = [];
        $this->assertTrue(!isset($input) || is_blank($input));

        $this->assertTrue(!isset($undefinedVar) || (empty($undefinedVar) && !is_numeric($undefinedVar)));
    }
}
```

- 使い方
```php
if(!isset($someVar) || is_blank($someVar)) {
  // do something
}
```

## 最後に
意外と、PHPでこんな書き方（emptyを使う）が流行っているようなので、
こんなこともあることから、注意を払っていきましょう。

