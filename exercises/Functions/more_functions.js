"use strict";

const name = "khalil";
const address = "624 Chautauqua st";
const city = "Pittsburgh";
const state = "Pa";
const zip = "15214";

const name2 = "Johnny";
const address2 = "3564 Brighton Rd";
const city2 = "Pittsburgh";
const state2 = "Pa";
const zip2 = "15212"

function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(city + ", " + state + " " + zip);
}
displayMailingLabel(name, address, city, state, zip);
displayMailingLabel(name2, address2, city2, state2, zip2);


let num1 = 23;
let num2 = 45;

let num3 = 400;
let num4 = 70;

function addNumbers(num1, num2) {
  const total = num1 + num2;
  console.log(total);
}
addNumbers(num1, num2);
addNumbers(num3, num4);

let totalDue = 75;
let amountPaid = 200;

let totalDue2 = 600;
let amountPaid2 = 600;

let totalDue3 = 237;
let amountPaid3 = 236;


function displayReceipt(totalDue, amountPaid) {
  const changeDue = amountPaid - totalDue;
  console.log(changeDue)
}
displayReceipt(totalDue, amountPaid);
displayReceipt(totalDue2, amountPaid2);
displayReceipt(totalDue3, amountPaid3);
