import axios from 'axios';
import { AuthModel } from '../Models/AuthModel';
// import AWS  from 'aws-sdk/dist/aws-sdk-react-native';
// import UserPool from '../../utils/aws/UserPool';
// import { Auth } from 'aws-amplify';
// import awsmobile from '../../aws-exports';
import {BASE_URL} from '../../env';
export default class AuthService {
  baseUrl = `${BASE_URL}/api/v1/auth`;

  // signup = ({username, email, password, phone_number}: AuthModel) => {
  //   // console.log(Auth.currentUserPoolUser());
    
  //   // attributeList.push(attributeEmail);
  //   Auth.configure({
  //     ...awsmobile
  //   })
  //   return Auth.signUp({
  //     username,
  //     password,
  //     attributes: {
  //       email,
  //       phone_number
  //     }
  //   })
  //   // .then((result: any) => {
  //   //   console.log('result:::::', result);
      
  //   // })
  //   // .catch((err: any) => {
  //   //   console.log('errooor::::', err);
      
  //   // });
  //   // return axios.post(`${this.baseUrl}/signup`, data);
  //   // AWS
  // };

  signup = (data: {username: string; email: string; password: string; phone_number: string}) => {  
    return axios.post(`${this.baseUrl}/signup`, data);
  }

  signin = (data: { username?: string; password: string }) => {
    console.log('##data');
    console.log(data);
    console.warn(this.baseUrl);
    console.warn(data);
    
    
    
    return axios.post(`${this.baseUrl}/login`, data);
  };

  verifyEmail = (data: { username: string; v_code: string }) => {
    return axios.post(`${this.baseUrl}/verification`, data);
  };

  ressendVerification = () => {
    return axios.post
  }
}
