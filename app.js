const input = "6\nbarco\ncasa\nbarco\nperro\nlote\nlote\n";

const getRepeatedWordsAmount = () => {
  // Separate words array from words amount
  const words = input.split("\n").slice(1, -1);

  // Count repeated words amount
  const repeated = {};
  words.forEach(function (x) {
    let lower = x.toLowerCase();
    repeated[lower] = (repeated[lower] || 0) + 1;
  });

  let array = Object.keys(repeated).map(function (key) {
    return repeated[key];
  });

  // Print repeated words amount
  console.log(array.length);

  // Print repeated words
  console.log(array.toString().replaceAll(",", " "));
};
getRepeatedWordsAmount();
