import { renderScreen, showScreen } from './../untils.js';
import greetingScreen from './greeting.js';

const introTemplate = `<section class="intro">
  <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>`;

const introScreen = renderScreen(introTemplate);

const onClickStar = () => {
    showScreen(greetingScreen);
};

const star = introScreen.querySelector(`.intro__asterisk`);
star.addEventListener(`click`, onClickStar);

export default introScreen;
