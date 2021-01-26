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

function employeeFunc(employee) {
  console.log('inside employeeFunc.');
  let employeeArray = [];

  for (const person of employee) {
    console.log();
    console.log(person);

    let employeeData = {
      name: person.name,
      bonusPercentage: calcBonusPercentage(person),
      totalCompensation: 0,
      totalBonus: 0,
    };
    employeeArray.push(employeeData);
  }
  return employeeArray;
}

console.log(employeeFunc(employees));

function calcBonusPercentage(person) {
  console.log('inside employeeBonus');
  // reviewRating
  let bonus = 1;
  if (person.reviewRating === 3) {
    bonus += 0.04;
  } else if (person.reviewRating === 4) {
    bonus += 0.06;
  } else if (person.reviewRating === 5) {
    bonus += 0.1;
  }

  if (person.employeeNumber.length) {
    bonus += 0.05;
  }

  if (Number(person.annualSalary) > 65000) {
    bonus -= 0.01;
  }

  if (bonus < 1 || bonus >= 1.13) {
    bonus = 1;
  }
  return bonus;
}

// However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// - No bonus can be above 13% or below 0% total.

function calcTotalCompensation(person) {}

function calcTotalBonus(person) {}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
