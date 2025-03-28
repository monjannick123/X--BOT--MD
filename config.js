const fs = require("fs");
const dotenv = require("dotenv");
const {
	Sequelize
} = require("sequelize");

function toBool(value) {
	return value === "true";
}

if (fs.existsSync("config.env")) {
	dotenv.config({
		path: "./config.env"
	});
}

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://beta3_5testerssql_kr0z_user:PCpv4P3a30dKHc9lLLKtvTVkW9e6hauc@dpg-cujpks2j1k6c73d0o47g-a.oregon-postgres.render.com/beta3_5testerssql_kr0z"; // Corrected SQLite format

if (!DATABASE_URL.startsWith("sqlite://") && !DATABASE_URL.startsWith("postgres://") && !DATABASE_URL.startsWith("postgresql://")) {
	throw new Error("Invalid DATABASE_URL format. Use 'sqlite://' or 'postgres://'");
}

const DATABASE = DATABASE_URL.startsWith("sqlite://") ? new Sequelize(DATABASE_URL, {
	dialect: "sqlite",
	storage: DATABASE_URL.replace("sqlite://", ""),
	logging: false
}) : new Sequelize(DATABASE_URL, {
	dialect: "postgres",
	protocol: "postgres",
	ssl: true,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false
		},
	},
	logging: false,
});

DATABASE.authenticate().then(() => console.log("Database connection established successfully.")).catch((err) => console.error("Database connection failed:", err.message));

module.exports = {
	VERSION: require("./package.json").version,
	ALIVE: process.env.ALIVE || "Hello i'm alive",
	ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE || "false"),
	BGMBOT : toBool(process.env.BGMBOT || "true"),
	API: "https://api-aswin-sparky.koyeb.app",
	AUDIO_DATA: process.env.AUDIO_DATA || "𓍢ִ໋͙֒𓋜𝛞𝖎𝐜𝛋🍇•𔘓°𓍯𓂃;♞ ꪑ𝛝𝛞͢ᴊ𝛂𝛞 ⛄  ₉₁ⷫⷫⷫⷫⷫⷫⷫⷫ₈₈₄ͥͥͥͥͥͥͥͥ₈₆₃ⷭⷭⷭⷭⷭⷭⷭⷭ₆₈₁ⷦⷦⷦⷦⷦⷦ₉ ✾;https://files.catbox.moe/ytylzw.jpeg",
	AUTO_STATUS_VIEW: toBool(process.env.AUTO_STATUS_VIEW || "true"),
	BOT_INFO: process.env.BOT_INFO || "𞄛മ᭡͢ഞ്ചൻ ൱𞄤ക്ക𞄲 👨🏻‍🌾💗;𓍢ִ໋͙֒𓋜𝛞𝖎𝐜𝛋🍇•𔘓°𓍯𓂃;https://files.catbox.moe/ytylzw.jpeg",
	CALL_BLOCK: toBool(process.env.CALL_BLOCK || "false"),
	CALL_BLOCK_MSG: process.env.CALL_BLOCK_MSG || "_Calls are not allowed. Please don’t call again!._",
	DATABASE_URL,
	DATABASE,
	DISABLE_PM: toBool(process.env.DISABLE_PM || "false"),
	HANDLERS: (process.env.HANDLERS || process.env.HANDLER || "false").trim(),
	HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
	HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
	KOYEB_API_KEY: process.env.KOYEB_API_KEY || "",
	KOYEB_SERVICE_NAME: process.env.KOYEB_SERVICE_NAME || "",
	RENDER_API_KEY: process.env.RENDER_API_KEY || "",
	RENDER_APP_NAME: process.env.RENDER_APP_NAME || "",
	LANGUAGE: process.env.LANGUAGE || "english",
	LOGS: toBool(process.env.LOGS || "false"),
	MENU_TYPE: process.env.MENU_TYPE || "small", // Menu style big, small, image, document, text, call, payment
	PORT: process.env.PORT || 8080,
	PM_BLOCK: toBool(process.env.PM_BLOCK || "false"),
	READ_MESSAGES: toBool(process.env.READ_MESSAGES || "false"),
	REJECT_CALL: toBool(process.env.REJECT_CALL || "false"),
	REJECT_CALL_MSG: process.env.REJECT_CALL_MSG || "_Calls are not allowed. Please don’t call again!._",
	SESSION_ID: process.env.SESSION_ID || "",
	START_MSG: toBool(process.env.START_MSG || "true"),
	STICKER_DATA: process.env.STICKER_DATA || `X BOT MD;ASWIN SPARKY`,
	SUDO: process.env.SUDO || "917012984396",
	WORK_TYPE: process.env.WORK_TYPE || "public",
	SAVE_STATUS: toBool(process.env.SAVE_STATUS || "false"),
	STATUS_REPLY: toBool(process.env.STATUS_REPLY || "false"),
	STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "Nice Status Brother 🦫✨",
	STATUS_REACTION: toBool(process.env.STATUS_REACTION || "true"),
	STATUS_REACTION_EMOJI: process.env.STATUS_REACTION_EMOJI || "🍉,🍓,🎀,💀,💗,📍,🔪,🛒,☠️,🐍,👍🏻",
	WARN_COUNT: process.env.WARN_COUNT || "3"
};
