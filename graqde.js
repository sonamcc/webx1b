var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base Class: Student
var Student = /** @class */ (function () {
    function Student(name, studentId, grade) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
    }
    Student.prototype.getDetails = function () {
        console.log("Name: ".concat(this.name, ", ID: ").concat(this.studentId, ", Grade: ").concat(this.grade));
    };
    return Student;
}());
// Subclass: GraduateStudent (extends Student)
var GraduateStudent = /** @class */ (function (_super) {
    __extends(GraduateStudent, _super);
    function GraduateStudent(name, studentId, grade, thesisTopic) {
        var _this = _super.call(this, name, studentId, grade) || this; // Call parent constructor
        _this.thesisTopic = thesisTopic;
        return _this;
    }
    // Override the getDetails method
    GraduateStudent.prototype.getDetails = function () {
        console.log("Name: ".concat(this.name, ", ID: ").concat(this.studentId, ", Grade: ").concat(this.grade, ", Thesis Topic: ").concat(this.thesisTopic));
    };
    GraduateStudent.prototype.getThesisTopic = function () {
        console.log("Thesis Topic: ".concat(this.thesisTopic));
    };
    return GraduateStudent;
}(Student));
// Non-Subclass: LibraryAccount (Composition over Inheritance)
var LibraryAccount = /** @class */ (function () {
    function LibraryAccount(accountId, booksIssued) {
        this.accountId = accountId;
        this.booksIssued = booksIssued;
    }
    LibraryAccount.prototype.getLibraryInfo = function () {
        console.log("Account ID: ".concat(this.accountId, ", Books Issued: ").concat(this.booksIssued));
    };
    return LibraryAccount;
}());
// Demonstrating Composition over Inheritance
var StudentWithLibraryAccount = /** @class */ (function () {
    function StudentWithLibraryAccount(student, libraryAccount) {
        this.student = student;
        this.libraryAccount = libraryAccount;
    }
    // Call the getDetails method from the student object
    StudentWithLibraryAccount.prototype.displayStudentInfo = function () {
        this.student.getDetails();
    };
    // Call the getLibraryInfo method from the libraryAccount object
    StudentWithLibraryAccount.prototype.displayLibraryInfo = function () {
        this.libraryAccount.getLibraryInfo();
    };
    return StudentWithLibraryAccount;
}());
// Create instances of Student, GraduateStudent, and LibraryAccount
var student = new Student("Sonam", "S12345", "B");
var gradStudent = new GraduateStudent("Sonam", "G12345", "A", "Machine Learning");
var libraryAccount = new LibraryAccount("L123", 5);
// Demonstrate behavior of classes
student.getDetails();
gradStudent.getDetails();
gradStudent.getThesisTopic();
libraryAccount.getLibraryInfo();
// Demonstrate Composition over Inheritance
var studentWithLibrary = new StudentWithLibraryAccount(student, libraryAccount);
studentWithLibrary.displayStudentInfo(); // From Student
studentWithLibrary.displayLibraryInfo(); // From LibraryAccount
