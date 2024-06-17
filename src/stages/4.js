import { VenomBot } from "../venom.js";
import { storage } from "../storage.js";
import { STAGES } from "./index.js";

// ************************************
// Esse é o stage que vai lidar com a opção escolhida FORMALIZAÇÂO
// ************************************

export const stageFour = {
  async exec(params) {
    // validando a mensagem do from
    const message = params.message.trim();
    const isMsgValid = /^[1-4]+$/.test(message);

    console.log("Aqui está a mensagem: ", message);
    console.log("Aqui está se a mensagem é valida: ", isMsgValid);

    let msg = "Digite uma opção de 1 a 4.";

    // se mensagem for valida, ou seja, entre 1 e 4
    if (isMsgValid) {
      let option;
      // alterando para o quarto stage
      storage[params.from].stage = STAGES.SEXTO_CONTATO;
      // salvando a opção escolhida de 1 a 5
      storage[params.from].thirt_option = message;

      switch (storage[params.from].second_option) {
        case "1":
          const optionOne = optionsOfDefinicao[Number(message)]();
          option = optionOne;
          break;
        case "1":
          const optionTwo = optionsOfProposicao[Number(message)]();
          option = optionTwo;
          break;
        case "1":
          const optionThree = optionsOfParticipes[Number(message)]();
          option = optionThree;
          break;
        case "1":
          const optionFour = optionsOfPInformativos[Number(message)]();
          option = optionFour;
          break;
      }

      msg = option.message;
    } else {
      storage[params.from].stage = STAGES.PRIMEIRO_CONTATO;
    }

    await VenomBot.getInstance().sendText({ to: params.from, message: msg });
  },
};

const optionsOfDefinicao = {
  1: () => {
    const message = `
    Transferência Voluntária é a entrega de recursos financeiros da União a outro ente da federação, a título de cooperação, auxílio ou assistência financeira. Em outras palavras, a União não consegue estar em todos os lugares do Brasil de modo suficiente para atender as necessidades, por exemplo, de um produtor rural de um pequeno município na Bahia. Assim, para que a União possa descentralizar os recursos financeiros (distribuir recursos aos que deles necessitam), criou esta forma de repasse de recursos - as transferências voluntárias.
    `; // 1 > 5 > resposta

    return {
      message,
    };
  },
  2: () => {
    const message = `
    A diferença entre os termos “obrigatória” e “não-obrigatória” está relacionada ao vínculo obrigacional da despesa quanto à sua orçamentação e execução. As despesas obrigatórias são aquelas previamente definidas pela Constituição e por leis e são de natureza compulsória e inevitável. As não-obrigatórias são também denominadas de discricionárias, pois são requeridas por meio dos gestores das comunidades ou através das Organizações da Sociedade Civil (OSC) sem fins lucrativos. Portanto, estas dependem de vontade popular por isso são definidas assim, como “voluntárias”.
    `; // 1 > resposta

    return {
      message,
    };
  },
  3: () => {
    const message = `
    Decreto no 11.531, de 16 de maio de 2023 (https://www.in.gov.br/web/dou/-/decreto-n-11.531-de-16-de-maio-de-2023-483640335)  PORTARIA CONJUNTA MGI/MF/CGU No 33, DE 30 DE AGOSTO DE 2023 (https://www.gov.br/transferegov/pt-br/legislacao/portarias/portaria-conjunta-mgi-mf-cgu-no-33-de-30-de-agosto-de-2023)  DECRETO No 11.271, DE 5 DE DEZEMBRO DE 2022 (https://www.gov.br/plataformamaisbrasil/pt-br/legislacao-geral/decretos/decreto-no-11-271-de-5-de-dezembro-de-2022#:~:text=Institui%20o%20Sistema%20de%20Gest%C3%A3o%20de%20Parcerias%20da%20Uni%C3%A3o%20%2D%20Sigpar.)
    `;
    return {
      message,
    };
  },
  4: () => {
    const message = `
    Objeto - é o produto do instrumento pactuado. Por exemplo, se o convênio é para aquisição de um trator, este é o objeto.
    `;

    return {
      message,
    };
  },
  5: () => {
    const message = `
    Participação financeira que o convenente de uma transferência voluntária se compromete, contratualmente, a aplicar em um projeto. A contrapartida será calculada sobre o valor total do objeto e, se financeira, será depositada na conta bancária específica do convênio ou do contrato de repasse nos prazos estabelecidos no cronograma de desembolso.  https://www.congressonacional.leg.br/legislacao-e-
    `;

    return {
      message,
    };
  },
};

const optionsOfProposicao = {
  1: () => {
    const message = `
   Para solicitar este tipo de recurso deve apresentar a necessidade aos gestores locais do seu município, estado ou do Distrito Federal. Assim, ele colocará a sua necessidade no orçamento e solicitará por meio de um instrumento jurídico o repasse destes recursos.
    `;

    return {
      message,
    };
  },
  2: () => {
    const message = `
  Convênio - instrumento que, na ausência de legislação específica, dispõe sobre a transferência de recursos financeiros provenientes do Orçamento Fiscal e da Seguridade Social da União para a execução de programas, projetos e atividades de interesse recíproco e em regime de mútua colaboração (DECRETO No 11.531, DE 16 DE MAIO DE 2023). Isto é, a operacionalização da pactuação para compra de equipamentos para o público agro deve ser formalizada pelo instrumento jurídico, Convênio.
    `;

    return {
      message,
    };
  },
  3: () => {
    const message = `
   Os órgãos e as entidades da administração pública federal cadastrarão os programas a serem executados, por meio da celebração de convênios e de contratos de repasse, no Transferegov.br. Sendo assim, todas as etapas da pactuação do convênio são colocadas no Transferegov. Isto porque, o Transferegov é um portal eletrônico no qual os partícipes (convenente, concedente e mandatária) solicitam os recursos, formalizam os convênios e prestam contas, bem como efetuam todos os detalhes e critérios relacionados a concessão destes recursos. https://www.gov.br/transferegov/pt-br
    `;

    return {
      message,
    };
  },
  4: () => {
    const message = `
   Para celebrar um convênio é necessário cumprir as condições abaixo: Se cadastrar no Transferegov e manter o cadastro atualizado; Elaborar e enviar o plano de trabalho e ser aprovado; Apresentar todas as documentações necessários que compõe a pactuação (conforme o artigo 24 da mesma norma); Atender aos requisitos constitucionais e legais de que trata o artigo 29 da norma regulamentadora; Comprovar a disponibilidade da contrapartida, quando couber.  Para mais detalhes segue a normativa completa: https://www.gov.br/transferegov/pt-br/legislacao/portarias/portaria-conjunta-mgi-mf-cgu-no-33-de-30-de-agosto-de-2023
    `;

    return {
      message,
    };
  },
  5: () => {
    const message = `
   São varios requisitos, tais como encaminhar ao concedente a proposta do convênio, o plano de trabalho e toda documentação jurídica e institucional necessária à celebração do instrumento, disponibilizar a contrapartida, realizar o procedimento de compras e contratações, cumprir os prazos e etapas preestabelecidas, garantir o cumprimento integral do objeto pactuado e monitorar o adequado uso dos equipamentos adquiridos por meio do convênio, para citar os principais critérios. Mas para mais detalhes sugere-se a PORTARIA CONJUNTA MGI/MF/CGU No 33, DE 30 DE AGOSTO DE 2023, no seu artigo 12.
    `;

    return {
      message,
    };
  },
};

const optionsOfParticipes = {
  1: () => {
    const message = `
   Órgão ou entidade da administração pública federal responsável pela transferência dos recursos financeiros destinados à execução do objeto de convênio ou de contrato de repasse. É aquele que concede ou repassa o recurso financeiro ou descentraliza créditos orçamentários. No caso de implementos agrícolas, o concedente é o Ministério da Agricultura e Pecuária, que será o responsável por repassar os recursos financeiros.
    `;

    return {
      message,
    };
  },
  2: () => {
    const message = `
  Órgão ou entidade pública ou entidade privada sem fins lucrativos que manifeste, por meio de proposta ou plano de trabalho, interesse em celebrar instrumento regulado. Esta é a definição da norma para proponente, ela explica que o proponente é aquele que tem interesse em firmar o convênio com o MAPA. Ele é proponente, porque propõe o Convênio e o MAPA é o Concedente quando aceita o convênio, assim, após a formalização do convênio o proponente se torna convenente.
    `;

    return {
      message,
    };
  },
  3: () => {
    const message = `
    Convenente - órgão ou entidade da administração pública estadual, distrital ou municipal, consórcio público ou entidade privada sem fins lucrativos, que a administração pública federal pactua a execução de programa, projeto, atividade, por meio da celebração de convênio. É o responsável por receber os recursos financeiros da União e empregá-los na sua comunidade representada, ele também se responsabilizará pelo acompanhamento e execução de modo eficaz e transparente e ao final prestará contas do emprego destes recursos demonstrando a lisura do processo.
    `;

    return {
      message,
    };
  },
  4: () => {
    const message = `
    Interveniente - órgão ou entidade da administração pública de qualquer esfera de governo ou entidade privada que participe do instrumento para manifestar consentimento ou assumir obrigações em nome próprio.
    `;

    return {
      message,
    };
  },
};

const optionsOfPInformativos = {
  1: () => {
    const message = `
    Sim, as pactuações são feitas por meio do portal de convênios do governo federal que é o Transferegov. O Portal é uma plataforma tecnológica integrada e centralizada, com dados abertos, destinada à gestão, informatização e operacionalização de parcerias e foi instituído por meio do DECRETO No 11.271, DE 5 DE DEZEMBRO DE 2022. Além disso, conforme trata o decreto as informações estão acessíveis para toda a sociedade brasileira através de consultas públicas garantindo a transparência para conduta do Estado.
    `;

    return {
      message,
    };
  },
  2: () => {
    const message = `
    O Ministério da Agricultura e Pecuária - MAPA é o concedente e o responsável por repassar os recursos da União para as transferências voluntárias. O MAPA também publica Cartilhas em seus meios de comunicação, que são instrumentos que orientam sobre a dotação de recursos para a aquisição de implementos agrícolas e assim beneficiar a quem mais precisa.
    `;

    return {
      message,
    };
  },
  3: () => {
    const message = `
    A Plataforma TransfereGov possui agenda de capacitações gratuitas com cursos e também oferece manuais com o passo a passo para várias funcionalidades de acesso ao sistema. Segue abaixo as orientações de como acessar estes materiais explicativos: Acesse o site do transferegov atraves do link: https://www.gov.br/transferegov/pt-br Na barra do menu, no canto superior esquerdo, clique nos três traços, como mostrado na imagem acima.  Em seguida passe o cursor do mouse no link “Capacitação”, ao abrir nova janela de links clique no link “Manuais e tutoriais”, conforme abaixo:  Ao abrir a nova página, clique no link do assunto que deseja aprender. No caso de Transferências Voluntárias é só clicar neste assunto. Na nova página você terá acesso aos vários manuais. Para facilitar a sua busca segue o link de acesso a pagina de manuais: https://www.gov.br/transferegov/pt-br/manuais/transferegov/discricionarias
    `;

    return {
      message,
    };
  },
  4: () => {
    const message = `
    Interveniente - órgão ou entidade da administração pública de qualquer esfera de governo ou entidade privada que participe do instrumento para manifestar consentimento ou assumir obrigações em nome próprio.
    `;

    return {
      message,
    };
  },
  5: () => {
    const message = `
    O MAPA possui o Serviço de Informação ao cidadão e você poderá ir presencialmente no endereço abaixo: Localização: Esplanada dos Ministérios, Bloco D, 2o andar, Sala 245 Brasília – DF CEP 70.043-900 Horário de Funcionamento: Das 8h às 18h, de segunda a sexta-feira https://www.gov.br/agricultura/pt-br/acesso-a-informacao/servico-informacao-cidadao-sic/localizacao-e-horario-de-funcionamento E tem a ouvidoria que você pode acessar por meio do link: https://falabr.cgu.gov.br/web/login?tipo=8&redirect=/manifestacao/criar?tipo=8
    `;

    return {
      message,
    };
  },
};
