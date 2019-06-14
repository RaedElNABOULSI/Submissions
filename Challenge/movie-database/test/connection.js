
const mongoose=require('mongoose')

//connect to mongodb
mongoose.connect('mongodb+srv://Ra2ed:<password>codicodi@cluster0-dad4a.gcp.mongodb.net/test?retryWrites=true&w=majority')

mongoose.connection.once('open',function()
{
    console.log('connection has been made')

}).on('error',function(error)
{
    console.log('connection error',error)
})




/*const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbRaed:<password>@cluster0-yn38y.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    auth: {
      user: '<dbRaed-username>',
      password: '<dbRaed-password>'
    }
  })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));
  */