'use strict';

/*jshint -W030 */ // JSHint will ignore "Expected an assignment or function call and instead saw an expression"

var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

describe('Boilerplate tests', function () {
    beforeEach(function (done) {
        //TODO: Initialize stuff here
        done();
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
