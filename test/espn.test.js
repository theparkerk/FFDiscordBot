﻿const expect = require("chai").expect;
const espn = require("../lib/espn");

describe('ESPN Utilities', function () {
    it('Should return the next 5 games from a lowercase team abbreviation', function () {
        let teamName = 'la';
        espn.next5(teamName).then(function (value) {
            expect(value.schedule).to.have.lengthOf(5);
        });
    });

    it('Should return the next 5 games from an uppercase team abbreviation', function () {
        let teamName = 'MIA';
        espn.next5(teamName).then(function (value) {
            expect(value.schedule).to.have.lengthOf(5);
        });
    });

    it('Should return the next 5 games from a valid team mascot', function () {
        let teamName = 'Seahawks';
        espn.next5(teamName).then(function (value) {
            expect(value.schedule).to.have.lengthOf(5);
        });
    });
});