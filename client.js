const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function employeeFunc(employee) {
  console.log('inside employeeFunc.');
  let employeeArray = [];

  for (const person of employee) {
    console.log();
    console.log(person);
    let salary = Number(person.annualSalary);
    let rating = person.reviewRating;
    let employeeNo = person.employeeNumber;
    let bonus = calcBonusPercentage(salary, rating, employeeNo);
    let bonusTotal = calcBonusTotal(salary, bonus);
    let compensationTotal = calcTotalCompensation(salary, bonusTotal);

    let employeeData = {
      name: person.name,
      bonusPercentage: bonus,
      totalBonus: bonusTotal,
      totalCompensation: compensationTotal,
    };
    employeeArray.push(employeeData);
  }
  return employeeArray;
}

console.log(employeeFunc(employees));

// functions for calculating compensation
function calcBonusPercentage(salary, rating, employeeID) {
  console.log();
  console.log('inside calcBonusPercentage');
  // check reviewRating
  let bonus = 0;
  if (rating === 3) {
    bonus += 0.04;
  } else if (rating === 4) {
    bonus += 0.06;
  } else if (rating >= 5) {
    bonus += 0.1;
  }

  if (employeeID) {
    bonus += 0.05;
  }

  if (salary > 65000) {
    bonus -= 0.01;
  }

  if (bonus < 0) {
    bonus = 0;
  } else if (bonus >= 0.13) {
    bonus = 0.13;
  }
  return bonus;
}

function calcBonusTotal(salary, bonus) {
  console.log();
  console.log('inside calcBonusTotal');
  return salary * bonus;
}

function calcTotalCompensation(salary, bonusTotal) {
  console.log();
  console.log('inside calcBonusTotal');
  return salary + bonusTotal;
}
console.log(employees);
