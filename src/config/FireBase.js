import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FireBase_API_KEY,
    authDomain: import.meta.env.VITE_FireBase_AuthDomain,
    projectId: import.meta.env.VITE_FireBase_ProjectId,
    storageBucket: import.meta.env.VITE_FireBase_StorageBucket,
    messagingSenderId: import.meta.env.VITE_FireBase_MessagingSenderId,
    appId: import.meta.env.VITE_FireBase_AppId,
    measurementId: import.meta.env.VITE_FireBase_MeasurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth(app);