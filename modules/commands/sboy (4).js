﻿const fs = require("fs");
module.exports.config = {
	name: "4sboy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CUONG",
	description: "music",
	commandCategory: "video",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function ({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("4sboy") == 0 || (event.body.indexOf("4Sboy") == 0)) {
		var msg = {
			body: "khối sboy hiện có 4 video (Toppic: a,b,c,d,e,f,g,i,k,m,n,o,p,q,r,s)",
			attachment: fs.createReadStream(__dirname + `/videoboy/sboy/4.mp4`)
		}
		return api.sendMessage(msg, threadID, messageID);
	}
}
module.exports.run = function ({ api, event, client, __GLOBAL }) {

}