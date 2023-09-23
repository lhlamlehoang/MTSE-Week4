const express = require('express');
const app = express();
const PORT = 3000;

const {friends} = require('./models/models.friends');
const {friendRequest} = require('./controllers/controllers.friendcontroller');
const friendReq = require('./routes/routes.friends');

app.use(express.json());


app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.post('/friend',((req,res)=> {
    console.log(`${req.body}`);
    if (!req.body.name) {
        return res.status(400).json({
            error:'must have username'
        });
    }
    const friend = {name: req.body.name,id:friends.length};
    friends.push(friend);
    res.status(200).json(friend);
}))


//app.get('/friend/:friendID', friendRequest);

app.use('/friend', friendReq);

app.listen(PORT);