// after installing inquirer with nmp with the below command line it is imported into the project 
const inquirer = require('inquirer')
const Choices = require('inquirer/lib/objects/choices')
const ListPrompt = require('inquirer/lib/prompts/list')
// function to show a menu of choices 
async function teamMenu() {
    const response = await inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add a team member?',
            choices: ['add engineer', 'add intern', 'exit'],
            name: 'add'
        }

    ])
    switch (response.add) {
        case 'add engineer':
            // addEngineer(); 
            console.log('engineer')
            break;
        case 'add intern':
            // addIntern();
            console.log('intern')
            break;
        default: break;

    }
    // console.log(response.add)
}
function addManager() {
    inquirer.prompt([{
        type: 'text',
        message: "Manager's Name ?",
        name: 'managername',
        validate: managernameinput => {
            if (managernameinput) {
                return true
            }
            else {
                return false
            }
        }
    },
    {
        type: 'text',
        message: "manager Id ?",
        name: 'managerId',
        validate: manageridinput => {
            if (manageridinput) {
                return true
            }
            else {
                return false
            }
        }
    },
    {
        type: 'text',
        message: "manager email ?",
        name: 'manageremail',
        validate: manageremailinput => {
            if (manageremailinput) {
                return true
            }
            else {
                return false
            }
        }
    },
    {
        type: 'text',
        message: "Manager office number ?",
        name: 'managerofficenumber',
        validate: managerofficenumberinput => {
            if (managerofficenumberinput) {
                return true
            }
            else {
                return false
            }
        }
    },

    ])


}
teamMenu();