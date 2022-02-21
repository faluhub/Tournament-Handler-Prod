import mongoose from 'mongoose';

export const RawUserSchema = {
    id: String,
    name: String,
    image: String,
    active: Boolean,
    country: String,
    spectating: String,
    participating: String
}

const UserSchema = new mongoose.Schema(RawUserSchema);

export default mongoose.models.User || mongoose.model('User', UserSchema);
