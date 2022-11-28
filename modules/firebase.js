// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArOPsOzrhJc4WyhJRw8BRVrzTll5iK2sY",
  authDomain: "code-your-own.firebaseapp.com",
  projectId: "code-your-own",
  storageBucket: "code-your-own.appspot.com",
  messagingSenderId: "910330298169",
  appId: "1:910330298169:web:69bb2caae9c6378fcb72e8",
  measurementId: "G-61HSYLYW51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
