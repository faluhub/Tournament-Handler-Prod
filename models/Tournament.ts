import mongoose from 'mongoose';

export const RawTournamentSchema = {
    id: String,
    name: String,
    description: String,
    theme: {
        colors: [String],
        image: String
    },
    public: Boolean,
    password: String,
    random: Boolean,
    glitchless: Boolean,
    tags: [String],
    host: String,
    participants: [String],
    spectators: [String]
}

const TournamentSchema = new mongoose.Schema(RawTournamentSchema);

export default mongoose.models.Tournament || mongoose.model('Tournament', TournamentSchema);
