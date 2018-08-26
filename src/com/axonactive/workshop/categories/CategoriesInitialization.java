package com.axonactive.workshop.categories;

import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;


import ch.ivyteam.ivy.environment.Ivy;

import com.opencsv.bean.CsvToBeanBuilder;

public class CategoriesInitialization {
	private CategoriesInitialization() {
		// Hide constructor
	}
	
	public static CategoriesInitialization createInstance() {
		return new CategoriesInitialization();
	}
	
	@SuppressWarnings("unchecked")
    public List<String> loadCategories() {
		int skipLine = 0;
		List<Item> items = loadContent(getUrl(), Item.class, skipLine);
		return items.stream().map(Item::getCategory).collect(Collectors.toList());
	}
	
	public String getUrl() {
		return String.join(Constant.FILE_SEPERATOR, Ivy.var().get(Constant.RESOURCE_CONFIG_GLOBAL_VARIABLE), Constant.CATEGORY_FILE_NAME);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	private <T> List<T> loadContent(String csvPath, Class<T> clazz, int skipLines) {
		try {
			// This one simulates for heavy resource loading
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			Ivy.log().warn("Interupt by someone....", e);
		}
		try(Reader reader = Files.newBufferedReader(Paths.get(csvPath))) {
			return new CsvToBeanBuilder(reader).withType(clazz).withSkipLines(skipLines).build().parse();
		} catch (IOException e) {
			Ivy.log().error("Cannot read csv file.", e);
		}
		return Collections.emptyList();
	}
}
