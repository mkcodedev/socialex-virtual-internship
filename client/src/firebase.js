
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOolgN3KO1795TO0v8gCoYU9pB3YqbhxM",
  authDomain: "sociale-x.firebaseapp.com",
  projectId: "sociale-x",
  storageBucket: "sociale-x.firebasestorage.app",
  messagingSenderId: "927838995496",
  appId: "1:927838995496:web:5766753f0928fe6498611d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();


// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
