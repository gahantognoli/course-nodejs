const EventEmitter = require('events');

class Cao extends EventEmitter {
    lartir(){
        console.log('Au au');
    }
}

var Rex = new Cao();

Rex.on('pessoa_no_portal', Rex.lartir);

Rex.emit('pessoa_no_portal');
Rex.emit('pessoa_no_portal');
Rex.removeListener('pessoa_no_portal', Rex.lartir);
Rex.emit('pessoa_no_portal');
