const appState = {
  prevValue: "",
  newValue: "",
  displayValue: "0",
  opperand: ""
};

export const getters = {
  prevValue: () => appState.prevValue,
  newValue: () => appState.newValue,
  displayValue: () => appState.displayValue,
  opperand: () => appState.opperand,
  state: () => appState
};

export const mutations = {
  setPrevValue: (val) => { appState.prevValue = val },
  setNewValue: (val) => { appState.newValue = val },
  setDisplayValue: (val) => {appState.displayValue = val},
  setOpperand: (val) => { appState.opperand = val }
}

export const actions = {
  calculate: () => {
    if (appState.prevValue && appState.newValue && appState.opperand) {
      const newValue = calculate(Number(appState.prevValue), Number(appState.newValue), appState.opperand);
      mutations.setPrevValue(newValue);
      mutations.setDisplayValue(newValue);
    }
  },
  clear: () => {
    mutations.setPrevValue('');
    mutations.setNewValue('');
    mutations.setOpperand('')
    mutations.setDisplayValue('0');
  },
  setOpperand: (opperand) => {
    if (appState.newValue) {
      mutations.setOpperand = opperand;
      mutations.setPrevValue(appState.newValue);
      mutations.setNewValue('');
    }
  }
}