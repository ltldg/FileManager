import fs   from 'fs';
import zlib from 'zlib';
import { absolutOr } from '../utils/utils.js';
import path from 'path';





export const compress = async (input) => {
    const pathToFileArg = input.trim().split(' ')[1]
    const pathToNewFileArg = input.trim().split(' ')[2]


    const pathToFile= absolutOr(pathToFileArg);
    const pathToNewFile= path.join(absolutOr(pathToNewFileArg), path.basename(pathToFile) +'.br');

    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(pathToNewFile);
    const brotli = zlib.createBrotliCompress();


    readStream.pipe(brotli).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File has been compressed');
    });

    writeStream.on('error', (err) => {
        console.error('An error occurred:', err);
    });

};