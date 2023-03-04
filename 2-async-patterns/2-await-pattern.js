const { readFile,writeFile} = require('fs').promises;

// const util = require('util');
// const readFilepromise = util.promisify(readFile);
// const writeFilepromise = util.promisify(writeFile);


const start = async() => {
    try {
        // console.log('reached try');
        const first = await readFile('./content/first.txt','utf-8');
        const second = await readFile('./content/second.txt','utf-8');
        await writeFile('./content/result-mind-grenade.txt',`Had some problems but was able to get through : ${first} , ${second}`,{flag: 'a' })
        console.log(first,second);
    } catch (error) {
        console.log(error);
    }
}

start();


//Not working idk why
// const getText = (path) => {
//     return new Promise((reject, resolve) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err){
//                 console.log('reached err');
//                 reject(err);
//             } else{
//                 resolve(data);
//                 console.log('reached data');
//             }
//         })
//     })
// }