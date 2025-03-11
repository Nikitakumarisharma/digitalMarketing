import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyCAe-8EH9PecXgGUrpqvq-VmEbT5IL3u3w",
  authDomain: "cmt-ai-e76da.firebaseapp.com",
  projectId: "cmt-ai-e76da",
  storageBucket: "cmt-ai-e76da.firebasestorage.app",
  messagingSenderId: "736750099448",
  appId: "1:736750099448:web:f72c0ea50cd95609e9d40d",
  measurementId: "G-1WJSZB5BDM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);