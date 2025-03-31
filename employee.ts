// Employee Interface
interface Employee {
    name: string;
    id: string;
    role: string;
    getDetails(): string;
}

// Manager Class implementing Employee Interface
class Manager implements Employee {
    constructor(
        public name: string,
        public id: string,
        public role: string,
        public department: string
    ) {}

    // Override getDetails method to include department
    getDetails(): string {
        return `Name: ${this.name}, ID: ${this.id}, Role: ${this.role}, Department: ${this.department}`;
    }
}

// Developer Class implementing Employee Interface
class Developer implements Employee {
    constructor(
        public name: string,
        public id: string,
        public role: string,
        public programmingLanguages: string[]
    ) {}

    // Override getDetails method to include programming languages
    getDetails(): string {
        return `Name: ${this.name}, ID: ${this.id}, Role: ${this.role}, Programming Languages: ${this.programmingLanguages.join(", ")}`;
    }
}

// Create instances of Manager and Developer
const manager = new Manager("Sonam", "M001", "Manager", "HR");
const developer = new Developer("Barkha", "D001", "Developer", ["JavaScript", "TypeScript", "Python"]);

// Display details using getDetails() method
console.log(manager.getDetails());
console.log(developer.getDetails());
