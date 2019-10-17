import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://burger-builder-8d255.firebaseio.com/'
});

export default instance;
