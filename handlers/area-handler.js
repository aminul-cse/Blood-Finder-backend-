const Area = require("../model/area");

// Create Area
async function addArea(model) {
    let area = new Area({
        name: model.name
    });
    await area.save();
    return area.toObject();
}

// get all Area list
async function getAreas() {
    let areas = await Area.find();
    return areas.map((c)=> c.toObject());
}

// get area By ID
async function getAreaById(id) {
    let area = await Area.findById(id);
    return area.toObject();
}

// Update Area
async function updateArea(id, model) {
    await Area.findOneAndUpdate({_id:id}, model);
    return;
}

// Delete Area
async function deleteArea(id) {
    await Area.findByIdAndDelete(id);
    return;
}

module.exports = { addArea, getAreas, updateArea, deleteArea, getAreaById }