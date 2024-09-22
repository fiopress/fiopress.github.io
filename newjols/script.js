let count = 0;
let hover = 0;
let menu = document.getElementsByClassName('menu-item');
let menuText = document.getElementsByClassName('menu-link');
let welcome = document.getElementsByClassName('welcome');
let welcomesub = document.getElementsByClassName('welcomesub');
let fuck = document.getElementsByClassName('fuck');
var prim = '#ff4fd6'
let hiddenBox = document.getElementsByClassName('hiddenBox');
let credit = document.getElementsByClassName('credit');


const copys = document.querySelector(".copy");
const copyAlert = document.querySelector(".copyAlert");


const images = document.querySelectorAll('.slider span');
const sliderContainer = document.querySelector('slider-container');
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.leftBtn');
const nextBtn = document.querySelector('.rightBtn');
let footer = document.getElementsByClassName('footer');
let footerText = document.getElementsByClassName('footerText');


const shutterAni = [{
        opacity: 1
    },

    {
        opacity: 0,
        offset: 1
    }];

const timing = {
    duration: 900,
    iterations: 1
}


const logo = document.querySelector(".logo");

const logoAni = [{
        opacity: 1
    },
    {
        opacity: 0,
        offset: 1
    }];


const logoTiming = {
    duration: 1400,
    iteration: 1
}

function fadeLogo() {
    logo.animate(logoAni, logoTiming);
}



function Mobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (Mobile()) {
    console.log('soso')

} else {
    menuText[0].addEventListener('mouseover', () => {
        fuck[0].style.visibility = 'visible'
        fuck[0].style.opacity = '1';

        menuText[0].style.color = 'var(--prim)'
    })

    menu[0].addEventListener('mouseout', () => {
        fuck[0].style.visibility = 'hidden'
        menuText[0].style.color = 'var(--text)'


    })
    menu[1].addEventListener('mouseover', () => {
        fuck[0].style.visibility = 'visible'
        fuck[0].style.opacity = '1';

        menuText[1].style.color = 'var(--prim)'

    })

    menu[1].addEventListener('mouseout', () => {
        fuck[0].style.visibility = 'hidden'
        menuText[1].style.color = 'var(--text)'

    })
    menu[2].addEventListener('mouseover', () => {
        fuck[0].style.visibility = 'visible'
        fuck[0].style.opacity = '1';

        menuText[2].style.color = 'var(--prim)'

    })

    menu[2].addEventListener('mouseout', () => {
        fuck[0].style.visibility = 'hidden'
        menuText[2].style.color = 'var(--text)'

    })
    menu[3].addEventListener('mouseover', () => {
        fuck[0].style.visibility = 'visible'
        fuck[0].style.opacity = '1';

        menuText[3].style.color = 'var(--prim)'

    })

    menu[3].addEventListener('mouseout', () => {
        fuck[0].style.visibility = 'hidden'
        menuText[3].style.color = 'var(--text)'

    })

    footer[0].addEventListener('mouseover', () => {
        fuck[0].style.visibility = 'visible'
        fuck[0].style.opacity = '1';

        footerText[0].style.color = 'var(--prim)'

    })

    footer[0].addEventListener('mouseout', () => {
        fuck[0].style.visibility = 'hidden'
        footerText[0].style.color = 'var(--text)'

    })



}


function copy() {
    window.navigator.clipboard.writeText(copyAlert.textContent).then(() => {
        alert("초대글이 복사되었습니다 핫. 압도적 감사..");
    });
}




const zzals = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.png", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.png"];

var zzalLen = zzals.length
var num = Array.from({
    length: zzalLen
}, (item, index) => index);
num.sort(() => Math.random() - 0.5);



var chosenImg = zzals[Math.floor(Math.random() * zzals.length)];

var windowWidth = document.body.clientWidth;
var windowHeight = document.body.clientHeight;
var mouseMoveCounter = 0

setInterval(() => mouseMoveCounter++, 1000);


document.body.addEventListener('mousemove', () => {
    mouseMoveCounter = 0;
})
document.body.addEventListener('click', () => {
    mouseMoveCounter = 0;
})

window.addEventListener("resize", function () {
    windowWidth = document.body.clientWidth;
    windowHeight = document.body.clientHeight;
})


const zzal = document.querySelector(".zzal")

function zzalcount() {

    const btnImg = document.createElement("img");
    btnImg.className = 'zzals zzal' + mouseMoveCounter
    zzal.insertAdjacentElement("afterbegin", btnImg);

    chosenImg = zzals[num[mouseMoveCounter % zzalLen]];
    btnImg.src = `./data/profile/${chosenImg}`;

    btnImg.style.top = Math.random() * windowHeight + "px";
    btnImg.style.left = Math.random() * windowWidth + "px";

}


var intervalCount = setInterval(zzalcount, 1000);
var message = document.querySelector('.messageText')
var rest = document.querySelector('.rest')
var joke = document.querySelector('.joke')
var jokenum = 0;
var waitNum = 16;



setInterval(function () {
    var counts = mouseMoveCounter




    if (counts >= waitNum) {
        zzal.style.visibility = "visible"
        message.style.display = "none"
        rest.style.display = "block"
        rest.innerHTML = "아니 자네 지금 넋놓고 있을 때인가?"
        jokenum = 1
    }


    if (counts < waitNum) {
        zzal.style.visibility = "hidden"
        while (zzal.firstChild) {

            zzal.removeChild(zzal.firstChild);

        }
        message.style.display = "block"
        rest.style.display = 'none';

    }

    if (jokenum == 1 && counts < 3) {
        rest.style.display = 'none';
        message.style.display = 'none';
        joke.style.display = 'block';


        joke.innerHTML = "넝~담~"

    }
    if (counts == 3) {
        joke.style.display = 'none';
        message.style.display = 'block';
        rest.style.display = 'none';

        jokenum = 0;
    }

    if (counts == 60) {

        zzal.style.visibility = "hidden"
        while (zzal.firstChild) {

            zzal.removeChild(zzal.firstChild);

        }

        counts = 0;
        mouseMoveCounter = 0;
    }




}, 100)







let current = 1;
var imgSize = images[0].clientWidth;

window.addEventListener("resize", function () {
    imgSize = images[0].clientWidth;
})



slider.style.transform = `translateX(${-imgSize}px)`;


slider.addEventListener('transitionend', () => {
    if (images[current].classList.contains('first-img')) {
        slider.style.transition = 'none';
        current = images.length - 2;
        slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
    if (images[current].classList.contains('last-img')) {
        slider.style.transition = 'none';
        current = images.length - current;
        slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
})


const next = () => {
    if (current >= images.length - 1) return;
    slider.style.transition = '400ms ease-in-out transform';
    current++;
    slider.style.transform = `translateX(${-imgSize * current}px)`;
}


let auto = setInterval(next, 2000);

slider.addEventListener('mouseleave', () => {
    auto = setInterval(next, 2000)
})

slider.addEventListener('mouseenter', () => {
    clearInterval(auto)
})

prevBtn.addEventListener('click', () => {
    if (current <= 0) return;
    clearInterval(auto);
    auto = setInterval(next, 2000);

    slider.style.transition = '400ms ease-in-out transform';
    current--;
    slider.style.transform = `translateX(${-imgSize * current}px)`;



})


nextBtn.addEventListener('click', () => {
    if (current >= images.length - 1) return;
    slider.style.transition = '400ms ease-in-out transform';
    current++;
    slider.style.transform = `translateX(${-imgSize * current}px)`;
    clearInterval(auto);

    auto = setInterval(next, 2000);


})
