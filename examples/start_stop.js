'use strict'

const IntervalLoopManager = require('../index')

const sampleFunction = () => {
  const d = new Date()
  console.log('sample', d)
}

const managedLoop = new IntervalLoopManager(sampleFunction, {interval: 500})

setTimeout(() => {
  console.log('before stop. isRunning: ', managedLoop.isRunning())
  managedLoop.stop()
  console.log('after stop. isRunning: ', managedLoop.isRunning())
}, 2000)

setTimeout(() => {
  managedLoop.start()
}, 4000)

setTimeout(() => {
  managedLoop.assignValues({interval: 1500})
}, 6000)

setTimeout(() => {
  managedLoop.restart({interval: 100})
}, 10000)

setTimeout(() => {
  managedLoop.stop()
}, 12000)
