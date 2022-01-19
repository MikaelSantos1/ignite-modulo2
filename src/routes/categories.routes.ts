import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCase/createCategory";
import { importCategoryController } from "../modules/cars/useCase/importCategory";
import { listCategoryController } from "../modules/cars/useCase/listCategory";

const upload = multer({
    dest: "./tmp",
});
const categoryRoutes = Router();

categoryRoutes.post("/", (request, response) => {
    console.log("reload funciinado");
    return createCategoryController().handle(request, response);
});

categoryRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
});

categoryRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});
export { categoryRoutes };
