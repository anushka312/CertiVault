import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { ApiError } from '../utils/ApiError.js'
import { uploadOnCloudinary } from '../services/cloudinary.js'
import { User } from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import { cookieOptions } from '../config/cookieOptions.js'
import { Document } from '../models/document.model.js'
import { Request } from '../models/request.model.js'


/*
    throw new ApiError(200, "custom Error")
    return res.status(200).json(new ApiResponse(200, {}, "Hello Daisy"))

*/

const registerUser = asyncHandler( async (req, res) => {
    // console.log(req.body); // ! {} USing Form Data ?
    
    const { fullname, studentid, password, batch, branch, gender, dob, phone } = req.body
    if( !fullname || !studentid || !password || !batch || !branch || !gender || !dob || !phone ){
        throw new ApiError(400, "All Fields Are Required")
    }
    // TODO: Validation Checks & Check if user pre-exist ?
    const user = await User.create({
        fullname,
        studentid,
        password,
        batch,
        branch,
        gender,
        dob,
        phone
    })
    const createdUser = await User.findById(user._id).select("-password")
    // TODO: Creation Failure Checks
    return res.status(200).json(new ApiResponse(200, createdUser, "User Registered Successfully"))
} )


const loginUser = asyncHandler( async (req, res) => {
    const { studentid, password } = req.body
    if( !studentid || !password ){
        throw new ApiError(400, "StudentID & Password Are Required")
    }
    const user = await User.findOne({studentid})
    if(!user){
        throw new ApiError(400, "User Doesn`t Exist")
    }
    if(user.password !== password){
        throw new ApiError(400, "Incorrect Password")
    }

    // Generate Token
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET )

    return res
    .status(200)
    .cookie("token", token, cookieOptions) // Set Token In Cookies
    .json(new ApiResponse(200, {token}, "User Login Success"))
} )


const logoutUser = asyncHandler( async (req, res) => {
    return res
    .status(200)
    .clearCookie("token", cookieOptions)
    .json(new ApiResponse(200, {}, "User LoggedOut"))
} )


const getUserProfile = asyncHandler( async (req, res) => {
    return res.status(200).json(new ApiResponse(200, req.user, "User Fetched"))
} )



const viewDocuments = asyncHandler( async (req, res) => {
    // console.log(req.query);
    const { documentid } = req.query
    console.log(documentid);

    const document = await Document.findById(documentid)
    return res.status(200).json(new ApiResponse(200, document, "Document Fetched"))
} )



const viewAllDocuments = asyncHandler( async (req, res) => {
    const documents = await Document.find({})
    return res.status(200).json(new ApiResponse(200, documents, "Documents Fetched"))
} )


const requestDocument = asyncHandler( async (req, res) => {
    const {documentid, note } = req.body
    if(!documentid){
        throw new ApiError(200, "Document Id Is Required")
    }

    const studentdata = req.user
    const documentdata = await Document.findById(documentid)
    console.log(documentdata);
    
    const request = await Request.create({
        studentid: studentdata._id,
        documentid,
        studentdata,
        documentdata,
        note
    })
    return res.status(200).json(new ApiResponse(200, request, "Request Raised Successfully"))
} )


const getDocumentRequests = asyncHandler( async (req, res) => {
    const userRequests = await Request.find({studentid: req.user._id})
    return res.status(200).json(new ApiResponse(200, userRequests, "User Document Request Fetched"))
} )


const cancelDocumentRequest = asyncHandler( async (req, res) => {
    const { requestid } = req.body
    const request = await Request.findById(requestid)
    
    if(request.studentid !== String(req.user._id)){
        throw new ApiError(200, "Invalid / Unauthorized Request")
    }
    request.cancel = true
    request.completed = true
    await request.save({validateBeforeSave: false})

    return res.status(200).json(new ApiResponse(200, request, "Hello Daisy"))
} )




export {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    viewAllDocuments,
    requestDocument,
    getDocumentRequests,
    cancelDocumentRequest,
    viewDocuments
}