package com.axonactive.workshop.cache;

import com.opencsv.bean.CsvBindByName;

public class Item {
	
	@CsvBindByName(column = "Category")
	private String category;

	public String getCategory() {
		return category;
	}
}
