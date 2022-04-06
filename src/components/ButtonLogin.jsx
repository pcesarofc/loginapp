import React from "react";
import { firebase, auth } from '../service/Firebase';

const ButtonLogin = () => {
    
  const handleOnClickButton = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
  
      if(result.user){
        const {uid, photoURL, displayName, email} = result.user;

        let user = {name: displayName, id: uid, email: email, photo: photoURL}
        localStorage.setItem('user', JSON.stringify(user));
        document.location.reload();
      }
  }

  return <button onClick={handleOnClickButton}>Entrar com Google</button>
}

export default ButtonLogin;