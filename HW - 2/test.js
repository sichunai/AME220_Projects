var easingsList = [
  "ease",
  "linear",
  "ease-in",
  "ease-out",
  "ease-in-out",
"swing",
"easeInQuad",
"easeOutQuad",
"easeInOutQuad",
"easeInCubic",
"easeOutCubic",
"easeInOutCubic",
"easeInQuart",
"easeOutQuart",
"easeInOutQuart",
"easeInQuint",
"easeOutQuint",
"easeInOutQuint",
"easeInSine",
"easeOutSine",
"easeInOutSine",
"easeInExpo",
"easeOutExpo",
"easeInOutExpo",
"easeInCirc",
"easeOutCirc",
"easeInOutCirc",
"easeInElastic",
"easeOutElastic",
"easeInOutElastic",
"easeInBack",
"easeOutBack",
"easeInOutBack",
"easeInBounce",
"easeOutBounce"
];

var moveRight = function(){
  var d = parseInt($("#delay").val());
  for (i=0; i<=34; i++)
  {
    moveBoxRight(i, easingsList[i], d);
  }

}

var moveLeft = function(){
  var d = parseInt($("#delay").val());
  for (i=0; i<=34; i++)
  {
    moveBoxLeft(i, easingsList[i], d);
  }

}

var hideBoxes = function(){
  var selection = parseInt($("#jqoption").val())
  if(selection == 0){
    $(".button").stop().fadeOut();
  }
  else if(selection == 1){
    $(".button").stop().fadeToggle();
  }
  else if(selection == 2){
    $(".button").stop().slideToggle();
  }
  else if(selection == 3){
    $(".button").stop().toggle();
  }
  else if(selection == 4){
    $(".button").stop().slideUp();
  }
  else if(selection == 5){
    $(".button").stop().hide();
  }
  else if(selection == 6){
    $(".button").stop().animate({opacity:0});
  }
 // selChanged();
}

var showBoxes = function(flag){
  var selection = parseInt($("#jqoption").val())
  if(selection == 0){
    $(".button").stop().fadeIn();
  }
  if(selection == 1){
    $(".button").stop().fadeToggle();
  }
  if(selection == 2){
    $(".button").stop().slideToggle();
  }
  if(selection == 3){
    $(".button").stop().toggle();
  }
  if(selection == 4){
    $(".button").stop().slideDown();
  }
  if(selection == 5){
    $(".button").stop().show();
  }
  if(selection == 6){
    $(".button").stop().animate({opacity:1});
  }
  if(flag) return;
  selChanged();
}

var selChanged = function(){
  var selection = parseInt($("#iscss").val())
  if(selection == 1){
    showBoxes(true);
    $("#hideShowButton").html("Hide Boxes");
    setTimeout(selChanged_Aux, 1000)
  }
  else{
    $("#endColor").hide();
    $(".button").show();
    $(".cssonly").stop().hide();
    $("#hideShowButton,#jqoption").show();
  }
}

var selChanged_Aux = function()
{
    $("#endColor").show();
    $(".button").hide();
    $(".cssonly").stop().show();
    $("#hideShowButton,#jqoption").hide();
}

var moveBoxRight= function(n, easing, duration)
{
  var jq = $("#iscss").val() == "0";
  var id = "#button" + n.toString();
  var ec = $("#endColor").val();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  if(jq){
    if(n < 5) return;
    $(id).animate({"margin-left":pageWidth-boxWidth + "px"}, duration, easing);
  }
  else{
    if(n > 5) return;
    $(".class-change").css("margin-left", pageWidth-boxWidth + "px");
    $(id).css("-webkit-transition-duration", duration + "ms");
    $(id).css("background-color", ec);
    $(id).toggleClass("class-change");
  }
}

var moveBoxLeft= function(n, easing, duration)
{
  var jq = $("#iscss").val() == "0";
  var ec = $("#endColor").val();
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  if(jq){
    if(n < 5) return;
    $(id).animate({"margin-left" : "0px"}, duration, easing);
  }
  else{
    if(n > 5) return;
    $(".class-change").css("margin-left", "0px");
    $(id).css("-webkit-transition-duration", duration + "ms");
    $(id).css("background-color", ec);
    $(id).toggleClass("class-change");
  }
}


var toggleBoxes = function()
{
  var selection = $("#hideShowButton").html();
  if(selection == "Hide Boxes"){
    hideBoxes();
    $("#hideShowButton").html("Show Boxes");
  }
  else{
    showBoxes();
    $("#hideShowButton").html("Hide Boxes");
  }
}


var moveBoxes = function()
{
  var selection = $("#LeftRightButton").html();
  if(selection == "Move Right")
  {
    moveRight();
    $("#LeftRightButton").html("Move Left");
  }
  else{
    moveLeft();
    $("#LeftRightButton").html("Move Right");
  }
}

var init = function()
{
  selChanged();
  $(".button").each(doSomething);
}

var doSomething = function(index){
  $("#button" + index).html(easingsList[index]);
}
