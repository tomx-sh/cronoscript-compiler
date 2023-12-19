import express from 'express';
import compile from './compiler';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const baseUrl   = process.env.BASE_URL || 'http://localhost';
const port      = process.env.PORT || 8000;

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
    res.type('json');
    res.send(result);
});

app.listen(port, () => {
    console.clear();
    console.log(`🐊 Server running on ${baseUrl}:${port}\n`);
});

export default app;