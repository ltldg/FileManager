



import readline from 'readline';
import path from 'path';
import os from 'os';
import { up } from './navigation/up.js';
import { cd } from './navigation/cd.js';
import { ls } from './navigation/ls.js';
import { cat } from './basic_operations/cat.js';
import { add } from './basic_operations/add.js';
import { rename } from 'fs';

const parentDir = path.dirname(process.cwd());

console.log(parentDir);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fileManager = async () => {
    //const home  = os.homedir();
    //process.chdir(home);
    const main_path = () => process.cwd();    

    console.log(`Welcome to the File Manager, ${"dog"}!\n`);
    rl.on('line', async (input) => {
        let argument = input.trim().split(' ')[0];
       
        switch(argument) {
            case '.exit': {
                console.log(`Thank you for using File Manager, ${"dog"}!`);
                process.exit();
            }
            case 'up': {
                await up();
                break;
            }
            case 'cd': {
                await cd(input);
                break;
            }
            case 'ls': {
                await ls();
                break;
            }
            case 'add': {
                await add(input);
                break;
            }
            case 'cat': {
                await cat(input);
                break;
            }
            case 'rn': {
                await rename(input);
                break;
            }
            case 'cp': {
                await copy(input);
                break;
            }
            case 'mv': {
                await move(input);
                break
            }
            case 'rm': {
                await remove(input);
                break;
            }
            case 'hash': {
                await hash(input);
                break;
            }
            case 'os': {
                await os(input);
                break;
            }
            case 'compress' : {
                await compress(input);
                break;
            }
            default: {
                console.log('Invalid command');
            }
        }
        console.log(`You are currently in ${main_path()}`);
    });
}


fileManager();
