const PeopleRepository = require('./PeopleRepository').PeopleRepository;

function onAddPersonButtonClick() {
    const repo = new PeopleRepository();

    const firstName = document.getElementById('first-name-input').value;
    const lastName = document.getElementById('last-name-input').value;
    const nickname = document.getElementById('nickname-input').value;

    repo.createPerson({firstName, lastName, nickname});

    window.location.replace('../index.html');
}