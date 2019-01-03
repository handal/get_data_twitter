//require modules
var express = require("express");
const Twit = require('twit')

const app = express();

/* -- BEGIN TWITTER -- */
const T = new Twit({
    consumer_key:         '[CONSUMER_KEY]', //Change this with your CONSUMER_KEY 
    consumer_secret:      '[CONSUMER_SECRET]', //Change this with your CONSUMER_SECRET
    access_token:         '[ACCESS_TOKEN]', //ACCESS_TOKEN
    access_token_secret:  '[ACCESS_TOKEN_SECRET]', //ACCESS_TOKEN_SECRET
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
    tweet_mode:'extended'
  });
  
// Get Timeline user
var param = {
    screen_name:'Cristiano',
    count : 2,
}
T.get("statuses/user_timeline", param, function(err, data, response){
    console.log("\n\n\n\n");
    console.log(data[1].entities.media);
});


//Stream Data From Twitter with specific filter
var stream = T.stream('statuses/filter', { track: 'pilpres', tweet_mode:'extended'})
var jml_twit = 0;
stream.on('tweet', function (tweet) {
    jml_twit ++;
    console.log("\n\n____NEW TWEET______\n");
    var fulltext= "";
    if(tweet.extended_tweet != undefined){
        fulltext = tweet.extended_tweet.full_text;
    }else{
        fulltext = tweet.text;
    }

    console.log("No "+jml_twit+" \n"+Date(Date.now()).toString()+" \n"+tweet.user.screen_name+" :::: "+fulltext+"\n");
    console.log("\n\n");

});

const portServer = 3000;
app.listen(portServer);
console.log("server running on port :"+portServer);