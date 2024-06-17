import { VenomBot } from "../venom.js";
import { storage } from "../storage.js";
import { STAGES } from "./index.js";

// ************************************
// Esse é o stage que vai lidar com a opção escolhida
// ************************************

export const stageThree = {
  async exec(params) {
    // validando a mensagem do from
    const message = params.message.trim();
    const isMsgValid = /^[1-9]+$/.test(message);

    console.log("Aqui está a mensagem: ", message);
    console.log("Aqui está se a mensagem é valida: ", isMsgValid);

    let msg = "Digite uma opção de 1 a 5.";

    // se mensagem for valida, ou seja, entre 1 e 9
    if (isMsgValid) {
      // alterando para o quinto stage
      storage[params.from].stage = STAGES.QUINTO_CONTATO;
      // salvando a opção escolhida de 1 a 5
      storage[params.from].second_option = message;
      let option;

      switch (storage[params.from].first_option) {
        case "1":
          const optionOne = optionsOfFirst[Number(message)]();
          option = optionOne;
          break;
        case "2":
          const answerTwo = answersOfSecond[Number(message)]();
          option = answerTwo;
          break;
        case "3":
          const answerThree = answersOfThird[Number(message)]();
          option = answerThree;
          break;
        case "4":
          const answerFour = answersOfFourth[Number(message)]();
          option = answerFour;
          break;
        case "5":
          const answerFive = answersOfFith[Number(message)]();
          option = answerFive;
          break;
      }

      msg = option.message;
    } else {
      storage[params.from].stage = STAGES.PRIMEIRO_CONTATO;
    }

    await VenomBot.getInstance().sendText({ to: params.from, message: msg });
  },
};

const optionsOfFirst = {
  1: () => {
    let message = `
    1. O que são Transferências voluntárias?
    2. Qual a diferença de transferência voluntária para transferência obrigatória?
    3. Quais são os atos normativos que subsidiam as Transferências voluntárias?
    4. O que é OBJETO do convênio?
    5.  O que é a contrapartida? `;

    return {
      message,
    };
  },
  2: () => {
    const message = `
    1. Como posso ter acesso aos recursos das transferências voluntárias?
    2. Qual é o instrumento jurídico utilizado para pactuar a transferência voluntária?
    3. Como e onde podemos solicitar a pactuação dos convênios?
    4. Quais são as condições para a celebração do convênio?
    5.  Quais são os requisitos específicos que o representante dos produtores rurais (órgão da administração pública municipal, estadual ou distrital) precisa atender para se beneficiar dessas transferências voluntárias?
    `;
    return {
      message,
    };
  },
  3: () => {
    const message = `
    1. Quem é o CONCEDENTE?
    2. Quem é o PROPONENTE?
    3. Quem é o CONVENENTE?
    4. Quem é o INTERVENIENTE?`;

    return {
      message,
    };
  },
  4: () => {
    const message = `
    1. Todo o processo é digital?
    2. Quais são as principais políticas públicas relacionadas às transferências voluntárias do Ministério da Agricultura em termos de máquinas e equipamentos destinados a Administração publica municipal, estadual ou distrital?
    3. Como aprendo a cadastrar minha proposta para me tornar um CONVENENTE na plataforma Transferegov?
    4. Tem algum contato(os) para que eu possa esclarecer outras dúvidas sobre as transferências voluntárias para implementos agrícolas?
    `;

    return {
      message,
    };
  },
};

const answersOfSecond = {
  1: () => {
    let message = `
        Os pactuantes do convênio ou partícipes, são 2 a saber: O representante da União para assuntos agrários que é o Ministério da Agricultura e Pecuária e o representante da comunidade (de quem necessita do recurso) é o gestor da Administração Publica direta (do município, estado ou do distrito federal). São eles chamados respectivamente de concedente e convenente. `;

    return {
      message,
    };
  },
  2: () => {
    let message = `
        Todas as etapas da pactuação do convênio são colocadas no Transferegov. Isto
porque, o Transferegov é um portal eletrônico no qual os partícipes (convenente,
concedente e mandatária) solicitam os recursos, formalizam os convênios e prestam contas,
bem como, efetuam todos os detalhes e critérios relacionados a concessão destes recursos.
https://www.gov.br/transferegov/pt-br  
 `;

    return {
      message,
    };
  },
  3: () => {
    let message = `Quando o proponente se torna convenente ao pactuar o convênio com o MAPA e recebe o
recurso para a compra dos equipamentos e máquinas, ele deve estar atendo ao cumprimento de todas as suas
responsabilidades, tais como: executar e fiscalizar os
trabalhos; registrar a execução física do objeto; realizar visitas regulares nos empreendimentos, e apresentar os relatórios
referentes às visitas realizadas quando solicitado; prestar contas dos recursos transferidos,
entre outros, e assim garantir o emprego correto do dinheiro público e cumprimento do objeto
pactuado;`;

    return {
      message,
    };
  },
  4: () => {
    let message = ` O CONCEDENTE deve cumprir o objeto pactuado, fiscalizar o cumprimento
durante todo o cronograma, prestar esclarecimentos quando necessário e estimular os
beneficiários finais para o uso e a manutenção adequada dos equipamentos e máquinas
agrícolas adquiridos. Os beneficiários também devem cumprir o seu papel e assim lograrão
de todos os benefícios que este recurso tão importante proporciona.
`;

    return {
      message,
    };
  },
};

const answersOfThird = {
  1: () => {
    let message = `
          Quando o proponente se torna convenente ao pactuar o convênio com o MAPA e recebe o recurso, ele deve estar tendo ao cumprimento de todas as suas responsabilidades, tais como:executar e fiscalizar os trabalhos; registrar a execução física do objeto; realizar visitas regulares nos empreendimentos, e apresentar os relatórios referentes às visitas realizadas quando solicitado; prestar contas dos recursos transferidos, entre outros, e assim garantir o emprego correto do dinheiro público e cumprimento do objeto pactuado; `;

    return {
      message,
    };
  },
  2: () => {
    let message = `
            O CONCEDENTE deve cumprir o objeto pactuado, fiscalizar o cumprimento durante todo o cronograma, prestar esclarecimentos quando necessário e estimular os beneficiários finais para o uso e a manutenção adequada dos equipamentos e máquinas agrícolas adquiridos. Os beneficiários também devem cumprir o seu papel e assim lograrão de todos os benefícios que este recurso tão importante proporciona. `;

    return {
      message,
    };
  },
  3: () => {
    let message = `
            Quando o proponente se torna convenente ao pactuar o convênio com o MAPA e recebe o recurso para a compra dos equipamentos e máquinas, deve estar atendo ao cumprimento de todas as suas responsabilidades, tais como:executar e fiscalizar os trabalhos; registrar a execução física do objeto; realizar visitas regulares nos empreendimentos, e apresentar os relatórios referentes às visitas realizadas quando solicitado; prestar contas dos recursos transferidos, entre outros, e assim garantir o emprego correto do dinheiro público e cumprimento do objeto pactuado. `;

    return {
      message,
    };
  },
};

const answersOfFourth = {
  1: () => {
    let message = `
             O convenente é o responsável por receber os recursos financeiros da União e empregá-los na sua comunidade representada, ele também se responsabilizará pelo acompanhamento e execução de modo eficaz e transparente e ao final prestará contas do emprego destes recursos demonstrando a lisura do processo. `;

    return {
      message,
    };
  },
};

const answersOfFith = {
  1: () => {
    let message = `
               No caso de descumprimento de condições suspensivas pelo convenente, tais como ausência de envio de peças documentais no Transferegov, que poderão ser solicitadas pelo concedente ou mandatária a qualquer tempo,  a União poderá providenciar extinção do instrumento, quando não tiverem sido liberados os recursos ou a rescisão imediata do instrumento, com o ressarcimento de eventuais recursos liberados.respectivamente de concedente e convenente. `;

    return {
      message,
    };
  },
};
