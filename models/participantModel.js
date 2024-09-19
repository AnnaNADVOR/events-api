import { model, Schema } from "mongoose";

const emailRegexp = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;

const participantSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"]
    },
    email: {
        type: String,
        match: emailRegexp,
        required: [true, "Email is required"],
        unique: true,
    },
    birthDate: {
        type: Date,
        required: [true, "Birth date is required"]
    },
    infoSource: {
        type: String,
        required: [true, "Selecting a source of information is required"],
    }        
}, { versionKey: false, timestamps: true })

participantSchema.post("save", handleMongooseError);

const Participant = model("User", userSchema);

module.exports = {
    Participant
}