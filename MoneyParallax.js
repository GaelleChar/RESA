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





btn.addEventListener('click',function() {
    //const index= React.useRef();
    const firstName = document.getElementById(`first-name`);
    const lastName = document.getElementById(`last-name`);
    const email = document.getElementById(`email`);
    const phoneNum = document.getElementById(`phone-number`);
    const subjects = [firstName, lastName, email, phoneNum];
    
    var index = 0;
    var scrollTo = subjects[index];
    scrollTo.scrollIntoView({behavior: 'smooth'});

    for(var incrementPos = 0; incrementPos < 3; incrementPos++){
        btn.id = `#o${incrementPos}`;
        console.log(btn.id)
        if(btn.id =`#o${incrementPos}`){
            index++;
            console.log(index)
            scrollTo = subjects[index];
            console.log(scrollTo)
            scrollTo.scrollIntoView({behavior: 'smooth'});
        }
        //scrollTo = subjects[index];
    }
    //console.log(scrollTo)
    //return scrollTo.scrollIntoView({behavior: 'smooth'});
        
});

