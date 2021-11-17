const {Transform } = require('stream');

const transformStream = new Transform({
    transform(chunk, encoding, callback){
        const data = chunk.toString().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
;        this.push(data)
        callback();
    }
})


process.stdin.pipe(transformStream).pipe(process.stdout);