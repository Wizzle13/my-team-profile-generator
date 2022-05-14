// links to the Manager.js
const Manager = require('../lib/Manager');

//
test('checks for Office number', () => {
    const officeNumber = 14;
    const employee = new Manager('Chris', 13, 'burton@gmail.com', officeNumber);
    expect(employee.officeNumber).toEqual( expect.any(Number));
});  

//
test('Use getRole() to return \"Manager\" as role.', () => {
    const employeeRole = 'Manager';
    const employee = new Manager('Chris', 13, 'Burton@Gmail.com', 14);
 
    expect(employee.getRole()).toBe(employeeRole);
 });

