// ENV REQUIRE
require('dotenv').config();

// EXTERNAL MODULES
const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');

// INTERNAL MODULES
const routes = require('./routes');

// INSTANCED MODULES
const app = express();

// DATABASE & PASSPORT
require('./config/database'); 
require('./config/passport');

// CONFIGURATION
app.set('view engine', 'ejs');
const PORT = process.env.PORT;
if (PORT == null || PORT == '') {
    PORT = 3000;
};

// MIDDLEWARE
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: 'what is the matrix',
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.get("/", (req, res) => { res.render("index") });
app.get("/dashboard", routes.dashboard);
app.get("/auth/github", routes.auth);
app.get("/auth/github/callback", routes.auth);
app.get("/logout", routes.auth);

// LISTENER
app.listen(PORT, () => { 
    console.log(`Express is listening on port: ${PORT}`);
});