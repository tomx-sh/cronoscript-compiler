import compile from './compiler';
import decompile from './decompiler';
import * as fs from 'fs';

const inputFilePath = './app/antlr/testInputs/input.txt';
const input: string = fs.readFileSync(inputFilePath, 'utf8');

console.log('File: ' + inputFilePath);
console.log('Input:\n' + input);


// COMPILER
console.log('\n\n');
console.log('COMPILER:\n');

const result = compile(input);

console.log('\nTags:\n');
console.log(result.cronodile?.tags);

console.log('\nDateAtoms:\n');
console.log(result.cronodile?.dateAtoms);

console.log('\nGroups:\n');
console.log(result.cronodile?.groups);


// DECOMPILER
console.log('\n\n');
console.log('DECOMPILER:\n');

if (!result.cronodile) {
    console.log('Error: No cronodile object found');
    process.exit(1);
}

const {events, tasks, groupBrackets, links} = decompile(result.cronodile);

console.log('\nEvents:\n');
console.log(events);

console.log('\nTasks:\n');
console.log(tasks);

console.log('\nGroup brackets:\n');
console.log(groupBrackets);

console.log('\nLinks:\n');
console.log(links);