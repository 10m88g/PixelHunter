const main = document.querySelector(`#main`);
const templateScreens = document.querySelectorAll(`template`);

let screenIsOpen = 0;
const countScreen = function(num) {
    if (screenIsOpen < 0) screenIsOpen = 8;
    if (screenIsOpen > 8) screenIsOpen = 0;
    return num
};

const rederScreen = function(index) {
    const screen = templateScreens[index].content
        .querySelector(`section`)
        .cloneNode(true);
    main.appendChild(screen);
};

const deleteScreen = function() {
    const mainChildren = main.children;
    [].forEach.call(mainChildren, (it) => {
        main.removeChild(it);
    })
};

// const Screen = {
//     INTRO: 0,
//     GREETING: 1,
//     RULES: 2,
//     GAME_1: 3,
//     GAME_2: 4,
//     GAME_3: 5,
//     STATES: 6,
//     MODAL_ERROR: 7,
//     MODAL_COLFIRM: 8
// };

const Code = {
    ARROW_LEFT: 37,
    ARROW_RIGHT: 39
};

const onKeyDownShowScreen = function(evt) {

    if (evt.keyCode === Code.ARROW_RIGHT) {
        countScreen(screenIsOpen++);
        deleteScreen();
        rederScreen(screenIsOpen);
    }
    if (evt.keyCode === Code.ARROW_LEFT) {
        countScreen(screenIsOpen--);
        deleteScreen();
        rederScreen(screenIsOpen);
    }
};

rederScreen(screenIsOpen);
document.addEventListener(`keydown`, onKeyDownShowScreen);

// ===========================================================
const templateArrow = `<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
</div>`;

document.body.insertAdjacentHTML("beforeend", templateArrow);

const onClickLeftArrow = function(evt) {
    countScreen(screenIsOpen--);
    deleteScreen();
    rederScreen(screenIsOpen);
};

const onClickRightArrow = function(evt) {
    countScreen(screenIsOpen++);
    deleteScreen();
    rederScreen(screenIsOpen);
};

const onLoadBody = function() {
    const arrowButtons = document.body.querySelectorAll(`.arrows__btn`);
    arrowButtons[0].addEventListener(`click`, onClickLeftArrow);
    arrowButtons[1].addEventListener(`click`, onClickRightArrow);
};

window.addEventListener(`load`, onLoadBody);
