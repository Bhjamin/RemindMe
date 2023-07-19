const { initializeApp } = require("firebase/app")
const { getFirestore, getDocs, collection } = require("firebase/firestore")

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

const db = getFirestore(app)

const dailyTasksRef = collection(db, 'dailyTasks')

module.exports = {
    getDocs,
    dailyTasksRef
}