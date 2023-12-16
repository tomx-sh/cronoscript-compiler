import compile from './compiler';
import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question('Enter your CronoScript: ', (answer) => {
    console.log('\n');
    console.log(compile(answer));
    rl.close();
});