import path from 'path';
import fs from 'fs';


export const cd = async (command) => {
    const params = command.trim().split(' ')[1];
    if (fs.access(params)) {
        process.chdir(params);
    }
    else {
        console.log('Invalid path');
    }


}