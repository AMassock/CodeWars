var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let age = [];
  let catYears = 0;
  let dogYears = 0;

  if (humanYears == 1) {
    catYears += 15;
    dogYears += 15;
    age.splice(0, 0, humanYears);
    age.splice(1, 0, catYears);
    age.splice(2, 0, dogYears);

    return age;
  } else if (humanYears == 2) {
    catYears += 24;
    dogYears += 24;
    age.splice(0, 0, humanYears);
    age.splice(1, 0, catYears);
    age.splice(2, 0, dogYears);

    return age;
  } else {
    let catYears = 16;
    let dogYears = 14;
    catYears += humanYears * 4;
    dogYears += humanYears * 5;
    age.splice(0, 0, humanYears);
    age.splice(1, 0, catYears);
    age.splice(2, 0, dogYears);

    return age;
  }

  return [0, 0, 0];
};
