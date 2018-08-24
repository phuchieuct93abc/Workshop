package com.axonactive.workshop.market;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.Future;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.apache.commons.collections.CollectionUtils;

import ch.ivyteam.ivy.environment.Ivy;

public class MarketController {
	
    public static List<Stock> getStocks() {
    	List<Stock> stocks = new ArrayList<>();
    	List<Symbol> symbols = MarketClient.getSymbols();

    	if (CollectionUtils.isNotEmpty(symbols)) {
    		List<Symbol> selectedSymbols = symbols.subList(0, 10);
    		stocks = selectedSymbols.stream().map(symbol -> {
    			String price = MarketClient.getPrice(symbol);
    			return new Stock(symbol, price);
    		}).collect(Collectors.toList());
    	}

    	return stocks;
    }

    public static List<Stock> getStocksMultithreading() {
    	List<Stock> stocks = new ArrayList<>();
    	List<Future<Stock>> futureStocks = new ArrayList<>();
    	List<Symbol> symbols = MarketClient.getSymbols();

    	StockCaller stockCaller = StockCaller.createInstance();
    	if (CollectionUtils.isNotEmpty(symbols)) {
    		List<Symbol> selectedSymbols = symbols.subList(0, 10);
    		
    		selectedSymbols.forEach(symbol -> {
    			Function<Symbol, Stock> getStock = MarketController::getStock;
    			futureStocks.add(stockCaller.callWithSecurity(getStock, symbol));
    		});
    	}
    	
    	futureStocks.forEach(futureStock -> {
    		try {
				stocks.add(futureStock.get());
			} catch (Exception e) {
				Ivy.log().error("Get stock errors.", e);
			}
    	});
    	
    	return stocks.stream().filter(Objects::nonNull).collect(Collectors.toList());
    }
    
    private static Stock getStock(Symbol symbol) {
    	return new Stock(symbol, MarketClient.getPrice(symbol));
    }
}
