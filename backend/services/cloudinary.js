import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

const connectCloudinary = async () => {
    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
}

export const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const uploadResponse = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto",
            }
        )
        console.log("File Successfully Uploaded On Cloudinary");
        // fs.unlink(localFilePath)
        return uploadResponse
    } catch (error) {
        // fs.unlink(localFilePath)
        console.log("Error While Uploading On Cloudinary: ", error);
        return null;
    }
}

export default connectCloudinary