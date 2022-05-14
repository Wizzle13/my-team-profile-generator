const inquirer = require('inquirer');

//  enter standard info for all enployees

const employeeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is the name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter name.');
                    return false;
                }
            }
        },
        {
            type:'number',
            name:'employeeId',
            message: 'Enter employees id number.',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log ('Please enter employee id number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'eMail',
            message: 'Enter employees email address.',
            validate: eMailInput => {
                if (eMailInput) {
                    return true;
                } else {
                    console.log ('Please enter employee email address.');
                    return false;
                }
            }
        }
    ]);
};

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type:'number',
            name:'office',
            message: 'Enter office number.',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log ('Please enter office number.');
                    return false;
                }
            }
        }
    ]);
};  

const addTeam =() => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'members',
            message: 'What do you want to do next?',
        choices: ['Add Engineer', 'Add Intern', 'Build the page']
        }
    ])
}

function manager() {
    employeeQuestions()
    .then(managerQuestions)
    .then(addTeam)
};

function init() {
    console.log(`
    ===================
    Lets Build Our Team
    ===================
    `)
    manager()
    
};

init();