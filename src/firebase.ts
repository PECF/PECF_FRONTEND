//create firebase for ecommerce with typescript, react, redux, for authprovider

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export default app;