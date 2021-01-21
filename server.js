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
        choices: ['View all employees', 'View all departments', 'View all roles', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee']
        })
        .then(choices => {
            switch (choices['actionsMenu']) {
                case 'View all employees':
                    allEmployees();
                    // connection.connect(err => {
                    //     if (err) throw err;
                    //     console.log('connected as id ' + connection.threadId);
                    //     afterConnection();
                    // });
                    // afterConnection = () => {
                    //     connection.query(
                    //         `SELECT * FROM employee`,
                    //         function(err, result) {
                    //             console.table(result);
                    //         }
                    //     );
                    //     connection.end();
                    // };
                    break;
                case 'View all departments':
                    connection.connect(err => {
                        if (err) throw err;
                        console.log('connected as id ' + connection.threadId);
                        afterConnection();
                    });
                    afterConnection = () => {
                        connection.query(
                            `SELECT * FROM department`,
                            function(err, result) {
                                console.table(result);
                            }
                        );
                        connection.end();
                    };
                    break;
                case 'View all departments':
                    connection.connect(err => {
                        if (err) throw err;
                        console.log('connected as id ' + connection.threadId);
                        afterConnection();
                    });
                    afterConnection = () => {
                        connection.query(
                            `SELECT * FROM role`,
                            function(err, result) {
                                console.table(result);
                            }
                        );
                        connection.end();
                    };
                    break;
            }
        })
} 

const allEmployees = () => {
    connection.query(
        `SELECT * FROM employee`,
        function(err, result) {
            console.table(result);
        }
    );
    connection.end();
};

// const initialQuery = () => {
//     inquirer
//         .prompt(initialPrompt)
            
                // if (choices === 'View all employees') {
                //     connection.connect(err => {
                //         if (err) throw err;
                //         console.log('connected as id ' + connection.threadId);
                //         afterConnection();
                //     });
                //     afterConnection = () => {
                //         connection.query(
                //             `SELECT * FROM employee`,
                //             function(err, result) {
                //                 console.table(result);
                //             }
                //         );
                //         connection.end();
                //     };
                // } else if (choices === 'View all departments') {
                //     connection.connect(err => {
                //         if (err) throw err;
                //         console.log('connected as id ' + connection.threadId);
                //         afterConnection();
                //     });
                //     afterConnection = () => {
                //         connection.query(
                //             `SELECT * FROM department`,
                //             function(err, result) {
                //                 console.table(result);
                //             }
                //         );
                //         connection.end();
                //     };
                // } else if (choices === 'View all roles') {
                //     connection.connect(err => {
                //         if (err) throw err;
                //         console.log('connected as id ' + connection.threadId);
                //         afterConnection();
                //     });
                //     afterConnection = () => {
                //         connection.query(
                //             `SELECT * FROM role`,
                //             function(err, result) {
                //                 console.table(result);
                //             }
                //         );
                //         connection.end();
                //     }
                // };


promptUser();