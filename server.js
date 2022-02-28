const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/say', function(req,res) {
        let word = req.query.keyword
        axios.get('https://objs682dpd.execute-api.us-east-1.amazonaws.com/default/myFunction?keyword='+word)
        .then(response =>{
                res.statusCode = response.statusCode;
                res.send(response.data);
        })
        .catch(err=>{
                res.statusCode = 400;
                res.send(err);
        });
});
app.listen(port, () => {
console.log(`The application is running at http://137.184.78.59:${port}`);
});
