//              Backend del chat
import { baseDeDatos } from "./db";
import * as express from "express";
import { json } from "body-parser";
import * as cors from "cors";
import { v4 as uuidv4 } from 'uuid';
import  {rtdb} from "./db"

const port = 3000;
const app = express();


app.use(json());
app.use(cors())

app.post("/messages", (req: any, res: any) => {
    const chatRoomRef = rtdb.ref("/chatrooms/general/messages")
    chatRoomRef.push(req.body, function(){
      
      res.json("todo ok")
    })
  


    

  // const id = uuidv4()      // Genero un id
  // const chatRoomRef = rtdb.ref("/chatrooms/" + id)
  // chatRoomRef.set(
  //   {
  //   type:"chatroom",
  // },
  //  function(){
  //   res.json({  // devuelve un objeto con la propiedad id que tiene el id
  //     id
  //   })

  // })
});

app.post("messages", (req, res) => {

})

// const usersCollection = baseDeDatos.collection("users");

// Obtengo todos los users
// app.post("/users", (req: any, res: any) => {
//     usersCollection.get().then((snap) => {
//         const userData = snap.docs
//         const users = userData.map((user) => user.data())
//         res.json(users)
//     })
// });

// Obtengo un user por id
// app.get("/users/:userId", (req: any, res: any) => {
//   // Obtengo el id que me pasan por parametro en la API
//   const userId = req.params.userId;
//   // A la collection de la db le paso ese id
//   const userDoc = usersCollection.doc(userId);
//   // Recién acá abajo utilizo la db y hago el get. Antes no.
//   userDoc.get().then((userSnap) => {
//     // Obtengo la respuesta de la del servidor con la data limpia para poder usar en javascript
//     const userData = userSnap.data();
//     // Respondo con esa misama data que obtuve que fue la que me mandaron al
//     // principio por parametro
//     res.json(userData);
//   });
// });

// // Creo un user
// app.post("/users", (req: any, res: any) => {
//   const newUserDoc = usersCollection.doc();

//   // req.body == a lo que me pasan por el body de mi API desde Postman
//   newUserDoc.create(req.body).then(() => {
//     res.json({
//       id: newUserDoc.id,
//     });
//   });
// });

// // Modifico un user por id
// app.patch("/users/:userId", (req: any, res: any) => {
//   const userId = req.params.userId;
//   const userDoc = usersCollection.doc(userId);
//   const upDateObject = req.body; // Recibo el objeto que me pasan
//   upDateObject.updateAt = new Date(); // Al objeto que recibo le agrego la hora

//   userDoc.update(upDateObject).then((result) => {
//     console.log(result);
//     // Respondo con ok porque es una actualizacion
//     res.json({ message: "ok" });
//   });
// });
// // Elimino un user por id
// app.delete("/users/:userId", (req: any, res: any) => {
//   res.status(204);
// });

// const productsCollection = baseDeDatos.collection("products");
// // Obtengo todos los products
// app.get("/products", (req: any, res: any) => {
//   productsCollection.get().then((snap) => {
//     const producData = snap.docs;
//     const products = producData.map((p) => p.data());
//     res.json(products);
//   });
// });

// // Creo products
// app.post("/products", (req: any, res: any) => {
//   const newProduct = productsCollection.doc();
//   newProduct.create(req.body).then(() => {
//     res.json({
//       id: newProduct.id,
//     });
//   });
// });

// //  Modifico un product por id
// app.patch("/product/:id", (req: any, res: any) => {
//   res.json([
//     {
//       id: req.params.id,
//       name: "harina cambiada por harina de trigo",
//     },
//   ]);
// });

// // Elimino un product por id
// app.delete("/product/:id", (req: any, res: any) => {
//   res.status(204);
// });

app.listen(port, () => {
  console.log("escuchando en el port:", port);
});
