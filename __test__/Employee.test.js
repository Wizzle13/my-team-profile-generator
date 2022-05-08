// links to the Employee.js 
const Employee = require("../lib/Employee");
// 
test('creates an Employee object', () => {
    const employee = new Employee('Dave');
    expect(employee.name).toBe('Dave'); 
});

// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'