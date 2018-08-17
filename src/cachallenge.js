// Num 1


let rewindRumi =['you','seeking','is','seek','you','what'];
// let rumi =[];

let reverseArray = (arr) => {
  for(x=rewindRumi.length-1; x > -1;x--){
    rewindRumi[x];
    console.log(rewindRumi[x])
    // rumi.push(newRumi);
  }  
}
// console.log([rewindRumi]);
reverseArray(rewindRumi);

// Num 2

let aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
let greeting = ""
function greetAliens(aliens){
  for(x=0; x < aliens.length;x++){
    greeting += "Oh powerful " + aliens[x] + ", we humans offer our unconditional surrender!";  
  }
  return  greeting;
}
greetAliens(aliens);

// NUM 3

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human']


function convertToBaby(animals){
  for(x=0;x <= animals.length;x++){
    babyAnimal = "baby " + animals[x];
  }
  return babyAnimal;
}

convertToBaby(animals);


// Num 4 

 const numbers = [5, 3, 9, 30];

 const smallestPowerOfTwo = arr => {
       let results = [];
       // The 'outer' for loop - loops through each element in the array
       for (let i = 0; i < arr.length; i++) {
             number = arr[i];

             // The 'inner' while loop - searches for smallest power of 2 greater than the given number
             x = 1;
             while (x < number) {
                   x = x * 2;
             }
             results.push(x);
       }
       return results
 }

 console.log(smallestPowerOfTwo(numbers)) 
 // Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]



// Num 5

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];
// veggies.forEach(function(veg){
//   console.log(veg)
// })

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declinesEverything = (veggies) => {
    veggies.forEach(function(veg) {
        politelyDecline(veg)
      }
    );
  }

//Part 2
let acceptEverything = (veg) =>{
  veg.map(veg =>{
    console.log('Okay, I guess I will eat some ' + veg +'.');
  })
}
// declinesEverything(veggies);
acceptEverything(veggies);


// Num 6
const numbers = [2, 7, 9, 171, 52, 33, 14];

const squareNums = (arr) => {
  newArr =[]
  arr.map((val)=> {
    toSquare = val * val;
    newArr.push(toSquare);
});
  return newArr;
}

squareNums(numbers);


// Num 7
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const shoutGreetings = (arr) => {
  const yell = arr.map(val => val.toUpperCase());
  return yell;
}

console.log(shoutGreetings(greetings))
Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

// ******BONUS******

// Num 8 
const years = [1988, 1999, 2000, 1933, 1981, 1914, 1911]

const sortYears = (arr) => {
  sort = arr.sort();
  return sort;
}

sortYears(years);

// Num 9 
 let coolStuff =["thing", "africa", "asia","india","chocolate"];

 let moreCoolStuff = ["asia", "bacon", "canada","veggies","paintings"]

const justCoolStuff = (arr1, arr2) => {
  matching = arr1.filter(stuff => arr2.includes(stuff));
  return matching;
}

justCoolStuff(coolStuff,moreCoolStuff);

// Num 10 

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

let isTheDinnerVegan = (arr) => {
  for(x=0; x < arr.length; x++){
    let source = arr[x].source; // console.log(source);
     if(source === 'plant'){
    return true;
   }
  }
}

isTheDinnerVegan(meal); // Should return true

// Num 11

let dogFactory = (name, breed, weight) => {
  return '{name:' + name + ', breed:' + breed  + ', weight:' + weight + '}'
}
dogFactory('Leo', 'husky', 20);