import gulp from "gulp";
import svgSpritePlugin from "gulp-svg-sprite";
import { paths } from "../config/paths.js";
import { plugins } from "../config/plugins.js";

export const svgSprite = () => {
	return gulp
		.src(`${paths.src.svgIcons}`, {})
		.pipe(plugins.handleError("SVG"))
		.pipe(
			svgSpritePlugin({
				mode: {
					stack: {
						sprite: `../icons/icons.svg`,
						example: true,
					},
				},
			})
		)
		.pipe(gulp.dest(`${paths.build.images}`));
};
