import { plugins } from "../config/plugins.js";

export const handleError = (taskName) => {
	return plugins.plumber({
		errorHandler: plugins.notify.onError({
			title: taskName,
			message: "Error: <%= error.message %>",
		}),
	});
};
