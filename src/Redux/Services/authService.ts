import axios from 'axios';
import {BASE_URL} from '../../env';
import { LoginModel, AuthModel, VerificationModel } from '../Models/AuthModel';
export default class AuthService {
  baseUrl = `${BASE_URL}/api/v1/auth`;

  signup = (data: AuthModel) => {  
    return axios.post(`${this.baseUrl}/signup`, data)
  }

  signin = (data: LoginModel) => {
    return axios.post(`${this.baseUrl}/login`, data);
  };

  verifyEmail = (data: VerificationModel) => {
    return axios.post(`${this.baseUrl}/verification`, data);
  };

  ressendVerification = (username: string) => {
    return axios.post(`${this.baseUrl}/resendVerification`, {username});
  }

  logout = () => new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 2000);
  });
}
