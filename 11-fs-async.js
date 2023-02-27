const {readFile,writeFile} = require('fs');

console.log('start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err) throw err;
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err) throw err;
        const second = result;
        writeFile('./content/result-async.txt',`Here is the async result: ${first}, ${second}`,(err,result)=>{
            if(err) throw err;
            console.log(result);
        })
    })
})

console.log('end');