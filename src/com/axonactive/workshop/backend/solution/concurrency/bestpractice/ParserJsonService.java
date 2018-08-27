package com.axonactive.workshop.backend.solution.concurrency.bestpractice;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public abstract class ParserJsonService {
	protected static final String AGE = "age";
	
	public abstract int count(String file, int age);
	
	protected JsonArray getData(String path) throws FileNotFoundException, IOException {
		JsonParser parser = new JsonParser();
		JsonObject data = (JsonObject) parser.parse(new FileReader(new File(path)));
		return (JsonArray) data.get("people");
	}
	
	protected static void performLogic() {
		try {
			//dummy logic that hit the performance
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
	}
}
