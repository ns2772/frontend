import axios, { HttpStatusCode } from 'axios';

const API_BASE_URL = 'http://localhost:5135/api'; // Replace with your backend API base URL

export const UserService = () => {

  const RegisterUser = async (user) => {
    try {
      await axios.post(`${API_BASE_URL}/users`, user);
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };
  const LoginUser = async (loginModel) => {
    try {
      let response = await axios.post(`${API_BASE_URL}/users/login`, loginModel);
      if(response.status === HttpStatusCode.Ok){
        let user = {token: response.data.token, isLoggedIn: true}
        localStorage.setItem('user',JSON.stringify(user));
        return true;
      }else{
        let user = {token: '', isLoggedIn: false}
        localStorage.setItem('user',JSON.stringify(user));
        return false;
      }
    } catch (error) {
      console.error('Error logging user:', error);
      return false;
    }
  };
  return { RegisterUser, LoginUser };
};
