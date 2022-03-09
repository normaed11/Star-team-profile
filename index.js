// after installing inquirer with nmp with the below command line it is imported into the project 
const inquirer = require('inquirer')
const { addIntern, addManager, addEngineer } = require('./src/base');
const { templateEngineer, templateData, templateIntern, templateManager } = require('./src/template');
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
    // add responses
    switch (response.add) {
        case 'add engineer':
            // const { name, id, email, github } = addEngineer();
            html += templateEngineer(await addEngineer())

            break;
        case 'add intern':
            // const { name, id, email, school } = addIntern();
            html += templateIntern(await addIntern())

            break;

        default: flag = false;
            break;

    }
    // console.log(response.add)
}
// while cycle to add manger
async function init() {
    console.log('Please enter managers info')
    html += templateManager(await addManager())
    while (flag) {
        await teamMenu();
    }
    writeHtml(templateData(html));
}
init();