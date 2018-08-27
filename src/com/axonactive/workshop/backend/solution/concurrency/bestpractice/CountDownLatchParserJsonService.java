package com.axonactive.workshop.backend.solution.concurrency.bestpractice;

import java.io.IOException;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;

import ch.ivyteam.ivy.environment.Ivy;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;


public class CountDownLatchParserJsonService extends ParserJsonService {

	@Override
	public int count(String file, int age) {
		AtomicInteger counter = new AtomicInteger();
		try {
			JsonArray people = getData(file);
			
			CountDownLatch countdown = new CountDownLatch(people.size());
			
			ExecutorService service = Executors.newCachedThreadPool();
			
			people.forEach(person -> {
				JsonObject jsonObject = (JsonObject) person;
				service.execute(() -> {
					int parsedAge = Integer.parseInt(jsonObject.get(AGE).toString());
					if (parsedAge > age) {
						performLogic();
						System.out.println(parsedAge);
						counter.getAndIncrement();
					}
					countdown.countDown();
				});
			});
			
			countdown.await();
		} catch (IOException | InterruptedException e) {
			Ivy.log().error("Please config your direction path to {workshop}/resources/test.json");
		}
		return counter.get();
	}

}
