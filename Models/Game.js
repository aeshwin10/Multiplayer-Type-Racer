const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    currentWordIndex : {
        type: Number,
        default : 0
    },
    socketID : {type : String},
    isPartyLeader : {type: Boolean, default : false}, //Only to enable party leader to start the game.
    WPM : {type : Number, default: -1},
    nickName : {type : String}

});

const GameSchema = new mongoose.Schema({
    words : [{type : String}],   //We'll use currentWordIndex to access the word in the array.
    isOpen : {type : Boolean, default : true},
    isOpen : {type : Boolean, defaul : false},
    players : [PlayerSchema],
    startTime : {type : Number}
});

module.exports = mongoose.model('Game', GameSchema);