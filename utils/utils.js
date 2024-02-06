
import path from 'path';

export function absolutOr(abspath){

    if(!path.isAbsolute(abspath)){
        return path.join(process.cwd(), abspath);
    }
   
} 


