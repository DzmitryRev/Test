import gulp from "gulp";
import webpack from "webpack-stream";
import { plugins } from "../config/plugins.js";
import { paths } from "../config/paths.js";
import { isBuild } from "../config/mode.js";

export const javaScript = () => {
	return gulp
		.src(paths.src.js, { sourcemaps: !isBuild })
		.pipe(plugins.handleError("JS"))
		.pipe(
			webpack({
				mode: isBuild ? "production" : "development",
				output: { filename: "app.min.js" },
			})
		)
		.pipe(gulp.dest(paths.build.js))
		.pipe(plugins.browsersync.stream());
};
