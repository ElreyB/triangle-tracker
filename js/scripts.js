$(document).ready(function(){
  $("#triForm").submit(function(event){
    event.preventDefault();
    var sides = ["1", "2", "3"];

    var sidesInput = sides.map(function(side){
      var sideInput = parseInt($("#side" + side).val());

      if (isNaN(sideInput)) {
        $(".side" + side).addClass("has-error");
        $("#empty" + side + ", .empty").show();
        return;
      }
    });


  $(".empty, #empty3, #empty2, #empty1").hide();


  $("#triForm, .thumbnail, .panel, .page-header").hide();

    var equilateral = (side1Input === side2Input) && (side2Input === side3Input);
    var isosceles = (side1Input === side2Input) || (side1Input === side3Input) || (side2Input === side3Input);
    var scalene = (side1Input !== side2Input) && (side1Input !== side3Input) && (side2Input !== side3Input);
    var nonTriangle = (side1Input + side2Input) <= side3Input || (side1Input + side3Input) <= side2Input || (side2Input + side3Input) <= side1Input;

    if (equilateral) {
      $(".all-equal").show();
    } else if (nonTriangle) {
      $("#triForm, .page-header, .non-triangle, .panel").show();
    } else if (scalene) {
      $(".no-equal").show();
    } else if (isosceles) {
      $(".two-equal").show();
    }
  });

  $(".reset").click(function(){
    $(".help-inline, .empty, #empty3, #empty2, #empty1").hide();
    $(".has-error").removeClass();
  });

  $(".return").click(function(){
    $(".thumbnail").hide();
    $("#triForm, .page-header, .panel").show();
  });
});
