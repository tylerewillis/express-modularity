# express-modularity

A React-like modular routing solution for Express.js applications.

```javascript
const modularity = require('./express-modularity')
modularity.call('routes')
app.use(modularity.router)
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/). It is meant to work with [Express.js](https://expressjs.com/) applications.

Before installing, [download and install Node.js](https://nodejs.org/en/download/). Node.js 0.10 or higher is required.

Installation is done using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```
npm install express-modularity
```

## Quick Start

**express-modularity**, as it exists in version 1.0.0, simply allows you to create multiple route files within a predetermined directory of your application.

Here is a basic example where we've determined that our route directory is 'routes' and is located at the base directory of our application:

```
const modularity = require('./express-modularity')
modularity.call('routes')
app.use(modularity.router)
```

Here we are doing three things:

1. Requiring the module in our application
2. Calling the modularity module on the 'routes' directory
3. Using the updated Express router in our application

## People

The author and maintainer of **express-modularity** is [Tyler Willis](https://tylerewillis.com).