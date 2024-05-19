#!/usr/bin/env node

// Student Management System    Date: 19-05-2024

import inquirer from "inquirer";

const randomNumber: number = Math.floor(10000 + Math.random() * 90000);

let myBalance = 0;

let studentInput = await inquirer.prompt([
  {
    name: "students",
    type: "input",
    message: "Please enter your name",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Your input is empty. ";
    },
  },
  {
    name: "courses",
    type: "list",
    message: "Which course would you like to enroll",
    choices: ["TypeScript", "Python", "Graphics Designer", "C++"],
  },
]);
// Assigning Fee of Courses
const courseFee: { [key: string]: number } = {
  "TypeScript": 5000,
  "Python": 6000,
  "Graphics Designer": 3000,
  "C++": 7000,
};
console.log(
  `Course fee for ${studentInput.courses}: ${courseFee[studentInput.courses]}`
);
console.log(`Your balance is: ${myBalance}`);

let paymentType = await inquirer.prompt([
  {
    name: "Payment",
    type: "list",
    message: "Please select your payment type:",
    choices: ["Bank Transfer", "EasyPaisa", "JazzCash"],
  },
  {
    name: "Amount",
    type: "input",
    message: "Please enter your amount:",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please enter valid amount!";
    },
  },
]);
console.log(`You have selected payment type: ${paymentType.Payment}`);

const course_fees = courseFee[studentInput.courses];
const amount_payment = parseFloat(paymentType.Amount); // oper courses ma string ma dye thai names, aage calculation numbering ma hogi is lye parsefloat use kya

if (course_fees === amount_payment) {
  console.log(
    `Congratulations! You have successfully paid for ${studentInput.courses}`
  );

  let status_input = await inquirer.prompt([
    {
      name: "select",
      type: "list",
      message: "Please select: ",
      choices: ["Check my status", "Exit"],
    },
  ]);
  if (status_input.select === "Check my status") {
    console.log(`*******STATUS*******\n`);
    console.log(`Student Name: ${studentInput.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Course: ${studentInput.courses}`);
    console.log(`Course Fee Paid: ${amount_payment} `);
    console.log(`Balance: ${(myBalance += amount_payment)}`); //my balance ma paid amount add karne k lye +=
    console.log("**********Best of Luck!**********");
    
  } else {
    console.log("Thankyou!");
  }
} else {
  console.log("You have entered invalid amount!");
}
