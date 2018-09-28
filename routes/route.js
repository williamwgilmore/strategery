module.exports = function(app) {

  app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/view/index.html');
  });
};