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
 
  


 app.get('/movies/read',function(req,res){
    
    res.send({status:200, data:movies })
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

app.get('/movies/read/id/:tagId?',function(req,res)
{
    

    if(req.params.tagId==1)
    {
        res.send({status:200, data:movies[0]})
    }
  
    else if(req.params.tagId==2)
    {
        res.send({status:200, data:movies[1]})
    }

    else if(req.params.tagId==3)
    {
        res.send({status:200, data:movies[2]})
    }

    else if(req.params.tagId==4)
    {
        res.send({status:200, data:movies[3]})
    }
    else{
        res.send({status:404,error:true, message:'the movie ' + req.params.tagId + ' does not exist'})
    }

})




//new movie
app.get('/movies/add',function(req,res)
{ 
    const title=req.query.title
    const year=req.query.year
    const rating=req.query.rating

    var newmovie={title: title, year: year, rating: rating}
    

    //missing values
if(!title || !year || year.length!==4 || isNaN(year))
{
    res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
}   

else if(rating =="")
{
    newmovie={title: title, year: year, rating: '4'}
    movies.push(newmovie)
res.send(movies)
}

else{
    movies.push(newmovie)
res.send(movies)
}

})

app.get('/movies/delete/:tagId?',function(req,res)
{
   
    if(req.params.tagId==1)
{movies.shift()
res.send(movies)
}

else if(req.params.tagId==2)
{
delete movies[1]
}
else if(req.params.tagId==3)
{
delete movies[2]
}
else if(req.params.tagId==4)
{moviesdelete.pop()
    res.send(movies)
}
    else{
        res.send({status:404, error:true, message:'the movie <ID> does not exist'})
    }
})


app.get('/movies/update/:tagId',function(req,res){



   if(req.params.tagId && req.query.rating){
    
    if(req.params.tagId<=movies.length && req.params.tagId>0)
    {movies[req.params.tagId-1].title=req.params.tagId
        movies[req.params.tagId-1].rating=req.query.rating
       
        
        res.send({Updatedmovielist:movies})
    }
}
})



//----------------------------------------------------------------------------------------------------------------------


// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Error 404");
});

// start the server in the port 3000 !
app.listen(3000, () => console.log('Gator app listening on port 3000!'));
