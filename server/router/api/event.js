const express = require("express");
const {
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../../controllers/eventController");

const router = express.Router();
//localhost:3000/api/v1/event/create-event
router.post("/create-event", createEvent);
//localhost:3000/api/v1/event/update-event/:id
router.patch("/update-event/:id", updateEvent);
//localhost:3000/api/v1/event/delete-event/:id
router.delete("/delete-event/:id", deleteEvent);

module.exports = router;
