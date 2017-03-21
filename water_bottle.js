var water_bottle = {
   volume: 0,
   fill: function(){
    this.volume = 100;
   },
   drank: function(){
    if (this.volume >= 10){
    this.volume -= 10;}
   },
   empty: function(){
    this.volume = 0;
   }
 };

 module.exports = water_bottle;