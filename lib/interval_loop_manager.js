/*
 * Interval Loop Manager
 * https://github.com/asukiaaa/interval_loop_manager
 * MIT License
 * By asukiaaa.
 */

var IntervalLoopManager = function(functionToLoop, options) {
  this.functionToLoop = functionToLoop
  this.assignValues(options)
  this.start()
}

IntervalLoopManager.prototype.start = function(options) {
  this.assignValues(options)
  if ( typeof this.interval === 'undefined' ||
       this.isRunning() ) {
    return
  }
  var that = this
  function loop(){
    that.functionToLoop()
    that.timeout = setTimeout(loop, that.interval)
  }
  loop()
}

IntervalLoopManager.prototype.stop = function() {
  if ( this.isRunning() ) {
    clearTimeout(this.timeout)
    this.timeout = null
  }
}

IntervalLoopManager.prototype.restart = function(options) {
  this.stop()
  this.start(options)
}

IntervalLoopManager.prototype.assignValues = function(options) {
  if ( typeof options !== 'undefined' ){
    if ( typeof options['interval'] !== 'undefined' ) {
      this.interval = options['interval']
    }
  }
}

IntervalLoopManager.prototype.isRunning = function(options) {
  return ( typeof this.timeout !== 'undefined' &&
           this.timeout != null )
}

module.exports = IntervalLoopManager
