# get_data_twitter 
this is an example of using a twit (https://www.npmjs.com/package/twit) package, which is used to capture data on twitter.

# Instalation
1. Install nodejs to your laptop (if you haven't installed it)
2. download/clone this repo to your laptop
3. open your terminal/command  and jump to your project folder 
4. run `npm install` in your terminal/command 
5. change this configuration, you can get those from https://developer.twitter.com/
`const T = new Twit({
    consumer_key:         '[CONSUMER_KEY]', //Change this with your CONSUMER_KEY 
    consumer_secret:      '[CONSUMER_SECRET]', //Change this with your CONSUMER_SECRET
    access_token:         '[ACCESS_TOKEN]', //ACCESS_TOKEN
    access_token_secret:  '[ACCESS_TOKEN_SECRET]', //ACCESS_TOKEN_SECRET
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
    tweet_mode:'extended'
  });`
6. and finaly, now you can run it with `npm run`

