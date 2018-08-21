package com.axonactive.workshop;

import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.collections4.CollectionUtils;

import ch.ivyteam.ivy.environment.Ivy;

import com.axonactive.workshop.cache.CacheService;
import com.axonactive.workshop.cache.Constant;
import com.axonactive.workshop.model.Item;
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
		List<Item> items = (List<Item>)CacheService.getDataFromCache(Constant.CACHE_CATEGORY_TYPES_IDENTIFIER);
		if (CollectionUtils.isEmpty(items)) {
			items = loadContent(getUrl(), Item.class, skipLine);
			CacheService.saveDataToCache(items, Constant.CACHE_CATEGORY_TYPES_IDENTIFIER);
		}
		return items.stream().map(Item::getCategory).collect(Collectors.toList());
	}
	
	public String getUrl() {
		return String.join(Constant.FILE_SEPERATOR, Ivy.var().get(Constant.RESOURCE_CONFIG_GLOBAL_VARIABLE), Constant.CATEGORY_FILE_NAME);
	}
	
	public String getProductUrl(String fileName) {
		return String.join(Constant.FILE_SEPERATOR, Ivy.var().get(Constant.RESOURCE_CONFIG_GLOBAL_VARIABLE), fileName);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public <T> List<T> loadContent(String csvPath, Class<T> clazz, int skipLines) {
		try {
			// This one simulates for heavy resource loading, do not delete
			Thread.sleep(10000);
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
