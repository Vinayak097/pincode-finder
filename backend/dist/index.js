import express from 'express';
import { banglore } from "./db.js";
const app = express();
app.get('/health', (req, res) => {
    res.send('healthy');
});
app.get('/pincode/:id', (req, res) => {
    const pincodeId = req.params.id;
    const pincodeData = banglore.find((item) => item.pincode === pincodeId);
    res.status(200).json(pincodeData);
});
app.get('/area/:name', (req, res) => {
    const areaName = req.params.name;
    const areaData = banglore.find((item) => item.area === areaName);
    res.status(200).json(areaData);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map