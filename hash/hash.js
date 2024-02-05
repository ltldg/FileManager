import crypto from 'crypto';
import fs from 'fs';



export const hash= async (input) => {

    const fileName = command.trim().split('hash ')[1];

    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(the_path);



};