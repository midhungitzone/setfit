// pages/api/yourEndpoint.js

import clientPromise from '../../lib/mongo';

export default async function handler(req, res) {
    console.log("hlooooifffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
    return "hlo"
//   if (req.method === 'POST') {
//     try {
//       const client = await clientPromise;
//       const db = client.db("gymdemo1"); // Replace with your database name
      
//       // Get data from request body
//       const data = req.body;

//       // Insert data into your collection
//       const result = await db.collection("gymcoll1").insertOne(data); // Replace with your collection

//       res.status(201).json({ message: "Data inserted successfully", result });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Error connecting to database" });
//     }
//   } else {
//     // Handle any non-POST requests
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
}
