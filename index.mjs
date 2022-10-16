import express from 'express';
import os from 'os';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    let message = `Hello from Node Project, I am pod ${os.hostname()}`;
    res.send(message);
})

app.listen(PORT, () => {
    console.log(`listening from post ${PORT}`);
    console.log(os.hostname());
});