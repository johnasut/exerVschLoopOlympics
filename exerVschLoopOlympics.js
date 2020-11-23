// Preliminaries

var i;
for (i = 0; i <= 9; i++) {
    console.log(i);
};

for (i = 9; i >= 0; i--) {
    console.log(i);
};

var fruit1 = ["banana", "orange", "apple", "kiwi"];
for (i = 0; i < fruit1.length; i++) {
    console.log(fruit1[i]);
};


// Bronze

var bronzeArray1 = [];
for (i = 0; i <=9; i++) {
    bronzeArray1.push(i);
};
console.log(bronzeArray1);

var bronzeArray2 = [];
for (i = 0; i <=100; i++) {
    if (i % 2 === 0) {
        bronzeArray2.push(i);
    };
};
console.log(bronzeArray2);

var fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var fruit3 = [];
for (i = 0; i < fruit2.length; i++) {
    if (i % 2 === 0) {
        fruit3.push(fruit2[i]);
    };
};
console.log(fruit3);


// Silver

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];
  
for (i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i]['name']);
};


// I thought the instructions for silver 2 were actually to push NEW names and occupations into the peopleArray array. It wasn't and this doesn't accomplish that task quite right, but I'm leaving this code here because it was hard to figure out.
var newNames = [
    {
        name: "Scary Spice"
    },
    {
        name: "Baby Spice"
    }
]; // names
var newOccupations = [
    {
        occupation: "Singer"
    }, 
    {
        occupation: "Dancer"
    }
]; // occupations

for (i = 0; i < newNames.length; i++) {
    peopleArray = peopleArray.concat(newNames[i]);
    peopleArray = peopleArray.concat(newOccupations[i]);
};
console.log(peopleArray);


var names = [];
var occupations = [];
for (i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
};
console.log(names);
console.log(occupations);

var names2 = [];
var occupations2 = [];
for (i = 0; i < peopleArray.length; i++) {
    if (i % 2 === 0) {
        names2.push(peopleArray[i].name);
    } else if (i % 2 === 1) {
        occupations2.push(peopleArray[i].occupation);
    };
};
console.log(names2);
console.log(occupations2);


// Gold
var gold1 = [];
for (i = 0; i < 3; i++) {
    gold1[i] = new Array(3);
    for (j = 0; j < 3; j++) {
        gold1[i][j] = 0;
    };
};
console.log(gold1)

var gold2 = [];
var n = 0
for (i = 0; i < 3; i++) {
    gold2[i] = new Array(3);
    for (j = 0; j < 3; j++) {
        gold2[i][j] = i;
    };
};
console.log(gold2);

var gold3 = [];
var n = 0
for (i = 0; i < 3; i++) {
    gold3[i] = new Array(3);
    for (j = 0; j < 3; j++) {
        gold3[i][j] = j;
    };
};
console.log(gold3);

var gold4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(gold4);
for (i = 0; i < gold3.length; i++) {
    for (j = 0; j < gold3[i].length; j++) {
        gold4[i][j] = "x";
    };
};
console.log(gold4);