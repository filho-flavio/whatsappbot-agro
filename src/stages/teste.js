const venom = require("venom-bot");

venom
  .create({
    session: "chatbot-agro", // nome da sessão
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body && message.isGroupMsg === false) {
      handleMenu(client, message);
    }
  });
}

let userState = {}; // Armazena o estado de cada usuário

function handleMenu(client, message) {
  const from = message.from;
  const body = message.body.trim();

  if (!userState[from]) {
    userState[from] = { step: 0 }; // Inicia o estado do usuário no passo 0
  }

  const step = userState[from].step;

  switch (step) {
    case 0:
      sendMainMenu(client, from);
      userState[from].step = 1;
      break;
    case 1:
      handleMainOption(client, from, body);
      break;
    case 2:
      handleBranch1(client, from, body);
      break;
    case 3:
      handleBranch2(client, from, body);
      break;
    case 4:
      handleBranch3(client, from, body);
      break;
    case 5:
      handleBranch4(client, from, body);
      break;
    default:
      client.sendText(from, "Opção inválida. Por favor, escolha uma opção válida.");
      userState[from].step = 0;
      break;
  }
}

function sendMainMenu(client, from) {
  client.sendText(from, "Olá, Seja bem-vindo(a)!\nEscolha uma opção:\n1. Opção 1\n2. Opção 2\n3. Opção 3\n4. Opção 4\n5. Opção 5")
    .catch((erro) => {
      console.error("Error when sending: ", erro);
    });
}

function handleMainOption(client, from, body) {
  switch (body) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
      userState[from].mainOption = body;
      userState[from].step = 2;
      sendBranch1Menu(client, from);
      break;
    default:
      client.sendText(from, "Opção inválida. Por favor, escolha uma opção válida: 1, 2, 3, 4, ou 5.");
  }
}

function sendBranch1Menu(client, from) {
  client.sendText(from, "Escolha uma sub-opção do Galho 1:\n1. Sub-opção 1\n2. Sub-opção 2\n3. Sub-opção 3")
    .catch((erro) => {
      console.error("Error when sending: ", erro);
    });
}

function handleBranch1(client, from, body) {
  switch (body) {
    case '1':
    case '2':
    case '3':
      userState[from].branch1Option = body;
      userState[from].step = 3;
      sendBranch2Menu(client, from);
      break;
    default:
      client.sendText(from, "Opção inválida. Por favor, escolha uma sub-opção válida: 1, 2, ou 3.");
  }
}

function sendBranch2Menu(client, from) {
  client.sendText(from, "Escolha uma sub-opção do Galho 2:\n1. Sub-opção 1\n2. Sub-opção 2\n3. Sub-opção 3")
    .catch((erro) => {
      console.error("Error when sending: ", erro);
    });
}

function handleBranch2(client, from, body) {
  switch (body) {
    case '1':
    case '2':
    case '3':
      userState[from].branch2Option = body;
      userState[from].step = 4;
      sendBranch3Menu(client, from);
      break;
    default:
      client.sendText(from, "Opção inválida. Por favor, escolha uma sub-opção válida: 1, 2, ou 3.");
  }
}

function sendBranch3Menu(client, from) {
  client.sendText(from, "Escolha uma sub-opção do Galho 3:\n1. Sub-opção 1\n2. Sub-opção 2\n3. Sub-opção 3\n4. Sub-opção 4\n5. Sub-opção 5")
    .catch((erro) => {
      console.error("Error when sending: ", erro);
    });
}

function handleBranch3(client, from, body) {
  switch (body) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
      userState[from].branch3Option = body;
      userState[from].step = 5;
      sendBranch4Menu(client, from);
      break;
    default:
      client.sendText(from, "Opção inválida. Por favor, escolha uma sub-opção válida: 1, 2, 3, 4, ou 5.");
  }
}

function sendBranch4Menu(client, from) {
  client.sendText(from, "Escolha uma sub-opção do Galho 4:\n1. Sub-opção 1\n2. Sub-opção 2\n3. Sub-opção 3")
    .catch((erro) => {
      console.error("Error when sending: ", erro);
    });
}

function handleBranch4(client, from, body) {
  switch (body) {
    case '1':
    case '2':
    case '3':
      userState[from].branch4Option = body;
      userState[from].step = 0; // Reset para o menu principal
      client.sendText(from, `Você escolheu a sequência: ${userState[from].mainOption} > ${userState[from].branch1Option} > ${userState[from].branch2Option} > ${userState[from].branch3Option} > ${body}. Obrigado por utilizar nosso serviço!`)
        .catch((erro) => {
          console.error("Error when sending: ", erro);
        });
      break;
    default:
      client.sendText(from, "Opção inválida. Por favor, escolha uma sub-opção válida: 1, 2, ou 3.");
  }
}
