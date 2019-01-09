import "../sass/styles.scss";

import constants from './constants';
import controller from './controller/controller';

const cssClasses =constants.cssClasses;
const displayElem = document.querySelector(cssClasses.display);

const numberButtons = document.querySelectorAll(cssClasses.buttons);
const controlButtons = document.querySelectorAll(cssClasses.buttonControl);

function numPadHandler(event) {
  const value = event.target.innerText;
  controller.updateValue(value, displayElem)
}

function controlBtnHanlder(event) {
  const data = event.target.dataset;
  if (data.com) {
    controller.executeCommand(data.com);
  } else if (data.op) {
    controller.executeOpperand(data.op); 
  } else if (data.transform) {
    controller.executeTransformation(data.transform);
  }
  controller.updateDisplay(displayElem);
}

numberButtons.forEach(btn => { btn.addEventListener('click', numPadHandler); });
controlButtons.forEach(btn => { btn.addEventListener('click', controlBtnHanlder); });