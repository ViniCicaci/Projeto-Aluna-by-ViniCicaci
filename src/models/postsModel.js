import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
// Establish database connection
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Connect to the database using the connection string from the environment variable

// Function to retrieve all posts from the database
export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes"); // Select the "imersao-instabytes" database
    const colecao = db.collection("posts"); // Select the "posts" collection within the database
    return colecao.find().toArray(); // Find all documents in the collection and return them as an array
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes"); // Select the "imersao-instabytes" database
    const colecao = db.collection("posts"); // Select the "posts" collection within the database
    return colecao.insertOne(novoPost); // Find all documents in the collection and return them as an array
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts"); 
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost}) 
}