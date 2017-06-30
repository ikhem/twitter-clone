$(document).ready(function(){

    var tweetCtrl = $('#tweet-controls')
    var tweet = $('.tweet-compose')
    var charCount = $('#char-count')
    var tweetSubmitBtn = $('#tweet-submit')

    var tweetChar = 140;
    var messageLength = 0;

    // Add a tweet
    var addTweet = function(){
        $('#stream').prepend('<div class="tweet"></div>')
    }

    // Step 1 & 2
    tweetCtrl.hide();

    tweet.on('click', function(){
        $(this).css('height', '5em')
        tweetCtrl.show();
    })

    // Step 4
    function disableBtn(){
        $('#tweet-submit').removeClass("button")
        $('#tweet-submit').addClass("button.disabled")
    }

    function enableBtn(){
        $('#tweet-submit').removeClass("button.disabled")
        $('#tweet-submit').addClass("button")
    }

    // Step 3
    tweet.keyup(function(){

        messageLength = $(this).val().length
    
        if(messageLength > 140){
            disableBtn();
        }
        else if(messageLength >= 130){
            charCount.css('color', 'red')
            enableBtn();
        } else{
            charCount.css('color', '#999')
        } 

        if(messageLength > 140){
            charCount.txt(0)
        }
        else{
            charCount.text(tweetChar-messageLength) 
        }

        $(tweetSubmitBtn).on('click', function(){
            if(messageLength > 0){
                addTweet()
            }        
        })
    
    })
    
    

    // Step 5

    
})