import { AuthenticateUserController } from "@modules/accounts/useCase/authenticateUser/AuthenticateUserController";
import { Router } from "express";

const authentinticateRoutes = Router();
const authenticateUseController = new AuthenticateUserController();
authentinticateRoutes.post("/sessions", authenticateUseController.handle);

export { authentinticateRoutes };
