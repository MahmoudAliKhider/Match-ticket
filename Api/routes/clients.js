const express = require("express");
const router = express.Router();
const {getClients,
       getClient,
       deleteClient,
       setClients } = require("../controllers/clientsController")

router.get("/",getClients)
router.get("/:id",getClient)
router.post("/",setClients)
router.delete("/:id",deleteClient)





module.exports = router;