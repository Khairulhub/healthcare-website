import { initializeApp } from "firebase/app";
 import firebaseConfig from './firebaseConfig.js';

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;