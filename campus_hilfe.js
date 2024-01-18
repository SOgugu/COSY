$(document).ready(function(){
    $("#invisible").hide();
  
    $(".checked").click(function(){
      showInvite();
    });
  
    $(".unchecked").click(function(){
      hideInvite();
    });
  
    
  });
  
  function showInvite(){
    $("#invisible").show();
  }
  
  function hideInvite(){
    var q1 = document.getElementById("q1");
    var q2 = document.getElementById("q2");
    var q3 = document.getElementById("q3");
    var q4 = document.getElementById("q4");
    var q5 = document.getElementById("q5");
    var q6 = document.getElementById("q6");
    var q7 = document.getElementById("q7");
    var q8 = document.getElementById("q8");
  
    if (q1.checked == false && q2.checked == false && q3.checked == false && q4.checked == false && q5.checked == false && q6.checked == false && q7.checked == false && q8.checked == false){
      $("#invisible").hide();   
    }
  
  }

  // Condition for Calendar pop up following checked responses