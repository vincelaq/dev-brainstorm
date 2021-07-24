// DASHBOARD CONTROLLER
module.exports = {
    index,
}

function index (req, res) {
    res.render('dashboard/index', {
        user: req.user,
    });
};