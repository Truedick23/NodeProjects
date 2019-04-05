
var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost/movie_recommender', {
});

db.on('error', console.error.bind(console, 'Error:'));

db.once('open', function () {
  console.log('Success!')
});

db.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    Title: String,
    PictureUrl: String,
    PicName: String,
    Length: Number,
    Rating: Number,
    VotingNum: Number,
    IMDB: Number,
    Year: Number,
    Nation: [String],
    Summary: String,
    Genres: [String],
    Tags: [String],
    Directors: [String],
    Starring: [String],
});

const Movies = db.model('movies_info', movieSchema, 'movies_info');

exports.findMoviesOfYear = function (year, res) {
  Movies.find({'Year': year}, function (err, result) {
    if (err) {console.log('Error!', err);
    } else {
      res = result
    }
  });
};

exports.getAllMovies = function (res) {
  Movies.find({}, function (err, result) {
    if (err)
      console.log('Error!', err);
    else
      res = result;
  })
};

