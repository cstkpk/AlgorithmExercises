let assert = require('assert');
let test = require('../11missingLetter.js');

describe('Find the missing letter', function() {
    it('should find the value B', function() {
        assert.equal(test.findMissingLetter(["A", "C"]), "B");
    });
    it('should find the value o', function() {
        assert.equal(test.findMissingLetter(["l", "m", "n", "p", "q"]), "o");
    });
    it('should find the value T', function() {
        assert.equal(test.findMissingLetter(["Q", "R", "S", "U", "V", "W"]), "T");
    });
});