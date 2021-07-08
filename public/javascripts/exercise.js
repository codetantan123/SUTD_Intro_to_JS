let x;
x = 100;

let y = true;
y = false;

const myself = {
  first_name: 'stanley',
  last_name: 'nguyen',
  age: 25
};

console.log(
  `______________________________________________________________________`
);

function secondsInWeek() {
  return 7 * 24 * 60 * 60;
}

function secondsInDays(days) {
  return days * 24 * 60 * 60;
}

function secondsInPeriod(noOfPeriod, periodUnit = 'day') {
  if (periodUnit === 'day') {
    return secondsInDays(noOfPeriod);
  } else if (periodUnit === 'week') {
    return secondsInPeriod(noOfPeriod * 7);
  }
  return console.log('Error');
}

console.log('Seconds in a week: ', secondsInWeek());
console.log('Seconds in 3 days: ', secondsInDays(3));
console.log('Seconds in a period of 3 weeks: ', secondsInPeriod(3, 'week'));
console.log('Seconds in a period of 3 days: ', secondsInPeriod(3, 'day'));
console.log('Seconds in 3 default period: ', secondsInPeriod(3));

console.log(
  `______________________________________________________________________`
);

function getRandomInt1(min, max) {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}

// anonymous function
const getRandomInt2 = function (min, max) {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};

// arrow function
const getRandomInt3 = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};

console.log(getRandomInt1(3, 5));
console.log(getRandomInt2(3, 5));
console.log(getRandomInt3(3, 5));

console.log(
  `______________________________________________________________________`
);

function compute1(operation, a, b) {
  if (operation === 'add') {
    return a + b;
  } else if (operation === 'minus') {
    return a - b;
  } else if (operation === 'multiply') {
    return a * b;
  } else {
    if (b !== 0) {
      return a / b;
    } else {
      return 'error';
    }
  }
}

function compute2(operation, a, b) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'minus':
      return a - b;
    case 'multiply':
      return a * b;
    default:
      return b !== 0 ? a / b : 'error';
  }
}

console.log(compute1('divide', 3, 0));
console.log(compute2('divide', 3, 0));
