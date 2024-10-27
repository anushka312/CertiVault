import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { ApiError } from '../utils/ApiError.js'


const registerUser = asyncHandler( async (req, res) => {
    // throw new ApiError(200, "custom Error")
    return res.status(200).json(new ApiResponse(200, {}, "Hello Daisy"))
} )


export {
    registerUser
}