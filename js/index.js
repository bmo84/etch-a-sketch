/*********************************************
*Author: Brandon Martinez
* Last Modified: 7/14/2016
* Description: Etcha a sketch  using JQuery and *Javascript
***********************************************/


  /********************************************
  *Function: drawGrid
  *Purpose: Calculates grid size determined by 
  *the user
  *********************************************/
  var drawGrid = function(size) {
      // first make sure grid is clear
      $(".container-grid").empty();
      //pixel size of grid container
      var gridSize = 384; 
      //calculate dimensions of each block
      var blockSize = (gridSize / size);

      //for loops appends the grid blocks one row at a time
      for (var i = size; i > 0; i--) {

        for (var j = size; j > 0; j--) {

          $('.container-grid').append('<div class="grid"></div>');
          $('.container-grid div:last-child').css({
            "height": blockSize,
            "width": blockSize
          });
        } //end inner for

      } // end outer for
    } // end drawGrid function
  
  /********************************************
  *Function: JQuery change function
  *Purpose: When the user makes a selection, call 
  * drawGrid with the approprate value
  *********************************************/
  $('select[name=grid-dropdown]').change(function(){
    if ($(this).val() == 16){
      drawGrid(16);
    }
    else if($(this).val() == 32){
      drawGrid(32);
    }
    else if($(this).val() == 64){
      drawGrid(64);
    }
  });
  
   /********************************************
  *Function: JQuery change function (color selector)
  *Purpose: When the user selects a color 
  * change the color of the hover effect
  *********************************************/
  // handle color selector
  $('select[name=color-dropdown]').change(function() {
    if ($(this).val() == 0) {
      $('.container-grid').delegate("div", "mouseenter", function() {
        $(this).css("background-color", "#ffebee");
      });
    }
    else if ($(this).val() == 1) {
      $('.container-grid').delegate("div", "mouseenter", function() {
        $(this).css("background-color", "#424242");
      });
      
    } else if ($(this).val() == 2) {
      $('.container-grid').delegate("div", "mouseenter", function() {
        $(this).css("background-color", "#00ff00");
      });
    } else if ($(this).val() == 3) {
      $('.container-grid').delegate("div", "mouseenter", function() {
        $(this).css("background-color", "#0000ff");
      });
    } else if ($(this).val() == 4) {
      $('.container-grid').delegate("div", "mouseenter", function() {
        var newColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        $(this).css("background-color", newColor);
      });
    } // end if else
  }); // end color selector function

   /********************************************
  *Function: Clear Grid Button Event handler
  *Purpose: Clears the grids colors to default
  *********************************************/
  $(".clear-grid").click(function() {
    $(".container-grid div").css("background-color", "#e0e0e0");
  }); // end clear grid function

   /***************************************
   *Function: Main
   *Purpose: When the browser has finished loading
   * Call a default grid size and color
   ****************************************/
  // draw default grid size
  drawGrid(16);

  // default color
  $('.container-grid').delegate("div", "mouseenter", function() {
    $(this).css("background-color", "#000000");
  }); // end default color