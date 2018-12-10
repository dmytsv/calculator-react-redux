import {
  ADD_CHAR,
  NEW_CHAR,
  ADD_DOT,
  NEW_OPERATION,
  EXECUTE_OPERATION,
  NEW_NUMBER,
  EQUALS,
  CLEAR,
  ADD_TO_MEMORY,
  RETURN_FROM_MEMORY,
  CLEAR_MEMORY
} from "./types";

export const numberPressed = number => (dispatch, getState) => {
  if (
    getState().display.currentOperation &&
    !getState().display.newNumberEntered
  ) {
    return dispatch({ type: NEW_NUMBER, payload: number });
  }
  if (getState().display.text === "0") {
    return dispatch({ type: NEW_CHAR, payload: number });
  }
  return dispatch({ type: ADD_CHAR, payload: number });
};

export const dotPressed = () => (dispatch, getState) => {
  if (getState().display.hasDot) {
    return;
  }
  return dispatch({ type: ADD_DOT });
};

export const operationPressed = operation => (dispatch, getState) => {
  if (getState().display.prevNumber) {
    return dispatch({ type: EXECUTE_OPERATION, payload: operation });
  }
  return dispatch({ type: NEW_OPERATION, payload: operation });
};

export const equals = () => ({ type: EQUALS });

export const clear = () => ({ type: CLEAR });

export const addToMemory = () => ({ type: ADD_TO_MEMORY });
export const returnFromMemory = () => ({ type: RETURN_FROM_MEMORY });
export const clearMemory = () => ({ type: CLEAR_MEMORY });
