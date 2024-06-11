import { VenomBot } from "../venom.js";
import { storage } from "../storage.js";
import { STAGES } from "./index.js";

// ************************************
// Esse é o stage de validar o convênio
// ************************************

export const stageOne = {
  async exec(params) {
    // validando a mensagem do from
    const message = params.message.trim();
    const isMsgValid = /^[0-9]+$/.test(message);

    console.log("Aqui está a mensagem: ", message);
    console.log("Aqui está se a mensagem é valida: ", isMsgValid);

    let msg = "Digite apenas os números do convênio.";

    // se mensagem for valida
    if (isMsgValid) {
      const convenioValidado = validarConvenio(message);

      if (convenioValidado) {
        // alterando para o terceiro stage
        storage[params.from].stage = STAGES.TERCEIRO_CONTATO;
        storage[params.from].convenio = true;
        
        msg = `Digite somente o número da opção desejada:
                1. FORMALIZAÇÃO
                2. EXECUÇÃO
                3. PRESTAÇÃO DE CONTAS
                4. ASSINATURA DO TERMO - CADASTRO EXTERNO
                5. RESCISÃO DO INSTRUMENTO
                \n
              Assim que possível responderemos sua solicitação.`;
      } else {
        storage[params.from].stage = STAGES.PRIMEIRO_CONTATO;

        msg = `O convênio não foi localizado, orientamos constatar demais secretarias para acompanhamento do instrumento.\n
        Agradecemos o contato.`;
      }
    }

    await VenomBot.getInstance().sendText({ to: params.from, message: msg });
  },
};

const validarConvenio = (numConvenio) => {
  // Lógica para buscar convenio no banco de dados

  if (numConvenio == "123") {
    return true;
  }

  return false;
};
