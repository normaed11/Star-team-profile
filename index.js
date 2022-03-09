// after installing inquirer with nmp with the below command line it is imported into the project 
const inquirer = require('inquirer')
const Choices = require('inquirer/lib/objects/choices')
const ListPrompt = require('inquirer/lib/prompts/list')
const { addIntern, addManager, addEngineer } = require('./src/base');
const { templateEngineer, templateData, templateIntern } = require('./src/template');
const { writeHtml } = require('./src/write')
// global variables
let html = '';
let flag = true;
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
            // const { name, id, email, github } = addEngineer();
            html += templateData(templateEngineer(await addEngineer())).join('\n')

            break;
        case 'add intern':
            // const { name, id, email, school } = addIntern();
            html += templateData(templateIntern(await addIntern())).join('\n')

            break;

        default: flag = false;
            break;

    }
    // console.log(response.add)
}
while (flag) {
    teamMenu();
}
writeHtml(html);