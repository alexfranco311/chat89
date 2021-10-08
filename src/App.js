import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBWvWd9o1UR5Kcrl7YjksYMQK8R6z0AXvA",
  authDomain: "chat89-f16d5.firebaseapp.com",
  projectId: "chat89-f16d5",
  storageBucket: "chat89-f16d5.appspot.com",
  messagingSenderId: "489704044752",
  appId: "1:489704044752:web:3d643d4897258dd89c86d5",
  measurementId: "G-3P6KQGSS34"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const [user] = useAuthState();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
