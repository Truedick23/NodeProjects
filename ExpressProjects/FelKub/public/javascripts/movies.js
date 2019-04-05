var mongoQuerier = require('./mongoQuerier');

function test() {
    res = [];
    mongoQuerier.getAllMovies(res);
    console.log(res);
}

test();