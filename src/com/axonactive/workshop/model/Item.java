package com.axonactive.workshop.model;

import com.opencsv.bean.CsvBindByName;

public class Item {
	
	@CsvBindByName(column = "Category")
	private String category;

	public String getCategory() {
		return category;
	}
}
