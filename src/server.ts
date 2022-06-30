import express from "express";
import Routes from "./routes";
import './services/client'

const app = express();
const PORT = process.env.PORT || 3884

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🚀`));    