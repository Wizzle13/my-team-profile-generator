// links to the Engineer.js
const Engineer = require('../lib/Engineer');

//
test('checks for GitHub User Name', () => {
    const githubName = 'wizzle13';
    const employee = new Engineer('Chris', 13, 'burton@gmail.com', githubName);
    expect(employee.githubName).toEqual(githubName);
});  

//
test('Use getGitHub().', () => {
    const githubName = 'wizzle13';
    const employee = new Engineer('Chris', 13, 'burton@gmail.com', githubName);
     
    expect(employee.getGitHub()).toBe(githubName);
 });

//
test('Use getRole() to return \"Engineer\" as role.', () => {
    const employeeRole = 'Engineer';
    const employee = new Engineer('Chris', 13, 'Burton@Gmail.com', 'wizzle13');
 
    expect(employee.getRole()).toBe(employeeRole);
 });


