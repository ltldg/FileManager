
import path from 'path';
import { absolutOr } from '../utils/utils.js';


export const cd = async (command) => {
    const params = command.trim().split(' ')[1];

    const relativePath = absolutOr(params);
   
   try {

    if (path.isAbsolute(params)) {
        process.chdir(params);
        
    } else {
        process.chdir(relativePath);
    }
    }catch(err) {
        console.log('Ivalid Path');
    }


}