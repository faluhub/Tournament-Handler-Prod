import { MongoClient } from "mongodb";

const env = process.env.NODE_ENV;
const uri = process.env.MONGODB_URI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

let client;
let clientPromise;

if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

if (env === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        client.
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
