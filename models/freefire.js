const mongoose = require('mongoose');

const freeFireSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  player1Name: { type: String, required: true },
  player1IGN: { type: String, required: true },
  player1UID: { type: String, required: true },
  player1Email: { type: String, required: true },
  player2Name: { type: String, required: true },
  player2IGN: { type: String, required: true },
  player2UID: { type: String, required: true },
  player2Email: { type: String, required: true },
  player3Name: { type: String, required: true },
  player3IGN: { type: String, required: true },
  player3UID: { type: String, required: true },
  player3Email: { type: String, required: true },
  player4Name: { type: String, required: true },
  player4IGN: { type: String, required: true },
  player4UID: { type: String, required: true },
  player4Email: { type: String, required: true }
});

module.exports = mongoose.model('freefiremodel', freeFireSchema);