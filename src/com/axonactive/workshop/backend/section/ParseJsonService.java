package com.axonactive.workshop.backend.section;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import ch.ivyteam.ivy.environment.Ivy;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class ParseJsonService {

	public int count(String file, int age) {
		Counter counter = new Counter();
		try {
			JsonArray people = getData(file);
			people.forEach(person -> {
				JsonObject jsonObject = (JsonObject) person;
				new Thread(new Runnable() {
					@Override
					public void run() {
						int parsedAge = Integer.parseInt(jsonObject.get("age").toString());
						if (parsedAge > age) {
							performLogic();
							System.out.println(parsedAge);
							counter.increase();
						}
					}
				}).start();
			});
			
			//wait until finish performing all logic
			Thread.sleep(3000);
		} catch (IOException | InterruptedException e) {
			Ivy.log().error("Please config your direction path to {workshop}/resources/test.json");
		}
		return counter.getCount();
	}
	
	private static void performLogic() {
		try {
			//dummy logic that hit the performance
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
	}

	private JsonArray getData(String path) throws FileNotFoundException, IOException {
		JsonParser parser = new JsonParser();
		JsonObject data = (JsonObject) parser.parse(new FileReader(new File(path)));
		return (JsonArray) data.get("people");
	}

}
