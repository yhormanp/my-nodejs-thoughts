const { Writable } = require('stream');

const writableSteam =  new Writable({
     write(chunk, encoding, callback){
         console.log(chunk.toString());
         callback();
     }
});


process.stdin.pipe(writableSteam);