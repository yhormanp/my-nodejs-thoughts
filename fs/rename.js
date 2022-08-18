const fs = require('fs');

let initialPathFile = './before.json';
let finalPathFile = './after.json'

const callbackFn= (error)=> {
    if(error){
        return console.error('Error found' , error);
    }
     console.log('the file was renamed')

}

try {
    if(fs.existsSync(initialPathFile)){
        console.log('before exists')
        fs.rename('before.json', 'after.json', callbackFn)
    } else {
        console.log('after exists')

        fs.rename('after.json', 'before.json', callbackFn)
    }
} catch (error) {
    console.error('an error was found in the rename file of Fs folder', )
}

