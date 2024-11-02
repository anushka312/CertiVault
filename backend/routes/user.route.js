import { Router } from "express";
import { cancelDocumentRequest, getDocumentRequests, getUserProfile, loginUser, logoutUser, registerUser, requestDocument, viewAllDocuments, viewDocuments } from "../controllers/user.controller.js";
import { verifyUser } from "../middlewares/user.middleware.js";
import { upload } from "../middlewares/multer.js";

const router = Router()

// ! Route - /api/v1/user

router.route('/register').post(registerUser)


router.route('/login').post(loginUser)


router.route('/logout').post(verifyUser, logoutUser)


router.route('/get-profile').get(verifyUser, getUserProfile)


// TODO: Get document data from params
router.route('/view-doc').get(viewAllDocuments)


router.route('/get-doc').get(viewDocuments)


router.route('/req-doc').post(verifyUser, requestDocument)


router.route('/view-doc-req').get(verifyUser, getDocumentRequests)


router.route('/cancel-doc-req').post(verifyUser, cancelDocumentRequest)



export default router