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


function App() {
  const [user] = useAuthState();

  return (
    <div className="App">
      <header>

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
);
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return ( 
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

Function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});
}

export default App;
