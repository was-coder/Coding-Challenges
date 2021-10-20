let johnAverage, mikeAverage, maryAverage;

johnAverage = (9 + 2 + 9) / 3;
mikeAverage = (9 + 2 + 3) / 3;
maryAverage = (9 + 2 + 1) / 3;
console.log(johnAverage, mikeAverage, maryAverage);

johnAverage > mikeAverage && maryAverage
  ? console.log("John's team won with an average of " + johnAverage)
  : maryAverage > johnAverage && mikeAverage
  ? console.log("Mary's team won with an average of " + maryAverage)
  : mikeAverage > johnAverage && maryAverage
  ? console.log("Mike's team won with an average of " + mikeAverage)
  : console.log("It is a tie");
