const EventEmitter=require('events');

const eventEmitter=new EventEmitter();

 yt=(channelName)=>{
    console.log(`Thanks for Subscribing to ${channelName}`);
}
eventEmitter.addListener("subscribe",yt);
eventEmitter.emit("subscribe","College Wallah");
eventEmitter.removeListener("subscribe",yt);
eventEmitter.emit("subscribe","College Wallah");


