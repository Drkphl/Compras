import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://leonardotizon:Dark2706%40@cluster1.kqbqh.mongodb.net/Lista`);
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);
    }
};

connectDB();

export default mongoose;
