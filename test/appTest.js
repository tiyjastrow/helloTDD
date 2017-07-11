const app = require("../app");
const timesTen = require("../appFunctions").timesTen;
const multiplier = require("../appFunctions").multiplier;
// const assert = require("assert");
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
chai.should();

describe("Mocha and Chai Testing", function() {
  describe("App", function() {
    it("should return hello", function() {
      assert.equal(app(), "hello");
    });
  });

  describe("timesTen function", function() {
      // test that function returns passed parm times 10.
      const result = timesTen(7);
      const answer = 70;
      it("should return correctly", function() {
          result.should.equal(answer);
          timesTen(5).should.equal(50);
      });

      it("should be of type number", function(){
          result.should.be.a("number");
      });

      it("expected result to be correct", function(){
          expect(result).to.be.equal(answer);
      });

      it("should be a multiple of 10", function(){
          const is_multiple_of_10 = result % 10 === 0;
          is_multiple_of_10.should.be.true;
      });
  });

  describe("multiplier function", function(){
      var v1 = 3;
      const v2 = 5;
      const answer = 15;
      const result = multiplier(v1, v2);

      it("should return correctly", function(){
          result.should.equal(answer);
      });
      it("result should be greater than inputs", function() {
          result.should.be.above(v1);
          result.should.be.above(v2);
      });
    //   it("should return zero if an input is zero", function(){
    //       v1 = 0;
    //       res
    //   });
    //   it("should return negative.....")
  });
});
