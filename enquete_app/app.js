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

let std_nummer = null;

const zoekNummer = nummer => {
    return nummer.stdnt_nr = std_nummer;
}

app.get('/start', (req, res) => {
    res.render('init_page');
    std_nummer = parseInt(req.body.stdnt_nr);
});

const data = (req, res) => {

    const{naam, stdnt_nr, studie} = req.body;
    const json_file = './data.json';
    fs.readFile(json_file, (err, data) => {

        if(err) return console.log(err);
        const content_json = JSON.parse(data);

            const form_data = {naam, stdnt_nr, studie};
            content_json.data.push(form_data);
            fs.writeFile(json_file, JSON.stringify(content_json, null, 2), err => {
                if(err) console.log(err);
                console.log(err);
            });
    });
}

app.post('/vraag/:id', (req, res) => {
    console.log('body ', req.body)
    data(req,res);
    res.render(`vraag${req.params.id}`);
});

app.get('/vraag/:id', (req, res) => {
    console.log('body ', req.body)
    data(req,res);
    res.render(`vraag${req.params.id}`);
});

app.post('/vraag/:submit', (req, res) => {
    res.render(`vraag${req.params.id}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));