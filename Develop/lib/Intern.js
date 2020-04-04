Employee = require("../lib/Employee.js");

class Intern extends Employee{
  constructor(name, id, email, school){
    super(name, id, email);
    this.school = school;
  }
  getRole(){
    return "Intern"
  }
  getSchool(){
    return this.school;
  }
}

// ✓ Can set school via constructor (3ms)
// ✓ getRole() should return "Intern" (1ms)
// ✓ Can get school via getSchool()

module.exports = Intern;