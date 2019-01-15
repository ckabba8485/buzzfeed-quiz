/* global $ */

$(document).ready(function() {
    
    var scoreOne = 0 ;
    function q1Score(q1Answer) {
        if (q1Answer === "walk" || "Walk") {
            scoreOne = scoreOne + 1
            return scoreOne;
        }else {
            scoreOne = scoreOne + 2
            return scoreOne;
        
        }
    }
    
    var scoreTwo = 0
    function q2Score(q2Answer) {
        if (q2Answer === "yes" || "Yes") {
            scoreTwo = scoreTwo + 2
            return scoreTwo;
        }else {
            scoreTwo = scoreTwo + 1
            return scoreTwo;
        }
        
    }
    
    var scoreThree = 0
    function q3Score(q3Answer) {
        if (q3Answer === "Public transportation" || "public transportation" || "Public Transportation") {
            scoreThree = scoreThree + 1
            return scoreThree;
        } else {
            scoreThree = scoreThree + 2
            return scoreThree;
        }
    }
    
    
    
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "urban" || "suburban";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
       
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
      
        
        var q1Num = q1Score(q1Result);
        var q2Num = q2Score(q2Result);
        var q3Num = q3Score(q3Result);
        var totalScore = q1Num + q2Num + q3Num;
       
    if (totalScore > 4) {
        alert ("You are an Urban person!");
    } else (
        alert ("You are a Suburban person!")
        )
    
    console.log(totalScore);
    });

});

