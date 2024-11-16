import { MongoClient } from 'mongodb';

const MONGODB_URI = import.meta.env.SECRET_MONGODB_URL;
const MONGODB_NAME = import.meta.env.SECRET_MONGODB_NAME;

if (!MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const uri = import.meta.env.SECRET_MONGODB_URL;

const connectToDB = async () => {
  const mongo = await new MongoClient(uri).connect();
  return mongo.db(MONGODB_NAME);
};

export const getDB = async () => {
  const mongo = await connectToDB();
  return mongo;
};

export const Prices = async () => {
  const db = await getDB();
  return db.collection('pricing').find().toArray();
};
