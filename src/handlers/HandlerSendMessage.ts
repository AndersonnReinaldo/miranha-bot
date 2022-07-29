import { Request,Response } from 'express'
import { ISenderProps } from '../services/sender'

export const sendMessageToDeploy = (req:Request,res:Response,sender:ISenderProps) => {

    // '120363039911875621@g.us'
    try {
        const { to, app, version} = req.body

        if(!to){
            return res.status(403).json({
                msg:'Destino nao informado.'
            })
        }else if(!app){
            return res.status(403).json({
                msg:'Aplicacao nao informada.'
            })
        }else if(!version){
            return res.status(403).json({
                msg:'Versao nao informada.'
            })
        }

        const message = `Deploy Finalizado 🚀\n\n*${app.toUpperCase()}* - *${version}* `
        
        sender.sendText(to, message)
        return res.status(200).json({
            msg:'Mensagem Enviada!'
        })
    } catch (error) {
        return res.status(200).json({
            msg:error.message
        })
    }

}

export const sendProcessMessage = (req:Request,res:Response,sender:ISenderProps) => {

    // '120363039911875621@g.us'
    try {
        const { to, job, messageProcess} = req.body

        if(!to){
            return res.status(403).json({
                msg:'Destino nao informado.'
            })
        }

        
        
        const message = `*${job.toUpperCase()} ⚙️*\n\n ${messageProcess.replace(/<br>/g,'\n\n')} `
        
        sender.sendText(to, message)
        return res.status(200).json({
            msg:'Mensagem Enviada!'
        })

    } catch (error) {
        return res.status(200).json({
            msg:error.message
        })
    }

}