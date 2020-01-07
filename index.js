const router = require('express').Router()

function call(directory) {

	// Directory of files
	let path = require('path').join(__dirname, '/../../' + directory)

	// URL directory for front-end routing removing the parent 'routes' folder
	let urlDirectory = directory.split('/')
	urlDirectory.shift()
	let urlDir = (urlDirectory.length) ? '/' + urlDirectory.join('/') : ''

	// Each file in directory
	require("fs").readdirSync(path, {withFileTypes: true}).forEach(function(file) {
	  if (file.isDirectory()) { // If directory and not middleware or components, recurse on directory
	  	if (file.name !== 'middleware' && file.name !== 'components') call(directory + '/' + file.name)
	  } else { // If not directory but file not starting with a period, require and use with router
	  	if (file.name.charAt(0) !== '.') router.use(urlDir, require(path + '/' + file.name))
	  }
	})
}

module.exports = { call, router }