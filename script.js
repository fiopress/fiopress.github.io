let count = 0;
let hover = 0;
let menu = document.getElementsByClassName('menu-link');
let welcome = document.getElementsByClassName('welcome');
let welcomesub = document.getElementsByClassName('welcomesub');



welcome[0].addEventListener('mouseover', () => {
    welcome[0].src = "./data/joke.png"
    welcomesub[0].innerText = "넝~담~"
})

welcome[0].addEventListener('mouseout', () => {
    welcome[0].src = "./data/welcome.png"
    welcomesub[0].innerText = "자네 지금 웃음이 나오나?"
})

for (i = 0; i < 4; i++) {
    menu[i].addEventListener('mouseover', () => {
        hover = 1;
        count +=1
    });

    menu[i].addEventListener('mouseout', () => {
        hover = 0;
    });
}


setInterval(function () {
    
    document.body.style.cursor = "url(./data/" + count % 7 + ".png) 22 22, auto";
    for (i = 0; i < 4; i++) {
        menu[i].style.cursor = "url(./data/" + count % 7 + ".png) 22 22, auto"
    }
}, 10);


