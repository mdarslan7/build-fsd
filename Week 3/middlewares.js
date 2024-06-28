const express =  require('express');
const app = express();

const userMiddleware = (req, res, next) => {
    if(req.headers.user === "admin" && req.headers.password === "pass") {
        next();
    }
    else {
        res.status(401).send("Unauthorized");
    }
};

app.use(express.json());

app.get("/test", userMiddleware, (req, res) => {
    const msg = req.query.msg;
    res.send("Hello, your message was: " + msg);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});