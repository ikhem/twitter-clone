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
    function disableBtn(){
        $('#tweet-submit').removeClass("button")
        $('#tweet-submit').addClass("button.disabled")
    }

    function enableBtn(){
        $('#tweet-submit').removeClass("button.disabled")
        $('#tweet-submit').addClass("button")
    }

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
       
    })




    
})