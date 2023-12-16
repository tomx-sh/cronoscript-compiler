import compile from './compiler';
import * as fs from 'fs';

const inputFilePath = './antlr/testInputs/input.txt';
const input: string = fs.readFileSync(inputFilePath, 'utf8');
const result = compile(input);

console.log('File: ' + inputFilePath);
console.log('Input:\n' + input);

console.log('\n\n');
console.log('Result:\n');
console.log(result);