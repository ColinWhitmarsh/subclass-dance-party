  var makeTrumpDancer = function(top, left, timeBetweenSteps) {

    this.rand = (Math.floor(Math.random()*4));
    console.log('rand', this.rand);
    left =['30vw', '40vw','50vw','60vw'][this.rand];

    makeDancer.call(this, '55vh', left, timeBetweenSteps);
    this.$node.addClass('trump-dancer');
    this.$node.removeClass('dancer');
  };
  makeTrumpDancer.prototype = Object.create(makeDancer.prototype);

  makeTrumpDancer.prototype.step = function(timeBetweenSteps) {
    
    var y = $(window).height();
    
    var x = ['-10vw','25vw','75vw','110vw'][this.rand];

    var self = this;
    setTimeout(function(){ self.setPosition(y,x); }, 1000);
  };