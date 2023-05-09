
export function reducer(state, { type, payload }) {
  switch (type) {
    case "LOADING":
      return {...state, status: "LOADING"};
    case "FAILURE":
      return {...state, status: "FAILURE", error: payload};
    case "SUCCESS":
      return {...state, status: "SUCCESS", result: payload};
    default:
      return state;
  }
}