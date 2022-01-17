// generates the markdown
// beginning markdown
// different employee markdowns
// end of markdown
function beginningMarkdown(member) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="../dist/index.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;700&display=swap" rel="stylesheet">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1> Team Profile Page</h1>
        </header>
        <main>
        <section class="card">
                <div class="card-body">
                    <h5 class="card-title">${member.getName()}</h5>
                    <p class="card-text">Team Manager</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${member.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${member.getEmail()}" target="_blank">${member.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${member.getOffNum()}</li>
                </ul>
            </section>`
    };
    
    function engineerMarkdown(member) {
    return `<section class="card">
    <div class="card-body">
        <h5 class="card-title">${member.getName()}</h5>
        <p class="card-text">Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"> ID: ${member.getId()}</li>
        <li class="list-group-item">
            Email:
            <a href="mailto: ${member.getEmail()}" target="_blank">${member.getEmail()}</a>
        </li>
        </li>
        <li class="list-group-item">
            Github:
            <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a>
        </li>
    </ul>
    </section>`
    }
    
    function internMarkdown(member) {
        return  `<section class="card">
        <div class="card-body">
            <h5 class="card-title">${member.getName()}</h5>
            <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${member.getId()}</li>
            <li class="list-group-item">
                Email:
                <a href="mailto: ${member.getEmail()}" target="_blank"> ${member.getEmail()}</a>
            </li>
            <li class="list-group-item">School: ${member.getSchool()}</li>
        </ul>
    </section>`
    }

    function endingMarkdown() {
        return `</main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </body>
    </html>`
    };


    module.exports = { beginningMarkdown, engineerMarkdown, internMarkdown, endingMarkdown }