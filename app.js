console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  if (count < 0) {
    console.log("Negative number entered");
    return;
  }

  for (let i = 1; i < count; i++) {
    if (i % 2 !== 0) {
      console.log(i + " is odd");
    } 
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(username, age) {

  if (username == null || age == null) {
    console.log("Please enter both a name and age!");
    return;
  }

  let aboveSixteen = `Congrats ${username}, you can drive!`;
  let belowSixteen = `Sorry ${username}, but you need to wait until you're 16.`;
  age < 16 ? console.log(belowSixteen) : console.log(aboveSixteen);
}

checkAge("Julian", 29);
checkAge("Annika", 15);
checkAge("Kyile");

console.log("EXERCISE 3:\n==========\n");

function cartesianPlane(x, y) {
  switch (true) {
    case (x === 0 && y === 0):
      console.log("Zero Point Origin");
      break;
    case (x === 0 || x == null):
      console.log(`(${x}, ${y}) is on the y-axis.`);
      break;
    case (y === 0 || y == null):
      console.log(`(${x}, ${y}) is on the x-axis.`);
      break;
    case (x > 0 && y > 0):
      console.log(`(${x}, ${y}) is in Quadrant 1.`);
      break;
    case (x < 0 && y > 0):
      console.log(`(${x}, ${y}) is in Quadrant 2.`);
      break;
    case (x < 0 && y < 0):
      console.log(`(${x}, ${y}) is in Quadrant 3.`);
      break;
    case (x > 0 && y < 0):
      console.log(`(${x}, ${y}) is in Quadrant 4.`);
      break;
  
    default:
      console.log("Invalid Point");
      
  }
}

cartesianPlane(1,5);
cartesianPlane(-3,-7);
cartesianPlane(0,3);
cartesianPlane(-8);

console.log("EXERCISE 4:\n==========\n");

function triangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
      return "Invalid triangle";
  }

  if (a === b && b === c) {
      return "Equilateral triangle";
  } else if (a === b || a === c || b === c) {
      return "Isosceles triangle";
  } else {
      return "Scalene triangle";
  }
}

console.log(triangle(1, 2, 2));
console.log(triangle(3, 4, 5));
console.log(triangle(3, 3, 3));

console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, day, usage) {
  const cycle = 30;
  let daysLeft = cycle - day;
  let dailyLimit = planLimit / cycle;
  let dailyUsage = usage / day;
  let projectedUsage = dailyUsage * cycle;
  let dataRemaining = planLimit - usage;
  let remainingDailyUsage = dataRemaining / daysLeft;

  if (planLimit == null || day == null || usage == null) {
    console.log("Please enter a valid plan limit, a valid day, and a valid usage amount");
    return;
  }

  console.log(`${day} days used, ${daysLeft} days remaining.`);
  console.log(`Average daily use should be: ${dailyLimit.toFixed(2)}GB/day.`);


  if(dataRemaining <= 0) {
    console.log("You have run out of data.");
  } else {
    console.log(`You have ${dataRemaining.toFixed(2)}GB of data remaining.`);
  }

  if (dailyUsage > dailyLimit) {
    console.log(`You are exceeding your average daily use (${dailyUsage.toFixed(2)} GB/day).`);
    console.log(`Continuing this high usage, you'll exceed your data plan by ${projectedUsage.toFixed(2) - planLimit}GB.`);
    console.log(`To stay below your data plan, use no more than ${remainingDailyUsage}GB per day for the rest of the period.`);

  } else if (dailyUsage < dailyLimit) {
    console.log(`You are under the average daily use (${dailyUsage.toFixed(2)}GB per day).`);
    console.log(`You can use ${remainingDailyUsage.toFixed(2)}GB per day until your plan renews.`);
    
  } else {
    console.log(`Your average daily use is currently ${dailyUsage.toFixed(2)}GB per day.`);
    console.log(`You can use ${dailyLimit.toFixed(2)}GB per day to stay within your plan.`);
  }

}

dataPlan(100, 15, 56);
dataPlan(100, 29, 98);
dataPlan(30, 98);
