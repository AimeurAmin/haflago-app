import axios from 'axios';
import { AuthModel } from '../Models/AuthModel';
// import AWS  from 'aws-sdk/dist/aws-sdk-react-native';
import UserPool from '../../utils/aws/UserPool';
import { Auth } from 'aws-amplify';
import awsmobile from '../../aws-exports';

export default class AuthService {
  baseUrl = 'https://mxdpozg5ea.execute-api.eu-west-3.amazonaws.com/latest/api/v1/auth';

  signup = ({username, email, password, phone_number}: AuthModel) => {
    // console.log(Auth.currentUserPoolUser());
    
    // attributeList.push(attributeEmail);
    Auth.configure({
      ...awsmobile
    })
    return Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number
      }
    })
    // .then((result: any) => {
    //   console.log('result:::::', result);
      
    // })
    // .catch((err: any) => {
    //   console.log('errooor::::', err);
      
    // });
    // return axios.post(`${this.baseUrl}/signup`, data);
    // AWS
  };

  signin = (data: { username?: string; email?: string; password: string }) => {
    return axios.post(`${this.baseUrl}/login`, data);
  };

  verifyEmail = (data: { username: string; v_code: string }) => {
    return axios.post(`${this.baseUrl}/verification`, data);
  };

  ressendVerification = () => {
    return axios.post
  }
}
