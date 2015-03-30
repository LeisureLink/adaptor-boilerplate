var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

//Note: this assumes the test file is being run in ROOT/test. If the test file is located in a subfolder, one '..' argument should be added to path.resolve for every level of nesting.
var ROOT = require('path').resolve(__dirname, '..');
global.rootRequire = function(filePath){
    return require(path.join(ROOT, filePath));
};

describe('Boilerplate tests', function () {
    beforeEach(function (done) {
        //TODO: Initialize stuff here
        done()
    });
    describe('Should probably add some real unit tests here where beneficial', function () {
        it('should run test 1 successfully', function (done) {
           'Hello world!'.should.deep.equal('Hello world!');
           done();
        });

        it('should run test 2 successfully', function (done) {
            var error = null;
            (error === null).should.be.true;
            done();
        });
    });
});
