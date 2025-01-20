const express = require("express");
const Upload = "./Upload";
const path = require("path");
const multer = require("multer");
const {
  createEvent,
  updateEvent,
  deleteEvent,
  allEvent,
} = require("../../controllers/eventController");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();
    cb(null, fileName+ fileExt);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1*1024*1024,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(new error("Only jpeg, jpg,or png file allowed"));
    }
  },
});


const router = express.Router();
//localhost:3000/api/v1/event/create-event
router.post("/create-event", upload.single("image"), createEvent);
//localhost:3000/api/v1/event/update-event/:id
router.patch("/update-event/:id", updateEvent);
//localhost:3000/api/v1/event/delete-event/:id
router.delete("/delete-event/:id", deleteEvent);
//localhost:3000/api/v1/event/all-event
router.get("/all-event", allEvent);

module.exports = router;
