// creates a personlized card for manager
const templateManager = ({ name, id, email, officeNumber }) => {
    return `
        <div class='col'>
          <div class='card-container'>
            <div class='card-title-row'>
              <div class='card-col-title'>
                <h2>${name}</h2>
              </div>
              <div class='card-col-title'>
                <h3><i class="fas fa-mug-hot"></i>Manager</h3>
              </div>
            </div>
            <div class='card-body-row'>
              <div class='card-col-body'>
                <h4>ID: ${id}</h4>
              </div>
              <div class='card-col-body link'>
                <a href='mailto:${email}'>Email: ${email}</a>
              </div>
              <div class='card-col-body'>
                <h4>Office Number: ${officeNumber}</h4>
              </div>
            </div>
          </div>
        </div>       
        `;
}
// creates a personlized card for engineer
const templateEngineer = ({ name, id, email, github }) => {
    return `
          <div class='col'>
            <div class='card-container'>
              <div class='card-title-row'>
                <div class='card-col-title'>
                  <h2>${name}</h2>
                </div>
                <div class='card-col-title'>
                  <h3><i class="fas fa-glasses"></i>Engineer</h3>
                </div>
              </div>
              <div class='card-body-row'>
                <div class='card-col-body'>
                  <h4>ID: ${id}</h4>
                </div>
                <div class='card-col-body link'>
                  <a href='mailto:${email}'>Email: ${email}</a>
                </div>
                <div class='card-col-body link'>
                <a href='https://github.com/${github}'>GitHub: ${github}</a>
                </div>
              </div>
            </div>
          </div>
        `


}
// creates a personlized card for intern
const templateIntern = ({ name, id, email, school }) => {

    return `
    <div class='col'>
        <div class='card-container'>
          <div class='card-title-row'>
            <div class='card-col-title'>
              <h2>${name}</h2>
            </div>
            <div class='card-col-title'>
              <h3><i class="fas fa-user-graduate"></i>Intern</h3>
            </div>
          </div>
          <div class='card-body-row'>
            <div class='card-col-body'>
              <h4>ID: ${id}</h4>
            </div>
            <div class='card-col-body link'>
              <a href='mailto:${email}'>Email: ${email}</a>
            </div>
            <div class='card-col-body'>
              <h4>School: ${school}</h4>
            </div>
          </div>
        </div>
      </div>
    `;


}

// function to create html template and combining the template generated from above
const templateData = (body) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Organization Chart</title>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <link rel="stylesheet" href="./src/style.css">
    </head>
    <body>
      <header>
        <h1>My Great Team<h1>
      </header>
      <main class="container">
        ${body}
      </main>
    </body>
    </html>
    `;
};


module.exports = {

    templateManager,
    templateEngineer,
    templateIntern,
    templateData

}