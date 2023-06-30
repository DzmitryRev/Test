import gulp from "gulp";
import * as originalSass from "sass";
import gulpSass from "gulp-sass";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import rename from "gulp-rename";
import { paths } from "../config/paths.js";
import { plugins } from "../config/plugins.js";
import { isBuild } from "../config/mode.js";

const sass = gulpSass(originalSass);
export const scss = () => {
	return gulp
		.src(paths.src.scss, { sourcemap: !isBuild })
		.pipe(plugins.handleError("SCSS"))
		.pipe(plugins.replace(/@img\//g, "../img/"))
		.pipe(sass({ outputStyle: "expanded" }))
		.pipe(plugins.if(isBuild, groupCssMediaQueries()))
		.pipe(
			plugins.if(
				isBuild,
				webpcss({
					webpClass: ".webp",
					noWebpClass: ".no-webp",
				})
			)
		)
		.pipe(
			plugins.if(
				isBuild,
				autoprefixer({
					grid: true,
					overridebrowserlist: ["last 3 versions"],
					cascade: true,
				})
			)
		)
		.pipe(gulp.dest(paths.build.css))
		.pipe(plugins.if(isBuild, cleanCss()))
		.pipe(rename({ extname: ".min.css" }))
		.pipe(gulp.dest(paths.build.css))
		.pipe(plugins.browsersync.stream());
};
