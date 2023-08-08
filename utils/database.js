import mongoose from "mongoose"

let isConnected = false

const connectToDb = async () => {
    mongoose.set("strictQuery", true)

    if (isConnected) {
        console.log("MongoDB is already connected")
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "todolist-app",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true
        console.log("MongoDB has been connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectToDb