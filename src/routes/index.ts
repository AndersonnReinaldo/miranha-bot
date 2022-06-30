import { Request, Router, Response } from 'express';

const router = Router();

router.get('/status', (req:Request, res:Response) => {
    res.status(200).json({
        msg:'ok'
    })
})


export default router