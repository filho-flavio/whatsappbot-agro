# WhatsApp Bot usando Venom-Bot

Este projeto é um bot para WhatsApp desenvolvido utilizando a biblioteca [Venom-Bot](https://github.com/orkestral/venom). Este bot permite automatizar interações no WhatsApp.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/).

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/filho-flavio/whatsappbot-agro
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd seu-repositorio
   ```

3. Instale as dependências necessárias:

   ```sh
   npm install
   ```

## Uso

Para iniciar o servidor, execute o seguinte comando:

```sh
npm run dev
```

## Funcionamento

Após iniciar o servidor, o bot irá gerar um QR code no console. Escaneie este QR code com o aplicativo WhatsApp para conectar o bot à sua conta.

## Estrutura do Projeto

A estrutura de diretórios do projeto é organizada da seguinte forma:

```
├── src
│   ├── stages (stages para lidar com cada fase da conversa)
│   │   └── 0.js
│   │   └── 1.js
│   │   └── 2.js
│   ├── server.js (servidor para iniciar o chatbot)
│   ├── stages.js (gerenciar para qual stage a aplicação está)
│   ├── storage.js (armazenamento de fases do stage e dados       relevantes)
│   └── venom.js (objeto para operações com a API do Venom-Bot)
└── tokens
    └── (sessões de conexão com o Whatsapp)
```