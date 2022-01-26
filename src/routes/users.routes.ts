import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticed } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCase/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCase/updateUsersAvatar/UpdateUserAvatarController";

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
    "/avatar",
    ensureAuthenticed,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
);
export { usersRoutes };
