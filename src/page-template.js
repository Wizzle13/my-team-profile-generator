// creates the cards for the different employees
const generateTeam = templateData => {
       return `
        <div class="card text-white bg-secondary m-3" style="width: 18rem;">
            <div class="card-header">
              ${templateData.name}
            </div>
            <div class="card-header">
                ${templateData.positon}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${templateData.id}</li>
              <li class="list-group-item">Email: ${templateData.eMail}</li>
              <li class="list-group-item">Office / GitHub / School</li>
            </ul>
        </div>
    `
}
// creates the main section of the page
module.exports = templateData => {
    // destructure page data by section
    
  
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1 class ="container bg-danger text-center">MY TEAM</h1>
    </header>
    <main class="d-flex flex-row flex-wrap align-content-around m-3">
        ${generateTeam()}           
    </main>
    <footer>
        <h3 class="text-dark text-center">&copy;2020 by Chris Burton</h3> 
    </footer>
</body>
</html>
    `;
};    