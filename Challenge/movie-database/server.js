// // Require express and create an instance of it
// var express = require('express');
// var app = express();




// // on the request to root (localhost:3000/)
// app.get('/', function (req, res) {
//     res.send('<b>ok</b> ');
// });

// // On localhost:3000/welcome
// app.get('/welcome', function (req, res) {
//     res.send('<b>Hello</b> welcome to my http server made with express');
// });

// // Change the 404 message modifing the middleware
// app.use(function(req, res, next) {
//     res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
// });

// // start the server in the port 3000 !
// app.listen(3000, function () {
//     console.log('Example app listening on port 3000.');
// });

// // express simple API
// app.route('/test')
// .get(function(req, res) {
//     res.send({status:200, message:"ok"});
// })

// .post(function(req, res) {
//     res.send('Add an article');
// })
// .put(function(req, res) {
//     res.send('Update the article');
// });

// app.route('/time')
// .get(function(req,res){

//     res.send({status:200, message:<TIME/>})
// })