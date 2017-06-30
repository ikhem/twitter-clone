$(document).ready(function(){

    // tweetArchive = localStorage
    // tweetArchive = []

    var tweetCtrl = $('#tweet-controls')
    var tweet = $('.tweet-compose')
    var charCount = $('#char-count')
    var tweetSubmitBtn = $('#tweet-submit')

    var tweetChar = 140;
    var messageLength = 0;
    var tMessage = 'Yakko';

    // Add a tweet
    var addTweet = function(tMessage){

        $('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Shea Labeouf</strong><span class="username">@LaBeouf</span><p class="my-tweet-text"></p></div></div>')

        $('.my-tweet-text').text(tMessage)
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

        tMessage = $(this).val()
        console.log(tMessage)
        messageLength = tMessage.length
    
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
        // console.log( message );
        // return message
    })

    $(tweetSubmitBtn).on('click', function(){

            if(messageLength > 0 && $('#tweet-submit').hasClass('button')){
                addTweet(tMessage)
            }        
    })
    
    console.log("message: " + tMessage)

    // Step 5

    
})