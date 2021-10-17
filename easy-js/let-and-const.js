function main(r) {
  const PI = Math.PI;

  console.log((area = PI * Math.pow(r, 2)));
  console.log((perimeter = 2 * PI * r));
}

main(2.6);

// The code was manipulated a little by removing readline() since the HackerRank challenge is not letting us to call the main function in their own coding space

// HackerRank Code

// function main(area,perimeter) {
//   const PI = Math.PI;
//   let r = readline();

//   console.log((area = PI * Math.pow(r, 2)));
//   console.log((perimeter = 2 * PI * r));
// }
