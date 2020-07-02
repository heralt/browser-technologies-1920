const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');
const parser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use(express.static(path.join(__dirname, 'static')));
app.use(parser.urlencoded({extended: true}));
app.set('views', 'views');
app.set('view engine', 'ejs');

const JSON_FILE = './data.json';

function putData(req) {
    const {naam, stdnt_nr, studie, goals, duur_doel, keuze, toekomst} = req.body;
    fs.readFile(JSON_FILE, async (err, data) => {
        if (err) return console.log(err);
        const content_json = JSON.parse(data);
        const form_data = {stdnt_nr, naam, studie, goals, duur_doel, keuze, toekomst};
        content_json.data.push(form_data);
        write_to_file(JSON_FILE, content_json);
    });
}

function write_to_file(file, data) {
    fs.writeFile(file, JSON.stringify(data, null, 2), err => {
        if (err) console.log(err);
    });
}

function getData(index, vraag, res, url) {
    fs.readFile(JSON_FILE, async (err, data) => {
        if (err) return console.log(err);
        const content_json = JSON.parse(data);
        res.render(vraag, {
            content: content_json.data[index],
            continueSurvey: `http://localhost:3000${url}`,
        })
    });
}

app.get('/', (req, res) => {
    res.render('init_page');
});

app.post('/:vraag', (req, res) => {
    let url = req.originalUrl;
    putData(req);
    res.render(req.params.vraag, {
        content: '',
        continueSurvey: `http://localhost:3000${url}`,
    });
});

app.get('/:vraag', (req, res) => {
    let url = req.originalUrl;
    let value = parseInt(url.match(/\d+/)[0]);
    getData(value, req.params.vraag, res, url);
});

app.get('/submit', (req,res) => {

});

app.listen(port, () => console.log(`Example app listening on port ${port}`));