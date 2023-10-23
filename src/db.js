import mongoose from 'mongoose'
export const connectDB = async () => {
    // const uri = 'mongodb+srv://<username>:<password>@cluster0.6cnu04r.mongodb.net/?retryWrites=true&w=majority';
    const uri = '';
    try {
        await mongoose.connect('mongodb://localhost/merndb')
        console.log('Connected')
    } catch(error) {
        console.log(error)
    }
}