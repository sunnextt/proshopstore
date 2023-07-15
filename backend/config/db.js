import mongoose from 'mongoose';

// const uri = "mongodb+srv://sunnext1234:71jvRLMvjtjZ8E8E@cluster0.n98bq.mongodb.net/?retryWrites=true&w=majority";


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
