import toast from "react-hot-toast";

const initialState = {
  firstNumber: 0,
  secondNumber: 0,
  answer: 0,
};

const ACTIONS = {
  MAKE: "question/make",
  SOLVE: "question/solve",
  CHECK: "question/check",
};

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.MAKE:
      return {
        ...state,
        firstNumber: action.payload.firstNumber,
        secondNumber: action.payload.secondNumber,
      };
    case ACTIONS.SOLVE:
      return { ...state, answer: action.payload };
    case ACTIONS.CHECK:
      if (action.payload === state.answer) {
        toast.success("Correct");
        return state;
      }
      toast.error("Incorrect");
      return state;
    default:
      return state;
  }
}

export function makeQuestion() {
  const n1 = Math.round(Math.random() * 99 + 1);
  const n2 = Math.round(Math.random() * 99 + 1);
  if (n1 > n2) {
    return {
      type: ACTIONS.MAKE,
      payload: { firstNumber: n1, secondNumber: n2 },
    };
  }
  return {
    type: ACTIONS.MAKE,
    payload: { firstNumber: n2, secondNumber: n1 },
  };
}

export function solve(firstNumber, secondNumber, operator) {
  let result;
  switch (operator) {
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;

      break;

    default:
      throw new Error("Unknown operation");
  }
  return { type: ACTIONS.SOLVE, payload: result };
}

export function check(answer) {
  return { type: ACTIONS.CHECK, payload: answer };
}
