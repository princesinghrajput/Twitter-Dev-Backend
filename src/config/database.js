import mongoose from 'mongoose';
export const connect =async () =>{
    await mongoose.connect('mongodb+srv://psr8084:qSC0l4WvW6U6KWXC@cluster0.d2kjzik.mongodb.net/')

}

