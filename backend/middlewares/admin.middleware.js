import { Admin } from "../models/admin.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken'


export const verifyAdmin = asyncHandler( async(req, _, next) => {
    try {
        const token = req.cookies?.Admintoken || req.header("Authorization")?.replace("AdminBearer ", "")
        if(!token){
            throw new ApiError(401, "Unauthorized Request")
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        const admin = await Admin.findById(decodedToken?.id).select("-password")
        if(!admin){
            // TODO: discussion on frontend ?
            throw new ApiError(401, "Invalid Admin Token")
        }

        // Add Information To req, so that can be used by further controllers
        req.admin = admin;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token")
    }
} )