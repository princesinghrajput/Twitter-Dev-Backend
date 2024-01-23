import mongoose from 'mongoose';

export const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://psr8084:qSC0l4WvW6U6KWXC@cluster0.d2kjzik.mongodb.net/your-database-name', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};
