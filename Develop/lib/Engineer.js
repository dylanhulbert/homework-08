Employee = require("../lib/Employee.js");
class Engineer extends Employee{
  constructor(name, id, email, github){
    super(name, id, email);
    this.github = github;
    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return this.github;
    }
}
module.exports = Engineer;

//  PASS  ./Engineer.test.js
//   ✓ Can set GitHUb account via constructor (3ms)
//   ✓ getRole() should return "Engineer"
//   ✓ Can get GitHub username via getGithub() (1ms)