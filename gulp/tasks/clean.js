import { deleteAsync } from "del";
import { paths } from "../config/paths.js";

export const clean = () => {
	return deleteAsync(paths.build.root);
};
