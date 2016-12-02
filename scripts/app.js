$(document).ready(function() {
  
    var player = 1;
    var turns = 0;

    
	//------------------BEGIN sound function 

    function playSound(sound) {
        var soundToPlay = '#sadTrombone-sound';
        if (sound == "iWon") {
            soundToPlay = '#tada-sound';
        }
        else if (sound == "selected"){
        	soundToPlay = "#selected-sound";
        }
        $(soundToPlay)[0].volume = 0.5;
        $(soundToPlay)[0].load();
        $(soundToPlay)[0].play();
    }

    //------------------END sound function 



    //------------------BEGIN play game function 

    function playGame() {
        $('.tic').on('click', function() {
            var selected = $(this);
            if (selected.hasClass("ex") || selected.hasClass("oh")) {
            	pageAlert("selected");
            } else {
                if (player == 1) {
                    turns += 1;
                    selected.addClass("ex");
                    setTimeout(function() {
                        if (didPlayerWin("ex")) {
                            pageAlert("ex");
                            $('.disable').show();
                        } else {
                            player = 2;
                        };
                    }, 200);

                } else {
                    turns += 1;
                    selected.addClass("oh");
                    setTimeout(function() {
                        if (didPlayerWin("oh")) {
                            pageAlert("oh");
                            $('.disable').show();
                        } else {
                            player = 1;
                        };
                    }, 200);
                }

                if (turns == 9 && !didPlayerWin("ex")) {
                    setTimeout(function() {
                        pageAlert("tie");
                        $('.disable').show();
                    }, 200);
                }
            }
        });

    }
    //------------------END play game function 



    //------------------BEGIN popup that tells who wins 

    function pageAlert(winner) {
        if (winner == "oh") {
            playSound("iWon");
            $(".alert-wrap").show();
            $(".alert").text("Player two wins!");
        } else if (winner == "ex") {
            playSound("iWon");
            $(".alert-wrap").show();
            $(".alert").text("Player one wins!");
        } else if (winner == "selected"){
        	playSound("selected");
        	$(".alert-wrap").show();
        	$(".alert").text("Already selected!  Choose an EMPTY square.");
        } else {
            playSound();
            $(".alert-wrap").show();
            $(".alert").text("Tie! Game over.");
        }

    }
    //------------------END popup that tells who wins 



    //-------------------BEGIN Hide the winner notification

    function close() {
        $(".alert-wrap").hide();
    }
    //-------------------END Hide the winner notification



    //-------------------BEGIN Logic for determining winner 

    function didPlayerWin(squareClass) {
        if ($('.tic.1').hasClass(squareClass) && $('.tic.2').hasClass(squareClass) && $('.tic.3').hasClass(squareClass)) {
            return true;
        } else if ($('.tic.4').hasClass(squareClass) && $('.tic.5').hasClass(squareClass) && $('.tic.6').hasClass(squareClass)) {
            return true;
        } else if ($('.tic.7').hasClass(squareClass) && $('.tic.8').hasClass(squareClass) && $('.tic.9').hasClass(squareClass)) {
            return true;
        } else if ($('.tic.1').hasClass(squareClass) && $('.tic.4').hasClass(squareClass) && $('.tic.7').hasClass(squareClass)) {
            return true;
        } else if ($('.tic.2').hasClass(squareClass) && $('.tic.5').hasClass(squareClass) && $('.tic.8').hasClass(squareClass)) {
            return true;
        } else if ($('.tic.3').hasClass(squareClass) && $('.tic.6').hasClass(squareClass) && $('.tic.9').hasClass(squareClass)) {
            return true;
        } else if ($('.tic.1').hasClass(squareClass) && $('.tic.5').hasClass(squareClass) && $('.tic.9').hasClass(squareClass)) {
            return true;
        } else if ($('.tic.3').hasClass(squareClass) && $('.tic.5').hasClass(squareClass) && $('.tic.7').hasClass(squareClass)) {
            return true;
        } else {
            return false;
        }

    }
	//-------------------END Logic for determining winner 



    //-------------------BEGIN close click function 

	$('.close').click(function() {
        close();
    });
    //-------------------END close click function  



    //-------------------BEGIN reset button

    $('a').on('click', function(e) {
        e.preventDefault();
        $('.tic').removeClass('ex oh');
        player = 1;
        turns = 0;
        $('.disable').hide();
        close();
    });
    //-------------------END reset button


    playGame();

});
