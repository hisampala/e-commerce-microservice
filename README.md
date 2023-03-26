## Installation

```bash
$ npm install
```

## Running the DockerCompose

```bash
$ Docker-compose up -d
```

## Running the Prisma migrate for create database

```bash
$ npm run  migrate:productdb
$ npm run  migrate:orderdb
$ npm run  migrate:usersdb

```

## Running the Prisma Seed for Initail Data

```bash
$ npm run dataseed


```

## Running the build app

```bash
# build app all
$ npm run build:all

```

## Running the app

```bash
# build app all
$ npm run build:all
$ npx pm2 start ecosystem.config.js
```
