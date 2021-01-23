INSERT INTO department (department_name)
VALUES
    ('Engineering'),
    ('Marketing'),
    ('Sales'),
    ('Customer Service');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Head Engineer', 500000, 1),
    ('Engineer', 100000, 1),
    ('Marketing Director', 200000, 2),
    ('Graphic Designer', 55000, 2),
    ('Digital Marketer', 75000, 2),
    ('Head of Sales', 120000, 3),
    ('Salesperson', 70000, 3),
    ('CS Lead', 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('Ronald', 'Firbank', 1, NULL),
    ('Virginia', 'Woolf', 2, 1),
    ('Piers', 'Gaveston', 3, NULL),
    ('Charles', 'LeRoi', 4, 3),
    ('Katherine', 'Mansfield', 5, 3),
    ('Dora', 'Carrington', 6, NULL),
    ('Edward', 'Bellamy', 7, 6),
    ('Montague', 'Summers', 7, 6),
    ('Octavia', 'Butler', 8, NULL);

