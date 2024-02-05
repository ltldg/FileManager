import crypto from 'crypto';
import fs from 'fs';
import path from 'path';



export const hash= async (input) => {

    let filePath = input.trim().split('hash ')[1];
    if(!path.isAbsolute(filePath)){
        filePath = path.join(process.cwd(), filePath);
    }

    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (data) => {
        hash.update(data);
    });

    stream.on('end', () => {
        const result = hash.digest('hex');
        console.log(result);
    });

};