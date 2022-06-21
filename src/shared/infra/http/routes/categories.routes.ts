import { CreateCategoryController } from "@modules/cars/useCase/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCase/importCategory/ImportCategoryController";
import { ListCategoryController } from "@modules/cars/useCase/listCategory/ListCategoryController";
import { Router } from "express";
import multer from "multer";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticed } from "../middlewares/ensureAuthenticated";

const upload = multer({
    dest: "./tmp",
});

const categoryRoutes = Router();
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoryRoutes.post(
    "/",
    ensureAuthenticed,
    ensureAdmin,
    createCategoryController.handle
);

categoryRoutes.get("/", listCategoryController.handle);

categoryRoutes.post(
    "/import",
    ensureAuthenticed,
    ensureAdmin,
    upload.single("file"),
    importCategoryController.handle
);
export { categoryRoutes };
