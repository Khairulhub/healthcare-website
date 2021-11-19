import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import {useState,useEffect} from 'react'
import initializeAuthentication from "../Components/firebase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () =>{
    const auth = getAuth();
    const [user,setuser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    
   

    const signInUsingGoogle =()=>{
        setIsLoading(true);
        signInWithPopup(auth,googleProvider)
        .then(result => {
            setuser(result.user);
        } )
        .finally(() => setIsLoading(false))

    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user =>{
            if(user){
                setuser(user);
            }
            else{
                setuser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, []);

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(() => { })
        .finally(() => setIsLoading(false));
    }
    return {
        user,
       
        isLoading,
        signInUsingGoogle,
     
        logOut
    }
}
export default useFirebase;