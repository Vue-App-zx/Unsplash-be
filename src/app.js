import routes from "./routes.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import {logError, returnError} from "./middlewares/errorHandler.js";


const app = express();  
const PORT = process.env.PORT || 5000; 


app.use(express.json()); 
app.use(morgan("dev")); 
app.use(cors());
 
//endpoint
app.get("/ping", (req, res) => {  
  return res.send({
    status: "Healthy",
  });
});

app.use(routes);


//error handling
app.use(logError);
app.use(returnError);


app.listen(PORT, () => {
  console.log("🚀🚀 Server started listening on port:", PORT, "🚀🚀");
});



export {app};