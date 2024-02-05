import path from 'path';
import fs from 'fs/promises';






export const ls = async () => {
    const directoryPath = process.cwd();

// read directory content
fs.readdir(directoryPath)
    .then(directoryContent => {
        let files = [];
        let folders = [];

        // separate files and folders
        const statsPromises = directoryContent.map(item => {
            return fs.stat(path.join(directoryPath, item))
                .then(stats => {
                    if (stats.isDirectory()) {
                        folders.push(item);
                    } else {
                        files.push(item);
                    }
                });
        });

        return Promise.all(statsPromises)
            .then(() => ({ files, folders }));
    })
    .then(({ files, folders }) => {
        // sort files and folders
        files.sort();
        folders.sort();

        // print folders and files
        console.log('Folders:');
        folders.forEach(folder => console.log(`Name: ${folder}, Type: Folder`));
        console.log('\nFiles:');
        files.forEach(file => console.log(`Name: ${file}, Type: File`));
    })
    .catch(console.error);
}