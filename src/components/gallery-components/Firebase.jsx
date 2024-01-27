import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyByYjTLcShio9lV-m0RDPVy_VqaZvOOG08",
  authDomain: "dusanavt.firebaseapp.com",
  projectId: "dusanavt",
  storageBucket: "dusanavt.appspot.com",
  messagingSenderId: "686864688217",
  appId: "1:686864688217:web:4115be1653cf08c3e0fd48"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);