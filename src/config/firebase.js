import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCYoycbDuyHTxdHaM9QpoMzR99T_Vmjp-4",
  authDomain: "dailyreminders-62630.firebaseapp.com",
  projectId: "dailyreminders-62630",
  storageBucket: "dailyreminders-62630.appspot.com",
  messagingSenderId: "764364730830",
  appId: "1:764364730830:web:45df26e2b793c33d3dfb9f",
  measurementId: "G-4ECKGJWRG0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)