const express = require("express");
const { addDonor,updateDonor,deleteDonor,getAllDonors,getDonorById } = require("../handlers/donor.handler");
const router = express.Router();

// create donor
router.post("/", async (req, res)=>{
    let model = req.body;
    let result = await addDonor(model);
    res.send(result);
})

// get all donor list
router.get("", async (req, res)=> {
    let result = await getAllDonors();
    res.send(result);
});

// get donor by id
router.get("/:id", async (req, res)=> {
    let id = req.params['id'];
    let result = await getDonorById(id);
    res.send(result);
});

// update donor
router.put("/:id", async (req, res)=> {
    let model = req.body;
    let id = req.params['id'];

    await updateDonor(id, model);
    res.send({ message: "Donor update successfully"});
});

// delete donor
router.delete("/:id", async(req, res)=> {
    let id = req.params['id'];
    await deleteDonor(id);
    res.send({ message: "Donor delete successfully"});
})

module.exports = router;