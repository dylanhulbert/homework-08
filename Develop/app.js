const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = [];

const engQuestions = () => {
  inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "Engineer's name?"
    },
    {
    type: "input",
    name: "id",
    message: "Engineer's ID?"
    },
    {
    type: "input",
    name: "email",
    message: "Engineer's email?"
    },
    {
    type: "input",
    name: "github",
    message: "Engineer's GitHub?"
    }
    ]).then(answer => {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        team.push(engineer);
        addMore();
    })
}


const addMore = () => {
  inquirer.prompt({
    type: "confirm",
    name: "addMore",
    message: "Add another employee?"
  }).then(answer => {
      if (answer.addMore) {
        newEmployee();
        } 
        else {
          let html = render(team);
            fs.writeFile(outputPath, html, function (err) {
              if (err) throw err;
              console.log("Employee added.");
            });
        };
    })
}


const newEmployee = () => {
  inquirer.prompt({
    type: "list",
    name: "employeeType",
    message: "Which employee type are you adding?",
    choices: ["Engineer", "Intern", "Manager"]
  })
    .then(answer => {
      switch (answer.employeeType) {
        case "Engineer":
          engQuestions();
        break;
        case "Intern":
          internQuestions();
        break;
        case "Manager":
          mngrQuestions();
        break;
      default:
        console.log("Choose an employee type");
      }
    });
}


newEmployee();