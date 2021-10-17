function getGrade(score) {
  let grade;
  score > 25 && score <= 30
    ? (grade = "A")
    : score > 20 && score <= 25
    ? (grade = "B")
    : score > 15 && score <= 20
    ? (grade = "C")
    : score > 10 && score <= 15
    ? (grade = "D")
    : score > 5 && score <= 10
    ? (grade = "E")
    : score > 0 && score <= 5
    ? (grade = "F")
    : (grade = "The score is not graded");

  return grade;
}

console.log(getGrade(3));
