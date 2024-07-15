export type formData ={
  username:string,
  password:string,
  email?:string,
  passwordC?:string,
}
export interface verifyResponse {
  verified:boolean,
  error:string,
  tokenExpired?:boolean
}
export interface commonResponse {
  success:boolean,
  message:string
}