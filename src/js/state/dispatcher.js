import { actions } from './actions.js';

export function dispatch(action, payload = null) {
  if (payload) {
    actions[action](payload);
  } else {
    actions[action]();
  }
}