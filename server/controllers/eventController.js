const eventModel = require("../model/eventModel");

const createEvent = async (req, res) => {
  const { image, name, description, location } = req.body;
  const event = new eventModel({
    image,
    name,
    description,
    location,
  });
  await event.save();
  return res.status(201).send({ massage: "event create successfully", event });
};
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { image, name, description, location } = req.body;
  const updateEvent = await eventModel.findOneAndUpdate(
    { _id: id },
    { name: name },
    { new: true }
    );
    console.log(updateEvent)
  return res
    .status(200)
    .send({ msg: "Updated Event Successfully", Data: updateEvent });
};

const deleteEvent = async (req, res) => {
    const { id } = req.params
    const { image, name, description, location } = req.body
    const deleteEvent = await eventModel.findOneAndDelete({
        _id:id
    })
    return res.status(200).send({message:"Delete event successfully",deleteEvent})
}

module.exports = { createEvent, updateEvent, deleteEvent };
