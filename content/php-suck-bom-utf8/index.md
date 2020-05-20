---
title: "[PHP]UTF-8 BOMにやられた"
date: 2018-02-13T19:16:40+09:00
description: ""
thumbnail: posts/bom.jpeg
tags: ["php", "bom"]
---
特に大した改修をしていないのに、システムをstagingでリリースした時、いきなり前面的に止まったので、結構ハマった。
小さなことですごく影響が多いなと感じでした。

## 問題

Linuxサーバへデプロイした時、Responseコード200にも関わらず、「**Gzipが不正よ**」と文句言われ、ブラウザ開けないことがあった。

## 原因
かなりレガシシステムなので、`ob_start("ob_gzhandler");`で`gzip`レスポンスを作っている。
**gzip**レスポンスを分析したところ、PHPソースファイルにBOMが入っていて、正しくないGzipファイルを作って送信したような原因だった。

※BOMは**EF BB BF**で確認可能

Windows上のエディターでは「**UTF-8 BOM付で保存**」というエディターの設定があり、この設定でファイル保存かもしれない。

## 対策
全て**UTF-8 BOM付**のソースファイルを抽出し、BOMを消せば、正常に動いた。

### BOM付きファイル抽出
```sh
grep -rl $'\xEF\xBB\xBF' .
```

### BOMを排除する
```sh
sed -i '1 s/^\xef\xbb\xbf//' *.php
```
