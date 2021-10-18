function compareTriplets(a, b) {
  let score = [0, 0];

  for (let i = 0; i < b.length; i++) {
    if (a[i] > b[i]) {
      score[0] += 1;
    } else if (a[i] < b[i]) {
      score[1] += 1;
    }
  }
  return score;
}

console.log(compareTriplets([5, 3, 2], [1, 2, 2]));
