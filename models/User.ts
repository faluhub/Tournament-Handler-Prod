import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    image: String,
    active: Boolean,
    country: String,
    participatingTournaments: [mongoose.Schema.Types.ObjectId],
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
