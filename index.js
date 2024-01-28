



import * as readline from 'readline';
import path from 'path';
import os from 'os';


const parentDir = path.dirname(process.cwd());

console.log(parentDir);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
});

const fileManager = async () => {
    let main_path = os.Homedir();
    console.log(`Welcome to the File Manager, ${userName}!\n`);
    console.log(`You are currently in ${main_path}`);
    r1.on('line', async (input) => {
        let argument = input.trim().split(' ')[0];
       
        switch(argument) {
            case '.exit': {
                console.log(`Thank you for using File Manager, ${userName}!`);
                process.exit();
            }
        }
    });
}


fileManager();
