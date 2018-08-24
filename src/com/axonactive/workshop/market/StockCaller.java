package com.axonactive.workshop.market;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class StockCaller extends ParallelExecutor<Symbol, Stock> {

	public StockCaller() {
		super();
	}
	
	public static StockCaller createInstance() {
		return new StockCaller();
	}
	
	@Override
	public ExecutorService createExecutor() {
		return Executors.newFixedThreadPool(100);
	}

}
