declare module "\*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: any;
  export default src;
}

declare module 'aws-sdk/dist/aws-sdk-react-native';