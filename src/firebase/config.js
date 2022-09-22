import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIX3MKLabeyHKFYbFpGwgRSAkIlJsTMFc",
    authDomain: "mini-blog-96388.firebaseapp.com",
    projectId: "mini-blog-96388",
    storageBucket: "mini-blog-96388.appspot.com",
    messagingSenderId: "481346893595",
    appId: "1:481346893595:web:caec8735319114521345be"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }