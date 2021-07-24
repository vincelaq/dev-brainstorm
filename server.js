// ENV REQUIRE


// EXTERNAL MODULES
const express = require('express');
const logger = require('morgan');

// INTERNAL MODULES
const routes = require('./routes');

// INSTANCED MODULES
const app = express();

// DATABASE & PASSPORT 


// CONFIGURATION
app.set('view engine', 'ejs');
const PORT = 3000;

// MIDDLEWARE
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.get("/", (req, res) => { res.render("index")});
app.get("/dashboard", routes.dashboard);

// LISTENER
app.listen(PORT, () => { 
    console.log(`Express is listening on port: ${PORT}`);
});