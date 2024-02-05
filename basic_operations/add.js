import fs from 'fs/promises';
import { absolutOr } from '../utils/utils.js';



export const add = async (input) => {
    const fileName = input.trim().split(' ')[1]
    const filePath = absolutOr(fileName);
    try {
        await fs.access(filePath, fs.constants.F_OK);
        console.log('File already exists');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(filePath, 'I am fresh and young');
            console.log('File created');
          } else {
            throw error;
          }
    }
}