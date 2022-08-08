const express = require("express");
const { Router } = require("express");
const router = express.Router();
const {
  getTickets,
  getTicket,
  setTickets,
  updateTickets,
  delateTickets,
} = require("../controllers/tickersController");

router.get("/", getTickets); //read All
router.get("/:id", getTicket); //read one
router.post("/", setTickets); //create one
router.put("/:id", updateTickets); //Update One
router.delete("/:id", delateTickets); //delete

module.exports = router;
