// Manager Class implementing Employee Interface
var Manager = /** @class */ (function () {
    function Manager(name, id, role, department) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.department = department;
    }
    // Override getDetails method to include department
    Manager.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", ID: ").concat(this.id, ", Role: ").concat(this.role, ", Department: ").concat(this.department);
    };
    return Manager;
}());
// Developer Class implementing Employee Interface
var Developer = /** @class */ (function () {
    function Developer(name, id, role, programmingLanguages) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.programmingLanguages = programmingLanguages;
    }
    // Override getDetails method to include programming languages
    Developer.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", ID: ").concat(this.id, ", Role: ").concat(this.role, ", Programming Languages: ").concat(this.programmingLanguages.join(", "));
    };
    return Developer;
}());
// Create instances of Manager and Developer
var manager = new Manager("Sonam", "M001", "Manager", "HR");
var developer = new Developer("Barkha", "D001", "Developer", ["JavaScript", "TypeScript", "Python"]);
// Display details using getDetails() method
console.log(manager.getDetails());
console.log(developer.getDetails());
