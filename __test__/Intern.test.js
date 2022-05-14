// school
// getSchool()
// getRole() // Overridden to return 'Intern'

// links to the Engineer.js
const Intern = require('../lib/Intern');

//
test('checks for School', () => {
    const school = 'MSU';
    const employee = new Intern('Chris', 13, 'burton@gmail.com', school);
    expect(employee.school).toEqual(school);
});  

//
test('Use getSchool().', () => {
    const school = 'MSU';
    const employee = new Intern('Chris', 13, 'burton@gmail.com', school);
     
    expect(employee.getSchool()).toBe(school);
 });

//
test('Use getRole() to return \"Intern\" as role.', () => {
    const employeeRole = 'Intern';
    const employee = new Intern('Chris', 13, 'Burton@Gmail.com', 'MSU');
 
    expect(employee.getRole()).toBe(employeeRole);
 });
