CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    -- Update all savings accounts by applying 1% interest
    UPDATE SavingsAccounts
    SET Balance = Balance + (Balance * 0.01);

    DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
END;
/
