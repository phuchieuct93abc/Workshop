package com.axonactive.workshop;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CategoriesInitialization {
	List<String> categories;
	
	private CategoriesInitialization() {
		// Hide constructor
	}
	
	public static CategoriesInitialization createInstance() {
		return new CategoriesInitialization();
	}
	
	public List<String> loadCategories() {
		categories = new ArrayList<String>();
		categories.addAll(Arrays.asList("P1", "P2"));
		return categories;
	}
}
