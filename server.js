import express from "express"; // Import the Express framework for building web applications
import routes from "./src/routes/postsRoutes.js";

// Create an Express app
const app = express(); // Initialize an Express application
app.use(express.static("uploads"))
routes(app)

// Start the server
app.listen(3000, () => { // Start the server on port 3000
  console.log("Servidor escutando..."); // Log a message to the console indicating the server is listening
});


