import gulp from "gulp";
import { paths } from "./gulp/config/paths.js";
import { clean } from "./gulp/tasks/clean.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { javaScript } from "./gulp/tasks/javaScript.js";
import { images } from "./gulp/tasks/images.js";
import { svgSprite } from './gulp/tasks/svgSprite.js';

function watcher() {
	gulp.watch(paths.watch.html, html);
	gulp.watch(paths.watch.scss, scss);
	gulp.watch(paths.watch.js, javaScript);
	gulp.watch(paths.watch.images, images);
}

const mainTasks = gulp.parallel(html, scss, javaScript, images);

const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(clean, mainTasks);
export { dev };
export { build };
export {svgSprite}

gulp.task("default", dev);
