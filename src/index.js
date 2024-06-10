// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require("venom-bot");

venom
  .create({
    session: "session-name", // name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === "oi" && message.isGroupMsg === false) {
      client
        .sendText(message.from, "Olá, Seja bem-vindo(a)! Você está em contato com o serviço de Atendimento da Coordenação de Máquinas e Equipamentos agrícolas - CME da Secretaria de Inovação Desenvolvimento Sustentável e Irrigação - SDI do Ministério da Agricultura, Pecuária e Abastecimento - MAPA.")
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }
  });
}
