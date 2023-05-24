import axios, { HttpStatusCode } from 'axios';
import { useNavigate } from 'react-router-dom'

const API_BASE_URL = 'http://localhost:5135/api'; // Replace with your backend API base URL
export const BookService = () => {
  let navigate = useNavigate();
  
  var user = JSON.parse(localStorage.getItem('user'));

  var header = !user.isLoggedIn ?
    {'Content-Type': 'application/json' } :
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + user.token
    }

  const GetBooks = async () => {
    try {
      const requestOptions = {
            method: 'GET',
            headers: header
        };
      const response = await axios.get(`${API_BASE_URL}/books`,requestOptions);
      return response.data;
    } catch (error) {
      if(error.response.status === HttpStatusCode.Unauthorized){
        let user = {token: '', isLoggedIn: false}
        localStorage.setItem('user',JSON.stringify(user));
        navigate('/login');
      }
      console.error('Error retrieving books:', error.response.statusText);
    }
  }
   const CreateBook = async (book) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: header
    };
      return await axios.post(`${API_BASE_URL}/books`, book,requestOptions);
    } catch (error) {
      if(error.response.status === HttpStatusCode.Unauthorized){
        let user = {token: '', isLoggedIn: false}
        localStorage.setItem('user',JSON.stringify(user));
        navigate('/login');
      }
      console.error('Error retrieving books:', error.response.statusText);
    }
  }
  return { GetBooks, CreateBook };
};



