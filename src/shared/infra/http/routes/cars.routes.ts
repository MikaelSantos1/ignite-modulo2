import uploadConfig from "@config/upload";
import { CreateCarController } from "@modules/cars/useCase/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCase/CreateCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCase/listAvailableCars/ListAvailableCarsController";
import { UploadCarImagesController } from "@modules/cars/useCase/UploadCarImage/UploadCarImagesController";
import { Router } from "express";
import multer from "multer";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticed } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const upload = multer(uploadConfig.upload("./tmp/cars"));

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();
carsRoutes.post(
    "/",
    ensureAuthenticed,
    ensureAdmin,
    createCarController.handle
);
carsRoutes.get("/available", listAvailableCarsController.handle);
carsRoutes.post(
    "/specifications/:id",
    ensureAuthenticed,
    ensureAdmin,

    createCarSpecificationController.handle
);
carsRoutes.post(
    "/images/:id",
    upload.array("images"),
    ensureAuthenticed,
    ensureAdmin,
    uploadCarImagesController.handle
);
export { carsRoutes };
