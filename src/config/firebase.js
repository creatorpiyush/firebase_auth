import firebase from "firebase/app";

import Firebase_Keys from "../keys";

var firebaseConfig = {
  apiKey: Firebase_Keys.apiKey,
  authDomain: Firebase_Keys.authDomain,
  projectId: Firebase_Keys.projectId,
  storageBucket: Firebase_Keys.storageBucket,
  messagingSenderId: Firebase_Keys.messagingSenderId,
  appId: Firebase_Keys.appId,
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
