import axios from 'axios';
import { isAuthenticated } from 'utils';

const instance = axios.create({
  baseURL: 'https://ah-backend-dojo-dev.herokuapp.com/api',
  headers: {
    Authorization: `Bearer ${isAuthenticated().token}`,
  },
});

export default instance;
