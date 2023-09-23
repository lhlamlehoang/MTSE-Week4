const {friends} = require('../models/models.friends');

function friendRequest (req, res) {
    const ID = Number(req.params.friendID);
    const friend = friends[ID];
    if (friend) {
        res.status(200).json(friend);
    }
    else {
        res.status(400).json({error:'No friend'});
    }
}

module.exports = {
    friendRequest
}