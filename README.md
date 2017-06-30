# Interval Loop Manager
A class to manage a loop with some interval.

# Purpose
I want set a loop with some interval.

Sometimes, I want to stop the loop or change the interval.

# How to use

I explanation interval loop manager by setting a loop of the following function.

```js
function yourFunction() {
  // some process
}
```

## Start a loop

In case you want to set loop with 5 seconds interval.

```js
var managedLoop =
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
if ( managedLoop.isPresent() ) {
  console.log('Looping.')
} else {
  console.log('No loop.')
}
```

# License
MIT.

# References
http://stackoverflow.com/questions/1280263/changing-the-interval-of-setinterval-while-its-running
