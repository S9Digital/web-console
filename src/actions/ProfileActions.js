export const CREATE_USER_ATTEMPT = "CREATE_USER_ATTEMPT";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";
export const createUser = (
  email,
  name,
  isAdmin,
  isSuperAdmin,
  property
) => dispatch => {
  dispatch({ type: CREATE_USER_ATTEMPT });
  //insert
  dispatch({
    type: CREATE_USER_SUCCESS,
    email: email,
    name: name,
    isAdmin: isAdmin,
    isSuperAdmin: isAdmin,
    property: property
  });
  //   .catch(error => {
  //   dispatch({type: CREATE_USER_ERROR, error: error})
  //   })
};

export const DELETE_USER_ATTEMPT = "DELETE_USER_ATTEMPT";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_ERROR = "DELETE_USER_ERROR";
export const deleteUser = (
  email,
  name,
  isAdmin,
  isSuperAdmin,
  property
) => dispatch => {
  dispatch({ type: DELETE_USER_ATTEMPT });
  //insert
  dispatch({
    type: DELETE_USER_SUCCESS,
    email: email,
    name: name,
    isAdmin: isAdmin,
    isSuperAdmin: isAdmin,
    property: property
  });
  //   .catch(error => {
  //   dispatch({type: DELETE_USER_ERROR, error: error})
  //   })
};

export const CREATE_PROPERTY_ATTEMPT = "CREATE_PROPERTY_ATTEMPT";
export const CREATE_PROPERTY_SUCCESS = "CREATE_PROPERTY_SUCCESS";
export const CREATE_PROPERTY_ERROR = "CREATE_PROPERTY_ERROR";
export const createProperty = (name, address) => dispatch => {
  dispatch({ type: CREATE_PROPERTY_ATTEMPT });
  //insert
  dispatch({
    type: CREATE_PROPERTY_SUCCESS,
    name: name,
    address: address
  });
  //   .catch(error => {
  //   dispatch({type: CREATE_PROPERTY_ERROR, error: error})
  //   })
};

export const DELETE_PROPERTY_ATTEMPT = "DELETE_PROPERTY_ATTEMPT";
export const DELETE_PROPERTY_SUCCESS = "DELETE_PROPERTY_SUCCESS";
export const DELETE_PROPERTY_ERROR = "DELETE_PROPERTY_ERROR";
export const deleteProperty = (name, address) => dispatch => {
  dispatch({ type: DELETE_PROPERTY_ATTEMPT });
  //insert
  dispatch({
    type: DELETE_PROPERTY_SUCCESS,
    name: name,
    address: address
  });
  //   .catch(error => {
  //   dispatch({type: DELETE_PROPERTY_ERROR, error: error})
  //   })
};
