package local.arch.domain;

import local.arch.domain.basket.Calculator;

public class Factory {
	public static ICalculator createCalculator() {
		return new Calculator();
	}
}