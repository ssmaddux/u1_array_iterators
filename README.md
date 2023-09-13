<img src="https://i.imgur.com/wVPKb5D.png">

# Array Iterator Methods Walk-Through

## Learning Objectives

| Students Will Be Able To: |
|---|
| Identify the Purpose (Use Case) of Several Useful Array Iterator Methods |

## Intro

JavaScript Arrays have lots of helpful built-in methods.

These methods enable us to write code following a modern [functional programming](https://en.wikipedia.org/wiki/Functional_programming) approach verses that of [imperative programming](https://en.wikipedia.org/wiki/Imperative_programming).

#### Imperative Programming

Imperative programming is a more step-by-step way of writing code.

`for` loops, for example, are imperative: 

```js
for (let index = 0; index < array.length; index++) {
    // do stuff
}
```

With a `for` loop we're saying:

1. Initialize a looping variable
2. Use the looping variable to access an element in the array
3. Increment the looping variable
4. If the looping variable is less than the length of the array, loop again

#### Functional/Declarative Programming

In functional/declarative programming, we write code that describes what we want to do:

```js
array.forEach(function(val, idx) {
    // do stuff
});
```

How are we iterating? We, don't need to worry about that.

## Method Summary

| Method | Purpose | Returns | Callback Should | Callback's Args |
| --- | --- | :-: | --- | --- |
| [forEach(cb)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) | General purpose |`undefined` | Do whatever needs to be done | `(elem, idx)` | 
| [map(cb)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | Transform source array into a new array | New array | Return what goes in the new array | `(elem, idx)` | 
| [filter(cb)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) | Filter source array | New array | Return truthy value if current `elem` is to be included in new array | `(elem, idx)` | 
| [find(cb)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) | Find a certain element | The "found" `elem`, otherwise `undefined` | Return truthy when `elem` is "found" | `(elem, idx)` |
| [findIndex(cb)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) | Find the index of a certain element | The index of the first `elem` "found", otherwise `-1` | Return truthy when `elem` is "found" | `(elem, idx)` |
| [some(cb)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) | Check if at least one element matches a condition | `true` or `false` | Return truthy if `elem` is what you're checking for | `(elem, idx)` |
| [every(cb)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) | Check if every element matches a condition | `true` or `false` | Return truthy if `elem` is what you're checking for | `(elem, idx)` |
| [reduce(cb, initAcc)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) | Reduce the array to a single value/object | Final value of `acc` (accumulator) | Return the new value of `acc` for the next iteration | `(acc, elem, idx)` | 

## Lesson Instructions
In JavaScript, functions are first-class citizens, which means, we can pass functions around like values. **Higher Order Functions** are functions that pass a function as an argument or return a function as a value, adding another layer of complexity.

### Higher Order Functions w/ Food!

![map, filter, reduce with emoji](https://i.redd.it/yf7rw3pjiapx.jpg)

Take a look at the graphic above and see if you can guess what each of these methods does to the original values... We'll reference back to this throughout the lesson and it will make more sense!

### Review: [for loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)!

```js
const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

// Will console.log 1 2 3 4 5
```

### [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

- You can call the `.forEach()` method on any array and pass it a function to execute on each item in the array.

```js
const numbers = [1, 2, 3, 4, 5]

numbers.forEach((element) => {
    console.log(element);
  })

// Will console.log 1 2 3 4 5
```

### [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

- `.map()` will loop over a given array and produce a new array with new values based on logic you define in the function passed into `.map()`.

- In the cases below, we are storing the results from the methods in a variable so that we can console.log it and see the results.

```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const wordLengths = words.map((word) => {
    return word.length
  })

// console.log(wordLengths) will return [ 3, 5, 2, 5, 4, 2, 6 ]
```

```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const wordsWrappedInX = words.map((word) => { 
    const newWord = 'x' + word + 'x'
    return newWord
  })

// console.log(wordsWrappedInX) will return [ 'xthex', 'xworldx', 'xisx', 'xroundx', 'xlikex', 'xanx', 'xorangex' ]
```

### [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

- `.filter()` will loop through a provided array and produce a new array that only contains some of the items. Each item in the array runs through a function. If the function returns true, the item is included in the new array.

```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const shortWords = words.filter((word) => { 
    return word.length <= 3 
  })

// console.log(shortWords) will return [ 'the', 'is', 'an' ]
```

```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const wordsThatStartWithR = words.filter((word) => {
    return word[0] === 'r'
  })

// console.log(wordsThatStartWithR) will return ['round']
```

### [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

- The `.reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value that is returned.
- It can help to think of the accumulator as *"the running total so far"* as it keeps track of that value until the `.reduce()` is complete.
- Notice that the second argument that `.reduce()` takes is the *starting value* of the accumulator. This may not always be 0!

```js
const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((accumulator, value) => {
    return accumulator + value
  }, 0)

// console.log(sum) will return 15
```

__NOTE__ The single value returned can be an object or array. Often in examples it is a number or string but you can return anything. Reduce is extremely powerful and all other iterators can be written using it.

### [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

- The `.some()` method tests whether *at least one* element in the provided array satisfies the conditions of the provided function. If *at least one* element in the array satisfies the conditions of the provided function, `true` is returned.  If *none* of the elements pass the test, `false` is returned.

```js
const numbers = [1, 2, 3, 4, 5]

const greaterThanThree = array.some((num) => {
    return num > 3
  })

// console.log(greaterThanThree) will return true
```

### Method Chaining & Using Declared Functions

- When using these array methods we can method chain. So instead of doing:

```js
const numbers = [1, 2, 3, 4, 5]

const mappedNumbers = numbers.map((num) => {
    return num + 1
  })

// console.log(mappedNumbers) will return [ 2, 3, 4, 5, 6 ]

const filteredNumbers = mappedNumbers.filter((num) => {
    return num % 2 === 0
  })

// console.log(filteredNumbers) will return [ 2, 4, 6 ]
```


## Lesson Recap
We learned how we can use `.forEach()` on each item in an array. We also learned about the all-important array methods `.map()`, `.filter()`, and `.reduce()`. We also learned how to use method chaining to more efficiently affect our data.

## Resources
 - [MDN: forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
 - [MDN: Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#)
