var fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

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

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter Github User Name.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log ('Please enter github user name.');
                    return false;
                }
            }
        }
    ]);
};

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'Enter School Name.',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log ('Please enter School name.');
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
        },
        {
            when(answers) {
                if (answers.members === 'Add Engineer') {
                    engineer();
                } else if (answers.members === 'Add Intern') {
                    intern();
                } else {
                    console.log("build")
                    .then(data => {
                        return generagePage(data);
                    })
                    
                    .then(generagePage => {
                        return writeToFile(generagePage);
                    })
                }
                    
            }
        }
    ]);
};

const addManagerProfile = () =>{

};
function engineer() {
    console.log(`
    ====================
    Engineer Information
    ====================
    `)
    employeeQuestions()
    .then(engineerQuestions)
    // .then(addManagerProfile)
    .then(addTeam)
};

function intern() {
    console.log(`
    ==================
    Intern Information
    ==================
    `)
    employeeQuestions()
    .then(internQuestions)
    // .then(addManagerProfile)
    .then(addTeam)
};

function manager() {
    console.log(`
    ===================
    Manager Information
    ===================
    `)
    employeeQuestions()
    .then(managerQuestions)
    // .then(addManagerProfile)
    .then(addTeam)
};

function init() {
    console.log(`
    ====================
    Lets Build Your Team
    ====================
    `)
    manager()
    
};

// Create a function to write README file
function writeToFile(generagePage) {
    fs.writeFile('./dist/index.html',generagePage, err => {
        if (err) throw err;
        console.log('Page Complete')
    })
}


init();