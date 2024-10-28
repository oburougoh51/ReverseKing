const { smd, sleep } = require('../lib');
const teddyM = {"smd": "asta"};

smd({
  cmdname: "reverseking",
  type: "fun",
  info: "Cute teddy messages",
  on: "text",
  filename: __filename,
}, async (citel, match, { smd }) => {
  const isReverseKingCommand = smd === "reverseking" || (citel.isPublic && match.toLowerCase().includes("reverseking"));

  if (isReverseKingCommand && !teddyM[(link unavailable)]) {
    teddyM[(link unavailable)] = true;

    const teddyMessages = [
      "Hello, beautiful!",
      "You're amazing!",
      "Stay happy!",
      "Wishing you a wonderful day!",
      "Sending smiles!",
      "You're on my mind!",
      "Have a lovely evening!",
      "Sweet dreams!",
      "Keep shining!",
      "You're so lovely!",
    ];

    const { key } = await citel.reply("(\\_/)\n( •.•)\n/>");

    for (const message of teddyMessages) {
      await sleep(500);
      await citel.reply("(\\_/)\ReverseKing\n/>" + message, { edit: key });
    }
  }
});
