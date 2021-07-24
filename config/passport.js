// GITHUB PASSPORT
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../models/User');

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            callbackURL: process.env.GITHUB_CALLBACK,
        },
        function (accessToken, refreshToken, profile, cb) {
            console.log(profile);
            User.findOne({ githubId: profile.id }, (err, user) => {
                if (err) return cb(err);
                if (user) {
                    return cb(null, user);
                } else {
                    const newUser = new User({
                        name: profile.displayName,
                        username: profile.username,
                        email: profile.email,
                        githubId: profile.id,
                    });
                    newUser.save(function (err) {
                        if (err) return cb(err);
                        return cb(null, newUser);
                    });
                }
            });
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});