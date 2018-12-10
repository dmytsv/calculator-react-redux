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
} from "../actions/types";

const INITIAL_STATE = {
  text: "0",
  hasDot: false,
  prevNumber: null,
  currentOperation: null,
  memo: null,
  newNumberEntered: false
};

const displayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DOT:
      return { ...state, text: state.text + ".", hasDot: true };
    case ADD_CHAR:
      return { ...state, text: state.text + action.payload };
    case NEW_CHAR:
      return { ...state, text: action.payload };
    case NEW_OPERATION:
      return { ...state, currentOperation: action.payload };
    case EXECUTE_OPERATION:
      const operation = action.payload;
      const number1 = +state.prevNumber;
      const number2 = +state.text;

      let newText = executeOperation(operation, number1, number2);
      return {
        ...state,
        text: newText,
        currentOperation: null,
        prevNumber: null,
        newNumberEntered: false
      };
    case NEW_NUMBER:
      const prevNumber = state.text;
      const text = action.payload;
      return {
        ...state,
        prevNumber,
        text,
        hasDot: false,
        newNumberEntered: true
      };
    case EQUALS:
      const operationSaved = state.currentOperation;
      const num1 = +state.prevNumber;
      const num2 = +state.text;
      let result = executeOperation(operationSaved, num1, num2);
      return {
        ...state,
        text: result,
        prevNumber: null,
        currentOperation: null
      };
    case CLEAR:
      return { ...INITIAL_STATE };
    case ADD_TO_MEMORY:
      if (state.memo) {
        const newMemo = +state.text + +state.memo;
        return { ...state, memo: newMemo };
      }
      return { ...state, memo: state.text };
    case RETURN_FROM_MEMORY:
      if (state.memo) {
        return { ...state, text: state.memo };
      }
      return { ...state, text: "0" };
    case CLEAR_MEMORY:
      return { ...state, memo: null };
    default:
      return state;
  }
};

function executeOperation(operation, number1, number2) {
  switch (operation) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return 0;
  }
}

export default displayReducer;
