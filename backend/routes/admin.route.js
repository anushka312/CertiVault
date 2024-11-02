import { Router } from "express";
import { upload } from "../middlewares/multer.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";
import { rejectRequest, getAdminProfile, loginAdmin, logoutAdmin, viewAllRequests, viewPendingRequests, issueDocument, addDocument } from "../controllers/admin.controller.js";

const router = Router()

// ! Route - /api/v1/admin


router.route('/login').post(loginAdmin)


router.route('/logout').post(verifyAdmin, logoutAdmin)


router.route('/get-profile').get(verifyAdmin, getAdminProfile)


// // TODO: Get document data from params
router.route('/all-req').get(verifyAdmin, viewAllRequests)


router.route('/pending-req').get(verifyAdmin, viewPendingRequests)


router.route('/reject-req').post(verifyAdmin, rejectRequest)


router.route('/issue-doc').post(verifyAdmin, issueDocument)


router.route('/add-doc').post(verifyAdmin, upload.single("image"), addDocument)


// router.route('/cancel-doc-req').post(verifyUser, cancelDocumentRequest)



export default router