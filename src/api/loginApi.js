import apiInstance from './apiInstance';

const loginApi = {
  post: (params = {email: ''}) => {
    return apiInstance.post('/login', params);
  },
  validate: {
    post: (params = {code: ''}) => {
      return apiInstance.post('/login/validate', params);
    }
  },
  user: {
    get: () => {
      return apiInstance.get('/login/user');
    }
  }
};

export default loginApi;