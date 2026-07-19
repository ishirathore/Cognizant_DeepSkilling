public class Forecasting {

    // Recursive method to predict future value
    public static double predictValue(double currentValue, double growthRate, int years) {
        if (years == 0) return currentValue; // base case
        return predictValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double initialValue = 1000; // starting amount
        double growthRate = 0.10;   // 10% growth per year
        int years = 5;

        double futureValue = predictValue(initialValue, growthRate, years);
        System.out.println("Future Value after " + years + " years: " + futureValue);
    }
}
