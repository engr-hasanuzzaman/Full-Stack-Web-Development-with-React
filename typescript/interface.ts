interface Person {
    name: string,
    age: number
}

function printPerson(person: Person) {
    console.log(`Name: ${person.name}, age: ${person.age}`);
}