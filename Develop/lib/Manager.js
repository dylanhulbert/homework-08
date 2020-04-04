Employee = require("../lib/Employee.js");

class Manager extends Employee{
  constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole(){
    return "Manager";
  }
  getOfficeNumber(){
    return this.officeNumber;
  }
}

// ✓ Can set office number via constructor argument (3ms)
// ✓ getRole() should return "Manager"
// ✓ Can get office number via getOffice()

module.exports = Manager;