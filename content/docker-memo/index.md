---
title: "[Docker]メモ"
date: 2018-05-01T07:29:03+09:00
thumbnail: posts/docker.png
description: docker-composeでPHP開発環境を構築
tags: ["docker"]
---


Docker上開発環境を構築してみた

- Stack: php, Laravel, nginx, postgres

## 各環境ファイル作成

**docker-compose.yml**
```yaml
version: '3'
services: 
  nginx: 
    build: ./nginx
    ports: 
      - 8080:80 
    volumes: 
      - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf
      - ./src:/var/www/app
    depends_on: 
      - web
  web:
    build: ./src
    volumes: 
      - ./src:/var/www/app
    depends_on: 
      - db
  db:
    image: 'postgres:9.3'
    ports:
      - "5432:5432"
    env_file:
      - ./data/env_file
    volumes:
      # - ./data/postgres:/var/lib/postgresql/data
      - pgdata:/var/lib/postgresql/data

# volumes:
#   pgdata:
```
**data/env_file**

```dotenv
POSTGRES_USER=postgres
POSTGRES_DB=my_db
POSTGRES_PASSWORD=postgres
```

**nginx/nginx.conf**
```yaml
server {
    listen 80;
    server_name app;

    root  /var/www/app;
    index index.php index.html;

    access_log /var/log/nginx/access.log;
    error_log  /var/log/nginx/error.log;

    location / {
        try_files $uri $uri/ /index.php$is_args$args;
    }

    location ~ \.php$ {
        fastcgi_pass web:9000;
        fastcgi_index index.php;    
        fastcgi_param SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include       fastcgi_params;
    }
}
```

## 起動
```sh
docker-compose up -d
```
ここで**web**, **nginx**, **db**の３サービスが立ち上がって、**localhost:8080**アクセスできる

## ファイル変更して、際ビルドしたい場合

```sh
docker-compose up -d --build
```

## 解説

- Dockerはデータを持たない為、再起動するとデータ損失

- データ損失を防ぐ為、**volumes**を使用する

- **postgres**イメージは**env_file**の情報でデータベースを作成する

- **postgres**のデータを**volumes**に格納すれば、データ維持できる
```yaml
    volumes:
      - ./data/postgres:/var/lib/postgresql/data
```

- Windows環境ではなんだかこのような**volumes**マウントしかたは上手く行きそうにないのでで、ネームvolumesに修正した

> FATAL: data directory "/var/lib/postgresql/data" has wrong ownership

```yaml
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:
```
- **docker-compose up -d**を実行すると、以下が起こる
  - **myapp_default**ネットワークが作られる。
  - **web**, **nginx**, **db**の３サービスが作成され、**myapp_default**にジョイン
  - **myapp_default**ネットワーク環境下で、名前でアクセス可能。\
    例**web**から**db**でデータベースをアクセス、\
    **nginx**で**web**を使って、**web**をアクセス\
