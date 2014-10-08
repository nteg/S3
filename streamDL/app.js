
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , youtubedl = require('youtube-dl');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.post('/download', function (req, res, next) {
    youtubedl.info('http://www.youtube.com/watch?v=iOxF2SSZ8Wg',

    // called when video page is downloaded and info extracted
  function (err, info) {
      if (err)
          throw err;
      console.log('title: ' + info.title);
      console.log('url: ' + info.url);
      console.log('thumbnail: ' + info.thumbnail);
      console.log('description: ' + info.description);
      console.log('filename: ' + info.filename);
  }

    // optional arguments passed to youtube-dl
    // ['--username=user', '--password=hunter2']
  );
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
