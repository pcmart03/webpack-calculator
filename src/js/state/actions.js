import { getters, mutations } from './state.js';
import { appendChar } from '../utils/appendString.js';
import { calculate }from '../utils/calculations.js';
import { transformValue } from '../utils/transformations.js';

function clear() {
  mutations.setPrevValue('');
  mutations.setNewValue('');
  mutations.setOpperand('');
  mutations.setDisplayValue('0');
}

function enterValue(payload) {
    const newStr = appendChar(getters.newValue(), payload.value);
    mutations.setNewValue(newStr);
    mutations.setDisplayValue(newStr);
}


function performCalculation() {
  if (getters.prevValue() && getters.newValue() && getters.opperand()) {
    const newValue = calculate(Number(getters.prevValue()), Number(getters.newValue()), getters.opperand());
    mutations.setPrevValue(newValue);
    mutations.setDisplayValue(newValue);
    mutations.setNewValue('');
  }
}

function equals() {
  performCalculation();
  mutations.setOpperand('');
}

function performTransformation(payload) {
  const newValue = transformValue(Number(getters.newValue()), payload.transform);
  const newString = newValue.toString();
  mutations.setNewValue(newString);
  mutations.setDisplayValue(newString);
}

function setOpperand(payload) {
  if (getters.opperand()) {
    performCalculation();
  } else if (getters.newValue()) {
    mutations.setPrevValue(getters.newValue());
    mutations.setNewValue('');
  }

  mutations.setOpperand(payload.opperand);
}



export const actions = {
  clear,
  equals,
  enterValue,
  performTransformation,
  setOpperand
};
