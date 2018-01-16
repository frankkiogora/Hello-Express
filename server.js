var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var session = require('express-session');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));
app.use(session({secret: 'codingdojorocks'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 


// app.post('/users', function(red,res){
//     req.session.name = req.body.name;
//     console.log(request.body.name);

//     res.redirect('/');
// });




//============ WRITE METHODS  ==========>>>>>>
app.get('/',function(request,response){
    response.send('<h1>Hello Express</h1>')
})
app.get('/users', function(){
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];

    response.render('users', {users:users_array});
})




app.listen(8000,function(){
    console.log('listening on port 8000')
})