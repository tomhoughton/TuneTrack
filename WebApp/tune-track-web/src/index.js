import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need.
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGCkEAs5ooYZ6aAnsAVTLLwZiho3qKrD0",
  authDomain: "tunetrack-2c832.firebaseapp.com",
  projectId: "tunetrack-2c832",
  storageBucket: "tunetrack-2c832.appspot.com",
  messagingSenderId: "974347755879",
  appId: "1:974347755879:web:cbc8701c2788e991cb4fc2",
  measurementId: "G-J4T9CG5N0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
