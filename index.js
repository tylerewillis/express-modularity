const router = require('express').Router()

// Path to directory containing files
function getPath(directory) {
	return require('path').join(__dirname, '/../../' + directory)
}


// URL directory for front-end routing removing the parent 'routes' folder
function getUrlDirectory(directory) {
	let directoryArray = directory.split('/')
	directoryArray.shift()
	return (directoryArray.length) ? '/' + directoryArray.join('/') : ''
}


function getGlobalMW(directory) {

	let path = getPath(directory + '/global')
	let urlDirectory = getUrlDirectory(directory)

	try {
		require("fs").readdirSync(path, {withFileTypes: true}).forEach(function(file) {
		  if (!file.isDirectory() && file.name.charAt(0) !== '.') {
	  		router.use(urlDirectory, require(path + '/' + file.name))
		  }
		})
	} catch(e) {}
}


const ignoreDirectories = ['middleware', 'components', 'global']

function call(directory) {

	let path = getPath(directory)
	let urlDirectory = getUrlDirectory(directory)
	getGlobalMW(directory)

	// Each file in directory
	require("fs").readdirSync(path, {withFileTypes: true}).forEach(function(file) {
	  if (file.isDirectory()) { // If directory and not middleware or components, recurse on directory
	  	if (!ignoreDirectories.includes(file.name) && file.name.charAt(0) !== '_') call(directory + '/' + file.name)
	  } else { // If not directory but file not starting with a period, require and use with router
	  	if (file.name.charAt(0) !== '.') router.use(urlDirectory, require(path + '/' + file.name))
	  }
	})
}

module.exports = { call, router }