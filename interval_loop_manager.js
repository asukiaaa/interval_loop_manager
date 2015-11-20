//
// Interval Loop Manager
// https://github.com/asukiaaa/interval_loop_manager
// Created by asukiaaa.
// 2015.11.20
//

var intervalLoopManager = function(functionToLoop, options) {
  this.functionToLoop = functionToLoop
  this.assignValues(options)
  this.start()
}

intervalLoopManager.prototype.start = function(options) {
  this.assignValues(options)
  if ( typeof this.interval === 'undefined' ||
       this.isPresent() ) {
    return
  }
  var that = this
  function loop(){
    that.functionToLoop()
    that.timeout = setTimeout(loop, that.interval)
  }
  loop()
}

intervalLoopManager.prototype.stop = function() {
  if ( this.isPresent() ) {
    clearTimeout(this.timeout)
    this.timeout = null
  }
}

intervalLoopManager.prototype.restart = function(options) {
  this.stop()
  this.start(options)
}

intervalLoopManager.prototype.assignValues = function(options) {
  if ( typeof options !== 'undefined' ){
    if ( typeof options['interval'] !== 'undefined' ) {
      this.interval = options['interval']
    }
  }
}

intervalLoopManager.prototype.isPresent = function(options) {
  return ( typeof this.timeout !== 'undefined' &&
           this.timeout != null )
}
