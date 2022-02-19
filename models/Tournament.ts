import mongoose from 'mongoose';

const TournamentSchema = new mongoose.Schema({
    name: String,
    description: String,
    theme: {
        colors: [String],
        image: String
    },
    public: Boolean,
    password: String,
    playStyle: String,
    tags: [String],
    participants: [mongoose.Schema.Types.ObjectId],
    spectators: [mongoose.Schema.Types.ObjectId],
});

export default mongoose.models.Tournament || mongoose.model('Tournament', TournamentSchema);
