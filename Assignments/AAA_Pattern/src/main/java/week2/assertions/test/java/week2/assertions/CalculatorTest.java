package Assignments.AAA_Pattern.src.main.java.week2.assertions.test.java.week2.assertions;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;

    // Setup method (runs before each test)
    @Before
    public void setUp() {
        calc = new Calculator(); // Arrange common object
        System.out.println("Setup: Calculator object created");
    }

    // Teardown method (runs after each test)
    @After
    public void tearDown() {
        calc = null; // Clean up
        System.out.println("Teardown: Calculator object destroyed");
    }

    @Test
    public void testAddition() {
        // Arrange (already done in setUp)
        int a = 2, b = 3;

        // Act
        int result = calc.add(a, b);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange
        int a = 10, b = 4;

        // Act
        int result = calc.subtract(a, b);

        // Assert
        assertEquals(6, result);
    }
}