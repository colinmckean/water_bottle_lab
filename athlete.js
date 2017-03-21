var bottle = require('./water_bottle');

var athlete = {
  hydration: 100,
  distance: 0,
  run: function(distanceToRun){
    if(this.hydration > distanceToRun/2){
    this.distance += distanceToRun;
    this.hydration -= distanceToRun/2;
    }
  },
    bottle: bottle,
    drink: function(){
      this.bottle.drank();
      this.hydration += 10;
    }
}

module.exports = athlete;