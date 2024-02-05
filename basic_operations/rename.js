
import fs from'fs/promises';
import path from 'path';
import { absolutOr } from '../utils/utils.js';


export const rename = async (input) => {

    const fileNameFirst = input.trim().split(' ')[1]
    const fileNameSecond = input.trim().split(' ')[2]


    const firstFile =  absolutOr(fileNameFirst);
    const secondFile = absolutOr(fileNameSecond);          

    try {
        await fs.access(firstFile, fs.constants.F_OK);
      } catch (error) {
        throw new Error('FS operation failed');
      }
    
      try {
        await fs.access(secondFile, fs.constants.F_OK);
        throw new Error('FS operation failed');
      } catch (error) {
        if (error.code !== 'ENOENT') {
          throw error;
        }
      }
    
      try {
        await fs.rename(firstFile, secondFile);
      } catch (error) {
        throw new Error('FS operation failed');
      }
};
