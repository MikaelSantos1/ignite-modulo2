import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/useCase/authenticateUser/AuthenticateUserController";

const authentinticateRoutes = Router();
const authenticateUseController = new AuthenticateUserController();
authentinticateRoutes.post("/sessions", authenticateUseController.handle);

export { authentinticateRoutes };
