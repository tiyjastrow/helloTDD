const apiApp = require("../api");
const assert = require("assert");
const request = require("supertest");

describe("GET /api/hello", function() {
    it("should return successfully", function(done){
        request(apiApp)
        .get("/api/hello")   // returns a promise
        .expect(200)
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(function(res){
            assert.equal( res.body["hello"], "world" );
        })
        .end(done);
    });
});