const mongoose = require('mongoose');


const valorantSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  player1Name: { type: String, required: true },
  player1RiotId: { type: String, required: true },
  player1Email: { type: String, required: true },
  player2Name: { type: String, required: true },
  player2RiotId: { type: String, required: true },
  player2Email: { type: String, required: true },
  player3Name: { type: String, required: true },
  player3RiotId: { type: String, required: true },
  player3Email: { type: String, required: true },
  player4Name: { type: String, required: true },
  player4RiotId: { type: String, required: true },
  player4Email: { type: String, required: true },
  player5Name: { type: String, required: true },
  player5RiotId: { type: String, required: true },
  player5Email: { type: String, required: true }
});

module.exports = mongoose.model('valorantmodel', valorantSchema);