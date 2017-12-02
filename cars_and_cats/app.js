var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
  console.log('client request URL: ', request.url);
  if(request.url === '/'){
    fs.readFile('stylesheets/index.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/cats'){
    fs.readFile('stylesheets/cats.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/cars'){
    fs.readFile('stylesheets/cars.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/cars/new'){
    fs.readFile('stylesheets/new.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/views/style.css'){
    fs.readFile('views/style.css', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(contents);
      response.end();
    });
  }

  // IMAGES
  else if(request.url === '/images/cat1.jpeg'){
    fs.readFile('images/cat1.jpeg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpeg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/cat2.jpg'){
    fs.readFile('images/cat2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/cat3.jpg'){
    fs.readFile('images/cat3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/car1.png'){
    fs.readFile('images/car1.png', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/png'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/car2.jpg'){
    fs.readFile('images/car2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/car3.jpg'){
    fs.readFile('images/car3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  //

  else{
    response.writeHead(404);
    response.end('Sorry, wrong turn...')
  }
});

server.listen(7077);
console.log("Running in localhost at port 7077")
