import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuGJv8WmsfFBSH6lb3-Iu4wxm2YZlOV34",
  authDomain: "netflix-clone-ce6ee.firebaseapp.com",
  projectId: "netflix-clone-ce6ee",
  storageBucket: "netflix-clone-ce6ee.appspot.com",
  messagingSenderId: "719275892792",
  appId: "1:719275892792:web:fea77061c54b72ffc046cd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

//firebase is a realtime database which allow us to keep track of user status and description

export { auth, db };
