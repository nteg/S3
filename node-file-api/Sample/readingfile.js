fs = require('fs');
fs.readFile('readingfile.js', 'utf8', function(err, data)
{
	if(err)
	{
		console.log("Error");
		console.log(err);
	}
	else
	{
		console.log(data);
	}
}
);
