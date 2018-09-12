# Network-Map

## table of contents

- [start](#start)
- [design](#design)
- [stack](#stack)
- [folder structure](#folder-structure)
- [scripts](#scripts)
  - [npm start](#npm-start)
  - [npm run dev](#npm-run-dev)
  - TODO [npm test](#npm-test)
  - [npm run lint](#npm-run-lint)
  - [npm run sql](#npm-run-sql)
- [notes](#notes)

## start

before you start, please

- [install `node@8` and `npm@5`](https://dogstack.js.org/guides/how-to-install-js.html)
- [install `git-lfs`](https://git-lfs.github.com/)
- [install and set up Postgres for your system](https://dogstack.js.org/guides/how-to-setup-sql-db.html)
- create a database in Postgres named `yipalumni_development` (see [Postgres DEV setup](#postgres-DEV-setup))
- install Redis

```shell
git clone https://github.com/YIP-Alumni-Map/Network-Map.git
cd Network-Map
npm install
npm run sql migrate:latest
npm run sql seed:run
npm run dev
```

## design

### ux

- join
  - land
  - login email
  - home page

  -----------

  Landing (route === /) 
  !userIsAuthenticated
  ? Component = Welcome + Send Login Email
  : !userIsOnboarded
  ? Component = Onboarding
  : Component = Home

  -----------

  Profile

### data models

- users
  - id
  - name
  - email

### architecture

- asset server (netlify)
- web server (heroku)
- mailer worker (heroku)

## stack

- web server
  - [@feathersjs/socketio](https://github.com/feathersjs/socketio)
  - [@feathersjs/authentication](https://github.com/feathersjs/authentication)
  - [@feathersjs/authentication-jwt](https://github.com/feathersjs/authentication-jwt)
  - [node-resque](https://github.com/taskrabbit/node-resque)

- web app
  - [next.js](https://github.com/zeit/next.js/)
  - [ramda](http://ramdajs.com/docs/)
  - [@feathersjs/socketio-client](https://github.com/feathersjs/socketio-client)
  - [@feathersjs/authentication-client](https://github.com/feathersjs/authentication-client)
  - [react](https://facebook.github.io/react)
  - [react-hyperscript](https://github.com/mlmorg/react-hyperscript)
  - [recompose](https://github.com/acdlite/recompose)
  - [fela](https://github.com/rofrischmann/fela)
  - [material-ui](https://material-ui.com/)
- mailer worker
  - [node-resque](https://github.com/taskrabbit/node-resque)
  - [nodemailer](https://github.com/nodemailer/nodemailer)
  - third-party: [mailgun](https://mailgun.com/)
  - dev tool: [maildev](https://github.com/djfarrelly/maildev)

## folder structure

we're following the [dogstack folder structure convention](https://dogstack.js.org/conventions/file-structure.html), adapted for our stack.

## available scripts

### `npm start`

starts production server

```shell
npm start
```

### `npm run dev`

starts development server

```shell
npm run dev
```


### TODO `npm test`

runs [`ava`](https://github.com/avajs/ava) tests

Can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm test -- './todos/**/*.test.js'
```

Default glob is `./**/*.test.js` ignoring `node_modules`

### `npm run lint`

checks for [standard style](http://standardjs.com)

can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm run lint -- './todos/**/*.js'
```

default glob is `./**/*.js` ignoring `node_modules`

### `npm run sql`

runs [`knex`](http://knexjs.org/#Migrations-CLI) command, with any arguments.

```shell
npm run sql migrate:latest
```

```shell
npm run sql seed:run
```

## notes

### After deploy: migrate on heroku!

```shell
heroku login
heroku run npm run sql migrate:latest --app=yip-network
```


### Postgres DEV setup

use a [`~/.pgpass`](https://www.postgresql.org/docs/current/static/libpq-pgpass.html) file to automate your passwords!

```shell
echo "localhost:5432:*:postgres:password" > ~/.pgpass
chmod 600 ~/.pgpass
```

create your database with:

```shell
createdb yipalumni_development -h localhost -U postgres
```

drop your database with:

```shell
dropdb yipalumni_development -h localhost -U postgres
```

connect to your database with:

```shell
psql -h localhost -U postgres -d yipalumni_development
```

### emoji

- https://afeld.github.io/emoji-css/

## license

AGPL-3.0

### attributions

- Emoji artwork is provided by [Twemoji](https://twitter.github.io/twemoji/) and is licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/legalcode)
