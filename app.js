const express = require("express");
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const port = 3000;
const areaRoutes = require("./routes/area");
const donorRoutes = require("./routes/donor");


app.use(express.json());
app.use(cors());
app.get("/", (req, res)=>{
    res.send("Server running succesfull");
});
app.use("/area",areaRoutes);
app.use("/donor", donorRoutes);

// database connection
async function connectDb() {
    await mongoose.connect("mongodb+srv://aminuldev404:82A6WkA6fHFnbQL2@blooddonation.rtkjb.mongodb.net/", {
        dbName: "blood-finder"
    });
    console.log("db successful connected");
}

connectDb().catch((err)=> {
    console.error(err);
})

app.listen(port,()=> {
    console.log("Server running on port", port);
});