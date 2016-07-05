// utility for logging
if(!log)
    var log = function(){ console.log([].slice.call(arguments)) }

var FILL_ME_IN

// predefined variables
var whatIsThis = function(a, b) {
    return [this, a, b].join(',')
}

var inAnObject = {
    name: 'inAnObject',
    test1: whatIsThis,
    anotherObject: {
        name: 'anotherObject',
        test2: whatIsThis
    }
}

var inAFunction = function(a, b) {
    this.name = 'Sally'
    whatIsThis(a, b)
}

inAFunction.prototype.test3 = whatIsThis

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
}

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
}

/**
 * THE PROBLEMS
 */

console.assert(whatIsThis('hello', 'world') === '[object Window],hello,world'); // Depends if node or browser
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(window.whatIsThis('hello', 'world') === '[object Window],hello,world')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(inAnObject.test1('face', 'book') === '[object Object],face,book')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

// Error: inAnObject.anotherObject.test1 is not a function:
//console.assert(inAnObject.anotherObject.test1('twitter', 'book') === FILL_ME_IN)
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(inAnObject.anotherObject.test2('twitter', 'book') === '[object Object],twitter,book')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(whatIsThis.call() === '[object Window],,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(whatIsThis.call(trickyTricky) === '[object Object],,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(whatIsThis.call(trickyTricky, 'nice', 'job') === '[object Object],nice,job')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(whatIsThis.call(confusing) === '[object Object],,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(whatIsThis.call(confusing, 'hello') === '[object Object],hello,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(whatIsThis.apply(trickyTricky) === '[object Object],,')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(whatIsThis.apply(confusing, ['nice', 'job']) === '[object Object],nice,job')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

//console.assert(whatIsThis.apply(confusing, 'nice', 'job') === FILL_ME_IN) // ERROR: Uncaught TypeError: CreateListFromArrayLike called on non-object
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(inAFunction('what will', 'happen?') === undefined) // inAFunction doesn't return
// // Once you've figured out what the output is, answer here in a comment: Why is this so?

try{ // Errors because test3 is on the prototype, not the instance
    console.assert(inAFunction.test3('A', 'B') === FILL_ME_IN)
} catch(e){
    log(e)
}
// Once you've figured out what the output/result is, answer here in a comment: Why is this so?

var newObject = new inAFunction('what will', 'happen?')
console.assert(newObject.name === 'Sally')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

var newObject2 = new inAFunction('what will', 'happen?')
console.assert(newObject2.test3('C', 'D') === '[object Object],C,D')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(inAnObject.test1.call(trickyTricky, 'face', 'book') === '[object Object],face,book')
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']) === '[object Object],foo,bar')
// Once you've figured out what the output is, answer here in a comment: Why is this so?