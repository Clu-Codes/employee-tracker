const inquirer = require('inquirer');
// const db = require('./db/databse');
const mysql = require('mysql2');
// const Employees = require('./lib/employee');

// Connection to mySQL server for Inquirer to call upon
const connection = mysql.createConnection({
    host: 'localhost',
    // port: 3306,
    user: 'root',
    password: 'password',
    database: 'company_db'
});

function promptUser() {
    inquirer
        .prompt ({
        type: 'list',
        name: 'actionsMenu',
        message: 'What would you like to do?',
        choices: ['View all employees', 'View all departments', 'View all roles', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee', 'Exit']
        })
        .then(choices => {
            switch (choices['actionsMenu']) {
                case 'View all employees':
                    allEmployees();
                    break;
                case 'View all departments':
                        allRoles();
                    break;
                case 'View all departments':
                        allDepartments();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee':
                    updateEmployee();
                    break;
                case 'Exit':
                    exit();
            }
        })
} 

const allEmployees = () => {
    connection.query(
        `SELECT * FROM employee`,
        function(err, result) {
            console.log('\n')
            console.table(result);
            promptUser();
        }
    );
};
const allDepartments = () => {
    connection.query(
        `SELECT * FROM department`,
        function(err, result) {
            console.log('\n')
            console.table(result);
            promptUser();
        }
    );
};
const allRoles = () => {
    connection.query(
        `SELECT * FROM role`,
        function(err, result) {
            console.log('\n')
            console.table(result);
            promptUser();
        }
    );
};
function addRole() {
    inquirer 
        .prompt([
            {
                type: 'text',
                name: 'newRole',
                message: 'Enter a new Role.',
                validate: roleData => {
                    if (roleData) return true; console.log('Nothing was entered. Please enter a role.'); return false;
                }
            },    
            {
                type: 'text',
                name: 'salary',
                message: 'What is the salary of this employee? (e.g. 120000)',
                validate: salaryData => {
                    if (salaryData && salaryData >= 0) return true; console.log('No salary information was entered. Please enter a figure.'); return false;
                }
            },
            {
                type: 'text',
                name: 'departmentId',
                message: 'What is the department id of this employee? (e.g. 3)',
                validate: departmentData => {
                    if (departmentData && departmentData >= 0) return true; console.log('No department id was entered. Please enter a whole number.'); return false;
                }
            }
        ])  
        .then(dataInput => {
            console.log('======HIIIII=====', dataInput);
            connection.query(
                // ? is a query parament that corresponds to the values within the objects
                'INSERT INTO role SET ?',
                // [
                //     [`${dataInput.newRole}, ${dataInput.salary}, ${dataInput.departmentId}`]
                // ],
                [{
                    title: `${dataInput.newRole}`
                },
                {
                    salary: `${dataInput.salary}`
                },
                {
                    department_id: `${dataInput.departmentId}`
                }],
                function() {
                    allRoles();
                }
            );
        })
};

function addDepartment() {
    inquirer 
        .prompt({
            type: 'text',
            name: 'newDepartment',
            message: 'Enter new department name',
            validate: departmentData => {
                if (departmentData && departmentData >= 0) return true; console.log('Nothing was entered. Please enter department name.'); return false;
            }
        })
        .then(dataInput => {
            connection.query(
                // ? is a query parament that corresponds to the values within the objects
                'INSERT INTO department SET ?',
                    {
                        department_name: `${dataInput.newDepartment}`
                    },
                function() {
                    allDepartments();
                }
            );
        })
};

const exit = () => {
    connection.end();
}

promptUser();