package com.axonactive.workshop.backend.concurrency.bestpractice;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class ParseJsonService {
	private static String filePath = "D:\\GIT\\ivy\\Workshop\\resources\\test.json";

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
			e.printStackTrace();
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

	public static void main(String[] args) {
		ParseJsonService service = new ParseJsonService();
		long startTime = System.currentTimeMillis();
		System.out.println(service.count(filePath, 50));// 168
		System.out.println("Total time: " + (System.currentTimeMillis() - startTime));
	}

}
