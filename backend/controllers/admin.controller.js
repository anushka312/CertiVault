import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { ApiError } from '../utils/ApiError.js'
import { uploadOnCloudinary } from '../services/cloudinary.js'
import { User } from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import { cookieOptions } from '../config/cookieOptions.js'
import { Document } from '../models/document.model.js'
import { Request } from '../models/request.model.js'
import { Admin } from '../models/admin.model.js'
import { Issue } from '../models/issue.model.js'


/*
    throw new ApiError(200, "custom Error")
    return res.status(200).json(new ApiResponse(200, {}, "Hello Daisy"))

*/


const loginAdmin = asyncHandler( async (req, res) => {
    const { adminid, password } = req.body
    if( !adminid || !password ){
        throw new ApiError(400, "AdminID & Password Are Required")
    }
    const admin = await Admin.findOne({adminid})
    if(!admin){
        throw new ApiError(400, "Admin Doesn`t Exist")
    }
    if(admin.password !== password){
        throw new ApiError(400, "Incorrect Password")
    }

    // Generate Token
    const token = jwt.sign({id: admin.id}, process.env.JWT_SECRET )

    return res
    .status(200)
    .cookie("Admintoken", token, cookieOptions) // Set Token In Cookies
    .json(new ApiResponse(200, {token}, "Admin Login Success"))
} )


const logoutAdmin = asyncHandler( async (req, res) => {
    return res
    .status(200)
    .clearCookie("Admintoken", cookieOptions)
    .json(new ApiResponse(200, {}, "Admin LoggedOut"))
} )


const getAdminProfile = asyncHandler( async (req, res) => {
    return res.status(200).json(new ApiResponse(200, req.admin, "Admin Fetched"))
} )


const viewAllRequests = asyncHandler( async (req, res) => {
    //! Pagination To Five Latest OF Some Requests ??
    const requests = await Request.find({})
    return res.status(200).json(new ApiResponse(200, requests, "All Requests Fetched"))
} )


const viewPendingRequests = asyncHandler( async (req, res) => {
    //! Pagination To Five Latest OF Some Requests ??
    const requests = await Request.find({completed: false})
    return res.status(200).json(new ApiResponse(200, requests, "Pending Requests Fetched"))
} )


const rejectRequest = asyncHandler( async (req, res) => {
    const { requestid, remark } = req.body
    if(!requestid){
        throw new ApiError(400, "RequestID is Missing")
    }
    if(!remark){
        throw new ApiError(400, "Remarks is Missing")
    }

    const request = await Request.findById(requestid)
    if(!request){
        throw new ApiError(400, "Request Not Found")
    }
    const updatedReq = await Request.findByIdAndUpdate(request._id, {rejected: true, completed: true, remark}, {new: true})


    return res.status(200).json(new ApiResponse(200, updatedReq, "Request Rejected"))
} )



const addDocument = asyncHandler( async (req, res) => {
    // ! Array Input  ?
    // ! Document must not pre exist, and also update routes
    const { title, description, conditions, template  } = req.body    
    // console.log(conditions.split(" | "));
    if(!title ||  !description || !conditions || !template){
        throw new ApiError(400, "All Fields Are Required")
    }

    let documentAvatar;
    // if(!documentAvatar) console.log("whoopsie Daisy");
    if(req.file?.path){
        documentAvatar = req.file?.path
    }
    const avatar = await uploadOnCloudinary(documentAvatar)
    console.log(avatar);

    //! Problem Converting To Array - Solved, Incorrect Schema Defined In Document Model
    
    const document = await Document.create({
        title,
        description,
        conditions: conditions.split(" | "), // Works Fine
        image: avatar.url || "",
        template
    })
    return res.status(200).json(new ApiResponse(200, document, "Document Added"))
} )



const issueDocument = asyncHandler( async (req, res) => {
    const { requestid, documentlink } = req.body
    if(!requestid){
        throw new ApiError(400, "RequestID is Missing")
    }
    if(!documentlink){
        throw new ApiError(400, "Document Is Missing")
    }

    const request = await Request.findById(requestid)
    if(!request){
        throw new ApiError(400, "Request Not Found")
    }

    const issue = await Issue.create({
        requestid,
        documentlink,
        studentid: request.studentid,
        admin: req.admin.fullname,
        documentdata: request.documentdata
    })

    return res.status(200).json(new ApiResponse(200, issue, "Document Succesfully Issued"))
} )





export {
    loginAdmin,
    logoutAdmin,
    getAdminProfile,
    viewAllRequests,
    viewPendingRequests,
    rejectRequest,
    issueDocument,
    addDocument
}