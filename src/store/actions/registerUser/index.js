// third-party libraries
import axios from 'axios';

// action types
import { USER_SIGNUP } from '../types';

const RegisterUser = userdata => (dispatch) => {
  dispatch({
    type: USER_SIGNUP,
  });

  const config = {
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
  };

  return axios.post('https://ah-backend-dojo-dev.herokuapp.com/api/users/', userdata, config)
    .then((resp) => {
      console.log(resp.data);
    }).catch((error) => {
      console.log(error.response.data);
    });
};

export default RegisterUser;
