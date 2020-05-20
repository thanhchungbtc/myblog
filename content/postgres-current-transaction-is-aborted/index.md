---
title: "[Postgres] current transaction is aborted, commands ignored until end of transaction block"
date: 2018-01-12T07:15:40+09:00
description: postgresの特殊な扱いに不注意でハマった為、メモした
thumbnail: posts/postgres-elephant.png
featured_image: postgres-current-transaction-is-aborted/featured.png
tags: ["postgres"]
---

`psql`や何かのSQLツールで、SQLを実行した時、このエラーが出ると、その後クエリが実行できなくなることがあったので、調べてみた。

原因は簡単だが、大量クエリを実行したので、気づかず、結構ハマった！

## 原因
`Transaction`内に一度エラーが発生すると、明示的にその`Transaction`を`abort`しなければならないようだ。

`SQL Server`等の他のRDBMSだと、エラーが出てきても、その場で直して、処理を続けるんだね。

[例]
```sql
begin;
selet * from foo;
```
このクエリを実行すると、`「ERROR: syntax error at or near ‘selet’“」`が出るはず。\
これで正しく`select * from foo;`に修正し、再度実行をすると、冒頭のエラーが出て実行できなかった。\
因みに、`sqlserver`はこの問題が発生しないようだ。

## 対策
エラーが出たら、
```
rollback;
```
を実行しなければならない。

## なぜ`Postgres`はそうなったのか？
`Postgres`はユーザで終了した`Transaction`とシステムの都合(例外等）で終了した`Transaction`は区別しているようだ。
[https://github.com/postgres/postgres/blob/master/src/backend/access/transam/README](https://github.com/postgres/postgres/blob/master/src/backend/access/transam/README)を参照すると、
>- 1. システムの都合で`Transaction`が終了した場合：AbortCurrentTransaction アプリケーション状態はTBLOCK_ABORT
>- 2. ユーザで`Transaction`を終了した場合：UserAbortTransactionBlock アプリケーション状態はTBLOCK_ABORT_END

ケース１でも自動に`Transaction`を終了させれば良いでしょうかって思うよね。
実はそれに応じる`onerrorrollback`オプションがあるが、やっぱり長い`Transaction`内にエラーが発生したら、最初から実施しないといけない点は不便が感じるよね〜
`onerrorrollback`についての詳細説明も是非ご参照ください。
[https://www.endpoint.com/blog/2015/02/24/postgres-onerrorrollback-explained](https://www.endpoint.com/blog/2015/02/24/postgres-onerrorrollback-explained)
