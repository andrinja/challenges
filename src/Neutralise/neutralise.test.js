const neutralise = require('./neutralise');
const chai = require("chai");
const assert = chai.assert;

describe("Fixed Tests", function() {
  it("Basic Test Cases", function() {
    assert.strictEqual(neutralise("--++--", "++--++"), "000000");
    assert.strictEqual(neutralise("-+-+-+", "-+-+-+"), "-+-+-+");
    assert.strictEqual(neutralise("-++-", "-+-+"), "-+00");
    assert.strictEqual(neutralise("--++", "++++"), "00++");
    assert.strictEqual(neutralise("+++--+---", "++----++-"), "++0--000-");
    assert.strictEqual(neutralise("-----", "-----"), "-----");
    assert.strictEqual(neutralise("-+", "++"), "0+");
    assert.strictEqual(neutralise("--", "-+"), "-0");
    assert.strictEqual(neutralise("-++", "+--"), "000");
    assert.strictEqual(neutralise("++-++--++-", "-+++-++-++"), "0+0+0000+0");
    assert.strictEqual(neutralise("-++-+-++-", "+-++++---"), "00+0+000-");
    assert.strictEqual(neutralise("---++-+--", "-+++--++-"), "-00+0-+0-");
    assert.strictEqual(neutralise("+-----+++-", "--+-+-++--"), "0-0-0-++0-");
    assert.strictEqual(neutralise("+-----+-", "---++-++"), "0--00-+0");
    assert.strictEqual(neutralise("-+--+-+---", "-+--+-+-+-"), "-+--+-+-0-");
    assert.strictEqual(neutralise("+-+", "-++"), "00+");
    assert.strictEqual(neutralise("-++", "-+-"), "-+0");
    assert.strictEqual(neutralise("---+", "-+++"), "-00+");
    assert.strictEqual(neutralise("+--", "+--"), "+--");
    assert.strictEqual(neutralise("--+++-+-", "+++++---"), "00+++-0-");
  });
});
