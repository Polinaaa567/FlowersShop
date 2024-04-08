package local.arch.domain.basket;

import local.arch.domain.ICalculator;

public class Calculator implements ICalculator {

    @Override
    public double calculate(double result, double number, String symbol) {
        if (symbol.equals("plus")) {
            return result + number;
        } else {
            return result - number;
        }
    }
}