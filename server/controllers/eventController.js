const eventModel = require("../model/eventModel");


const createEvent = async (req, res) => {
  const { name, description, location } = req.body;
const {image} = req.file
  const event = new eventModel({
    image:req.file.path,
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
    {image:image},
    {description:description},
    {location:location},
    { new: true }
    );
    console.log(updateEvent)
  return res
    .status(200)
    .send({ msg: "Updated Event Successfully", Data: updateEvent });
};

const deleteEvent = async (req, res) => {
    const { id } = req.params
   
    const deleteEvent = await eventModel.findOneAndDelete({
        _id:id
    })
    return res.status(200).send({message:"Delete event successfully",deleteEvent})
}
const allEvent = async(req,res) => {
  const allEvents = await eventModel.find({})
  return res.status(200).send({ Success: "ALl Events", Data: allEvents });
}

module.exports = { createEvent, updateEvent, deleteEvent, allEvent };
