import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Could not connect to database:', error.message);
    }
};

export default connectDB;
