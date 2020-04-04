class Employee {
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName(){
      return this.name;
  }
  getId(){
      return this.id;
  }
  getEmail(){
      return this.email;
  }
  getRole(){
      return "Employee";
  }
}

// ✓ Can instantiate Employee instance (2ms)
// ✓ Can set name via constructor arguments
// ✓ Can set id via constructor argument (1ms)
// ✓ Can set email via constructor argument
// ✓ Can get name via getName()
// ✓ Can get id via getId()
// ✓ Can get email via getEmail() (1ms)
// ✓ getRole() should return "Employee"

module.exports = Employee;