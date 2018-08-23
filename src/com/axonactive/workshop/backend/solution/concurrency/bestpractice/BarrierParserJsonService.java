package com.axonactive.workshop.backend.solution.concurrency.bestpractice;

import java.io.IOException;
import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class BarrierParserJsonService extends  ParserJsonService {
	
	@Override
	public int count(String file, int age) {
		AtomicInteger counter = new AtomicInteger();
		try {
			JsonArray people = getData(file);
			
			CyclicBarrier barrier = new CyclicBarrier(people.size() + 1);
			
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
					try {
						barrier.await();
					} catch (Exception e) {
						e.printStackTrace();
					}
				});
			});
			
			barrier.await();
		
		} catch (IOException | InterruptedException | BrokenBarrierException e) {
			e.printStackTrace();
		}
		return counter.get();
	}
	
	
	public static void main(String[] args) {
		BarrierParserJsonService service = new BarrierParserJsonService();
		long startTime = System.currentTimeMillis();
		System.out.println(service.count(filePath, 50));// 181
		System.out.println("Total time: " + (System.currentTimeMillis() - startTime));
	}
	
}
