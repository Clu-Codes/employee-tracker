const inquirer = require('inquirer');
// const db = require('./db/databse');
const mysql = require('mysql2');
// const Employees = require('./lib/employee');

// Connection to mySQL server for Inquirer to call upon
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'company_db'
});
connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    afterConnection();
  });

afterConnection = () => {
    connection.query(
        `SELECT * FROM employee LEFT JOIN (role, department)
        ON (role.id = employee.role_id AND department.id = role.department_id)`,
        function(err, result) {
            console.table(result);
        }
    );
    connection.end();
};

