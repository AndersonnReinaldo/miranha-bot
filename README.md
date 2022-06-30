# api_send_message_wpp

# FLUXO DE MENSAGENS

-> Usuario manda qualquer mensagem para o bot 
-> Bot recebe a mensagem 
-> verifica se o usuario ja tem um cadastro no banco -> se nao tiver cadastra e manda a mensagem default e salva o stage do usuario 
-> se o usario ja tiver um cadastro mais nao tiver um log de stage retorna a mensagem default e salva o stage atual
-> se o usario ja tiver um cadastro e um stage retorna a mensagem de acordo com o stage e o cliente
 