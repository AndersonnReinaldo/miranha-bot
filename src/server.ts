import express from "express";
import Routes from "./routes";
import puppeteer from 'puppeteer'
import Sender from "./sender";

const sender = new Sender();

(async() => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox','--disable-setuid-sandbox']
      })
})();


const app = express();
const PORT = process.env.PORT || 3884

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🚀`));    