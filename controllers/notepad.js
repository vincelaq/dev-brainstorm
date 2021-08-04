const User = require('../models/User');
const Notepad = require('../models/Notepad');

module.exports = {
    index,
    create,
    delete: deleteEntry,
    update,
    sortOld,
}

// SORTING BY OLDEST PRIVATE ENTRIES
function sortOld (req, res) {
    User.findOne({'username': req.user.username})
    .populate({path:'notepad',options:{ sort:{createdAt : 1}}})
    .exec((err, userNote) => {
        let note = userNote.notepad;
        if (err) res.send(err);
        res.render('notepad/index', {
            user: req.user,
            note, 
        });
    })  
};

// UPDATING A SPECIFIC POST
function update (req, res) {
    Notepad.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        content: req.body.content,
    }, function (err, user) {
        if(err) res.send(err);
        res.redirect('back');
    })
};

// DELETING AN ENTRY
function deleteEntry (req, res) {
    Notepad.findByIdAndDelete(req.params.id)
    .then((err) => {
        if (err) console.log(err);
        res.redirect(`back`);
    })
};

// CREATING AN ENTRY
function create (req, res) {
    req.body.user = req.user.id;
    req.body.username = req.user.username;
    const date = new Date();
    req.body.date = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`;
    const note = new Notepad(req.body);
    note.save((err) => {
        if (err) return res.send(err);
        console.log(note);
    })
    User.findOneAndUpdate({"_id": req.user.id}, { 
        $push: { notepad: note.id  }
    }, function (err) {
        if (err) res.send(err);
        res.redirect('/notepad');
    })
};

// RENDERING USER'S PRIVATE ENTRIES
function index (req, res) {
    User.findOne({'username': req.user.username})
    .populate({path:'notepad',options:{ sort:{createdAt : -1}}})
    .exec((err, userNote) => {
        let note = userNote.notepad;
        if (err) res.send(err);
        res.render('notepad/index', {
            user: req.user,
            note, 
        });
    })  
};