var restify = require('restify');
var mongoose = require('mongoose');
var points = require("./book").points;
const corsMiddleware = require('restify-cors-middleware');

//mongodb connection url
var db = 'mongodb://localhost/test';

//connect to mongodb
mongoose.connect(db);

const server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});
const cors = corsMiddleware({});
server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

//Data Inserted
server.post('/insert', function (req, res, next) {

    var point = points(req.body);

    point.save(function (err) {
        if (err) return handleError(err);
        else{
            res.end("Country Added")
        }

    });


    return next();
});

server.get('/getcountries', function (req, res, next) {
    var point = points();



    points.find(function (err, _points) {
        if (err) return handleError(err);
        res.send(_points);
    });


    return next();
});


//Data Updated
server.put('/update', function (req, res, next) {

    var point = points(req.body);



    points.findByIdAndUpdate(req.body._id, req.body, {new: true}, function (err, _points) {
        if (err) return handleError(err);
        res.send(_points);
    });


    return next();
});

//Speakers List
server.put('/addPoints/SL/:id', function (req, res, next) {

    var point = points(req.body);

    points.findById(req.params.id, function (err, doc){


        var result = doc;

        result.Speech.SpeakersList = parseInt(result.Speech.SpeakersList) + parseInt(req.body.Speech.SpeakersList);

        if (parseInt(req.body.Speech.SpeakersList) <= 10){

            points.findByIdAndUpdate(req.params.id, result, {new: true}, function (err, _points) {
                if (err) return handleError(err);
                res.send(_points);
            });
        }
        else  {
            res.send("Maximum number of points has been exceeded")
        }

    });


    return next();
});

//Mod Caucus
server.put('/addPoints/ModCaucus/:id', function (req, res, next) {

    var point = points(req.body);

    points.findById(req.params.id, function (err, doc){


        var result = doc;

        result.Speech.ModeratedCaucusTopics = parseInt(result.Speech.ModeratedCaucusTopics) + parseInt(req.body.Speech.ModeratedCaucusTopics);

        if (parseInt(req.body.Speech.ModeratedCaucusTopics) <= 10){

            points.findByIdAndUpdate(req.params.id, result, {new: true}, function (err, _points) {
                if (err) return handleError(err);
                res.send(_points);
            });
        }
        else  {
            res.send("Maximum number of points has been exceeded")
        }

    });


    return next();
});

//POI asking
server.put('/addPoints/POIa/:id', function (req, res, next) {

    var point = points(req.body);

    points.findById(req.params.id, function (err, doc){


        var result = doc;

        result.Speech.POIa = parseInt(result.Speech.POIa) + parseInt(req.body.Speech.POIa);

        if (parseInt(req.body.Speech.POIa) <= 5){

            points.findByIdAndUpdate(req.params.id, result, {new: true}, function (err, _points) {
                if (err) return handleError(err);
                res.send(_points);
            });
        }
        else  {
            res.send("Maximum number of points has been exceeded")
        }

    });


    return next();
});

//POI replying
server.put('/addPoints/POIr/:id', function (req, res, next) {

    var point = points(req.body);

    points.findById(req.params.id, function (err, doc){


        var result = doc;

        result.Speech.POIr = parseInt(result.Speech.POIr) + parseInt(req.body.Speech.POIr);

        if (parseInt(req.body.Speech.POIr) <= 5){

            points.findByIdAndUpdate(req.params.id, result, {new: true}, function (err, _points) {
                if (err) return handleError(err);
                res.send(_points);
            });
        }
        else  {
            res.send("Maximum number of points has been exceeded")
        }

    });


    return next();
});

//foreign policy violation
server.put('/addPoints/FPV/:id', function (req, res, next) {

    var point = points(req.body);

    points.findById(req.params.id, function (err, doc){


        var result = doc;

        result.Speech.RTR.ForeignPolicyViolation = parseInt(result.Speech.RTR.ForeignPolicyViolation) + parseInt(req.body.Speech.RTR.ForeignPolicyViolation);

        if (parseInt(req.body.Speech.RTR.ForeignPolicyViolation) <= 10){

            points.findByIdAndUpdate(req.params.id, result, {new: true}, function (err, _points) {
                if (err) return handleError(err);
                res.send(_points);
            });
        }
        else  {
            res.send("Maximum number of points has been exceeded")
        }

    });


    return next();
});

//Factual Error
server.put('/addPoints/FE/:id', function (req, res, next) {

    var point = points(req.body);

    points.findById(req.params.id, function (err, doc){


        var result = doc;

        result.Speech.RTR.FactualError = parseInt(result.Speech.RTR.FactualError) + parseInt(req.body.Speech.RTR.FactualError);

        if (parseInt(req.body.Speech.RTR.FactualError) <= 5){

            points.findByIdAndUpdate(req.params.id, result, {new: true}, function (err, _points) {
                if (err) return handleError(err);
                res.send(_points);
            });
        }
        else  {
            res.send("Maximum number of points has been exceeded")
        }

    });


    return next();
});

//InfringementOfSovereignty
server.put('/addPoints/IOS/:id', function (req, res, next) {

    var point = points(req.body);

    points.findById(req.params.id, function (err, doc){


        var result = doc;

        result.Speech.RTR.InfringementOfSovereignty = parseInt(result.Speech.RTR.InfringementOfSovereignty) + parseInt(req.body.Speech.RTR.InfringementOfSovereignty);

        if (parseInt(req.body.Speech.RTR.InfringementOfSovereignty) <= 5){

            points.findByIdAndUpdate(req.params.id, result, {new: true}, function (err, _points) {
                if (err) return handleError(err);
                res.send(_points);
            });
        }
        else  {
            res.send("Maximum number of points has been exceeded")
        }

    });


    return next();
});

//Statements
server.put('/addPoints/statements/:id', function (req, res, next) {

    var point = points(req.body);

    points.findById(req.params.id, function (err, doc){


        var result = doc;

        result.Speech.Statements = parseInt(result.Speech.Statements) + parseInt(req.body.Speech.Statements);

        if (parseInt(req.body.Speech.Statements) <= 10){

            points.findByIdAndUpdate(req.params.id, result, {new: true}, function (err, _points) {
                if (err) return handleError(err);
                res.send(_points);
            });
        }
        else  {
            res.send("Maximum number of points has been exceeded")
        }

    });


    return next();
});

//Resolution Sponsors
server.put('/addPoints/RS/:id',function (req, res, next) {

    var point = points(req.body);

    points.findById(req.params.id, function (err, doc){


        var result = doc;

        result.Speech.ResolutionSponsors = parseInt(result.Speech.ResolutionSponsors) + parseInt(req.body.Speech.ResolutionSponsors);

        if (parseInt(req.body.Speech.ResolutionSponsors) <= 10){

            points.findByIdAndUpdate(req.params.id, result, {new: true}, function (err, _points) {
                if (err) return handleError(err);
                res.send(_points);
            });
        }
        else  {
            res.send("Maximum number of points has been exceeded")
        }

    });


    return next();
});

//Amendments
server.put('/addPoints/Amendments/:id', function (req, res, next) {

    var point = points(req.body);

    points.findById(req.params.id, function (err, doc){


        var result = doc;

        result.Speech.Amendments = parseInt(result.Speech.Amendments) + parseInt(req.body.Speech.Amendments);

        if (parseInt(req.body.Speech.Amendments) <= 10){

            points.findByIdAndUpdate(req.params.id, result, {new: true}, function (err, _points) {
                if (err) return handleError(err);
                res.send(_points);
            });
        }
        else  {
            res.send("Maximum number of points has been exceeded")
        }

    });


    return next();
});

//Data deleted
server.del('/delete/:id', function (req, res, next) {

    //var book = books(req.body);

    points.findOneAndRemove(req.params._id, req.body, function (err, deleted) {
        if (err) return handleError(err);
    // deleted at most one tank document
        res.send(deleted)
    });

    return next();
});

server.listen(5600,function(){
    console.log("Server started...")

});


