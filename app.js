var express = require('express');
	 	 var fetch = require('node-fetch');
	 	 var app = express();
	 	 var port = process.env.PORT || 3000;
	 	 app.set('view engine', 'ejs');
	 	 app.use(express.static(__dirname + '/public'));
	 	 //add your app get here for the home page '/'
         //within the get call your function and render the ejs page
          


	 	 
              
        app.get('/', function(req, res){
            let url = 'https://csuserversidewebdevfinal.herokuapp.com/';
            let pic;
            nodeFetch(url)
            .then(resp => resp.json())
            .then(data => {
            pic = data.pic;
            res.render('index', {pic:pic});
          })

          app.listen(port, function () {
          });   
          //this is all i remember for the get/fetch from the api
       
});


           
