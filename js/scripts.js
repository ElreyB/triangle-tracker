function resetFills(){
  $("#side1, #side2, #side3").val("");
}

$(document).ready(function(){
  $("#triForm").submit(function(event){
    event.preventDefault();

    var side1Input = parseInt($("#side1").val());
    var side2Input = parseInt($("#side2").val());
    var side3Input = parseInt($("#side3").val());

    if (isNaN(side1Input)) {
      $(".side1").addClass("has-error");
      $(".empty").show();
      return;
    } else if (isNaN(side2Input)) {
      $(".side2").addClass("has-error");
      $(".empty").show();
      return;
    } else if (isNaN(side3Input)) {
      $(".side3").addClass("has-error");
      $(".empty").show();
      return;
    }

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
    resetFills();
    $(".thumbnail").hide();
    $("#triForm, .page-header, .panel").show();
  });
});
