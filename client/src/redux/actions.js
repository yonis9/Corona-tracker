
// Example of the function which sends request to the backend and save respons to the Redux store
export function loadData () {
    return (dispatch) => fetch('url') // First argument of the fetch function should be url where to we sending request
      .then(r => r.json())
      .then(resp => {
        // send response data to the reducer
        dispatch({
        type: "LOAD_DATA",
        // add data from resp
      })
      })
  }

  // Save all functions into the object in order to export more then one action
  const actions = {
    loadData
  }
  
  export default actions



