//initializing declarations when the page loads
var seconds = 30;
var timer;

//run this code 1 second each and set the variable "timer"  
timer=setInterval(decreaseSeconds, 1000);

//function for decreasing seconds
function decreaseSeconds(){
    //check if the time has become 0
    if (seconds == 0){
        //the time is 0
        $("#timer").html("<h3>Your Time is Up! </h3>")
        seconds = 30;

        //clear up the timer which calls for this function "timer"
        clearInterval(timer);
        alert("Time Up!");
        submitResult();


    }else{
        //the time is not 0
    seconds = seconds -1;
    $("#timer").html("<h3>You have "+  seconds +" Seconds left. </h3>")
    }
}

// making results section

//initial declarations
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// checkResult for all q's;
$("#submit").click(function() {
    submitResult();

});

//submit data
function submitResult(){

    for (var i=1; i<=10; i++) {
        var questionName = "q"+i;
        var answer = checkResult(questionName);
        // console.log(answer);

    if (answer==0) {
        //wrong answer
        incorrect++;
    }else if (answer ==1){
        //correct answer
        correct++;
    }else{
        //unanswered
        unanswered++;
        }
    }
    //display results.
    $("#correct").html('Correct Answers: '+ correct);
    $("#incorrect").html("Incorrect Answers: " + incorrect);
    $("#unanswered").html("Unanswered: " + unanswered);

    //reset values
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    //stop timer
    clearInterval(timer);
    seconds = 30;

    //hide questions section. it will search .questions class.
    $(".questions").css("display", "none");
 
    // hide timer after quiz
    $("#timer").css("display", "none");
    // hide instruction after quiz
    $("#info").css("display", "none");

//display result
$(".results").css("display", "block");

}
  
function checkResult(questionName){
    var val = $('input[name=' + questionName +']:checked').val();
    return val;
}

$("#restart").click(restart);

function restart (){
     //reset values
     correct = 0;
     incorrect = 0;
     unanswered = 0;
     //stop timer
     clearInterval(timer);
     seconds = 30;
       // hide seconds indication
    $(".questions").css("display", "block");
    // hide timer after quiz
    $("#timer").css("display", "block");
    // hide instruction after quiz
    $("#info").css("display", "block");

    $(".results").css("display", "none");


    for (var i=1; i<=10; i++){
        $('input[name=' + "q" + i + ']:checked').prop('checked', false);
    }
    timer=setInterval(decreaseSeconds, 1000);

}


