import replace from "gulp-replace";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import ifPlugin from "gulp-if";
import newer from "gulp-newer";
import { handleError } from "../utils/handleError.js";

export const plugins = {
	replace,
	plumber,
	notify,
	browsersync,
	handleError,
	if: ifPlugin,
	newer,
};
