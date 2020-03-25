const PeopleRepository = require('./PeopleRepository').PeopleRepository;
const repo = new PeopleRepository();

function onEditPersonButtonClick() {
    const id = window.location.search.substring(1);

    const firstName = document.getElementById('first-name-input').value;
    const lastName = document.getElementById('last-name-input').value;
    const nickname = document.getElementById('nickname-input').value;

    repo.updatePerson(id, {firstName, lastName, nickname});

    window.location.replace('./listPeople.html');
}

function loadPerson() {
    const id = window.location.search.substring(1);
    const person = repo.getPerson(id);

    document.getElementById('first-name-input').value = person.firstName;
    document.getElementById('last-name-input').value = person.lastName;
    document.getElementById('nickname-input').value = person.nickname;
}

