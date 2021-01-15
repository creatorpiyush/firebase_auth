import firebase from "firebase/app";
import "firebase/auth";

import Firebase_Keys from "../keys";

const app = firebase.initializeApp({
  apiKey: Firebase_Keys.apiKey,
  authDomain: Firebase_Keys.authDomain,
  projectId: Firebase_Keys.projectId,
  storageBucket: Firebase_Keys.storageBucket,
  messagingSenderId: Firebase_Keys.messagingSenderId,
  appId: Firebase_Keys.appId,
});

export const auth = app.auth();

export default app;
