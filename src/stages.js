import { initialStage, stageOne, stageTwo, stageThree, stageFour } from "./stages/index.js";

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
  {
    descricao: "Lidar com as 5 opções",
    stage: stageTwo,
  },
  {
    descricao: "Responder uma das 5 opções",
    stage: stageThree,
  },
  {
    descricao: "New Order",
    stage: stageFour,
  },
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
    is_first_option_chosen: false,
    first_option: null,
    second_option: null,
    thirt_option: null
  };

  // Retorna o valor do campo 'stage' da nova entrada criada.
  return storage[from].stage;
}
