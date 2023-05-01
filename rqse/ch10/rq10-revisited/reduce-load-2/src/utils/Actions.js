
export const reducer = {
  loading: (state, { payload }) =>
    ({...state, status: "LOADING"}),
  failure: (state, { payload } )=> 
    ({...state, status: "ERROR", error: payload}),
  success: (state, { payload }) =>
    ({...state, status: "SUCCESS", result: payload}),
};