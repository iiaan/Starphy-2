import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {FirebaseAppProvider} from "reactfire"
import client from './firebase/client';
import {Routes, Route} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <FirebaseAppProvider firebaseConfig={client}>
    <Suspense fallback="Cargando">
  <React.StrictMode>
    <App />
  </React.StrictMode></Suspense>
  </FirebaseAppProvider>
);


