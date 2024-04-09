
import { initializeApp } from "firebase/app";

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGuEbdGPrqBr1KvjkI-gr8HTmavVwXlGI",
  authDomain: "urban-edge-real-estate-project.firebaseapp.com",
  projectId: "urban-edge-real-estate-project",
  storageBucket: "urban-edge-real-estate-project.appspot.com",
  messagingSenderId: "571742462252",
  appId: "1:571742462252:web:a9fa780bc6b62d5fc30c89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default(app);