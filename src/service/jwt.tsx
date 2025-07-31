//@ts-nocheck
import  jwt  from "jsonwebtoken"
export function generateToken(data){
  const token=jwt.sign(data,process.env.SECRET_KEY)
  return token
}
export function verifyToken(token){
    const data=jwt.verify(token,process.env.SECRET_KEY)
    return data
}