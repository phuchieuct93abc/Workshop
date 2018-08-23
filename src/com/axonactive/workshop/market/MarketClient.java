package com.axonactive.workshop.market;

import java.util.List;
import java.util.stream.Collectors;

import ch.ivyteam.ivy.environment.Ivy;
import ch.ivyteam.ivy.rest.client.GenericTypes;

public class MarketClient {
	
	public static List<Symbol> getSymbols() {
		return Ivy.rest().client("SYMBOLS").request().get(GenericTypes.listOf(Symbol.class));
	}
	
	public static String getPrice(Symbol symbol) {
		return Ivy.rest().client("PRICE").resolveTemplate("symbol", symbol.getSymbol()).request().get(String.class);
	}
	
	public static List<String> getPrices(List<Symbol> symbols) {
		return symbols.stream().map(symbol -> {
			return Ivy.rest().client("PRICE").resolveTemplate("symbol", symbol.getSymbol()).request().get(String.class);
		}).collect(Collectors.toList());
	}
	
}
