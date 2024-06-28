const express =  require('express');
const zod = require('zod');
const app = express();

const schema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
});

app.use(express.json());

app.get("/testInput", (req, res) => {
    const credentials = req.body.credentials;
    const response = schema.safeParse(credentials);
    res.send(response);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});