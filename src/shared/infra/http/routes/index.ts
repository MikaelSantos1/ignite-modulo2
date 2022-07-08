import { Router } from "express";

import { authentinticateRoutes } from "./authenticate.routes";
import { carsRoutes } from "./cars.routes";
import { categoryRoutes } from "./categories.routes";
import { rentalRoutes } from "./rental.routes";
import { specificationRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", usersRoutes);
router.use(authentinticateRoutes);
router.use("/cars", carsRoutes);
router.use("/rentals", rentalRoutes);
export { router };
