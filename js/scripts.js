$(document).ready(function(){
  $("#triForm").submit(function(event){
    var side1Input = parseInt($("#side1").val());
    var side2Input = parseInt($("#side2").val());
    var side3Input = parseInt($("#side3").val());
// for debugging
    console.log(side1Input);
    console.log(side2Input);
    console.log(side3Input);
    $("#triForm, thumbnail, .panel").hide();
// for debugging
    var equilateral = (side1Input === side2Input) && (side2Input === side3Input);

    // console.log(equilateral);

    if (equilateral) {
      $(".equal").show();
    }
      event.preventDefault();
  });
});
