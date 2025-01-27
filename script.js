//complete this code
class Person {
	constructor(name, age) {
    this._name = name; // Using a private property with an underscore
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a positive number.");
    }
  }
}

class Student extends Person {
	study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
	teach() {
    console.log(`${this.name} is teaching.`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
