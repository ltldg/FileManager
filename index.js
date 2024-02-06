



import readline from 'readline';
import path from 'path';
import {ops} from './operating_system/os.js';
import { up } from './navigation/up.js';
import { cd } from './navigation/cd.js';
import { ls } from './navigation/ls.js';
import { cat } from './basic_operations/cat.js';
import { add } from './basic_operations/add.js';
import { rename } from './basic_operations/rename.js';
import { hash } from './hash/hash.js';
import { copy } from './basic_operations/copy.js';
import { move } from './basic_operations/move.js';
import { remove } from './basic_operations/delete.js';
import { compress } from './zip/compress.js';
import { decompress } from './zip/decompress.js';

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
    console.log(`You are currently in ${process.cwd()}`);
    const user = process.argv[2].split('=')[1];
if (user === undefined) {
        console.log('Please provide a username as an argument. Example: npm run start -- --username=Mike');
        process.exit();
}
    console.log(`Welcome to the File Manager, ${user}!\n`);
    rl.on('line', async (input) => {
        let argument = input.trim().split(' ')[0];
    
        
        switch(argument) {
            case '.exit': {
                console.log(`Thank you for using File Manager, ${user}!`);
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
                await ops(input);
                break;
            }
            case 'compress' : {
                await compress(input);
                break;
            }
            case 'decompress' : {
                await decompress(input);
                break;
            }
            default: {
                console.log('Invalid command');
            }
        }
        console.log(`You are currently in ${main_path()}`);
        process.on('SIGINT', () => {
            console.log(`Thank you for using File Manager, ${user}!`);
            process.exit();
          }); 
    });
}


fileManager();
