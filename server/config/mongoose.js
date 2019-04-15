//require path and fs, these are built in to Node, fs = file structure
let path = require('path');
let fs = require('fs');

//require mongoose, need to require whatever module needed for current file
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/restfulTasks');

// Use native promises (only necessary with mongoose versions <= 4)
mongoose.Promise = global.Promise;

//setting up path
let models_path = path.join(__dirname, './../models');

//iterates through the models folder and serches for all the model js files
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
});