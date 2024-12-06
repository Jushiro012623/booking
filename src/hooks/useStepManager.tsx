import React from "react";
export default function useStepManager(maxStep : number) {
  const initialState = 1
  const reducer = (state : any, action : any) => {
    switch (action.type) {
      case "NEXT":
        return { ...state, step: state.step + 1, status: state.status = 'pending'};
      case "BACK":
        return {...state, step: Math.max(state.step - 1, 1),  status: state.status = 'pending'};
      case "COMPLETE":
        return {...state,  step: Math.min(state.step + 1, maxStep),  status: state.status = 'complete'};
      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(reducer, {step: initialState, status: ''});
  return { state, dispatch, maxStep};
}
