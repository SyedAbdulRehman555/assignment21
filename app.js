// // Q1 sol:-
// var input1 = prompt("enter first name");
// var input2 = prompt("enter last name");
// document.write("Greetings  " + input1 + input2);

// // Q2 sol:-
// var model = prompt("enter your mobile model");
// var ml = model.length;
// document.write(
//   "My favourite phone is " + model + "<br/>" + " Length of string :" + ml
// );

// Q3 sol:-
// var word = "Pakistani";
// document.write("String :" + word);
// document.write("Index of N :" + word.indexOf("n"));

// Q4 Sol:-
// var word2 = "Hello World";

// document.write("String : " + word2 + "<br/>");
// document.write("Last index of l is: " + word2.lastIndexOf("l"));

// Q5 sol:-

// var word3 = "Pakistani";
// document.write("String : " + word3 + "<br/>");
// document.write("Character at index 3 is : " + word3.charAt(3));

// Q7 sol:-
// var city = "Hyderabad";
// var flag = "N";
// var indexVal = "";
// var iVal = city.indexOf("Hyder");
// var city2 = "";
// for (i = 0; i < city.length; i++) {
//   city2 = city2 + city[i];

//   if (city2 == "Hyder") {
//     flag = "Y";
//     indexVal = i + 1;
//   }
// }

// if (flag == "Y") {
//   var city3 = "Islam" + city.slice(indexVal);
//   console.log(city3);
// }

// document.write("City: " + city + "<br/>");
// document.write("After Replacement:" + city3 + "<br/>");

// Q8 sol:-

// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";

// var arr = [];
// var message2 = message;
// var index2 = 0;

// var arr = [];
// for (index2 = 0; index2 < message.length; index2++) {
//   // message3 = message3 + message[j];
//   // console.log(message.slice(j, j + 3), j);
//   if (message.slice(j, j + 3) == "and") {
//     index2 = index2 + 3;
//     message2 = message2 + " & ";
//   }
// }
// console.log(arr);

// Q9 sol:-
// var string = 472;

// document.write("Value : " + string + "<br/>");
// document.write("Type : " + typeof string + "<br/>");
// parseInt(string);
// document.write("Value : " + string + "<br/>");
// document.write("Type : " + typeof string + "<br/>");

// Q10 sol:-
// var uInput = prompt("enter your value");
// document.write("User Input : " + uInput + "<br/>");
// document.write("Upper case " + uInput.toUpperCase());

// Q11 sol:-

// var uInput2 = prompt("enter you text");

// document.write("User Input :" + uInput2 + "<br/>");

// document.write("Title Case :" + uInput2[0].toUpperCase() + uInput2.slice(1));

// Q12 sol:-

// var num = 35.36;
// var num2 = num.toString();
// var i = num2.indexOf(".");
// console.log(i);

// var dis_val = num2.slice(0, i) + num2.slice(i + 1);
// console.log(dis_val);

// Q13 sol:-

// var userInput = prompt("enter your value");

// for (i = 0; i < userInput.length; i++) {
//   if (
//     userInput[i] == "&" ||
//     userInput[i] == "." ||
//     userInput[i] == "/" ||
//     userInput[i] == "*"
//   ) {
//     alert("Please enter valid name");
//   }
// }

// Q14 sol:-
// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var ii = 0;
// var userInput = prompt("enter your search item");
// var flag = "N";
// for (i = 0; i < A.length; i++) {
//   if (userInput.toUpperCase() === A[i].toUpperCase()) {
//     flag = "Y";
//     ii = i;
//   }
// }
// if (flag == "Y") {
//   alert(A[ii] + " is available at index " + i + " of our bakery");
// } else {
//   alert("sorry item is not available");
// }

// Q15 sol:-

// var pass = prompt("enter your password");
// var val1 = false;
// var val2 = false;
// var val3 = false;
// for (i = 1; i < pass.length; i++) {
//   if (
//     pass[i] == "0" ||
//     pass[i] == "1" ||
//     pass[i] == "2" ||
//     pass[i] == "3" ||
//     pass[i] == "4" ||
//     pass[i] == "5" ||
//     pass[i] == "7" ||
//     pass[i] == "8" ||
//     pass[i] == "9" ||
//     pass[i] == "6"
//   )
//     val1 = true;
// }

// if (pass.length >= 6) {
//   val2 = true;
// }

// if (Number != typeof pass[0]) {
//   val3 = true;
// }

// if (val1 == true && val2 == true && val3 == true) {
//   alert("correct password");
// } else {
//   alert("please enter valid format");
//   console.log(val1, val2, val3);
// }

// Q16 sol:-

// var university = "University of Karachi";
// var arr = [];
// for (i = 0; i < university.length; i++) {
//   arr.push(university[i]);
// }

// for (j = 0; j < arr.length; j++) {
//   document.write(arr[j] + "<br>");
// }

// Q17 sol:-

// var userInput = prompt("enter you input");
// var lastInput = userInput.slice(userInput.length - 1);
// document.write("user input : " + userInput);
// document.write("Last Character : " + lastInputInput);
// console.log(lastInput);

// Q18 sol:-

var sentence = "the quick brown fox jumps over the lazy dog";
var sentence2 = "";
var count = 0;
for (i = 0; i < sentence.length; i++) {
  sentence2 = sentence[i];

  if (sentence[i] + sentence[i + 1] + sentence[i + 2] == "the") {
    count += 1;
  }

  console.log(count);
}

document.write(
  "Text : the quick brown fox jumps over the lazy dog " +
    "<br>" +
    "there are " +
    count +
    "occurances of word the"
);
