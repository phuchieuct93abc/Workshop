package com.axonactive.workshop.market;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.collections.CollectionUtils;

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

}
