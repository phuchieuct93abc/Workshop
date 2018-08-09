package com.axonactive.workshop.model;

import com.opencsv.bean.CsvBindByName;

public class Item {
	
	@CsvBindByName(column = "Category")
	private String category;

	protected String getCategory() {
		return category;
	}

	protected void setCategory(String category) {
		this.category = category;
	}
}
