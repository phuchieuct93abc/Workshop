package com.axonactive.workshop.market;

public class Stock {
	private Symbol symbol;
	private String price;

	public Stock(Symbol symbol, String price) {
		this.symbol = symbol;
		this.price = price;
	}

	public Symbol getSymbol() {
		return symbol;
	}

	public void setSymbol(Symbol symbol) {
		this.symbol = symbol;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

}
