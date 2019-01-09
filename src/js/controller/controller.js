import { dispatch } from '../state/dispatcher.js';
import { getters } from '../state/state.js';

function updateDisplay(displayElem) {
  displayElem.innerText = getters.displayValue();
}

function updateValue(value, displayElem) {
  dispatch('enterValue', {value});
  updateDisplay(displayElem);
}

function executeCommand(com) {
  dispatch(com);
}

function executeOpperand(opperand) {
  dispatch('setOpperand', { opperand });
}

function executeTransformation(transform) {
  dispatch('performTransformation', { transform });
}

export default {
  updateDisplay, 
  updateValue,
  executeCommand,
  executeOpperand,
  executeTransformation
 };