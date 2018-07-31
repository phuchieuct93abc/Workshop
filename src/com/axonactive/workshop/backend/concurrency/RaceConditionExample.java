package com.axonactive.workshop.backend.concurrency;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import ch.ivyteam.ivy.environment.Ivy;

public class RaceConditionExample {
	
	public static void main(String[] args) throws InterruptedException {
        ExecutorService executorService = Executors.newFixedThreadPool(10);
        Counter counter = new Counter();
        for(int i = 0; i < 1000; i++) {
            executorService.submit(counter::increment);
        }
        executorService.shutdown();
        executorService.awaitTermination(60, TimeUnit.SECONDS);
        Ivy.log().fatal("Final count is : " + counter.getCount());
    }
}
