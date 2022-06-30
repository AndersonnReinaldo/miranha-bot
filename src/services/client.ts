import { create } from 'venom-bot';
import actions from '../handlers/actions' 

  create({ session: 'miranha-bot', multidevice: true})
  .then((client) => actions(client))
  .catch((erro) => {
    console.log(erro);
  });
