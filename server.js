const express = require('express');
const bodyParser = require('body-parser');
const request = require('request-promise');
const PORT = process.env.PORT || 10362;

const app = express();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});

app.post('/getProducts', jsonParser, (req, res) => {
    if (!req.body) {
        res.sendStatus(400);
    }
    else {
        let type = req.body.type;
    }
});

app.post('/getCategory', jsonParser , (req, res) => {

    const options = {
        url: 'https://spb-afisha.gate.petersburg.ru/kg/external/afisha/categories',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ2a2lkMDAwMDAwMDAwIiwiZXhwIjoxNjY5OTA2NDg3fQ.6rOorcyYMZIwi53YBvVxn2lcd8evk3p_vfUb7DYrKLE'
        },
        json: true
    }
    request(options)
        .then(function (response) {
            res.json({
                response
            })
        })
        .catch(function (err) {
            res.json({
                error: {
                    code: 1,
                    message: "Ошибка обработки ответа от внешнего api"
                }
            })
        })

});
app.get("/", (req, res) => {
    res.end('<h1>Test true</h1>')
})