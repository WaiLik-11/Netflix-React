import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// config here
const config = {
    apiKey: "AIzaSyBK9mre9vJ6sRfcC1fF54qCRDWWOyJ0OfY",
    authDomain: "netflix-clone-react-18b68.firebaseapp.com",
    projectId: "netflix-clone-react-18b68",
    storageBucket: "netflix-clone-react-18b68.appspot.com",
    messagingSenderId: "596405660971",
    appId: "1:596405660971:web:a76ee15f7037d741d7296e"
};

const firebase = Firebase.initializeApp(config);



export { firebase };