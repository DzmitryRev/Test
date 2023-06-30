import gulp from "gulp";
import fileinclude from "gulp-file-include";
import webHtmlNosvs from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import { paths } from "../config/paths.js";
import { plugins } from "../config/plugins.js";
import { isBuild } from "../config/mode.js";

export const html = () => {
	return gulp
		.src(paths.src.html)
		.pipe(plugins.handleError("HTML"))
		.pipe(fileinclude())
		.pipe(plugins.replace(/@img\//g, "img/"))
		.pipe(plugins.if(isBuild, webHtmlNosvs()))
		.pipe(
			plugins.if(
				isBuild,
				versionNumber({
					value: "%DT%",
					append: {
						key: "_v",
						cover: 0,
						to: ["css", "js"],
					},
					output: {
						file: "gulp/version.json",
					},
				})
			)
		)
		.pipe(gulp.dest(paths.build.html))
		.pipe(plugins.browsersync.stream());
};
