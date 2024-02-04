import fs from 'fs/promises';
import path from 'path';



export const add = async (input) => {
    const fileName = input.trim().split(' ')[1]
    const filePath = path.join(process.cwd(), fileName);
    try {
        await fs.access(filePath, fs.constants.F_OK);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(filePath, 'I am fresh and young');
            console.log('File created');
          } else {
            throw error;
          }
    }
}