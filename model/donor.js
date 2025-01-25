const mongoose = require('mongoose');
const { Schema } = mongoose;
const donorSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    bloodGroup: String,
    gender: String,
    address: String,
    shortDescription: String,
    areaId: { type: Schema.Types.ObjectId, ref: 'areas'},
});

const Donor = mongoose.model("donors", donorSchema);
module.exports = Donor;