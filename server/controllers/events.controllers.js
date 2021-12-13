const Event = require('../models/events.models');

const getEvents = async(req, res) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const createEvents = async(req, res) => {
  try {
    const { title, date, venue } = req.body;
    const event = await Event.create({title, date, venue});
    res.status(200);
    res.send(event);
  } catch (error) {
    console.log(error)
    res.status(400)
  }
}

module.exports = {getEvents, createEvents}