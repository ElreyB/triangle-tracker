$(document).ready(function(){
  $("#triForm").submit(function(event){
    event.preventDefault();
    var side1Input = parseInt($("#side1").val());
    var side2Input = parseInt($("#side2").val());
    var side3Input = parseInt($("#side3").val());

    if (isNaN(side1Input)) {
      $(".side1").addClass("has-error");
      $("#empty1, .empty").show();
      return;
    } else if (isNaN(side2Input)) {
      $(".side2").addClass("has-error");
      $("#empty2, .empty").show();
      return;
    } else if (isNaN(side3Input)) {
      $(".side3").addClass("has-error");
      $("#empty3, .empty").show();
      return;
    }

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
// WIP reset button to reset span tags as well
  // $("button.reset").click(function()){
  //   $(".span").hide();
  // };

  $(".return").click(function(){
    $(".thumbnail").hide();
    $("#triForm, .page-header, .panel").show();
  });
});
