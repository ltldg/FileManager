import process from 'process';
import path from 'path';
 
export const up = async () => {
  try {
  const userHomeDir = path.parse(process.cwd()).root;
  const currDir = process.cwd();
    if (currDir == userHomeDir) {
      console.log('You cannot go higher than the root directory');
    } else {
      process.chdir('../');
    }

} catch (err) {
  console.error('Operation failed');
}}