// ENV REQUIRE
require('dotenv').config();

// EXTERNAL MODULES
const express = require('express');
const methodOverride = require('method-override');
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
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

// MIDDLEWARE
app.use(methodOverride('_method'));
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
app.use("/timeline", routes.timeline);
app.use("/dashboard", routes.dashboard);
app.use("/auth", routes.auth);
app.use("/posts", routes.posts);
app.use("/profiles", routes.profiles);

// LISTENER
app.listen(port, () => { 
    console.log(`Express is listening on port: ${port}`);
});