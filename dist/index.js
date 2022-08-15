const inquirer = require('inquirer');
const fs = require('fs');
const genTeam = require('../src/genTeam');
const genCSS = require('../src/genCSS');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const questions = [
    'Who is your team manager?',
    'What is his ID?',
    'What is his email address?',
    'What is his office number?',
    'Add an employee:',
    "What is this intern's name?",
    "What is this intern's ID?",
    "What is this intern's email?",
    "What is this intern's school?",
    "What is this engineer's name?",
    "What is this engineer's ID?",
    "What is this engineer's email?",
    "What is this engineer's GitHub Username?"
]
const teamChoices = ['Intern', 'Engineer', 'Finish Building Team'];
const team = [];

function managerGen() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'managerName'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'managerID'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'managerEmail'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'managerOffice'
            }
        ])
        .then((data) => {
            const managers = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice)
            team.push(managers);
            newEmployeeGen();
        })
}

function internGen() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[5],
                name: 'internName'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'internID'
            },
            {
                type: 'input',
                message: questions[7],
                name: 'internEmail'
            },
            {
                type: 'input',
                message: questions[8],
                name: 'internSchool'
            }
        ])
        .then((data) => {
            const interns = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
            team.push(interns);
            newEmployeeGen();
        })
}

function engineerGen() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[9],
                name: 'engineerName'
            },
            {
                type: 'input',
                message: questions[10],
                name: 'engineerID'
            },
            {
                type: 'input',
                message: questions[11],
                name: 'engineerEmail'
            },
            {
                type: 'input',
                message: questions[12],
                name: 'engineerGit'
            }
        ])
        .then((data) => {
            const engineers = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGit);
            team.push(engineers);
            newEmployeeGen();
        })
}

function newEmployeeGen() {
    inquirer
        .prompt({
            type: 'list',
            message: questions[4],
            choices: teamChoices,
            name: 'teamChoices'
        })
        .then((data) => {
            if (data.teamChoices === teamChoices[0]) {
                internGen();
            } else if (data.teamChoices === teamChoices[1]) {
                engineerGen();
            } else {
                fs.writeFile('index.html', genTeam(team), (error) =>
                    error ? console.error(error) : console.log('Team Complete!'))
                fs.writeFile('style.css', genCSS(), (error) =>
                    error ? console.error(error) : console.log('CSS Attached!'))
            }
        })
}

managerGen();