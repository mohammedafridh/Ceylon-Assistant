import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD6wDMvKeUmt5nzf75baXlTSnQszVgGmMI",
  authDomain:"ceylon-assistant.firebaseapp.com",
  projectId: "ceylon-assistant",
  storageBucket: "ceylon-assistant.appspot.com",
  messagingSenderId: "1085508934061",
  appId: "1:1085508934061:web:0c961e457e54157ceb2924"

  // apiKey:process.env.CEYLON_ASSISTANT_FIREBASE_API_KEY,
  // authDomain: process.env.CEYLON_ASSISTANT_FIREBASE_AUTH_DOMAIN ,
  // projectId: process.env.CEYLON_ASSISTANT_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.CEYLON_ASSISTANT_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.CEYLON_ASSISTANT_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.CEYLON_ASSISTANT_FIREBASE_APP_ID
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app)
export const storage = getStorage(app)

// export const firestore = auth.firestore;

// export const addTourGuide = async(user,additionalData)=>{
//   if(!user) return;
//   const userRef = firestore.doc(`users/${user.uid}`)

//   const snapshot = await userRef.get();

//   if(!snapshot.exists){
//     const {email} = user;
//     const {name} = additionalData;

//     try{
//       userRef.set({
//         name,
//         email,
//         createdAt: new Date(),
//       })
//     }catch(error){
//       console.log(error)
//     }
//   }
// }


// const firestore = app.firestore();

// export const createUserDocument = async(tourGuide,additionalData)=>{
//   if(!tourGuide) return;

//   // const userRef = firestore.doc(`TourGuides/$(tourGuide.id)`)
//   const userRef = firestore.doc(`TourGuides/${tourGuide.uid}`)

//   const snapshot = await userRef.get()

//   if(!snapshot.exists){
//     const {email} = tourGuide;
//     const {name} = additionalData;

//     try{
//       userRef.set({name,email,createdAt:new Date()})
//     }catch(err){
//       return ('error in creating user', err);
//     }
//   }
// }


// import firebase from 'firebase/app'
// import 'firebase/auth'

// const app = firebase.initializeApp({
//     apiKey: process.env.CEYLON_ASSISTANT_FIREBASE_KEY,
//     authDomain: process.env.CEYLON_ASSISTANT_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.CEYLON_ASSISTANT_FIREBASE_PROJECT_ID ,
//     storageBucket: process.env.CEYLON_ASSISTANT_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.CEYLON_ASSISTANT_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.CEYLON_ASSISTANT_FIREBASE_APP_ID
// })

// export const auth = app.auth()
// export default app

