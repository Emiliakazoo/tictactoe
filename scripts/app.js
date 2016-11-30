$(document).ready(function(){
  //TODO:  EVERYTHING!!!
  var player = 1;
  var turns = 0;
 
  function playGame(){
 $('.tic').on('click', function(){
    var selected = $(this);
   if(selected.hasClass("ex") || selected.hasClass("oh")){
     alert('already selected!!')
   } else {
     if(player == 1){
       turns = turns+ 1;
       selected.addClass("ex");
         setTimeout(function(){
         if(didPlayerWin("ex")){
           pageAlert("ex");
           $('.disable').show();
         }
         else {
           player = 2;
         };
       },200);
       
     } 
     else {
       turns = turns + 1;
       selected.addClass("oh");
         setTimeout(function(){
         if(didPlayerWin("oh")){
           pageAlert("oh");
           $('.disable').show();
         }
         else {
           player = 1;
         };
       },200);
     }    
     
     if(turns == 9 && !didPlayerWin("ex")) {
         setTimeout(function(){
           alert("Game Over");
           $('.disable').show();
         },200);
       }
   }
   });
    
  }
 
 //popup that tells who wins 
function pageAlert(winner){
	if(winner == "oh"){
		$(".alert-wrap").show();
		$(".alert").text("Player two wins!");
	}
	else {
		$(".alert-wrap").show();
		$(".alert").text("Player one wins!");
	}

}

function close(){
	$(".alert-wrap").hide();
}
  
 function didPlayerWin(squareClass){
   if ($('.tic.1').hasClass(squareClass) && $('.tic.2').hasClass(squareClass) && $('.tic.3').hasClass(squareClass)){
     return true;
   }
   else if ($('.tic.4').hasClass(squareClass) && $('.tic.5').hasClass(squareClass) && $('.tic.6').hasClass(squareClass)){
     return true;
   } 
   else if ($('.tic.7').hasClass(squareClass) && $('.tic.8').hasClass(squareClass) && $('.tic.9').hasClass(squareClass)){
     return true;
   }
   else if ($('.tic.1').hasClass(squareClass) && $('.tic.4').hasClass(squareClass) && $('.tic.7').hasClass(squareClass)) {
     return true;
   }
   else if ($('.tic.2').hasClass(squareClass) && $('.tic.5').hasClass(squareClass) && $('.tic.8').hasClass(squareClass)){
     return true;
   }
   else if ($('.tic.3').hasClass(squareClass) && $('.tic.6').hasClass(squareClass) && $('.tic.9').hasClass(squareClass)){
     return true;
   }
   else if ($('.tic.1').hasClass(squareClass) && $('.tic.5').hasClass(squareClass) && $('.tic.9').hasClass(squareClass)){
     return true;
   }
   else if ($('.tic.3').hasClass(squareClass) && $('.tic.5').hasClass(squareClass) && $('.tic.7').hasClass(squareClass)){
     return true;
   }
   else {
     return false;
   }
   
 }

 //use the close button 
 $('.close').click(function(){
 	close();
 });
  
  //reset button
  $('a').on('click', function(e){
    e.preventDefault();
    $('.tic').removeClass('ex oh');
    player = 1;
    turns = 0;
    $('.disable').hide();
    close();
  });  
  playGame();
  
});