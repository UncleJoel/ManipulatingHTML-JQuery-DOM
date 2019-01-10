// #1
let $button = $("<button>Click!</button>");
let form = $("form");
$button.appendTo("form");
$button.click(function (){
    alert("Hello Human!")
});
// #1

// #2
let txtbtn = $("#txtbtn");
$(txtbtn).click(function (e) {
    e.preventDefault();
let text = $("#txtbox").val();
alert(text);
});
// #2

// #3
let div = $("#div");
div.mouseenter(function(){
    $("#div").css({"backgroundColor": "blue"});
 div.mouseleave(function(){
     $("#div").css({"backgroundColor": "red"})
 });  
});
  
// #3

// #4
let par = $("#par");
par.click( function() {
    let allchar = "0123456789ABCDEF";
    let randomcol = "";
    for (let i = 0; i < 6; i++) {
        randomcol += allchar[Math.floor(Math.random() * 16)];
    }
    $(par).css("color", "#" + randomcol);
});

// #5
let button2 = $("#button2");
let div2 = $("#div2");
button2.click( function() {
    let span = $("<span>Joel</span>");
    $(span).appendTo(div2);
});
// #5

let friends = ["Josh","Kelsy","Nathan","Lauren","Mike","Allison","David","Ellie","Emma","Stone"];
let button3 = $("#button3");
let ul = $("#ul");
$(button3).click(function (){
    for (let i = 0; i < friends.length; i++) {
        let li = $("<li>" + (friends[i]) + "</li>");
        $(li).appendTo(ul);
    }
});
