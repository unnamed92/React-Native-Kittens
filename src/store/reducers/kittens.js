import { types } from "../actions/kittens";

const initialState = [];

export default function kittens(state = initialState, action = {}) {
  switch (action.type) {
    case types.KITTENS.ADD:
      return {
        ...state,
        list: action.payload
      };
    case types.KITTEN.SELECT:
      return {
        ...state,
        selectedKitten: action.payload
      };

    default:
      return state;
  }
}
