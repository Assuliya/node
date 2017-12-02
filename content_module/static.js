const http = require('http');
const fs = require('fs');

module.exports = {
    check: function(request, response){
        if (request.url !== '/'){
          let place = request.url.slice(0, 0) + request.url.slice(1);
          if (request.url.startsWith("/images")){
            fs.readFile(place, function (errors, contents) {
              response.write(contents);
              response.end();
            });
          }
          else{
            fs.readFile(place, 'utf8', function (errors, contents) {
              if(errors){
                console.log(errors)
                response.writeHead(404);
                response.end('Sorry, wrong turn...')
              }
              else{
                response.write(contents);
                response.end();
              }
            });
          }
        }
        else {
          fs.readFile('views/index.html', function (errors, contents) {
            response.write(contents);
            response.end();
          });
        }
    }
  }
