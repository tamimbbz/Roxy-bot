const fs = require("fs");
const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "info",
    aliases: ["admininfo", "botinfo", "owner", "ownerinfo"],
    version: "1.4",
    author: "𝗧𝗮𝗺𝗶𝗺 𝗕𝗯𝘇",
    countDown: 5,
    role: 0,
    shortDescription: { en: "Show bot & owner info" },
    longDescription: { en: "Display detailed information about the bot and owner" },
    category: "owner",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ message }) {

    // OWNER INFO
    const authorName = "𝗧𝗮𝗺𝗶𝗺 𝗕𝗯𝘇";
    const ownAge = "18+";
    const messenger = "https://m.me/tamim.bbz.2025";
    const authorFB = "𝗧𝗮𝗺𝗶𝗺 𝗕𝗯𝘇";
    const authorNumber = "+8801322962662";
    const Status = "𝗦𝗶𝗻𝗴𝗲𝗹 𝗽𝗿𝗼 𝗺𝗲𝘅";

    // SAFE CATBOX VIDEO LINK
    const videoLink = "https://files.catbox.moe/o58tzi.mp4";

    // BANGLADESH TIME
    const now = moment().tz("𝗔𝘀𝗶𝗮/𝗖𝗼𝗺𝗶𝗹𝗹𝗮");
    const date = now.format("𝗠𝗠𝗠𝗠 𝗗𝗼 𝗬𝗬𝗬𝗬");
    const time = now.format("h:mm:ss A");

    // BOT UPTIME
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / 3600) % 24);
    const days = Math.floor(uptime / 86400);

    const uptimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    const text =
`✨《 𝗕𝗢𝗧 𝗔𝗡𝗗 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 》🎀

🤖 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲: ${global.GoatBot.config.nickNameBot}
👾 𝗣𝗿𝗲𝗳𝗶𝘅: ${global.GoatBot.config.prefix}

💙 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲: ${authorName}
📝 𝗔𝗴𝗲: ${ownAge}
💕 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽: ${Status}

📞 𝗪𝗵𝗮𝘁𝘀 𝗔𝗽𝗽: ${authorNumber}
🌍 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${authorFB}

🗓 𝗗𝗮𝘁𝗲: ${date}
⏰ 𝗧𝗶𝗺𝗲: ${time}

🔰 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗢𝘄𝗻𝗲𝗿: ${messenger}
📛 𝗕𝗼𝘁 𝗨𝗽𝘁𝗶𝗺𝗲: ${uptimeString}

==============================`;

    return message.reply({
      body: text,
      attachment: await global.utils.getStreamFromURL(videoLink)
    });
  },

  onChat: async function ({ event, message }) {
    if (event.body?.toLowerCase() === "info") {
      return this.onStart({ message });
    }
  }
};
