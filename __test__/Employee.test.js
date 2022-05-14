// links to the Employee.js 
const Employee = require('../lib/Employee');
// 
test('creates an Employee object', () => {
   const employee = new Employee('Chris', 13, 'burton@gmail.com');
   expect( employee.name ).toEqual( expect.any( String ));
   expect( employee.id ).toEqual( expect.any( Number ));
   expect( employee.email ).toEqual( expect.any( String ));
});

// 
test('check to see if you can getName()', () => {
    const employeeName = 'Chris';
    const employee = new Employee(employeeName);

    expect(employee.getName()).toBe(employeeName);
});

// 
test('check to see if you can getId()', () => {
    const employeeId = 13;
    const employee = new Employee('Chris', employeeId);

    expect(employee.getId()).toBe(employeeId);
});

// 
test('check to see if you can getEmail()', () => {
    const employeeEmail = 'Burton@Gmail.com';
    const employee = new Employee('Chris', 13, employeeEmail);

    expect(employee.getEmail()).toBe(employeeEmail);
});

//
test('Use getRole() to return \"Employee\" as role.', () => {
    const employeeRole = 'Employee';
    const employee = new Employee( 'Chris', 13, 'Burton@Gmail.com' );
 
    expect( employee.getRole()).toBe( employeeRole );
 });