//@ts-nocheck
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./fiberbase";
const auth = getAuth(app);
// export async function signup(email,pass){
//     const user=await createUserWithEmailAndPassword(email,pass);
//     return user;
// }
// export async function login(email,pass){
//     const valid=await signInWithEmailAndPassword(email,pass);
//     return valid;
// }
// export default auth