//forEach

const birds = ['turkey', 'chicken', 'falcon','kiwi','ostrich']

birds.forEach((bird)=> {
    console.log(bird)
})

const numbers = [1,2,3,4,5]

numbers.forEach((number) => {console.log (number * 10)})

//map makes a new array

const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const wordLengths = words.map((word) => {
    return word.length
  })

 //console.log(wordLengths) 

 

 const greaterThanThree = numbers.some((num) => {
     return num > 3
   })
 
  console.log(greaterThanThree)