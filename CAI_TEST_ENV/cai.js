const CharacterAI = require("node_characterai");
const { cai_data } = require('../config.json');
const characterAI = new CharacterAI();

(async () => {
    await characterAI.authenticateWithToken(cai_data.ownerid);
    
    const chat = await characterAI.createOrContinueChat(cai_data.chars.char0.char_id);

    // Send a message
    const response = await chat.sendAndAwaitResponse("Test", true);

    console.log(response);
    // Use `response.text` to use it as a string
})();