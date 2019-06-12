// Require express and create an instance of it
var express = require('express');
var app = express();
var TIME = new Date()






// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('<b>ok</b> ');
});

// On localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

// On localhost:3000/test
app.get('/test', function (req,res) {
    res.send({status:200, message:"ok"});
});


// On localhost:3000/time
app.get('/time', function (req,res) {
    res.send({status:200,
         message:TIME.getHours() + ":" + TIME.getSeconds()});
});


// get id from url

app.get('/hello/:tagId?', function(req, res) {

    res.send({status:200, message:"Hello",id: req.params.tagId})
 
  });

//step4 search

  app.get('/search', function(req, res) {
const s=req.query.s
if(!s)
{
   res.send({status:200, message:"ok",data: s})
}
else{
    res.send({status:500,error:true, message:"you have to provide a search"})
}});
    //movies

    const movies = [
        { title: 'Jaws', year: 1975, rating: 8 },
        { title: 'Avatar', year: 2009, rating: 7.8 },
        { title: 'Brazil', year: 1985, rating: 8 },
        { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
    ]
 
  app.get('/movies/create',function(req,res){



  })

 app.get('/movies/read',function(req,res){
    
    res.send({status:200, data:movies })
  })


    
  

  app.get('/movies/update',function(req,res){


    
})

app.get('/movies/delete',function(req,res){


    
})



 
app.get('/movies/read/by-date',function(req,res){


    res.send({status:200, data:movies.sort(function(a, b){return a.year - b.year})})
})

app.get('/movies/read/by-rating',function(req,res){


    res.send({status:200, data:movies.sort(function(a, b){return b.rating - a.rating})})
})

app.get('/movies/read/by-title',function(req,res){


    res.send({status:200, data:movies.sort(function(a, b){
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;})})
})


//----------------------------------------------------------------------------------------------------------------------


// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Error 404)");
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});



