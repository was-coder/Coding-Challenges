let johnAverage, mikeAverage, maryAverage;

johnAverage = (89 + 120 + 103) / 3;
mikeAverage = (116 + 94 + 123) / 3;
maryAverage = (97 + 134 + 105) / 3;
console.log(johnAverage, mikeAverage, maryAverage);

johnAverage > mikeAverage && maryAverage
  ? console.log("John's team won with an average of " + johnAverage)
  : maryAverage > johnAverage && mikeAverage
  ? console.log("Mary's team won with an average of " + maryAverage)
  : mikeAverage > johnAverage && maryAverage
  ? console.log("Mike's team won with an average of " + mikeAverage)
  : console.log("It is a tie");
