CREATE OR REPLACE PROCEDURE TransferFunds(
    p_source_account IN NUMBER,
    p_target_account IN NUMBER,
    p_amount IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    -- Check source account balance
    SELECT Balance INTO v_balance
    FROM Accounts
    WHERE AccountID = p_source_account;

    IF v_balance >= p_amount THEN
        -- Deduct from source
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_source_account;

        -- Add to target
        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_target_account;

        DBMS_OUTPUT.PUT_LINE('Transferred ' || p_amount ||
                             ' from Account ' || p_source_account ||
                             ' to Account ' || p_target_account);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient balance in Account ' || p_source_account);
    END IF;
END;
/
