const initialState = {
  operator: "",
};

const ACTIONS = {
  MULTIPLY: "setting/mutliply",
  ADD: "setting/add",
  SUBSTRACT: "setting/substract",
  DIVIDE: "setting/divide",
};

export default function optionReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.MULTIPLY:
      return { ...state, operator: action.payload };
    case ACTIONS.ADD:
      return { ...state, operator: action.payload };
    case ACTIONS.SUBSTRACT:
      return { ...state, operator: action.payload };
    case ACTIONS.DIVIDE:
      return { ...state, operator: action.payload };
    default:
      return state;
  }
}

export function multiply() {
  return { type: ACTIONS.MULTIPLY, payload: "*" };
}

export function add() {
  return { type: ACTIONS.ADD, payload: "+" };
}

export function substract() {
  return { type: ACTIONS.SUBSTRACT, payload: "-" };
}

export function divide() {
  return { type: ACTIONS.DIVIDE, payload: "/" };
}
