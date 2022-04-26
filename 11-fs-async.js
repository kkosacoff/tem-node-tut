const {readFile, writeFile, read} = require('fs')

//async need to provide a callback, we run that callback when we are done.
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result)=> {
    if(err){
        console.log(err);
        return;
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result
        writeFile('./content/result-async.txt', 
        `Here is the async result: ${first}, ${second}`,
        (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})

console.log('Starting next task')