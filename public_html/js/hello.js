var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
})();
function greeter(person) {
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
