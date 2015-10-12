var fs = require('fs'); // file system

function mergeValues (values, content){
	// Cycle over the keys
	for (var key in values) {
		content = content.replace("{{" + key + "}}", values[key]);
	};
		//Replace all {{key}} with the value from the values object

	return content;
}

function view (templateName, values, response){
	//Read from template file
	var fileContents =fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
	// Insert values into the content
	fileContents = mergeValues(values, fileContents);

	//Write out the contents to the response
	response.write(fileContents);
}

module.exports.view = view;