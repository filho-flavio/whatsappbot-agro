import { VenomBot } from "./venom.js";
import { stages, getStage } from "./stages.js";

const main = async () => {
  try {
    const venombot = await VenomBot.getInstance().init({
      session: "chatbot-agro",
      headless: true,
      useChrome: false,
    });

    venombot.onMessage(async (message) => {
      if (message.isGroupMsg) return;

      console.log("Aqui está a mensagem: ", message.content);

      // 1
      const currentStage = getStage({ from: message.from });

      await stages[currentStage].stage.exec({
        from: message.from,
        message: message.body,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

main();
