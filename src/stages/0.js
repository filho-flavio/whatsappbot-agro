import { storage } from '../storage.js'
import { VenomBot } from '../venom.js'
import { STAGES } from './index.js'

export const initialStage = {
  async exec({ from }) {
    storage[from].stage = STAGES.MENU

    const venombot = await VenomBot.getInstance()

    const message = `
    Olá, Seja bem-vindo(a)! Você está em contato com o serviço de Atendimento da Coordenação de Máquinas e Equipamentos agrícolas - CME
    da Secretaria de Inovação Desenvolvimento Sustentável e Irrigação - SDI do Ministério da Agricultura, Pecuária e Abastecimento - MAPA.
      -----------------------------------
      Para continuar, por favor, informe o Número do Convênio com a seguinte sequência XXXXXX/20XX.
    `
    await venombot.sendText({ to: from, message })
  },
}