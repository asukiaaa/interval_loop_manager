# Interval Loop Manager
A class to manage a loop with some interval.

# Purpose
I want set a loop with some interval.

Sometimes, I want to stop the loop or change the interval.

# How to use

## Setup

Require interval-loop-manager.

```js
const IntervalLoopManager = require('interval-loop-manager')
```

I explain interval loop manager by setting a loop of the following function.

```js
const yourFunction = () => {
  // some process
}
```

## Start a loop

In case you want to set loop with 5 seconds interval.

```js
const managedLoop =
  new IntervalLoopManager(
    yoruFunction,
    { interval: 5000 }
  )
```

or

```js
var managedLoop = new IntervalLoopManager( yourFunction )
managedLoop.start({ interval: 5000 })
```

## Stop the loop

```js
managedLoop.stop()
```

## Restart the loop

```js
managedLoop.restart()
```

or

```js
managedLoop.start()
```

## Change the interval

Ways to change the interval to 7 seconds.

In case you want to change it as soon as possible.

```js
managedLoop.restart({ interval: 7000 })
```

In case you allow current loop to finish.

```js
managedLoop.assignValues({ interval: 7000 })
```

## Detect whether the loop is running or not

```js
if ( managedLoop.isRunning() ) {
  console.log('Loop is running.')
} else {
  console.log('Loop is not running.')
}
```

# License
MIT

# Reference
http://stackoverflow.com/questions/1280263/changing-the-interval-of-setinterval-while-its-running
