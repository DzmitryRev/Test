const build = "./dist";
const src = "./src";

export const paths = {
	build: {
		root: `${build}/`,
		html: `${build}/`,
		css: `${build}/css/`,
		js: `${build}/js/`,
		images: `${build}/img/`,
	},
	src: {
		root: `${src}/`,
		html: `${src}/pages/*.html`,
		scss: `${src}/styles/style.scss`,
		js: `${src}/js/app.js`,
		images: `${src}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svgIcons: `${src}/icons/*.svg`,
	},
	watch: {
		html: `${src}/**/*.html`,
		scss: `${src}/styles/**/*.scss`,
		js: `${src}/js/**/*.js`,
        images: `${src}/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
	},
};
