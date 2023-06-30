import gulp from "gulp";
import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import { plugins } from "../config/plugins.js";
import { paths } from "../config/paths.js";
import { isBuild } from "../config/mode.js";

export const images = () => {
	return gulp
		.src(paths.src.images)
		.pipe(plugins.handleError("IMAGE"))
		.pipe(plugins.newer(paths.build.images))
		.pipe(plugins.if(isBuild, webp()))
		.pipe(plugins.if(isBuild, gulp.dest(paths.build.images)))
		.pipe(plugins.if(isBuild, gulp.src(paths.src.images)))
		.pipe(plugins.if(isBuild, plugins.newer(paths.build.images)))
		.pipe(
			plugins.if(
				isBuild,
				imagemin({
					progressive: true,
					svgoPlugins: [{ removeViewBox: false }],
					interlaced: true,
					optimizationLevel: 3,
				})
			)
		)
		.pipe(gulp.dest(paths.build.images))
		.pipe(gulp.src(paths.src.svgIcons))
		.pipe(gulp.dest(paths.build.images))
		.pipe(plugins.browsersync.stream());
};
