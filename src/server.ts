import express,{ Router,Request,Response } from "express";
import { sendMessageToDeploy,sendProcessMessage } from "./handlers";
import Sender,{ ISenderProps } from "./services/sender";

const sender:ISenderProps = new Sender();
const router  = Router()
const app = express();
const PORT = process.env.PORT || 3884

router.post('/sendMessageToDeploy', (req:Request, res:Response) => {
    return sendMessageToDeploy(req, res, sender);
})

router.post('/sendProcessMessage', (req:Request, res:Response) => {
    return sendProcessMessage(req, res, sender);
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🚀`));    