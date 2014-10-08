exports.Log = function (message){
fs = require('fs');
dt = new Date();
seconds = dt.getSeconds();//parseInt(dt.seconds);
minutes = dt.getMinutes();
fileIndexName = parseInt( minutes / 5);
remainder = seconds % 2;
fileName = 'MyLog.txt';
/*if(remainder ==0 ){
	fileName = 'MyLogEven.txt';
}
*/
if(fileIndexName)
{
	switch(fileIndexName)
	{
		case 0:
			fileName = "Log_00-05.txt";
			break;
		case 1:
			fileName = "Log_06-10.txt";
			break;
		case 2:
			fileName = "Log_11-15.txt";
			break;	
		case 3:
			fileName = "Log_16-20.txt";
			break;	
		case 4:
			fileName = "Log_21-25.txt";
			break;	
		case 5:
			fileName = "Log_26-30.txt";
			break;	
		case 6:
			fileName = "Log_31-35.txt";
			break;	
		case 7:
			fileName = "Log_36-40.txt";
			break;
		case 8:
			fileName = "Log_41-45.txt";
			break;	
		case 9:
			fileName = "Log_46-50.txt";
			break;	
		case 10:
			fileName = "Log_51-55.txt";
			break;
		case 11:
			fileName = "Log_56-00.txt";
			break;	
			
	}
}
message = message ? message : 'No message provided';
fs.appendFile(fileName, '\r\n' + dt + ' hi there ' + seconds + ' ' + message, function (err){
if(err)
{
	console.log('Unable to write file');
}

});

};