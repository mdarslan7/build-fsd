const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/sum", (req, res) => {
  let a = req.query.a;
  let b = req.query.b;
  let sum = parseInt(a) + parseInt(b);
  res.send(sum.toString());
});

app.get("/interest", (req, res) => {
    const principal = parseInt(req.query.p);
    const rate = parseInt(req.query.r);
    const time = parseInt(req.query.t);
    const interest = (principal * rate * time) / 100;
    // console.log(principal, rate, time, interest);
    const amount = principal + interest;
    res.json({
        interest: interest,
        amount: amount
    })
}); 

app.listen(3000);