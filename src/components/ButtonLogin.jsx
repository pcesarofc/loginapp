import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { firebase, auth } from '../service/Firebase';

const ButtonLogin = () => {

  const {user, setUser} = useContext(AuthContext);
    
  const handleOnClickButton = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
  
      if(result.user){
        const {uid, photoURL, displayName, email} = result.user;

        setUser({
          id: uid,
          photo: photoURL,
          user: displayName,
          email: email
        })
      }
  }

  return <button onClick={handleOnClickButton}>Entrar com Google</button>
}

export default ButtonLogin;