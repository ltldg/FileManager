import fs from 'fs';

export const cat = async (command) => {
    const fileName = command.trim().split(' ')[1]
const readStream = fs.createReadStream(fileName);

readStream.on('data', (chunk) => {
    console.log(chunk.toString());
});

readStream.on('error', (err) => {
    console.error('An error has occurred:', err);
});
}