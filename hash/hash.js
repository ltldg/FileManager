import crypto from 'crypto';
import fs from 'fs';



export const hash= async (input) => {

    const fileName = command.trim().split('hash ')[1];

    const hash = createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (data) => {
        hash.update(data);
    });

    stream.on('end', () => {
        const result = hash.digest('hex');
        console.log(result);
    });

};