
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from "url";



const remove = async (input) => {
    const fileName = input.trim().split(' ')[1];
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
    try {
        await fs.access(filePath, fs.constants.F_OK);
    } catch (error) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.unlink(filePath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();