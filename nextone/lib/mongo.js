// lib/mongodb.js

import { MongoClient } from 'mongodb';

let client;
let clientPromise;

// const uri = process.env.MONGODB_URI;
const uri = `mongodb+srv://midhun1998official:5q307GHQSDLc7Wia@cluster0.kjzde.mongodb.net/`
if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

// if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri);
//   clientPromise = client.connect();
// }

export default clientPromise;
