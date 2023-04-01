import { Home } from "@mui/icons-material";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0ocGQQ5PIhR3-1SKj211am8DmD64BZaM",
    authDomain: "dsa-website-f6cdb.firebaseapp.com",
    projectId: "dsa-website-f6cdb",
    storageBucket: "dsa-website-f6cdb.appspot.com",
    messagingSenderId: "476057524746",
    appId: "1:476057524746:web:6c930797c63af818705df3",
    measurementId: "G-FC9D4DLM5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result)=>{
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("profilePic",profilePic)
    })
      .catch((error)=>{
        console.log(error);
    });
};

// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const name = result.user.displayName;
//         const email = result.user.email;
//         const profilePic = result.user.photoURL;
  
//         localStorage.setItem("name", name);
//         localStorage.setItem("email", email);
//         localStorage.setItem("profilePic", profilePic);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };