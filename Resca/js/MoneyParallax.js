/*

like a downwards Carousel
after clicking enter
hide all info on screen
display new question 

Can't scroll
until you hit enter/put info

*/
/*
const parallax = document.getElementById;
//gonna be a Enter function
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    console.log('Offset: ' + offset);
    //to move our image
    console.log('offset * 0.7' + offset * 0.7)
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})
*/
let $ = selector => document.querySelector(selector);
let $$ = selector => document.querySelectorAll(selector);
const btn = $(`button`);


//Scrolling into display

const firstName = document.getElementById(`first-name`);
const lastName = document.getElementById(`last-name`);
const email = document.getElementById(`email`);
const phoneNum = document.getElementById(`phone-number`);
const subjects = [firstName, lastName, email, phoneNum];

var incrementPos = 0;
var index = 0;

document.getElementById(`o${incrementPos}`).addEventListener("click", function() {
    index++;
    incrementPos++;
    scrollTo = subjects[index];
    console.log(scrollTo);
    scrollTo.scrollIntoView({behavior: 'smooth'});
});

