'use strict';

let { setupDataLayer } = require("./service/DataLayer");

var fs = require('fs'),
    path = require('path'),
    https = require('https'),
    serveStatic = require('serve-static');

var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  app.use('/',serveStatic('PresentationLayer/html'));
  app.use('/css',serveStatic('PresentationLayer/css'));
  app.use('/images',serveStatic('PresentationLayer/images'));
  app.use('/js',serveStatic('PresentationLayer/js'));
  app.use('/backend',serveStatic('PresentationLayer/backend'));



  // Start the server
  setupDataLayer().then(()=>{
    https.createServer(app).listen(process.env.PORT || serverPort, function () {
      console.log('Your server is listening on port %d (https://localhost:%d)', serverPort, serverPort);
      console.log('Swagger-ui is available on https://localhost:%d/docs', serverPort);
    });
  });

});
