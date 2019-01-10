document.addEventListener("DOMContentLoaded", function () {

    //create button and txt box with alert
    var button = document.createElement("button");
    var text = document.createTextNode("Click Me")
    button.appendChild(text);
    let form = document.getElementById('form');
    form.appendChild(button);

    button.addEventListener('click', function () {
        alert("yo!");
    });

    document.getElementById('txtbtn').addEventListener('click', textalert);

    function textalert(e) {
        e.preventDefault();
        var tex = document.getElementById('txtbox').value;
        alert(tex);
    };

    // create div that has mouse enter and mouse leave
    let div = document.getElementById("div");
    div.addEventListener("mouseenter", function () {
        div.style.backgroundColor = "blue";
        div.addEventListener("mouseleave", function () {
            div.style.backgroundColor = "red";
        });
    })

    // <p> that changes random color when clicked
    let color = ['blue', 'green', 'yellow', 'purple', 'aqua', 'pink', 'red', 'orange'];

    function getRandomColor() {
        let randomColor = color[Math.floor(Math.random() * color.length)];
        return randomColor
    };

    let par = document.getElementById('par');
    par.addEventListener('click', function () {
        let randomColor = getRandomColor();
        par.style.color = randomColor;

    });

    //button that adds a span
    let button2 = document.getElementById('button2');
    let div2 = document.getElementById('div2');
    button2.addEventListener('click', function(){
        let span = document.createElement('span');
        let text = document.createTextNode("Joel");
        div2.appendChild(span);
        span.appendChild(text);
    })

    //array of friends that appear with button

    let friends = ["Josh","Kelsy","Nathan","Lauren","Mike","Stone","David","Allison","Ellie","Emma"];
    let button3 = document.getElementById('button3');
    let ul = document.getElementById('ul');
    button3.addEventListener('click', function(){
        for (let i = 0; i < friends.length; i++) {
            let li = document.createElement('li');
            let name = document.createTextNode(friends[i]);
            li.appendChild(name);
            ul.appendChild(li);
        }
    })







});