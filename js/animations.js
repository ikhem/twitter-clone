$(document).ready(function(){

    var tweetCtrl = $('#tweet-controls')
    var tweet = $('.tweet-compose')
    var charCount = $('#char-count')

    var tweetChar = 140;
    var messageLength = 0;

    // Step 1 & 2
    tweetCtrl.hide();

    tweet.on('click', function(){
        $(this).css('height', '5em')
        tweetCtrl.show();
    })

    // Step 3
    tweet.keyup(function(e){

        messageLength = $(this).val().length
        
        charCount.text(tweetChar-messageLength)

        if(messageLength >= 130){
            charCount.css('color', 'red')
        } else{
            charCount.css('color', '#999')
        } 
    })




    
})