import mongoose from "mongoose"

async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)

        console.log(`\n MongoDB connected Successfully!\n DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("Error making connection to database\n Error: ", error);
        process.exit(1)
    }
}

export default connectDB