import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { verifyUser } from "../middlewares/user.middleware.js";
import { upload } from "../middlewares/multer.js";

const router = Router()


router.route('/').get(registerUser)

export default router