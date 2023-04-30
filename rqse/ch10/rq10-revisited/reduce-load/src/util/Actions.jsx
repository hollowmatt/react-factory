
export function Actions(state, { type, payload }) {
  switch (type) {
    case "LOADING":
      return {...state, status: "Loading"};
    case "FAILURE":
      return {...state, status: "Failure", error: payload};
    case "SUCCESS":
      return {...state, status: "Success", result: payload};
    default:
      return state;
  }
}