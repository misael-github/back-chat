//             BACKEND

import * as admin from "firebase-admin"

import * as serviceAcccount  from "./key.json"



admin.initializeApp({
  credential: admin.credential.cert(serviceAcccount as any),
  databaseURL: "https://apx-dwf-m6-68acf-default-rtdb.firebaseio.com"
});

export const rtdb = admin.database()
export const baseDeDatos = admin.firestore()
