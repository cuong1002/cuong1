const fs = require("fs");
module.exports.config = {
name: "ngu dốt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "ngu dốt",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngu")==0 || (event.body.indexOf("Ngu")==0)) {
		var msg = {
				body: "Đúng! thằng này ngu lắm",
				attachment: fs.createReadStream(__dirname + `/noprefix/ngudot.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}