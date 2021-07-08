/* eslint-disable */
let inputArray = [2, 1, 3];

/* TODO: create a doubleItem function that accepts an array of number and 
returns an array of equal length but with all of its item double  */
const doubleItem = (inputArray) => {
  let outputArray = [];
  inputArray.forEach((element) => {
    outputArray.push(element * 2);
  });
  console.log(outputArray);
  return outputArray;
};

/* TODO: create an invertSign function that accepts an array of number and 
returns an array of equal length but with all of its item sign inverted */
const invertSign = (inputArray) => {
  let outputArray = [];
  inputArray.forEach((element) => {
    outputArray.push(-element);
  });
  console.log(outputArray);
  return outputArray;
};

// callback function
const mapFunction = (inputArray, callbackFn) => {
  let outputArray = [];
  inputArray.forEach((element) => {
    outputArray.push(callbackFn(element));
  });
  console.log(outputArray);
  return outputArray;
};

doubleItem(inputArray);
mapFunction(inputArray, (x) => x * 2);
const doubleItem2 = inputArray.map((x) => x * 2);
console.log(doubleItem2);

invertSign(inputArray);
mapFunction(inputArray, (x) => -x);
const invertSign2 = inputArray.map((x) => -x);
console.log(invertSign2);

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: assign idNumber of all participants to idNumbers
  const idNumbers = participants.map((x) => x.idNumber); //map / filter returns new array, will not overwrite existing
  console.log(idNumbers); // ['S7282395H', 'T4689018Z', 'G5512873T', 'T8198514B']
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get the results of multiplication of all the numbers using reduce method
  const multiply1 = numbers.reduce((acc, x) => acc * x);
  console.log(multiply1);

  // TODO: get the results of multiplication of all the numbers using for...of loop
  const multiply2 = (numbers) => {
    let acc = 1;
    for (let n of numbers) {
      acc *= n;
    }
    return acc;
  };
  console.log(multiply2(numbers));
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get all the positive numbers (above or equal to 0)
  const positiveNumbers = numbers.filter((x) => x > 0);
  console.log(positiveNumbers);

  // TODO: get all the odd numbers
  const oddNumbers = numbers.filter((x) => x % 2 !== 0);
  console.log(oddNumbers);

  // TODO: get all the numbers that is larger before the number before it
  // (exclude first number)
  const largerThanPrevEl = numbers.filter((val, i, arr) => {
    if (i === 0) {
      return false;
    }
    return arr[i] > arr[i - 1];
  });
  console.log(largerThanPrevEl);
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: get the names for all participants
  const participantNames = participants.map((x) => x.name);
  console.log(participantNames);
  // TODO: get the id numbers for female participants only
  const femaleId = participants
    .filter((x) => x.gender === 'female')
    .map((x) => x.idNumber);
  console.log(femaleId);
}
