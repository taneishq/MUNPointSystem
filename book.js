var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PointsSchema = new Schema({
    Country : String,
    Speech : {
        SpeakersList  : Number,
        ModeratedCaucusTopics : Number,
        POIa  : Number,
        POIr  : Number,
        RTR  : {
            ForeignPolicyViolation : Number,
            FactualError : Number,
            InfringementOfSovereignty : Number,
        },
        Statements  : Number,
        ResolutionSponsors  : Number,
        Amendments  : Number,
    }

});



module.exports.points = mongoose.model('points', PointsSchema);
