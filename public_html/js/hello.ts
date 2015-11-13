class Person {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
}

function greeter(person: Person) {
    var message = "Good Morning ";
    if (isAfternoon()) {
        message = "Good Afternoon ";
    } 
    return message + person.name + "!";
}

function isAfternoon() {
    var date = new Date();
    return date.getHours() > 12;
}