const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	help: {
		type: `boolean`,
		alias: `h`,
		desc: `Print help info`
	},
	messageCount: {
		type: `number`,
		alias: `n`,
		desc: `Number of messages to fetch`,
	},
	noEmoji: {
		type: `boolean`,
		alias: `e`,
		desc: `Disable emoji in commit messages`,
	},
};

const commands = {
	help: { desc: `Print help info` },
	setOpenAIKey: { desc: `OpenAI API key` },
};

const helpText = meowHelp({
	name: `commitbuddy`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
