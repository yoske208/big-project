import express, { Express } from 'express';
import "dotenv/config";
import router from './src/Router/RouterApp';
import mongoose from 'mongoose';
import cors from "cors";
import chalk from "chalk"; 

import loadInitialData from './InitialData/InitialData';

const app: Express = express();


app.use(cors({
  origin: "*", // אפשר גישה רק ללקוח
  credentials: true, // כדי לאפשר שליחת עוגיות
}));


app.use(express.json());
app.use(router);

// התחברות ל-MongoDB עם לוגים צבעוניים
mongoose.connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log(chalk.cyanBright("Connected to MongoDB Atlas")); 
  })
  .catch((error) => {
    console.error(chalk.red("Error connecting to MongoDB:", error));  // לוג אדום כשיש שגיאה
  });

app.listen(process.env.PORT || 5060, () => {
    console.log(chalk.blue(`Listening on: http://localhost:${process.env.PORT || 5060}`));  
});