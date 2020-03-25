const fs = require('fs');

class PeopleRepository {

    getPeople() {
        let people = [];
        const data = fs.readFileSync('db', 'utf8').split('\n');
        data.forEach(datum => {
            if(datum)
                people.push(JSON.parse(datum))
        });
        return people;
    }

    getPerson(id) {
        return this.getPeople().filter(person => person.id == id)[0];
    }

    createPerson(person) {
        person.id = Math.floor(Math.random() * 1000000000);
        fs.appendFileSync('db', JSON.stringify(person)+'\n');
        console.log(`Person created: ${person.firstName} ${person.lastName} - ${person.nickname}`);
    }

    updatePerson(id, person) {
        alert(`Let's pretend I updated it. Person with id ${id} saved: ${person.firstName} ${person.lastName} - ${person.nickname}`);
    }
}

module.exports = {
    PeopleRepository
}