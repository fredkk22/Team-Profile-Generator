const Manager = require("../lib/Manager")
const Intern = require("../lib/Intern")

function genTeam(team) {

const genManager = (data) => {
return `<div class="card" style="width: 18rem;">
<div class="card-header">
  <h2>Manager: ${data.name}</h2>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${data.ID}</li>
  <li class="list-group-item">Email: <a href="${data.email}">${data.email}</a></li>
  <li class="list-group-item">Office Number: ${data.officeNumber}</li>
</ul>
</div>\n`
}

const genIntern = (data) => {
return `<div class="card" style="width: 18rem;">
<div class="card-header">
  <h2>Intern: ${data.name}</h2>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${data.ID}</li>
  <li class="list-group-item">Email: <a href="${data.email}">${data.email}</a></li>
  <li class="list-group-item">School: ${data.school}</li>
</ul>
</div>\n`
}

const genEngineer = (data) => {
return `<div class="card" style="width: 18rem;">
<div class="card-header">
  <h2>Engineer: ${data.name}</h2>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${data.ID}</li>
  <li class="list-group-item">Email: <a href="${data.email}">${data.email}</a></li>
  <li class="list-group-item">Github: https://github.com/${data.github}</li>
</ul>
</div>\n`
}

const newArray = [];

for (let i = 0; i < team.length; i++) {
    const employee = team[i];
    if (employee instanceof Manager) {
        newArray.push(genManager(employee));
    } else if (employee instanceof Intern) {
        newArray.push(genIntern(employee));
    } else {
        newArray.push(genEngineer(employee));
    }
}

return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
</head>

<body>
    <header>
        <h1>Team Profiles</h1>
    </header>
    <main>
        ${newArray.join('')}
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>

</html>`;
}

module.exports = genTeam;