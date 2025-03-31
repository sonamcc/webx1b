// Base Class: Student
class Student {
    constructor(
        public name: string,
        public studentId: string,
        public grade: string
    ) {}

    getDetails(): void {
        console.log(`Name: ${this.name}, ID: ${this.studentId}, Grade: ${this.grade}`);
    }
}

// Subclass: GraduateStudent (extends Student)
class GraduateStudent extends Student {
    constructor(
        name: string,
        studentId: string,
        grade: string,
        public thesisTopic: string
    ) {
        super(name, studentId, grade); // Call parent constructor
    }

    // Override the getDetails method
    getDetails(): void {
        console.log(`Name: ${this.name}, ID: ${this.studentId}, Grade: ${this.grade}, Thesis Topic: ${this.thesisTopic}`);
    }

    getThesisTopic(): void {
        console.log(`Thesis Topic: ${this.thesisTopic}`);
    }
}

// Non-Subclass: LibraryAccount (Composition over Inheritance)
class LibraryAccount {
    constructor(
        public accountId: string,
        public booksIssued: number
    ) {}

    getLibraryInfo(): void {
        console.log(`Account ID: ${this.accountId}, Books Issued: ${this.booksIssued}`);
    }
}

// Demonstrating Composition over Inheritance
class StudentWithLibraryAccount {
    constructor(
        public student: Student,
        public libraryAccount: LibraryAccount
    ) {}

    // Call the getDetails method from the student object
    displayStudentInfo(): void {
        this.student.getDetails();
    }

    // Call the getLibraryInfo method from the libraryAccount object
    displayLibraryInfo(): void {
        this.libraryAccount.getLibraryInfo();
    }
}

// Create instances of Student, GraduateStudent, and LibraryAccount
const student = new Student("Sonam", "S12345", "B");
const gradStudent = new GraduateStudent("Sonam", "G12345", "A", "Machine Learning");
const libraryAccount = new LibraryAccount("L123", 5);

// Demonstrate behavior of classes
student.getDetails();  
gradStudent.getDetails();  
gradStudent.getThesisTopic();  
libraryAccount.getLibraryInfo();

// Demonstrate Composition over Inheritance
const studentWithLibrary = new StudentWithLibraryAccount(student, libraryAccount);
studentWithLibrary.displayStudentInfo(); // From Student
studentWithLibrary.displayLibraryInfo(); // From LibraryAccount
