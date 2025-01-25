const Donor = require("../model/donor")

// create donor
async function addDonor(model) {
    let donor = new Donor({
        ...model
    });
    await donor.save();
    return donor.toObject();
}

// get all donor list
async function getAllDonors() {
    let donors = await Donor.find();
    return donors.map(donor => donor.toObject());
}

// get donor by id
async function getDonorById(id) {
    let donor = await Donor.findById(id);
    return donor ? donor.toObject() : null;
}

// update donor
async function updateDonor(id, model) {
    await Donor.findByIdAndUpdate(id, model);
}

// delete donor
async function deleteDonor(id) {
    await Donor.findByIdAndDelete(id);
}

module.exports = {
    addDonor,
    updateDonor,
    deleteDonor,
    getAllDonors,
    getDonorById
};