# express-modularity

A React-like modular routing solution for Express.js applications.

```javascript
const modularity = require('express-modularity')
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

```javascript
const modularity = require('express-modularity')
modularity.call('routes')
app.use(modularity.router)
```

Here we are doing three things:

1. Requiring the module in our application
2. Calling the modularity module on the 'routes' directory
3. Using the updated Express router in our application

## Directory Structure

The directory containing the routes (i.e. 'routes' above) **needs to exist in the root directory** of the application. That means that your application should look something like this:

```
my-application/
	app.js
	...
	routes/
		home.js
		about.js
		contact.js
```

## Middleware

All subdirectories inside of 'routes' (or whatever you choose to call your routes directory) will be treated as nested directories (see below) except for the following:

* middleware
* components

These two directories will be ignored and can be used for your middleware and other components to be included in your route files.

## Nested Directories

Other directories not named 'middleware' or 'components' will be treated as nested and will only be accessible to the front-end user via the directory name.

For example, with a directory structure like this:

```
my-application/
	app.js
	...
	routes/
		home.js
		about.js
		contact.js
		admin/
			login.js
			pages.js
```

the home, about and contact route files will be accessible directly after the top-level domain name:

* example.com
* example.com/about
* example.com/contact

but the login and pages routes will only be accessible via the directory 'admin' after the TLD:

* example.com/admin/login
* example.com/admin/pages

You can add as many of these nested directories as you'd like.

## Gotchas

Here are a few things to keep in mind when using **express-modularity** in your application:

1. Other than nested directories requiring the directory name, the file names **do not** determine the front-end URLs. For example, the file 'about.js' will be accessed by the Express routing determined in the file, not by the name of the file 'about' like 'example.com/about'. Because of this, you can include multiple Express routes inside of files as they are just a way to modularize your code.
2. File names starting with a period (.) will be ignored. Everything else will be considered.

## People

The author and maintainer of **express-modularity** is [Tyler Willis](https://tylerewillis.com).