
import EventEmitter from 'events';
class eventEmitter extends EventEmitter{}
const emitter=new eventEmitter;
console.log(`The default maximu number of event listeners are: ${eventEmitter.defaultMaxListeners}`
);
emitter.setMaxListeners(5)
console.log(`The updated maximum number of event listeners are: ${emitter.getMaxListeners()}`
);