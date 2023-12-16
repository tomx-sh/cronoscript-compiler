import express from 'express';
import compile from './compiler';


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('🐊 Hello World!');
});

app.post('/compile', (req, res) => {
    const code = req.body.code;
    console.log("Request body: ", code);
    const result = compile(code);
    console.log("Result: ", result);
    console.log("\n\n");
    res.send(result);
});

app.listen(port, () => {
    console.clear();
    console.log(`🐊 Server running on http://localhost:${port}\n`);
});