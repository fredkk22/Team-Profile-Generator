const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")
const Manager = require("../lib/Manager")

function genTeam(team) {

const genManager = (data) => {
return `<div>
    <section class="manager">
        <h2>${data.name}</h2>
        <h3>Manager</h3>
        <ul>
            <li>ID: ${data.ID}</li>
            <li>Email: <a href="${data.email}">${data.email}</a></li>
            <li>Office Number: ${data.officeNumber}</li>
        </ul>
    </section>
</div>\n`
}

const genIntern = (data) => {
return `<div>
    <section class="intern">
        <h2>${data.name}</h2>
        <h3>Intern</h3>
        <ul>
            <li>ID: ${data.ID}</li>
            <li>Email: <a href="${data.email}">${data.email}</a></li>
            <li>School: ${data.school}</li>
        </ul>
    </section>
</div>\n`
}

const genEngineer = (data) => {
return `<div>
    <section class="engineer">
        <h2>${data.name}</h2>
        <h3>Engineer</h3>
        <ul>
            <li>ID: ${data.ID}</li>
            <li>Email: <a href="${data.email}">${data.email}</a></li>
            <li>Github: https://github.com/${data.github}</li>
        </ul>
    </section>
</div>\n`
}

const newArray = [];

for (let i = 0; i < team.length; i++) {
    const employee = team[i];
    if (employee instanceof Manager) {
        newArray.push(genManager(employee));
    } else if (employee instanceof Intern) {
        newArray.push(genIntern(employee));
    } else if (employee instanceof Engineer) {
        newArray.push(genEngineer(employee));
    }
}

return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>

<body>
    <header>
        <h1>Team Profiles</h1>
    </header>
    <main>
        ${newArray.join('')}
    </main>

</body>

</html>
`;
}

function genCSS() {
return ``
}

module.exports = genTeam;

