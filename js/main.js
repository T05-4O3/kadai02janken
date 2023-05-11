"use strict";

/************** TWITTER FORROW BUTTON **************/

$(document).ready(function() {
  /************** HIDE THE REPLAY BUTTON **************/
  $('.replay').hide();
  
  /************** VARIABLES **************/
  var playerHand = "";
  var compHand;
  var round = 1;
  var playerWins = 0;
  var compWins = 0;
$(function() { 
  
    /************** BUTTON FUNCTIONALITY **************/
    /** HOVER **/
    $(".shominimg").hover(function(){
        $(".shominimg").css("opacity", "0.7");
        }, function(){
        $(".shominimg").css("opacity", "1");
    });
    $(".shoninimg").hover(function(){
        $(".shoninimg").css("opacity", "0.7");
        }, function(){
        $(".shoninimg").css("opacity", "1");
    });
    $(".joushuimg").hover(function(){
        $(".joushuimg").css("opacity", "0.7");
        }, function(){
        $(".joushuimg").css("opacity", "1");
    });
    $(".bugyouimg").hover(function(){
        $(".bugyouimg").css("opacity", "0.7");
        }, function(){
        $(".bugyouimg").css("opacity", "1");
    });
    $(".gizokuimg").hover(function(){
        $(".gizokuimg").css("opacity", "0.7");
        }, function(){
        $(".gizokuimg").css("opacity", "1");
    });
    
    /** SELECTION **/
    $(".shominimg").on("click", function() {
        $(".shominimg").attr("src","img/main/shomin_click.png");
        $(".shoninimg").attr("src","img/main/shonin.png");
        $(".joushuimg").attr("src","img/main/joushu.png");
        $(".bugyouimg").attr("src","img/main/bugyou.png");
        $(".gizokuimg").attr("src","img/main/gizoku.png");
        playerHand = "shomin";
    });
    $(".shoninimg").on("click", function() {
        $(".shominimg").attr("src","img/main/shomin.png");
        $(".shoninimg").attr("src","img/main/shonin_click.png");
        $(".joushuimg").attr("src","img/main/joushu.png");
        $(".bugyouimg").attr("src","img/main/bugyou.png");
        $(".gizokuimg").attr("src","img/main/gizoku.png");
        playerHand = "shonin";
    });
    $(".joushuimg").on("click", function() {
        $(".shominimg").attr("src","img/main/shomin.png");
        $(".shoninimg").attr("src","img/main/shonin.png");
        $(".joushuimg").attr("src","img/main/joushu_click.png");
        $(".bugyouimg").attr("src","img/main/bugyou.png");
        $(".gizokuimg").attr("src","img/main/gizoku.png");
        playerHand = "joushu";
    });
    $(".bugyouimg").on("click", function() {
        $(".shominimg").attr("src","img/main/shomin.png");
        $(".shoninimg").attr("src","img/main/shonin.png");
        $(".joushuimg").attr("src","img/main/joushu.png");
        $(".bugyouimg").attr("src","img/main/bugyou_click.png");
        $(".gizokuimg").attr("src","img/main/gizoku.png");
        playerHand = "bugyou";
    });
    $(".gizokuimg").on("click", function() {
        $(".shominimg").attr("src","img/main/shomin.png");
        $(".shoninimg").attr("src","img/main/shonin.png");
        $(".joushuimg").attr("src","img/main/joushu.png");
        $(".bugyouimg").attr("src","img/main/bugyou.png");
        $(".gizokuimg").attr("src","img/main/gizoku_click.png");
        playerHand = "gizoku";
    });
    
    
    /************** COMPUTER'S HAND **************/
    var generateCompHand = function() {
        var x = (Math.floor(Math.random() * 5)) + 1;
        switch (x) {
            case 1:
                $(".shominimg").css("border", "3px solid red");
                return "shomin";
            case 2:
                $(".shoninimg").css("border", "3px solid red");
                return "shonin";
            case 3:
                $(".joushuimg").css("border", "3px solid red");
                return "joushu";
            case 4:
                $(".bugyouimg").css("border", "3px solid red");
                return "bugyou";
            case 5:
                $(".gizokuimg").css("border", "3px solid red");
                return "gizoku";
        }
    };
    
    
    /************** DETERMINE WINNER **************/
    var winner = function() {
        //tie
        if (playerHand == compHand) {
            $(".resultState").html("引き分け");
        //win
        } else {
          if ((playerHand == "shomin") && (compHand == "joushu")) {
            $(".resultState").html("あなたの勝ち!");
            playerWins++;
        } else if ((playerHand == "shomin") && (compHand == "bugyou")) {
            $(".resultState").html("あなたの勝ち!");
            playerWins++;
        } else if ((playerHand == "shonin") && (compHand == "shomin")) {
            $(".resultState").html("あなたの勝ち!");
            playerWins++;
        } else if ((playerHand == "shonin") && (compHand == "gizoku")) {
            $(".resultState").html("あなたの勝ち!");
            playerWins++;
        } else if ((playerHand == "joushu") && (compHand == "shonin")) {
            $(".resultState").html("あなたの勝ち!");
            playerWins++;
        } else if ((playerHand == "joushu") && (compHand == "bugyou")) {
            $(".resultState").html("あなたの勝ち!");
            playerWins++;
        } else if ((playerHand == "bugyou") && (compHand == "shonin")) {
            $(".resultState").html("あなたの勝ち!");
            playerWins++;
        } else if ((playerHand == "bugyou") && (compHand == "gizoku")) {
            $(".resultState").html("あなたの勝ち!");
            playerWins++;
        } else if ((playerHand == "gizoku") && (compHand == "shomin")) {
            $(".resultState").html("あなたの勝ち!");
            playerWins++;
        } else if ((playerHand == "gizoku") && (compHand == "joushu")) {
            $(".resultState").html("あなたの勝ち!");
            playerWins++;
        // loss
        } else {
            $(".resultState").html("あなたの負け");
            compWins++;
        }
        }
    };
    
    
    /************** GO **************/
    $(".go").on("click", function() {
        //if no option is picked
        if (playerHand == "") {
            $(".resultState").html("選択してください");
            $('.result').show();
            $(".result").animate({opacity: "1"}, 1500);
            $(".result").animate({opacity: "1"}, 1500);
            $(".result").animate({opacity: "0"}, 1500);
            $(".oedoOptions").animate({opacity: "0.1"}, 1500);
            $(".oedoOptions").animate({opacity: "0.1"}, 1500);
            $(".oedoOptions").animate({opacity: "1"}, 1500)
            setTimeout(function(){
                $('.result').hide();
            }, 4500)
        //runs the go button    
        } else {
            //calls a function to generate the computer's hand
            compHand = generateCompHand();

            //call function to determine winner
            winner();

            // logs result to console
            console.log("Player Hand is " + playerHand);
            console.log("Comp Hand is " + compHand);
            console.log("Player Wins is "+ playerWins);
            console.log("Comp Wins is "+ compWins);

            //if wins are less than 2
            if ((playerWins < 3) && (compWins < 3)) {
                //animte in result
                setTimeout(function(){
                    $('.result').show();
                    $(".result").animate({opacity: "1"}, 1500);
                    $(".result").animate({opacity: "1"}, 1500);
                    $(".result").animate({opacity: "0"}, 1500);
                    $(".oedoOptions").animate({opacity: "0.1"}, 1500);
                    $(".oedoOptions").animate({opacity: "0.1"}, 1500);
                    $(".oedoOptions").animate({opacity: "1"}, 1500)
                }, 500)

                //add win icons
                setTimeout(function(){
                    switch (playerWins) {
                        case 1:
                            $(".playCounter1").css("background-color", "#233656");
                            break;
                        case 2:
                            $(".playCounter2").css("background-color", "#233656");
                            break;
                        case 3:
                            $(".playCounter3").css("background-color", "#233656");
                            break;
                    }
                    switch (compWins) {
                        case 1:
                            $(".compCounter1").css("background-color", "#233656");
                            break;
                        case 2:
                            $(".compCounter2").css("background-color", "#233656");
                            break;
                        case 3:
                            $(".compCounter3").css("background-color", "#233656");
                            break;
                    }
                }, 1500)

                //round goes up by one
                round++;
                setTimeout(function(){
                    $(".roundNum").html(round);
                }, 4500)

                //reset values
                setTimeout(function(){
                    $(".shominimg").attr("src","img/main/shomin.png");
                    $(".shoninimg").attr("src","img/main/shonin.png");
                    $(".joushuimg").attr("src","img/main/joushu.png");
                    $(".bugyouimg").attr("src","img/main/bugyou.png");
                    $(".gizokuimg").attr("src","img/main/gizoku.png");
                    $(".shominimg").css("border", "3px solid #fff");
                    $(".shoninimg").css("border", "3px solid #fff");
                    $(".joushuimg").css("border", "3px solid #fff");
                    $(".bugyouimg").css("border", "3px solid #fff");
                    $(".gizokuimg").css("border", "3px solid #fff");
                    playerHand = "";
                }, 3000)
                setTimeout(function(){
                    $('.result').hide();
                }, 4500)
            
            //if wins are 2
            } else {
                //hide the GO button and show the REPLAY button
                $('.go').hide();
                $('.replay').show();
                
                //determine the winner
                if (playerWins >= 3) {
                    $(".resultState").html("あなたの勝ち越し!");
                } else {
                    $(".resultState").html("残念！負け越し");
                }
                
                //animate in result
                setTimeout(function(){
                    $('.result').show();
                    $(".result").animate({opacity: "1"}, 1500);
                    $(".result").animate({opacity: "1"}, 1500);
                    $(".oedoOptions").animate({opacity: "0.1"}, 1500);
                    $(".oedoOptions").animate({opacity: "0.1"}, 1500);
                }, 500)

                //add win icons
                setTimeout(function(){
                    switch (playerWins) {
                        case 1:
                            $(".playCounter1").css("background-color", "#233656");
                            break;
                        case 2:
                            $(".playCounter2").css("background-color", "#233656");
                            break;
                        case 3:
                            $(".playCounter3").css("background-color", "#233656");
                            break;
                    }
                    switch (compWins) {
                        case 1:
                            $(".compCounter1").css("background-color", "#233656");
                            break;
                        case 2:
                            $(".compCounter2").css("background-color", "#233656");
                            break;
                        case 3:
                            $(".compCounter3").css("background-color", "#233656");
                            break;
                    }
                }, 1500)

                //reset values
                setTimeout(function(){
                    $(".shominimg").attr("src","img/main/shomin.png");
                    $(".shoninimg").attr("src","img/main/shonin.png");
                    $(".joushuimg").attr("src","img/main/joushu.png");
                    $(".bugyouimg").attr("src","img/main/bugyou.png");
                    $(".gizokuimg").attr("src","img/main/gizoku.png");
                    $(".shominimg").css("border", "3px solid #fff");
                    $(".shoninimg").css("border", "3px solid #fff");
                    $(".joushuimg").css("border", "3px solid #fff");
                    $(".bugyouimg").css("border", "3px solid #fff");
                    $(".gizokuimg").css("border", "3px solid #fff");
                    playerHand = "";
                }, 3000);
            }
        }
    });
    
                
    /************** REPLAY **************/
    $(".replay").on("click", function() {
        //hide the REPLAY button and show the GO button
        $('.replay').hide();
        $('.go').show();
        
        //reset the values
        playerHand = "";
        compHand = "";
        round = 1;
        playerWins = 0;
        compWins = 0;
        $(".roundNum").html(round);
        
        //resets the win counters
        $(".playCounter1").css("background-color", "#cdd6d5");
        $(".playCounter2").css("background-color", "#cdd6d5");
        $(".playCounter3").css("background-color", "#cdd6d5");
        $(".compCounter1").css("background-color", "#cdd6d5");
        $(".compCounter2").css("background-color", "#cdd6d5");
        $(".compCounter3").css("background-color", "#cdd6d5");
        
        //clear results animation
        $(".result").animate({opacity: "0"}, 1500);
        $(".oedoOptions").animate({opacity: "1"}, 1500)
        setTimeout(function(){
            $('.result').hide();
        }, 1500)
    });         
  });
});
