import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: "eu-west-3_alq6ZMExg",
  ClientId: "197osva2itigigbl3ufgdhnuac"
}

export default new CognitoUserPool(poolData);