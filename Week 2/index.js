const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Cohort khatam karo!');
})

app.listen(port);