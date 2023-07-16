const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

eventEmitter.on("subscribe",yt=>{
    console.log(`Thanks for subscribing to ${yt}`);
});
eventEmitter.emit("subscribe","College Wallah");