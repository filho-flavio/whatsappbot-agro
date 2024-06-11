import { initialStage, stageOne } from "./stages/index.js";

import { storage } from "./storage.js";

export const stages = [
  {
    descricao: "Comprimentos",
    stage: initialStage,
  },
  {
    descricao: "Validar convênio",
    stage: stageOne,
  },
  // {
  //   descricao: "Enviar opções",
  //   stage: stageTwo,
  // },
  // {
  //   descricao: "Bill",
  //   stage: stageThree,
  // },
  // {
  //   descricao: "New Order",
  //   stage: stageFour,
  // },
  // {
  //   descricao: "Assistent",
  //   stage: finalStage,
  // },
];

export function getStage({ from }) {
  // Verifica se o objeto 'storage' contém uma entrada para o identificador 'from'.
  if (storage[from]) {
    // Se já existir uma entrada, retorna o valor do campo 'stage' dessa entrada.
    return storage[from].stage;
  }

  // Se não existir uma entrada para 'from', cria uma nova entrada com valores padrão.
  storage[from] = {
    stage: 0, // Estágio inicial definido como 0.
    convenio: false,
  };

  // Retorna o valor do campo 'stage' da nova entrada criada.
  return storage[from].stage;
}
