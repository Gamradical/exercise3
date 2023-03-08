var hourlyWage = Number(prompt("How much do you make per hour? (ex: 15.75)"));

var hoursWorked = Number(
  prompt("How many hours did you work this week? (ex: 10)")
);

var earnings = hourlyWage * hoursWorked;

console.log(
  `You worked ${hoursWorked} hours this week for $${hourlyWage} an hour.
  Your total earnings are $${earnings.toFixed(2)}`
);
