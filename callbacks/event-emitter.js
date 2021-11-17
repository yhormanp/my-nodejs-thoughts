const EventEmitter = require('events');

class Logger extends EventEmitter {
    execute(cb){
        console.log('before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('After')
    }
}


const logger = new Logger();

logger.on('start', ()=> console.log('starting') );
logger.on('finish', ()=> console.log('Finishing'));
logger.on('finish', ()=> console.log('It\'s done'));

logger.execute( ()=> console.log('Hello world'));

