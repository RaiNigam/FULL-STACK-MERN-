const url="My name is Nigam. I have a youtube channel. The link to my channel is https://www.youtube.com Please do like, share and subscribe. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll";
const regExp=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
if(regExp.test(url)==true){
    console.log("Valid URL found!!!");
}else{
    console.log("No valid URL found. Sorry, Please try again");
}
