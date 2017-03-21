var bottle = require('../water_bottle');
var assert = require('assert');

describe('Water Bottle', function(){
  // beforeEach(function(){
  //   bottle.volume = 0;
  // });
  it('should be empty at start', function(){
    assert.equal(0, bottle.volume);
  });
  it('should fill empty bottle to 100', function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
  });
  it('should go down by 10 when drank', function(){
    bottle.drank();
    assert.equal(90, bottle.volume);
  });
  it('should be empty when emptied', function(){
    bottle.empty();
    assert.equal(0, bottle.volume);
  });
  it('should not go below 0', function(){
    bottle.empty();
    bottle.drank();
    assert.equal(0, bottle.volume);
  });
});
