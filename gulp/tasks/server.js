import { plugins } from "../config/plugins.js";
import { paths } from "../config/paths.js";

export const server = (done) => {
	plugins.browsersync.init({
		server: {
			baseDir: `${paths.build.html}`,
		},
		notify: false,
		port: 3000,
	});
};
