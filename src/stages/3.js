// import { VenomBot } from "../venom.js";
// import { storage } from "../storage.js";
// import { STAGES } from "./index.js";

// // ************************************
// // Esse é o stage que vai lidar com a opção escolhida
// // ************************************

// export const stageThree = {
//   async exec(params) {
//     // validando a mensagem do from
//     const message = params.message.trim();
//     const isMsgValid = /^[1-5]+$/.test(message);

//     console.log("Aqui está a mensagem: ", message);
//     console.log("Aqui está se a mensagem é valida: ", isMsgValid);

//     let msg = "Digite uma opção de 1 a 5.";

//     // se mensagem for valida, ou seja, entre 1 e 5
//     if (isMsgValid) {
//       // alterando para o quarto stage
//       storage[params.from].stage = STAGES.QUARTO_CONTATO;
//       // salvando a opção escolhida de 1 a 5
//       storage[params.from].first_option = message;

//       const option = options[Number(message)]();

//       msg = option.message;
//     } else {
//       storage[params.from].stage = STAGES.PRIMEIRO_CONTATO;
//     }

//     await VenomBot.getInstance().sendText({ to: params.from, message: msg });
//   },
// };

// const options = {
//   1: () => {
//     let message = `
//     1. FORMALIZAÇÃO \n
//       1. Análise do Plano de Trabalho.
//       2. Celebração do Convênio.
//       3. Cláusula Suspensiva.
//       4. Voltar ao MENU PRINCIPAL. `;

//     return {
//       message,
//     };
//   },
//   2: () => {
//     const message = `
//     2. EXECUÇÃO\n
//         1. Termo Aditivo de Contrapartida.
//         2. Termo Aditivo de Vigência.
//         3. Ajuste de PT.
//         4. Processo de Licitação.
//         5. Voltar ao MENU PRINCIPAL.
//     `;

//     return {
//       message,
//     };
//   },
//   3: () => {
//     const message = `
//     3. PRESTAÇÃO DE CONTAS\n
//         1. Vazio`;

//     return {
//       message,
//     };
//   },
//   4: () => {
//     const message = `
//     4. ASSINATURA DO TERMO - CADASTRO EXTERNO\n
//         1. Situação do Cadastro Externo.
//         2. Voltar ao MENU PRINCIPAL.
//     `;

//     return {
//       message,
//     };
//   },
//   5: () => {
//     const message = `
//     5. RESCISÃO DO INSTRUMENTO\n
//        1. Entrar em contato com a Prestação de Contas
//        2. Voltar ao MENU PRINCIPAL
//     `;

//     return {
//       message,
//     };
//   },
// };
