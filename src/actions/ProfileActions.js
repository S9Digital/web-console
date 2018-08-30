export const LOGIN_USER_ATTEMPT = "LOGIN_USER_ATTEMPT";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const logingUser = (username, email, property) => dispatch => {
  dispatch({ type: LOGIN_USER_ATTEMPT });
  //id
  dispatch({ type: LOGIN_USER_SUCCESS });
  //   .catch(error => {
  //   dispatch({type: LOGIN_USER_ERROR, error: error})
  //   })
};

export const CREATE_USER_ATTEMPT = "CREATE_USER_ATTEMPT";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";
export const createUser = (
  email,
  name,
  password,
  isAdmin,
  isSuperAdmin,
  property
) => dispatch => {
  dispatch({ type: CREATE_USER_ATTEMPT });
  //insert
  console.log(email + ", " + name + ", " + password + ", " + property);
  dispatch({
    type: CREATE_USER_SUCCESS,
    email: email,
    name: name,
    password: password,
    isAdmin: isAdmin,
    isSuperAdmin: isSuperAdmin,
    property: property
  });
  //   .catch(error => {
  //   dispatch({type: CREATE_USER_ERROR, error: error})
  //   })
};

export const EDIT_USER_ATTEMPT = "EDIT_USER_ATTEMPT";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_ERROR = "EDIT_USER_ERROR";
export const editUser = (
  email,
  name,
  isAdmin,
  isSuperAdmin,
  property
) => dispatch => {
  dispatch({ type: EDIT_USER_ATTEMPT });
  //insert
  dispatch({
    type: EDIT_USER_SUCCESS,
    email: email,
    name: name,
    isAdmin: isAdmin,
    isSuperAdmin: isSuperAdmin,
    property: property
  });
  //   .catch(error => {
  //   dispatch({type: EDIT_USER_ERROR, error: error})
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

export const EDIT_PROPERTY_ATTEMPT = "EDIT_PROPERTY_ATTEMPT";
export const EDIT_PROPERTY_SUCCESS = "EDIT_PROPERTY_SUCCESS";
export const EDIT_PROPERTY_ERROR = "EDIT_PROPERTY_ERROR";
export const editProperty = (name, address) => dispatch => {
  dispatch({ type: EDIT_PROPERTY_ATTEMPT });
  //insert
  dispatch({
    type: EDIT_PROPERTY_SUCCESS,
    name: name,
    address: address
  });
  //   .catch(error => {
  //   dispatch({type: EDIT_PROPERTY_ERROR, error: error})
  //   })
};

//separate API calls currently handled in other methods for frontend (but might need to be separated for backend)
//{post}/v1/password/reset
//{ email }

//{put}/v1/password/reset
//{ email, password, code }

//{put/get}/v1/property/{propertyId}/alertUsers
//{ [userId] }
