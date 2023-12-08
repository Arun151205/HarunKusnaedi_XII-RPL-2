import cors from "cors";
import express from "express";
import Routes from "./routes/route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//routes
app.use(Routes);

app.listen(5000, ()=> console.log('server berjalan di port 5000'));