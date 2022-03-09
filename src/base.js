// imports inquirer
const inquirer = require("inquirer");
// base shared questions

let inquirerItems = [{
    type: 'text',
    message: "Name ?",
    name: 'name',
    validate: nameinput => {
        if (nameinput) {
            return true
        }
        else {
            return false
        }
    }
},

{
    type: 'text',
    message: "Id ?",
    name: 'id',
    validate: idinput => {
        if (idinput) {
            return true
        }
        else {
            return false
        }
    }
},
{
    type: 'text',
    message: "email ?",
    name: 'email',
    validate: emailinput => {
        if (emailinput) {
            return true
        }
        else {
            return false
        }
    }
}
];
// base questions end
// managers questions
let manager = [{
    type: 'text',
    message: "office number ?",
    name: 'number',
    validate: numberinput => {
        if (numberinput) {
            return true
        }
        else {
            return false
        }
    }
}]
// manager questions end
// engineer questions
let engineer = [{
    type: 'text',
    name: 'github',
    message: "What is your GitHub Username? (Required)",
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter their GitHub username!');
            return false;
        }
    }
}];
// engineer questions end
// intern questions
let intern = [{
    type: 'text',
    name: 'school',
    message: "What college does your intern attend? (Required)",
    validate: schoolInput => {
        if (schoolInput) {
            return true;
        } else {
            console.log('Please enter the name of their college!');
            return false;
        }
    }
}]

// intern questions end
// function thats with inquier to form question and return responses
const addEngineer = async () => await inquirer.prompt([...inquirerItems, ...engineer])

const addIntern = async () => await inquirer.prompt([...inquirerItems, ...intern]);

const addManager = async () => await inquirer.prompt([...inquirerItems, ...manager]);

// export add engineer, manager and intern
module.exports = {
    addEngineer,
    addManager,
    addIntern
}