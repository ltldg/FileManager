import fs   from 'fs';
import zlib from 'zlib';
import path from 'path';






export const compress = async (input) => {
    const pathToFile = input.trim().split(' ')[1]
    const pathToNewFile = input.trim().split(' ')[2]



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