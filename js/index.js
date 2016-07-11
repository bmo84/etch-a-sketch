// Author: Brandon Martinez
// Last Modified: 7/10/2016
// Description: Etcha a sketch program using javascript and jQuery

$(document).ready(function() {

  // draw grid of div's based on user input
  var DrawGrid = function(size) {
      // first make sure grid is clear
      $(".container-grid").empty();

      var gridSize = 960; //size of grid
      var blockSize = (gridSize / size) - 2; //account for added padding from borders

      for (var i = size; i > 0; i--) {

        for (var j = size; j > 0; j--) {

          $('.container-grid').append('<div class="grid"></div>');
          $('.container-grid div:last-child').css({
            /*"float": "left",*/
            "border": "#000000 solid thin",
            "height": blockSize,
            "width": blockSize
          });
        } //end inner for
        $('.container-grid').append('<div style="clear: left;"</div>');
      } // end outer for
    } // end DrawGrid
  DrawGrid(16); // create default grid

  // handle select grid button
  $('.set-grid').click(function() {

    //get size
    var input = prompt("Enter grid size: ");
    // clear grid
    $('.container-grid').empty();
    DrawGrid(input); // draw grid
  }); // end click function

  //handle color selector
  $('select[name=dropdown]').change(function(){
    if ($(this).val() == 0 || $(this).val() == 1){
      $('.container-grid').delegate("div", "mouseenter", function(){
        $(this).css("background-color", "#000000");
      });
    }
    else if ($(this).val() == 2){
      $('.container-grid').delegate("div", "mouseenter", function(){
        $(this).css("background-color", "#00ff00");
      });
    }
    else if ($(this).val() == 3){
      $('.container-grid').delegate("div", "mouseenter", function(){
        $(this).css("background-color", "#0000ff");
      });
    }
    else {
      $('.container-grid').delegate("div", "mouseenter", function() {
        var newColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        $(this).css("background-color", newColor);
      });
    } // end if else
  }); // end color selector function


  //clear grid
  $(".clear-grid").click(function() {
    $(".container-grid div").css("background-color", "white");
  });

}); // end document.ready function