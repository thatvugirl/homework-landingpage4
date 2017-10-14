// 


// I need to use a bunch of required functions.


$(document).ready(function(){
  

  $("#first-read-more-text").hide();
  $("#second-read-more-text").hide();
  $("#first-read-less-button").hide();
  $("#second-read-less-button").hide();
  
  $("#first-read-more-button").click(firstReadMore);
  
  function firstReadMore(e){
    e.preventDefault();
    $("#first-read-more-text").slideDown();
    $("#first-read-less-button").show();
    $("#first-read-more-button").hide();
  }
  
  $("#first-read-less-button").click(firstReadLess);
  
  function firstReadLess(e){
    e.preventDefault();
    $("#first-read-more-text").slideUp();
    $("#first-read-less-button").hide();
    $("#first-read-more-button").show();
  }
  
  $("#second-read-more-button").click(secondReadMore);
  
  function secondReadMore(e){
    e.preventDefault();
    $("#second-read-more-text").slideDown();
    $("#second-read-less-button").show();
    $("#second-read-more-button").hide();
  }
  
  $("#second-read-less-button").click(secondReadLess);
  
  function secondReadLess(e){
    e.preventDefault();
    $("#second-read-more-text").slideUp();
    $("#second-read-less-button").hide();
    $("#second-read-more-button").show();
  }

// (function(e){
//     e.preventDefault();
//     // Code goes here
// });


})