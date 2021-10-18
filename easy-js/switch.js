function getLetter(s) {
  let letter;

  switch (s[0].toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      letter = "A";
      break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";
      break;
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      letter = "C";
      break;
    case "n":
    case "p":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
    case "z":
      letter = "D";
      break;
    default:
      letter = "This is not a lower cased alphabet";
  }

  return letter;
}

console.log(getLetter("zdght"));
