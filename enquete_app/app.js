const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');
const parser = require('body-parser');
const fs = require('fs');

app.use(express.static('static'));
app.use(parser.urlencoded({extended:true}));
app.set('views','views');
app.set('view engine', 'ejs');

app.get('/start', (req, res) => {
    res.render('init_page');
});

const data = (req, res) => {
    const{naam, stdnt_nr, studie} = req.body;
    const json_file = './data.json';
    fs.readFile(json_file, (err, data) => {

        if(err) return console.log(err);
        const content_json = JSON.parse(data);

        console.log(stdnt_nr + ' std nr');

        //const stdnt = content_json.data.find(returnValue);
        const form_data = {naam, stdnt_nr, studie}
        content_json.data.push(form_data);
        fs.writeFile(json_file, JSON.stringify(content_json, null, 2), err => {
            if(err) console.log(err);
            console.log(err);
        });
        /*if(stdnt !== null) {
            console.log(`${stdnt.stdnt_nr} waarde`)
        } else {

            });*/

    });
}

app.get('/vraag/:id', (req, res) => {
    data(req,res);
    res.render(`vraag${req.params.id}`);
});

app.post('/vraag/:submit', (req, res) => {
    res.render(`vraag${req.params.id}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));