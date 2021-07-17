import Axios from 'axios';

const apiInstance = Axios.create({baseURL: process.env.REACT_APP_API_URL});
apiInstance.defaults.headers['Pragma'] = 'no-cache';
apiInstance.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

export const setAuthKey = authKey => {
  if (authKey) {
    apiInstance.defaults.headers.common['Authorization'] = `Bearer ${authKey}`;
  } else {
    delete apiInstance.defaults.headers.common['Authorization'];
  }
};

export default apiInstance