const PeopleRepository = require('./PeopleRepository').PeopleRepository;

function onListPeopleButtonClick() {
    const repo = new PeopleRepository();
    const people = repo.getPeople();

    const results = document.getElementById('results');
    results.innerHTML = '';

    people.forEach(person => {
        const row = document.createElement('div');
        row.setAttribute('person-id', person.id);
        row.innerHTML = `${person.firstName} ${person.lastName}: ${person.nickname}`;
        
        const editLink = document.createElement('a');
        editLink.href = `editPerson.html?${person.id}`;
        editLink.innerHTML = 'Edit';
        
        
        results.appendChild(row);
        results.appendChild(editLink);
    });
}

