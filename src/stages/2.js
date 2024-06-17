import { VenomBot } from "../venom.js";
import { storage } from "../storage.js";
import { STAGES } from "./index.js";

// ************************************
// Esse é o stage que vai lidar com a opção escolhida
// ************************************

export const stageTwo = {
  async exec(params) {
    // validando a mensagem do from
    const message = params.message.trim();
    const isMsgValid = /^[1-5]+$/.test(message);

    console.log("Aqui está a mensagem: ", message);
    console.log("Aqui está se a mensagem é valida: ", isMsgValid);

    let msg = "Digite uma opção de 1 a 5.";

    // se mensagem for valida, ou seja, entre 1 e 5
    if (isMsgValid) {
      // alterando para o quarto stage
      storage[params.from].stage = STAGES.QUARTO_CONTATO;
      // salvando a opção escolhida de 1 a 5
      storage[params.from].first_option = message;

      if (message === 1) {
        storage[params.from].is_first_option_chosen = true;
      }

      const option = options[Number(message)]();

      msg = option.message;
    } else {
      storage[params.from].stage = STAGES.PRIMEIRO_CONTATO;
    }

    await VenomBot.getInstance().sendText({ to: params.from, message: msg });
  },
};

const options = {
  1: () => {
    let message = `
    1- FORMALIZAÇÃO \n
      1. DEFINIÇÃO.
      2. PROPOSIÇÃO.
      3. PARTÍCIPES.
      4. INFORMATIVOS. `; // 1 > 5 > resposta

    return {
      message,
    };
  },
  2: () => {
    const message = `
    2. ASSINATURA DO TERMO\n
        1. Quem é o responsavel pela prestação de contas referente ao CONVÊNIO?
        2. Como e onde o convenente envia a prestação de contas?
        3. Quais são as responsabilidades específicas dos CONVENENTES durante a execução até a prestação de contas?
        4. Quais são as responsabilidades específicas dos CONVENENTES durante a execução até a prestação de contas?
    `; // 1 > resposta

    return {
      message,
    };
  },
  3: () => {
    const message = `
    3. EXECUÇÃO\n
       1. Quais são as responsabilidades específicas dos CONVENENTES durante a execução até a prestação de contas?
       2. Quais são as responsabilidades específicas dos CONVENENTES durante a execução até a prestação de contas?
       3. Quais são as responsabilidades específicas que os municípios assumem ao receberem as máquinas e equipamentos?`;

    return {
      message,
    };
  },
  4: () => {
    const message = `
    4. PRESTAÇÃO DE CONTAS\n
        1. Quem é o responsavel pela pretação de contas referente ao CONVÊNIO?
        2. Como e onde o convenente envia a prestação de contas?
        3. Quais são as responsabilidades específicas dos CONVENENTES durante a execução até a prestação de contas?
        4. Quais são as responsabilidades específicas dos CONVENENTES durante a execução até a prestação de contas?
        5-
    `;

    return {
      message,
    };
  },
  5: () => {
    const message = `
    5. RESCISÃO DE CONVÊNIO\n
       1. Condições suspensivas podem gerar a rescisão do convênio em caso de descumprimento?
    `;

    return {
      message,
    };
  },
};
