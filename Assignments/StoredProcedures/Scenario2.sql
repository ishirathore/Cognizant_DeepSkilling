CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department_id IN NUMBER,
    p_bonus_percent IN NUMBER
) IS
BEGIN
    -- Update salary for employees in given department
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_bonus_percent / 100))
    WHERE DepartmentID = p_department_id;

    DBMS_OUTPUT.PUT_LINE('Bonus applied for Department ID: ' || p_department_id);
END;
/
