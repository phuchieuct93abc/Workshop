package com.axonactive.workshop.market;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({
	"symbol",
	"name",
	"date",
	"isEnabled",
	"type",
	"iexId"
})
public class Symbol {
	@JsonProperty("symbol")
	private Object symbol;
	@JsonProperty("name")
	private Object name;
	@JsonProperty("date")
	private Object date;
	@JsonProperty("isEnabled")
	private Object isEnabled;
	@JsonProperty("type")
	private Object type;
	@JsonProperty("iexId")
	private Object iexId;

	public Object getSymbol() {
		return symbol;
	}

	public void setSymbol(Object symbol) {
		this.symbol = symbol;
	}

	public Object getName() {
		return name;
	}

	public void setName(Object name) {
		this.name = name;
	}

	public Object getDate() {
		return date;
	}

	public void setDate(Object date) {
		this.date = date;
	}

	public Object getIsEnabled() {
		return isEnabled;
	}

	public void setIsEnabled(Object isEnabled) {
		this.isEnabled = isEnabled;
	}

	public Object getType() {
		return type;
	}

	public void setType(Object type) {
		this.type = type;
	}

	public Object getIexId() {
		return iexId;
	}

	public void setIexId(Object iexId) {
		this.iexId = iexId;
	}

}
