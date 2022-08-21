// const container = document.querySelector('.container'),
//     slider = Array.from(document.querySelectorAll('.slider'));

// let isDragging = false,
//     startPos = 0,
//     currentTranslate = 0,
//     prevTranslate = 0,
//     animationID = 0,
//     currentIndex = 0;

// slider.forEach((slide, index) => {

//     const the_Img = slide.querySelector('img');

//     the_Img.addEventListener('dragstart', (e) => e.preventDefault());

//     // Touch Event
//     slide.addEventListener('touchstart', touchStart(index));
//     slide.addEventListener('touchend', touchEnd);
//     slide.addEventListener('touchmove', touchMove);


//     // Mouse Event
//     slide.addEventListener('mousedown', touchStart(index));
//     slide.addEventListener('mouseup', touchEnd);
//     slide.addEventListener('mouseleave', touchEnd);
//     slide.addEventListener('mousemove', touchMove);

// });

// window.oncontextmenu = function(event) {

//     event.preventDefault();
//     event.stopPropagation();
//     return false;

// };

// function touchStart(index) {

//     return function(event) {

//         isDragging = true;

//         startPos = getPositionX(event);

//         currentIndex = index;

//         animationID = requestAnimationFrame(animation);

//         container.classList.add('grabbing');

//     };
// };

// function touchEnd() {

//     isDragging = false;

//     cancelAnimationFrame(animation);

//     const movedBy = currentTranslate - prevTranslate;

//     if (movedBy < -100 && currentIndex < slider.length - 1) {

//         currentIndex += 1;

//     }

//     if (movedBy > 100 && currentIndex > 0) {

//         currentIndex -= 1;

//     };

//     setPositionByIndex();

//     container.classList.remove('grabbing');

// };

// function touchMove(event) {

//     if (isDragging) {

//         const currentPosition = getPositionX(event);

//         currentTranslate = prevTranslate + currentPosition - startPos;

//     };
// };

// function getPositionX(event) {

//     return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;

// }

// function animation() {

//     setSLiderPosition();

//     if (isDragging) requestAnimationFrame(animation);

// }

// function setSLiderPosition() {

//     container.style.transform = `translateX(${currentTranslate}px)`;

// };

// function setPositionByIndex() {

//     currentTranslate = currentIndex * -window.innerWidth;

//     prevTranslate = currentTranslate;

//     setSLiderPosition();

// }

const container = document.querySelector('.container'),
    slider = Array.from(document.querySelectorAll('.slider'));

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0;

slider.forEach((slide, index) => {

    const the_Img = slide.querySelector('img');

    the_Img.addEventListener('dragstart', (e) => { e.preventDefault() });

    // Touch Event
    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);

    // Mouse Event
    slide.addEventListener('mousedown', touchStart(index));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mouseleave', touchEnd);
    slide.addEventListener('mousemove', touchMove);

});

function touchStart(index) {

    return function(event) {

        isDragging = true;

        startPos = getPositionX(event);

        currentIndex = index;

        animationID = requestAnimationFrame(animation);

        container.classList.add('grabbing');

    };
};

function touchEnd() {

    isDragging = false;

    cancelAnimationFrame(animation);

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < slider.length - 1) {

        currentIndex++;

    };

    if (movedBy > 100 && currentIndex > 0) {

        currentIndex--;

    };

    setPositionByIndex();

    container.classList.remove('grabbing');

};

function touchMove(event) {

    if (isDragging) {

        const currentPosition = getPositionX(event);

        currentTranslate = prevTranslate + currentPosition - startPos;

    };

};

function getPositionX(event) {

    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;

};

function animation() {

    thePositionTranslate();

    if (isDragging) requestAnimationFrame(animation);

};

function thePositionTranslate() {

    container.style.transform = `translateX(${currentTranslate}px)`;

};

function setPositionByIndex() {

    currentTranslate = currentIndex * -window.innerWidth;

    prevTranslate = currentTranslate;

    thePositionTranslate();

};