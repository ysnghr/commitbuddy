#!/usr/bin/env node

/**
 * commitbuddy
 * A cutting-edge npm CLI package utilizing ChatGPT to effortlessly generate informative and impactful Git commit messages for enhanced version control.
 *
 * @author Yasin Ughur <https://bento.me/yasinughur>
 */

const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { debug } = flags;

(async () => {
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();
