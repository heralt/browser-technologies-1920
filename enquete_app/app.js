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

const write_to_file = (file,data) => {
    fs.writeFile(file, JSON.stringify(data, null, 2), err => {
        if(err) console.log(err);
        console.log(err);
    });
};

const read_from_file = () => {

};

const data = (req, res) => {

    let index = -1;
    const{naam, stdnt_nr, studie} = req.body;

    console.log(req.key)

    const json_file = './data.json';
    fs.readFile(json_file, (err, data) => {
        if(err) return console.log(err);
        const content_json = JSON.parse(data);

        const student = content_json.data.find( ({stdnt_nr},i) =>
        {
            if(stdnt_nr === req.body.stdnt_nr){
                index = i;
                return i;
            }
        });

        if(student){
            content_json.data[index-1].random = "random";
            write_to_file(json_file,content_json);
        } else {
            const form_data = {stdnt_nr, naam};
            content_json.data.push(form_data);
            write_to_file(json_file,content_json);
        }
    });

};

app.get('/', (req, res) => {
    res.render('init_page');
    std_nummer = parseInt(req.body.stdnt_nr);
});

app.post('/vraag/:id', (req, res) => {
    data(req,res);
    res.render(`vraag${req.params.id}`);
});

app.get('/vraag/:id', (req, res) => {
    data(req,res);
    res.render(`vraag${req.params.id}`);
});

app.post('/vraag/:submit', (req, res) => {
    res.render(`vraag${req.params.id}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));