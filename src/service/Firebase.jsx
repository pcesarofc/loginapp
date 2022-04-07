import firebase from 'firebase/app';
import 'firebase/auth';

//FUNÇÕES NECESSÁRIAS PARA O LOGIN FUNCIONAR

const firebaseConfig = {
    apiKey: "AIzaSyBphSWJC8Cas_W8nvCE1VKsnkrrqsg8mxs",
    authDomain: "shopp-pc.firebaseapp.com",
    projectId: "shopp-pc",
    storageBucket: "shopp-pc.appspot.com",
    messagingSenderId: "1057510613912",
    appId: "1:1057510613912:web:90d4bb11a71cd56e6f01ed"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { firebase, auth, app };