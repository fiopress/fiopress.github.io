var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');

var ein = document.getElementById('ein');
var zwei = document.getElementById('zwei');
var drei = document.getElementById('drei');
var vier = document.getElementById('vier');


var presentation = document.getElementsByClassName('presentation');
var ptContainer = document.getElementsByClassName('pt-container');


var imgList = [one, two, three, four]
var enList = [ein, zwei, drei, vier]

var a = setInterval(scrollEvent, 100);
var originY = 0;
var currentY = 0;
var diff = 0





window.addEventListener('scroll', () => {
    currentY = window.scrollY
    diff = Math.abs(originY - currentY)
    console.log(diff)
    if (diff > 6) {
        for (i = 0; i < presentaion.length; i++) {
            presentaion[i].style.opacity = 0;

        }

        for (i = 0; i < enList.length; i++) {

            imgList[i].style.color = 'var(--text)'
            enList[i].style.color = 'var(--scnd)'
        }

    }


});


function scrollEvent() {
    if (currentY == window.scrollY) {
        originY = window.scrollY
    }

}




let getSiblings = function (e) {
    let siblings = [];
    if (!e.parentNode) {
        return siblings;
    }
    let sibling = e.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};


function presentationOpen(e) {

    var className = e.target.id;

    for (i = 0; i < enList.length; i++) {
        if (className == imgList[i].id) {
            e.target.style.color = 'var(--prim)'

        } else if (className == enList[i].id) {
            e.target.style.color = 'var(--prim)'
            className = imgList[i].id
        }

    }


    for (i = 0; i < presentation.length; i++) {
        presentation[i].style.visibility = 'visible';
        presentation[i].style.opacity = '1';

    }

    document.getElementsByClassName(className)[0].style.visibility = 'visible'

}

function presentationClosed(e) {
    var className = e.target.id;

    for (i = 0; i < enList.length; i++) {
        if (className == imgList[i].id) {
            e.target.style.color = 'var(--text)'

        } else if (className == enList[i].id) {
            e.target.style.color = 'var(--scnd)'
            className = imgList[i].id
        }
    }

    for (i = 0; i < presentation.length; i++) {
        presentation[i].style.visibility = 'hidden'
    }

    document.getElementsByClassName(className)[0].style.visibility = 'hidden'

}


function presentationTouch(e) {
    var className = e.target.id;

    let siblings = getSiblings(document.getElementsByClassName(className)[0]);


    for (i = 0; i < enList.length; i++) {
        imgList[i].style.color = 'var(--text)'
        enList[i].style.color = 'var(--sncd)'

        if (className == imgList[i].id) {
            e.target.style.color = 'var(--prim)'
        } else if (className == enList[i].id) {
            e.target.style.color = 'var(--prim)'
            className = imgList[i].id
        }
    }

    for (i = 0; i < presentation.length; i++) {
        presentation[i].style.visibility = 'visible';
        presentation[i].style.opacity = '1';
        console.log('soso')
    }
    for (i = 0; i < siblings.length; i++) {
        siblings[i].style.visibility = 'hidden'
    }

    document.getElementsByClassName(className)[0].style.visibility = 'visible'

}

function focusOut() {
    console.log('soso')

    for (i = 0; i < enList.length; i++) {
        imgList[i].blur()
        enList[i].blur()

    }
}

function detectMobileDevice(agent) {
    const mobileRegex = [
    /Android/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ]
    return mobileRegex.some(mobile => agent.match(mobile))
}
const isMobile = detectMobileDevice(window.navigator.userAgent)
if (isMobile) {


    for (i = 0; i < imgList.length; i++) {

        imgList[i].addEventListener('touchstart', presentationOpen)
        imgList[i].addEventListener('touchend', presentationClosed)
        enList[i].addEventListener('touchstart', presentationOpen)
        enList[i].addEventListener('touchend', presentationClosed)
    }

    
} else {
    for (i = 0; i < imgList.length; i++) {

        imgList[i].addEventListener('mouseover', presentationOpen)
        imgList[i].addEventListener('mouseout', presentationClosed)
        enList[i].addEventListener('mouseover', presentationOpen)
        enList[i].addEventListener('mouseout', presentationClosed)
    }


}
