var athlete = require('../athlete');
var assert = require('assert');


describe('athlete', function(){
it('should have hydration level of 100', function(){
  assert.equal(100, athlete.hydration);
});
it('should have a distance that begins at 0', function(){
  assert.equal(0, athlete.distance);
});
it('it should increase distance when run', function(){
  athlete.run(10);
  assert.equal(10, athlete.distance);
});
it('should descrease hydration when running', function(){
  athlete.run(10);
  assert.equal(90, athlete.hydration);
});
it('should not run when hydration is at zero', function(){
  athlete.hydration = 0;
  athlete.run(5);
  assert.equal(20, athlete.distance);
});
it('check athlete has empty water bottle', function(){
  assert.equal(0, athlete.bottle.volume);
});
it('fill athlete\'s water bottle', function(){
  athlete.bottle.fill();
  assert.equal(100, athlete.bottle.volume);
});
it('hydration goes up after a drink', function(){
  athlete.drink();
  assert.equal(10, athlete.hydration);
});
});