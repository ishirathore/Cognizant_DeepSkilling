DECLARE
    CURSOR cust_cursor IS
        SELECT CustomerID, Age, LoanInterestRate
        FROM Customers;
BEGIN
    FOR rec IN cust_cursor LOOP
        IF rec.Age > 60 THEN
            UPDATE Customers
            SET LoanInterestRate = rec.LoanInterestRate - 1
            WHERE CustomerID = rec.CustomerID;
            
            DBMS_OUTPUT.PUT_LINE('Applied discount for Customer ID: ' || rec.CustomerID);
        END IF;
    END LOOP;
END;
/
