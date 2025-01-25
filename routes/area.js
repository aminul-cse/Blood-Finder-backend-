const express = require("express");
const router = express.Router();
const Area = require("../model/area");
const { updateArea, getAreas, addArea, deleteArea, getAreaById } = require("../handlers/area-handler");

// Create area
router.post("", async (req, res)=> {
    let model = req.body;
    let result = await addArea(model);
    res.send(result);
});

// get all area list
router.get("", async (req, res)=> {
    let result = await getAreas();
    res.send(result);
});

// get area by id
router.get("/:id", async (req, res)=> {
    let id = req.params['id'];
    let result = await getAreaById(id);
    res.send(result);
});

// update area
router.put("/:id", async (req, res)=> {
    let model = req.body;
    let id = req.params['id'];

    await updateArea(id, model);
    res.send({ message: "Area update successfully"});
});

// delete area
router.delete("/:id", async(req, res)=> {
    let id = req.params['id'];
    await deleteArea(id);
    res.send({ message: "Area delete successfully"});
})


module.exports = router;